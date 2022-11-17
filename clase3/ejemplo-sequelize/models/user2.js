module.exports=function (sequelize,dataTypes) {
    let alias="User"
    let atributos={
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: dataTypes.INTEGER
        },
        nombre: {
          type: dataTypes.STRING
        },
        email: {
          type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
          },
          remenber_token: {
            type: dataTypes.STRING
          },
          img: {
            type: dataTypes.STRING
          },
        createdAt: {
          allowNull: false,
          type: dataTypes.DATE
        },
        updatedAt: {
          allowNull: false,
          type: dataTypes.DATE
        }
      }
      let config ={
        tableName:"user",
        timestamps:true,
        underscored:true
      }
      const User=sequelize.define(alias,atributos,config);
      return User;
}