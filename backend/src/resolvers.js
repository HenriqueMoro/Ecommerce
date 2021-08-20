const users = [
    {id:1, name:'Henrique', email:'henrique@email.com'},
    {id:2, name:'Jorge', email:'jorge@email.com'}
];

module.exports = {
    
    Query: {
        users: () => users,
        user: (_,{id}) => users
    },

    Mutation: {
        createUser: () => {},
    }
}