module.exports = (sequelize, DataTypes) => {
    const RoomUtils = sequelize.define('RoomUtils', {
        bathroom: {
            type: DataTypes.STRING(100)
        },
        kitchen: {
            type: DataTypes.STRING(100)
        },
        airconditioner: {
            type: DataTypes.BOOLEAN
        },
        balcony: {
            type: DataTypes.BOOLEAN
        },
        electricityPrice: {
            type: DataTypes.INTEGER(32).UNSIGNED
        },
        waterPrice: {
            type: DataTypes.INTEGER(32).UNSIGNED
        },
        otherUtils: {
            type: DataTypes.STRING(1000)
        }
    }, {
        tableName: 'roomUtils',
        timestamps: false
    })

    RoomUtils.removeAttribute('id')
    return RoomUtils
}