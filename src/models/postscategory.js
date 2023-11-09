/**
 * @param { import('sequelize').Sequelize } sequelize
 * @param { import('sequelize').DataTypes } DataTypes
 */

const PostsCategorySchema = (sequelize, DataTypes) => {
  const PostsCategoryTable = sequelize.define('Category', {
    post_id: DataTypes.INTEGER,
    category_id: DataTypes.STRING,
  }, {
    tableName: 'posts_categories',
    timestamps: false,
    underscored: true,
  })

  return PostsCategoryTable;
}

module.exports = PostsCategorySchema;