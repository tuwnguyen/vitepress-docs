---
outline: deep
next:
  text: ''
  link: ''
---

# Section 11: Authentication from Scratch

## Authentication Overview
  - *https://docs.nestjs.com/security/authentication*
  ![alt text](img/image-43.png) 
  - Option 1
  ![alt text](img/image-44.png)

  - Option 2
  ![alt text](img/image-45.png)

  - Problem with Option 1
  - Only apply to small project
  ![alt text](img/image-46.png)

## Reminder on Service Setup
  ![alt text](img/image-47.png)

## Implementing Signup Functionality
## [Optional] Understanding Password Hashing
  - Rainbow Table Attack
  ![alt text](img/image-48.png)

  - Salting can prevent rainbow attacks
  
  - Signup flow with salting
  ![alt text](img/image-49.png)

  - Signin flow with salting
  ![alt text](img/image-50.png)

## Salting and Hashing the Password
  - *https://docs.nestjs.com/security/encryption-and-hashing*

## Creating a User
## Handling User Sign In

## Setting up Sessions
  - Session flow
  ![alt text](img/image-51.png)
  ![alt text](img/image-52.png)


## Changing and Fetching Session Data
## Signing in a User
## Getting the Current User
## Signing Out a User
## Two Automation Tools
  - Reject request
  ![alt text](img/image-53.png)

  - Current user handler
  ![alt text](img/image-54.png)

## Custom Param Decorators
  - Create a new decorator for return current user: `@CurrentUser`

  - Context in decorator:
  ```typescript
  // context(incoming request): allows us to write some code that might work equally well with WebSockets, gRPC, Http, GraphQL
  // or any other kind of communication protocol.
  export const CurrentUser = createParamDecorator(
    (data: any, context: ExecutionContext) => {
      return 'hi there';
    },
  );

  ```

## Why a Decorator and Interceptor
  - Kết hợp giữa decorator và interceptor để có thể sử dụng được Serivce trong DI Container
  ![alt text](img/image-55.png)

## Communicating from Interceptor to Decorator
  - Ở hình trên:
    - Vì interceptor được inject trong DI System nên có thể thao tác với lại Services, còn decorator thì KO
    - Chúng ta cần phải run interceptor trước để add user vào request trước khi decorator handle

## Connecting an Interceptor to Dependency Injection
## Globally Scoped Interceptors
  - *https://docs.nestjs.com/interceptors#binding-interceptors*
  - Refer: *https://docs.nestjs.com/fundamentals/custom-providers#non-class-based-provider-tokens*
  - Nhằm để tránh duplicate code decorators trong nhiều controller
  ![alt text](img/image-56.png)
  ![alt text](img/image-57.png)
  
## Preventing Access with Authentication Guards
  - *https://docs.nestjs.com/guards*
  - ![alt text](img/image-58.png)
  - ![alt text](img/image-59.png)