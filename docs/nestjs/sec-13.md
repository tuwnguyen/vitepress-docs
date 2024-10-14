---
outline: deep
next:
  text: ''
  link: ''
---

# Section 13: Integration Testing

## End to End Testing

![alt text](img/image-60.png)

## App Setup Issues in Sec files
![e2e test](img/image-61.png)
  - Nest will not run the main.ts file when e2e run, just work with App Module
  - There are 2 ways to resolve this:
    - 1. Separate middleware in app setup
    ```typescript
    app.use(
      cookieSession({
        keys: ['dddddd'],
      }),
    );
    app.useGlobalPipes(
      new ValidationPipe({
        // whitelist: true strip out all property in the body not in dto
        whitelist: true,
      }),
    );
    ```
    - 2. Nest official way: ⬇️
## Applying a Globally Scoped Pipe
  - Move Pipes, middlewares,... into the App Module
  ![alt text](img/image-62.png)
  - *https://docs.nestjs.com/pipes#global-scoped-pipes*

## Applying a Globally Scoped Middleware
  - *https://docs.nestjs.com/middleware#middleware-consumer*

## Creating Separate Test and Dev Databases
  ![alt text](img/image-63.png)
  ![alt text](img/image-64.png)
  