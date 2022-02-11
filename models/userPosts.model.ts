import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {

    const UserPosts = sequelize.define("userPosts", {

        PostID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        PostTitle: DataTypes.STRING,
        UserId: DataTypes.INTEGER,
        postIMG: DataTypes.STRING,

    }, {
        timestamps: false
    });

    return UserPosts;
}