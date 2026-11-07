# Library Management System

## Schema Decisions

### Why Book references Genre via a Foreign Key

In a relational database system like PostgreSQL, data normalization is critical to maintaining integrity, minimizing data redundancy, and avoiding update anomalies.

- **Single Source of Truth:** By modeling `Genre` as its own table and having `Book` reference it via a `genreId` foreign key, a genre's properties (such as its name or description) are maintained in one place. Updating a genre name requires only one update rather than modifying every associated book.
- **Data Integrity:** PostgreSQL foreign key constraints guarantee that a book cannot reference a non-existent genre, preventing orphaned data.
- **Flexibility in Queries:** It allows us to efficiently query all books belonging to a specific genre, compute aggregate statistics per genre, and manage genre metadata independently of individual book inventories.

---

## Prisma vs. Document Databases: Modeling Comparison

When modeling this data layer in Prisma (Relational/SQL) compared to a document database like MongoDB:

- **Relational (Prisma/PostgreSQL):** Requires explicit schema definitions, separate tables (`User`, `Book`, `Genre`, `Review`), and relational links (`@relation` fields and foreign keys). Joins are performed at query time or through Prisma relation loading (`include`), ensuring structured data and referential integrity.
- **Document Database (NoSQL):** Often encourages embedding documents (for example, embedding genre details or reviews directly inside a book document). Embedding can reduce the need for joins and speed up certain reads, but it can introduce duplicated data and update anomalies when shared attributes change.