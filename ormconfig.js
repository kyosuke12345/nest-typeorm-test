// TODO 本当は環境変数より取得すべき
console.log(__dirname)
module.exports = {
    name: 'default',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: process.env.TEST_POSTGRES_DB,
    synchronize: false,
    logging: true,
    entities: [
        'src/database/entities/**/*entity.ts',
    ],
    migrations: ['src/database/migrations/**/*.ts'],
    subscribers: ['src/database/subscribers/**/*.ts'],
    cli: {
        entitiesDir: 'src/database/entities',
        migrationsDir: 'src/database/migrations',
        subscribersDir: 'src/database/subscribers'
    },
}