# Welcome to your Squid backend project!

This project is designed to help you create powerful and flexible backend functionality for your application. The Squid
Backend SDK provides you with the ability to define and execute the desired backend code written in Typescript. With
this SDK, you can perform a wide range of tasks, including secure access to various resources, responding to changes in
the database, defining schedulers, exposing webhooks, and more.

## Architecture

There are three architectural parts to keep in mind when developing with Squid:

* **Client application** - This is the application that you are developing, and it uses the Squid Client SDK.
* **Squid cloud server** - This is provided by Squid and is responsible for orchestrating the middle tier by connecting
  to databases and other integrations, maintaining connected client state, executing backend functions, and much more.
* **Application backend** (this project) - This is a TypeScript project that runs alongside the Squid cloud server and
  is used for customizing the application's backend. It has access to the Squid Backend SDK. This part is developed by
  you. Developing locally

## Developing locally

To develop locally, run `npm run start-squid`

## ExampleService

The generated code has a class named `ExampleService` that can be used as a playground. You can modify this class to
experiment with Squid's functionality and explore the Squid Backend SDK.

## Deploying your code

When you are ready to deploy your code, you can run `squid deploy`. This will deploy your code to the Squid cloud
server,
making it available to your client application.

In conclusion, the Squid Backend code has extensive power and flexibility, making it a powerful tool for developers who
need to build complex backend functionality for their applications.

For more information, see the [documentation](https://docs.squid.cloud/docs/backend/)
