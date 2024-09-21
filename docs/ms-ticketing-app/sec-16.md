---
outline: deep
next:
  text: ''
  link: ''
---

# Section 16: Managing a NATS Client

## Publishing Ticket Creation

## NATS Client Singleton
![originally](./img/image-53.png)
![singleton pattern for client](./img/image-54.png)
![client wrapper](./img/image-55.png)
  - Để tránh được việc phụ thuộc lẫn nhau giữa index.ts and Ticket Route Handler
  - The goal of this file is going to be to somehow create a Nats client and behave as a *singleton* of sorts
  - So we're going to try to build something very similar to Mongoose, where we're going to have some kind of object that internally **keeps track of some client** and makes it available to everything else inside of our app

  **Mongoose**
  - Tương tự như với Mongoose, khởi tạo mongoose client trong file index.ts nhưng trong Model lại dùng instance khác, đây là lý do phải dùng singleton để khai báo mongoose
  ![mongoose initialization](./img/image-56.png)

## Single Implementation
  - Note: Chuyển callback function sang promise để sử dụng async await
  ```typescript
  this._client.on('connect', () => {
    console.log('Connected to NATS')
  })
  ==>
  return new Promise<void>((resolve, reject) => {
    this._client.on('connect', () => {
      console.log('Connected to NATS')
      resolve()
    })
  })
  ```

## Accessing the NATS Client

## Gracefull Shutdown
  - Khi delete NATS deployment thì Tickets depl cũng restart lại server khi NATS connection bị mất.
  ![alt text](./img/image-57.png)


## Failed Event Publishing
  ![alt text](./img/image-58.png)
  ![alt text](./img/image-59.png)
  
  - Examle in Banking Service
  ![alt text](./img/image-60.png)

  - Connection Lost in NATS: Transaction DB already update the Transaction but Account DB still doesn't update
  ![alt text](./img/image-61.png)

## Handling Publish Failures
  - Solution
  ![alt text](./img/image-62.png)
  ![alt text](./img/image-63.png)

## Fixing a Few Tests
  ![alt text](./img/image-64.png)
  - Press **P** in terminal, if we want to test specific test case
  ![alt text](./img/image-66.png)

## Redirecting Imports
## Providing a Mock Implementation
## Test-Suite Wide Mocks
## Ensuring Mock Invocations
[link diagram](https://app.diagrams.net/#G1lgyeLffO_J43VNdMB9kNL2ZnU90ddlNC#%7B%22pageId%22%3A%226VYg3lWQIe4TUKlxoWgk%22%7D)

## NATS Env Variables
  - Add NATS env variables to Deployment

