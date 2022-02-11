import { Sequelize } from "sequelize";
import PostTags from "./postTags.model";
import UserInfos from "./userInfos.model";
import userPosts from "./userPosts.model";
import Users from "./users.model";
import UserTag from "./userTags.model";


const sequelize: Sequelize = new Sequelize('learnsequelizewithtypes', 'root', '', {
    host: "localhost",
    dialect: 'mysql',
    logging: false
})


const db = {
    sequelize,
    Users: Users(sequelize),
    UserInfos: UserInfos(sequelize),
    UserPosts: userPosts(sequelize),
    UserTag: UserTag(sequelize),
    PostTags: PostTags(sequelize),
}
//--------------------One To One------------------
db.Users.hasOne(db.UserInfos, { foreignKey: "email", as: "UserInfos" });
db.UserInfos.belongsTo(db.Users, { foreignKey: "email", as: "UserInfos" });

//--------------------One To Many------------------
db.UserInfos.hasMany(db.UserPosts, { foreignKey: "UserId", as: "UserPosts" });
db.UserPosts.belongsTo(db.UserInfos, { foreignKey: "UserId", as: "UserInfos" });

//--------------------One To Many------------------
db.UserPosts.belongsToMany(db.UserTag, { through: db.PostTags, foreignKey: "PostID" });
db.UserTag.belongsToMany(db.UserPosts, { through: db.PostTags, foreignKey: "TagID" });

export default db;