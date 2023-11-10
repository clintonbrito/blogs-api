/**
 * @param { import('sequelize').Sequelize } sequelize
 * @param { import('sequelize').DataTypes } DataTypes
 */

const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define('BlogPost', {
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
  });

  BlogPostTable.associate = (models) => {
    BlogPostTable.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user', // ainda não está 100% claro esse `as`
    });
  };

  return BlogPostTable;
}

module.exports = BlogPostSchema;