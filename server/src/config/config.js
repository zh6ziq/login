
//db config
module.exports = {
    PORT: process.env.PORT || '8081',
    db: {
        database: process.env.DB_NAME || 'login',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        options: {
            dialect: process.env.DB_DIALECT || 'mysql',
            host: process.env.DB_HOST || 'localhost',
        } 
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}