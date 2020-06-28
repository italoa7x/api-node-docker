// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'db',
      user:     'postgres',
      password: 'docker'
    },
    migrations: {
      directory: 'src/database/migrations'
    }
  }
};
