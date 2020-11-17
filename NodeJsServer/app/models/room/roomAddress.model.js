module.exports = (sequelize, DataTypes) => {
    const RoomAddress = sequelize.define('RoomAddress', {
        homeNumber: {
            type: DataTypes.INTEGER(10).UNSIGNED
        },
        street: {
            type: DataTypes.STRING(30)
        },
        ward: {
            type: DataTypes.STRING(30)
        },
        district: {
            type: DataTypes.STRING(30)
        },
        city: {
            type: DataTypes.STRING(30)
        }
    }, {
        tableName: 'roomAddress',
        timestamps: false
    })

    RoomAddress.removeAttribute('id')

    return RoomAddress
}

