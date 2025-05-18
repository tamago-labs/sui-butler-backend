# Sui Butler Backend

This repository is part of the **SUI Butler** system — a server implementation for enabling Model Context Protocol (MCP) service on the Sui blockchain using zkLogin.

It contains the backend infrastructure built with AWS Serverless Stack to support MCP features, including APIs, databases, and the user dashboard for managing access keys and approving transactions.

**Note:** We can use without the backend with the private key mode. Refer to the [main repo](https://github.com/tamago-labs/sui-butler) for more details.

## System Overview

This project uses the AWS Amplify stack for full-stack, serverless infrastructure as code. Key components include:

- **Frontend:** Built with Next.js and deployed on Amplify Hosting.
- **API:** Using Next.js app API routes for transaction management.
- **zkLogin:** For authentication with zkLogin via Enoki. Support only Google account on this version.
- **Database**: Storing metadata associated with zkLogin accounts. Each user is uniquely identified via their email and wallet address.

## zkLogin Transaction Flow

When a user operates in zkLogin mode using an MCP-compatible AI client:

1. The client pushes a transaction request to the backend (via this system).

2. The transaction is stored in the database with a pending status.

3. The user can visit the dashboard to manually approve the transaction using their zkLogin-authenticated session.

## Deploying to AWS

For detailed instructions on deploying the AWS Cloud, refer to the [deployment section](https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/#deploy-a-fullstack-app-to-aws) of the AWS documentation.
 
## License

This library is licensed under the MIT-0 License. See the LICENSE file.
