module.exports = {
    PORT: process.env.PORT || 3001,
    DB_HOST: process.env.DB_HOST || '192.168.1.109',
    DB_PORT: process.env.DB_PORT || '3306',
    DB_USERNAME: process.env.DB_USERNAME || 'developer',
    DB_USERNAME_PASSWORD: process.env.DB_USERNAME_PASSWORD || 'developer',
    DB_NAME: process.env.DB_NAME || 'shop-app',
};
