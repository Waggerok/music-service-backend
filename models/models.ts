import { DataTypes } from "sequelize"
import { sequelize } from '../data/database'

const User = sequelize.define('user', {
    id : {type : DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login : {type : DataTypes.STRING, unique : true},
    password : {type : DataTypes.STRING},
    role : {type : DataTypes.STRING, defaultValue: "USER"}
})

const Music = sequelize.define('music', {
    id : {type : DataTypes.INTEGER, primaryKey: true, autoIncrement : true},
    title : {type : DataTypes.STRING},
    author : {type : DataTypes.STRING},
    image : {type : DataTypes.STRING},
    audio : {type : DataTypes.STRING}
})

