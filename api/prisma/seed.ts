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
    { title: 'The Time Machine', author: 'H. G. Wells', published: 1895, genreId: fiction.id },
    { title: 'The Secret Garden', author: 'Frances Hodgson Burnett', published: 1911, genreId: fiction.id },
    { title: 'The Catcher in the Rye', author: 'J. D. Salinger', published: 1951, genreId: fiction.id },
    { title: 'The Book Thief', author: 'Markus Zusak', published: 2005, genreId: fiction.id },
    { title: 'The Alchemist', author: 'Paulo Coelho', published: 1988, genreId: fiction.id },
    { title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', published: 1967, genreId: fiction.id },
    { title: "The Handmaid's Tale", author: 'Margaret Atwood', published: 1985, genreId: fiction.id },
    { title: 'Little Women', author: 'Louisa May Alcott', published: 1868, genreId: fiction.id },
    { title: 'Wuthering Heights', author: 'Emily Brontë', published: 1847, genreId: fiction.id },
    { title: 'The Color Purple', author: 'Alice Walker', published: 1982, genreId: fiction.id },
    { title: 'The Old Man and the Sea', author: 'Ernest Hemingway', published: 1952, genreId: fiction.id },
    { title: 'The Grapes of Wrath', author: 'John Steinbeck', published: 1939, genreId: fiction.id },

    { title: 'Dune', author: 'Frank Herbert', published: 1965, genreId: scienceFiction.id },
    { title: 'Foundation', author: 'Isaac Asimov', published: 1951, genreId: scienceFiction.id },
    { title: 'The Martian', author: 'Andy Weir', published: 2011, genreId: scienceFiction.id },
    { title: 'Ender’s Game', author: 'Orson Scott Card', published: 1985, genreId: scienceFiction.id },
    { title: 'The Left Hand of Darkness', author: 'Ursula K. Le Guin', published: 1969, genreId: scienceFiction.id },
    { title: 'The Hitchhiker’s Guide to the Galaxy', author: 'Douglas Adams', published: 1979, genreId: scienceFiction.id },
    { title: 'Neuromancer', author: 'William Gibson', published: 1984, genreId: scienceFiction.id },
    { title: 'The War of the Worlds', author: 'H. G. Wells', published: 1898, genreId: scienceFiction.id },
    { title: 'Twenty Thousand Leagues Under the Sea', author: 'Jules Verne', published: 1870, genreId: scienceFiction.id },
    { title: 'Fahrenheit 451', author: 'Ray Bradbury', published: 1953, genreId: scienceFiction.id },
    { title: 'Brave New World', author: 'Aldous Huxley', published: 1932, genreId: scienceFiction.id },
    { title: 'The Three-Body Problem', author: 'Liu Cixin', published: 2006, genreId: scienceFiction.id },
    { title: 'Snow Crash', author: 'Neal Stephenson', published: 1992, genreId: scienceFiction.id },
    { title: 'Hyperion', author: 'Dan Simmons', published: 1989, genreId: scienceFiction.id },
    { title: 'The Forever War', author: 'Joe Haldeman', published: 1974, genreId: scienceFiction.id },
    { title: 'The Dispossessed', author: 'Ursula K. Le Guin', published: 1974, genreId: scienceFiction.id },
    { title: 'Do Androids Dream of Electric Sheep?', author: 'Philip K. Dick', published: 1968, genreId: scienceFiction.id },
    { title: 'The Long Way to a Small, Angry Planet', author: 'Becky Chambers', published: 2014, genreId: scienceFiction.id },
    { title: 'Ancillary Justice', author: 'Ann Leckie', published: 2013, genreId: scienceFiction.id },

    { title: 'The Hound of the Baskervilles', author: 'Arthur Conan Doyle', published: 1902, genreId: mystery.id },
    { title: 'Gone Girl', author: 'Gillian Flynn', published: 2012, genreId: mystery.id },
    { title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', published: 2005, genreId: mystery.id },
    { title: 'Murder on the Orient Express', author: 'Agatha Christie', published: 1934, genreId: mystery.id },
    { title: 'And Then There Were None', author: 'Agatha Christie', published: 1939, genreId: mystery.id },
    { title: 'The Big Sleep', author: 'Raymond Chandler', published: 1939, genreId: mystery.id },
    { title: 'The Maltese Falcon', author: 'Dashiell Hammett', published: 1930, genreId: mystery.id },
    { title: 'The Moonstone', author: 'Wilkie Collins', published: 1868, genreId: mystery.id },
    { title: 'The Sign of the Four', author: 'Arthur Conan Doyle', published: 1890, genreId: mystery.id },
    { title: 'The Adventures of Sherlock Holmes', author: 'Arthur Conan Doyle', published: 1892, genreId: mystery.id },
    { title: 'The Murder of Roger Ackroyd', author: 'Agatha Christie', published: 1926, genreId: mystery.id },
    { title: 'The Woman in White', author: 'Wilkie Collins', published: 1859, genreId: mystery.id },
    { title: 'In the Woods', author: 'Tana French', published: 2007, genreId: mystery.id },
    { title: "The Cuckoo's Calling", author: 'Robert Galbraith', published: 2013, genreId: mystery.id },
    { title: 'The Thursday Murder Club', author: 'Richard Osman', published: 2020, genreId: mystery.id },
    { title: "The No. 1 Ladies' Detective Agency", author: 'Alexander McCall Smith', published: 1998, genreId: mystery.id },
    { title: 'The Da Vinci Code', author: 'Dan Brown', published: 2003, genreId: mystery.id },
    { title: 'The Daughter of Time', author: 'Josephine Tey', published: 1951, genreId: mystery.id },
    { title: 'The Name of the Rose', author: 'Umberto Eco', published: 1980, genreId: mystery.id },

    { title: 'Sapiens', author: 'Yuval Noah Harari', published: 2011, genreId: history.id },
    { title: 'A People’s History of the United States', author: 'Howard Zinn', published: 1980, genreId: history.id },
    { title: 'The Guns of August', author: 'Barbara W. Tuchman', published: 1962, genreId: history.id },
    { title: 'Long Walk to Freedom', author: 'Nelson Mandela', published: 1994, genreId: history.id },
    { title: 'The Diary of a Young Girl', author: 'Anne Frank', published: 1947, genreId: history.id },
    { title: 'The Wright Brothers', author: 'David McCullough', published: 2015, genreId: history.id },
    { title: 'The Silk Roads', author: 'Peter Frankopan', published: 2015, genreId: history.id },
    { title: 'The History of the Peloponnesian War', author: 'Thucydides', published: 431, genreId: history.id },
    { title: 'The Decline and Fall of the Roman Empire', author: 'Edward Gibbon', published: 1776, genreId: history.id },
    { title: 'The Histories', author: 'Herodotus', published: 430, genreId: history.id },
    { title: 'The Prince', author: 'Niccolò Machiavelli', published: 1532, genreId: history.id },
    { title: 'The Art of War', author: 'Sun Tzu', published: 500, genreId: history.id },
    { title: 'Team of Rivals', author: 'Doris Kearns Goodwin', published: 2005, genreId: history.id },
    { title: 'Guns, Germs, and Steel', author: 'Jared Diamond', published: 1997, genreId: history.id },
    { title: 'The Warmth of Other Suns', author: 'Isabel Wilkerson', published: 2010, genreId: history.id },
    { title: 'The Making of the Atomic Bomb', author: 'Richard Rhodes', published: 1986, genreId: history.id },
    { title: '1491', author: 'Charles C. Mann', published: 2005, genreId: history.id },
    { title: 'The Roman Revolution', author: 'Ronald Syme', published: 1939, genreId: history.id },
    { title: 'SPQR', author: 'Mary Beard', published: 2015, genreId: history.id },
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