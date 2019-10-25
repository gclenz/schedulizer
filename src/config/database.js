module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'schedulizer',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
