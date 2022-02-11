import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {

    const PostTags = sequelize.define("postTags", {
        PostID: DataTypes.INTEGER,
        TagID: DataTypes.INTEGER

    }, {
        timestamps: false
    });

    return PostTags;
}