/**
 * @param { import('sequelize').Sequelize } sequelize
 * @param { import('sequelize').DataTypes } DataTypes
 */

const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.STRING,
  }, {
    tableName: 'posts_categories',
    timestamps: false,
    underscored: true,
  });

  PostCategoryTable.associate = ({ Category, BlogPost }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategoryTable,
    })
    Category.belongsToMany(BlogPost, {
      as: 'posts',
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: PostCategoryTable,
    });
  };

  return PostCategoryTable;
};

module.exports = PostCategorySchema;