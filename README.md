# Getting started with Squid Cloud: A basic starter project

This template provides a minimal setup for a [Squid Cloud](https://squid.cloud)-powered application based on the [Vite](https://vitejs.dev/) counter sample application.

## Prerequisites

For this project you will need:

- NodeJS v18 or later.
- [Vite](https://vitejs.dev/).
- A Squid Cloud account and a Squid application. To sign up for Squid, go to [Squid Cloud Console](https://console.squid.cloud). Once signed up, you can create an application.
- The Squid Cloud CLI (`npm i @squidcloud/cli`).

## Environment configuration

### Setting up your `.env` file

After cloning this project, go to the [Squid Cloud Console](https://console.squid.cloud), create an application (if haven't done so already) and click the **Create .env file** button under **Backend project**. This provides you with the command to create the `.env` file required for this template to work and run.

Change to the backend directory, and install the required dependencies:

```bash
cd backend
npm install
```

Run the initialization command you copied from the console. The command has the following format:

```bash
squid init-env \
 --appId YOUR_APP_ID \
 --apiKey YOUR_API_KEY \
 --environmentId YOUR_ENVIRONMENT_ID \
 --squidDeveloperId YOUR_SQUID_DEVELOPER_ID \
 --region YOUR_REGION
```

### Finalizing setup

Open a new terminal window and navigate to the `frontend` directory. You should now have two terminal windows open: one in which you will run the local backend server, and one in which you will run the frontend. Complete the environment setup with the following steps, ensuring you're in the `frontend` directory:

```bash
npm run setup-env
```

This command prepares your `.env` file for the Vite environment by generating a `frontend/.env.local` file.

## Running the application

### Starting the local backend server

To launch the local backend server of your Squid application, run the following command from the `backend` directory:

```bash
squid start
```

You'll see output similar to the following, indicating that your server is up and running:

```bash
> nodemon --watch ./src --exec ts-node -r tsconfig-paths/register src/main.ts
[Nest] 68047  - 03/15/2024, 7:55:23 PM     LOG [NestApplication] Nest application successfully started +1ms
```

### Launching the frontend server

Initialize the frontend server by running the following commands in the `frontend` directory:

```bash
npm install
npm run dev
```

Verify that Vite server has started, providing URLs to access your app:

```bash
  VITE v5.1.6  ready in 149 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## Exploring your Squid application

With both servers running, visit [http://localhost:5173/](http://localhost:5173/) in your web browser. You're now ready to experiment with the count button and explore the functionalities of your Squid Cloud application:

1. Click **count is 0** a few times to increment the counter.
2. Refresh the window. Notice the count remains at the previous increment instead of returning to 0.
3. Open another browser tab and click the counter button. Notice the count updates simultaneously across multiple tabs.

### Resetting the counter

The Squid application in this project introduces a webhook that resets the counter. The webhook full URL from your local environment is displayed in the output of the `squid start` command you used to start the local backend server. To reset the counter, access the webhook URL from your browser.

Check your terminal logs for the following line:

```bash
...
| Webhook URL for resetCounter: https://YOUR_APP_ID-dev-YOUR_SQUID_DEVELOPER_ID.us-east-1.aws.squid.cloud/webhooks/resetCounter   |
...
```

## Next steps

To learn more about Squid's real-time data capabilities, view the [Client SDK documentation](https://docs.squid.cloud/docs/development-tools/client-sdk/). To find out how to integrate with your own data sources, view the [Database integrations documentation](https://docs.squid.cloud/docs/integrations/database/)
