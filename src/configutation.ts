export const configuration = () => ({
  db: {
    type: process.env.TYPE,
    host: process.env.HOST,
    port: process.env.DB_PORT,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: process.env.SYNCHRONIZE,
  },
});
