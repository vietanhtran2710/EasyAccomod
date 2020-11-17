// Model cho giá của từng phòng trọ
module.exports = (sequelize, DataTypes) => {
    const RoomCost = sequelize.define('RoomCost', {
        monthlyCost: {
            type: DataTypes.INTEGER(32).UNSIGNED
        },
        quarterCost: {
            type: DataTypes.INTEGER(32).UNSIGNED
        },
        yearlyCost: {
            type: DataTypes.INTEGER(32).UNSIGNED
        }
    }, {
        tablename: 'roomcost',
        timestamps: false,
        primaryKey: false
    })

    RoomCost.removeAttribute('id')
    return RoomCost
}