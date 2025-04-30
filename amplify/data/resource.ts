import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  User: a
    .model({
      emailAddress: a.string(),
      walletAddress: a.string(),
      pendingTransactions: a.hasMany('PendingTransaction', "userId"),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  PendingTransaction: a
    .model({
      userId: a.id().required(),
      user: a.belongsTo('User', "userId"),
      toolName: a.string(),
      params: a.json(),
      isCompleted: a.boolean(),
      status: a.string(),
      digest: a.string(),
      network: a.string()
    })
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 100,
    },
  },
});
