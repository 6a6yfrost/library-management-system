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

    { title: 'Dune', author: 'Frank Herbert', published: 1965, genreId: scienceFiction.id },
    { title: 'Foundation', author: 'Isaac Asimov', published: 1951, genreId: scienceFiction.id },
    { title: 'The Martian', author: 'Andy Weir', published: 2011, genreId: scienceFiction.id },
    { title: 'Ender’s Game', author: 'Orson Scott Card', published: 1985, genreId: scienceFiction.id },

    { title: 'The Hound of the Baskervilles', author: 'Arthur Conan Doyle', published: 1902, genreId: mystery.id },
    { title: 'Gone Girl', author: 'Gillian Flynn', published: 2012, genreId: mystery.id },
    { title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', published: 2005, genreId: mystery.id },
    { title: 'Murder on the Orient Express', author: 'Agatha Christie', published: 1934, genreId: mystery.id },

    { title: 'Sapiens', author: 'Yuval Noah Harari', published: 2011, genreId: history.id },
    { title: 'A People’s History of the United States', author: 'Howard Zinn', published: 1980, genreId: history.id },
    { title: 'The Guns of August', author: 'Barbara W. Tuchman', published: 1962, genreId: history.id },
    { title: 'Long Walk to Freedom', author: 'Nelson Mandela', published: 1994, genreId: history.id },
  ];

  for (const book of books) {
    await prisma.book.create({
      data: book,
    });
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