'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    name: DataTypes.STRING,
    albumCover: DataTypes.STRING,
    releaseDate: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
  };
  return Album;
};