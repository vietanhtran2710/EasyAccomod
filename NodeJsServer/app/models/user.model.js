module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        idCard: {
            type: Sequelize.STRING(20),
            primaryKey: true
        },
        fullName: {
            type: Sequelize.STRING(30)
        },
        phoneNumber: {
            type: Sequelize.STRING(20)
        },
        email: {
            type: Sequelize.STRING(30)
        },
        address: {
            type: Sequelize.STRING
        }
    }, {
        tableName: "users",
        timestamps: false,
    })

    // Bỏ cột online vì đã dùng token nên ko cần kiểm tra đăng nhập bằng xem csdl nữa
    return User;
};