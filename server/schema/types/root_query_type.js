const graphql = require('graphql');
const UserType = require('./user_type');
const {
  GraphQLObjectType,
  GraphQLID
} = graphql;


const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    currentUser: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user; // decide on the front end if the user is authenticated
      }
    }
  }
});

module.exports = RootQueryType;
