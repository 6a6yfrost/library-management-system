# Library Management System

## Schema Decisions

### Why Book references Genre via a Foreign Key
In a relational database system like PostgreSQL, data normalization is critical to maintaining integrity, minimizing data redundancy, and avoiding update anomalies. 
- **Single Source of Truth:** By modeling `Genre` as its own table and having `Book` reference it via a `genreId` foreign key, we ensure that a genre's properties (such as its name or description) are maintained in one single place. If a genre name needs to be corrected or updated, it only requires a single update operation rather than modifying every individual book record associated with it.
- **Data Integrity:** PostgreSQL foreign key constraints guarantee that a book cannot reference a non-existent genre, preventing orphaned data inconsistencies.
- **Flexibility in Queries:** It allows us to efficiently query all books belonging to a specific genre, compute aggregate statistics per genre, and manage genre metadata independently of individual book inventories.

---

## Prisma vs. Document Databases: Modeling Comparison
When modeling this data layer in Prisma (Relational/SQL) compared to a document database (like MongoDB):
- **Relational (Prisma/PostgreSQL):** Requires explicit schema definitions, separate tables (`User`, `Book`, `Genre`, `Review`), and relational links (`@relation` fields and foreign keys). Joins are performed at query time or via Prisma relation loading (`include`), ensuring rigid structure and strong referential integrity.
- **Document Database (NoSQL):** Often encourages embedding documents (e.g., embedding genre details or reviews directly inside a book document). While embedding reduces the need for complex joins and accelerates read operations for specific single-document lookups, it introduces data duplication overhead and update anomalies if shared attributes change.