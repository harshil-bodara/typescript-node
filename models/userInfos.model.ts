import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {

    const UserInfos = sequelize.define("userInfos", {
        UserId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: DataTypes.STRING,
        LastName: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
        email: DataTypes.STRING,
        gender: DataTypes.STRING,
        Hobbys: DataTypes.STRING
    }, {
        timestamps: false
    });

    return UserInfos;
}