module.exports = (sequelize, DataTypes) => {
    const Rooms = sequelize.define('Rooms', {
        roomID: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        roomType: {
            type: DataTypes.STRING(30)
        },
        rented: {
            type: DataTypes.BOOLEAN
        },
        sharedOwner: {
            type: DataTypes.BOOLEAN
        },
        area: {
            type: DataTypes.INTEGER(10)
        },
        image: {
            type: DataTypes.STRING(1000)
        },
        description: {
            type: DataTypes.STRING(1000)
        }
    }, {
        tableName: 'rooms',
        timestamps: false,
    })

    return Rooms
};