import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {

    const UserTags = sequelize.define("userTags", {

        TagId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        TagTitle: DataTypes.STRING,
        TagDetails: DataTypes.STRING,
    }, {
        timestamps: false
    });

    return UserTags;
}