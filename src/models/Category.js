/**
 * @param { import('sequelize').Sequelize } sequelize
 * @param { import('sequelize').DataTypes } DataTypes
 */

const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define('Category', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, {
    tableName: 'categories',
    timestamps: false,
    underscored: true,
  });

  return CategoryTable;
}

module.exports = CategorySchema;