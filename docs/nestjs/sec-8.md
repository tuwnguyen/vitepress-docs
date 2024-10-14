---
outline: deep
next:
  text: ''
  link: ''
---

# Section 8: Persisting Data with TypeORM

## Persistent Data with Nest
  - Install typeorm and sqlite3
```bash
  npm install @nestjs/typeorm typeorm sqlite3
```

## Setting Up a Database Connection
  - ORM with Nest
![ORM with Nest](img/image-21.png)

## Creating an Entity and Repository
  - Connecting to db in app module
  ![alt text](img/image-22.png)
  
  - Setup TypeOrmModule in app module
  ```typescript
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [],
      synchronize: true,
    }),
  ]
  ```
  - Nest automatically creates db.sqlite file to save raw data
  ![alt text](img/image-23.png)

  - Steps to create Entity
  ![alt text](img/image-27.png)

## Viewing a DB's Contents
  - Using extension to view db content
  ![sqlite extension](img/image-24.png)
  ![alt text](img/image-25.png)
  ![alt text](img/image-26.png)

## Understanding TypeORM Decorators

  - Just using synchronize in development env, NOT on PRODUCTION
  `synchronize: true,`: typeorm automatically look at the structure of all diff entities and then update the structure of the database.

  - Migration (we must create)
  ![alt text](img/image-28.png)


## One Quick Note on Repositories
  - *https://typeorm.io/repository-api#repository-apis*
  ![alt text](img/image-29.png)

## A Few Extra Routes
## Setting Up Body Validation
## Manual Route Testing
