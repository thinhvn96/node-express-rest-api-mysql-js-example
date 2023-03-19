module.exports = {
    PORT: process.env.PORT || 3000,
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PORT: process.env.DB_PORT || '3306',
    DB_USERNAME: process.env.DB_USERNAME || 'developer',
    DB_USERNAME_PASSWORD: process.env.DB_USERNAME_PASSWORD || 'developer',
    DB_NAME: process.env.DB_NAME || 'shop-app',
};
