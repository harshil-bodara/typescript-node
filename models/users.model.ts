import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {

    const Users = sequelize.define("users", {
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true,
            primaryKey: true
        },
        password: DataTypes.STRING
    }, {
        timestamps: false
    });

    return Users;
}
