module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Post', {
        postID: {
            type: DataTypes.INTEGER(32).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        postTime: {
            type: DataTypes.DATE
        },
        expiredTime: {
            type: DataTypes.DATE
        },
        verifiedStatus: {
            type: DataTypes.BOOLEAN
        },
        likesNumber: {
            type: DataTypes.INTEGER(32).UNSIGNED
        },
        starsReview: {
            type: DataTypes.FLOAT
        }
    }, {
        tableName: 'posts',
        timestamps: false
    })

}