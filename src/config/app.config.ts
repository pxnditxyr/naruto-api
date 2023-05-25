
export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongoUri: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/libro-bingo',
  port: Number( process.env.PORT ) || 3002,
  defaultLimit: Number( process.env.DEFAULT_LIMIT ) || 6,
})
