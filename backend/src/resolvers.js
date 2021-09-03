const User = require('./database/User')
const Store = require('./database/Store')
const Product = require('./database/Product')
const jwt = require('jsonwebtoken')

module.exports = {
    
    Query: {
        users: () => User.find(),
        user: (_,{id}) => User.findById({id}),

        getAllStore: () => Store.find(),
        getStore: (_,{name}) => Store.find({name}),

        loginUser: (_, { name, password }) => {
            let user = User.find(
              (u) => u.name === name && u.password === password
            );
            if (user) {
              const token = jwt.sign(
                { name: user.name, password: user.password},
                "MY_TOKEN_SECRET"
              );
              return token;
            } else return "unknown user";
          },

          loginStore: (_, { name, password }) => {
            let user = Store.find(
              (u) => u.email === name && u.password === password
            );
            if (user) {
              const token = jwt.sign(
                { name: user.email, password: user.password},
                "MY_TOKEN_SECRET"
              );
              return token;
            } else return "unknown user";
          },
       
           

        getAllProduct: () => Product.find(),
        getProductById: (_,{id}) => Product.findById({id}),
        getProductByStore: (_,{storeId}) => Product.find({storeId}),

    },

    Mutation: {
        createUser: (_,{name,email}) => User.create({name,email}),
        createStore: (_,{name,email,password}) => Store.create({name,email,password}),
        createProduct: (_,{name,description,price,amount,storeId}) => Product.create({name,description,price,amount,storeId}), 
    }
        
    
}