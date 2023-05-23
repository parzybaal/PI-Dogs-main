const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('dogs', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdApi: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  },
  {
    timestamps: false
  });
};
