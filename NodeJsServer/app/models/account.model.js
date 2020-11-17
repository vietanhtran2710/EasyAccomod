module.exports = (sequelize, Sequelize) => {
    const Account = sequelize.define("account", {
        username: {
            type: Sequelize.STRING(20),
            primaryKey: true
        },
        password: {
            type: Sequelize.STRING(20)
        },
        accountType: {
            type: Sequelize.STRING(10)
        },
        verifiedState: {
            type: Sequelize.BOOLEAN
        },
        online: {
            type: Sequelize.BOOLEAN
        }
    }, {
        tableName: "accounts",
        timestamps: false
    });

    return Account;
};