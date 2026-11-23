import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const fiction = await prisma.genre.upsert({
    where: { name: 'Fiction' },
    update: {},
    create: { name: 'Fiction' },
  });

  const scienceFiction = await prisma.genre.upsert({
    where: { name: 'Science Fiction' },
    update: {},
    create: { name: 'Science Fiction' },
  });

  const mystery = await prisma.genre.upsert({
    where: { name: 'Mystery' },
    update: {},
    create: { name: 'Mystery' },
  });

  const history = await prisma.genre.upsert({
    where: { name: 'History' },
    update: {},
    create: { name: 'History' },
  });

  const books = [
    { title: 'Pride and Prejudice', author: 'Jane Austen', published: 1813, genreId: fiction.id },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', published: 1960, genreId: fiction.id },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: 1925, genreId: fiction.id },
    { title: 'Things Fall Apart', author: 'Chinua Achebe', published: 1958, genreId: fiction.id },
    { title: 'Jane Eyre', author: 'Charlotte Brontë', published: 1847, genreId: fiction.id },
    { title: '1984', author: 'George Orwell', published: 1949, genreId: fiction.id },
    { title: 'The Kite Runner', author: 'Khaled Hosseini', published: 2003, genreId: fiction.id },

    { title: 'Dune', author: 'Frank Herbert', published: 1965, genreId: scienceFiction.id },
    { title: 'Foundation', author: 'Isaac Asimov', published: 1951, genreId: scienceFiction.id },
    { title: 'The Martian', author: 'Andy Weir', published: 2011, genreId: scienceFiction.id },
    { title: 'Ender’s Game', author: 'Orson Scott Card', published: 1985, genreId: scienceFiction.id },
    { title: 'The Left Hand of Darkness', author: 'Ursula K. Le Guin', published: 1969, genreId: scienceFiction.id },
    { title: 'The Hitchhiker’s Guide to the Galaxy', author: 'Douglas Adams', published: 1979, genreId: scienceFiction.id },
    { title: 'Neuromancer', author: 'William Gibson', published: 1984, genreId: scienceFiction.id },

    { title: 'The Hound of the Baskervilles', author: 'Arthur Conan Doyle', published: 1902, genreId: mystery.id },
    { title: 'Gone Girl', author: 'Gillian Flynn', published: 2012, genreId: mystery.id },
    { title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', published: 2005, genreId: mystery.id },
    { title: 'Murder on the Orient Express', author: 'Agatha Christie', published: 1934, genreId: mystery.id },
    { title: 'And Then There Were None', author: 'Agatha Christie', published: 1939, genreId: mystery.id },
    { title: 'The Big Sleep', author: 'Raymond Chandler', published: 1939, genreId: mystery.id },
    { title: 'The Maltese Falcon', author: 'Dashiell Hammett', published: 1930, genreId: mystery.id },

    { title: 'Sapiens', author: 'Yuval Noah Harari', published: 2011, genreId: history.id },
    { title: 'A People’s History of the United States', author: 'Howard Zinn', published: 1980, genreId: history.id },
    { title: 'The Guns of August', author: 'Barbara W. Tuchman', published: 1962, genreId: history.id },
    { title: 'Long Walk to Freedom', author: 'Nelson Mandela', published: 1994, genreId: history.id },
    { title: 'The Diary of a Young Girl', author: 'Anne Frank', published: 1947, genreId: history.id },
    { title: 'The Wright Brothers', author: 'David McCullough', published: 2015, genreId: history.id },
    { title: 'The Silk Roads', author: 'Peter Frankopan', published: 2015, genreId: history.id },
  ];

  for (const book of books) {
    const existing = await prisma.book.findFirst({
      where: { title: book.title, author: book.author },
    });

    if (existing) {
      await prisma.book.update({ where: { id: existing.id }, data: book });
    } else {
      await prisma.book.create({ data: book });
    }
  }

  console.log('Database seeded successfully.');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });