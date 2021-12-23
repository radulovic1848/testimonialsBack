const { Sequelize } = require ('sequelize');

const suquelize = new Sequelize ('test-db', 'user', 'pass', {
    dialect: 'sqlite',
    host: './dev.sqlite'
})

module.exports = suquelize;