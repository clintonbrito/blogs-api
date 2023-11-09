/**
 * @param { import('sequelize').Sequelize } sequelize
 * @param { import('sequelize').DataTypes } DataTypes
 */

const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define('Category', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    tableName: 'blog_posts',
    timestamps: false,
    underscored: true,
  })

  return BlogPostTable;
}

module.exports = BlogPostSchema;