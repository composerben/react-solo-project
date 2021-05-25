"use strict";
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define(
    "Song",
    {
      name: DataTypes.STRING,
      audioFile: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      trackNumber: DataTypes.INTEGER,
      albumId: DataTypes.INTEGER,
    },
    {}
  );
  Song.associate = function (models) {
    // associations can be defined here
    Song.belongsTo(models.User, { foreignKey: "userId" });
    Song.belongsTo(models.Album, { foreignKey: "albumId" });
  };
  return Song;
};
