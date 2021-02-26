const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount:Int 
    savedBooks:[Book]
  }

  type Book {
    _id: ID
    bookId: ID
    authors:[String]
    description: String
    title:String
    image:String
    link: String
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
   
  }

  input BookInput {
    authors:[String]
    description: String
    title: String! 
    image:String
    link:String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookid:ID, input:BookInput): User
    removeBook(bookid:ID):User
  }
`;

module.exports = typeDefs;