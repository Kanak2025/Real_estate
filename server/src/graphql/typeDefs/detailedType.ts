export default `#graphql
    type DetailedType {
        _id: ID!
        name: String!
        parent: ID!
    }

    type Query {
        detailedType(_id: ID!): DetailedType
        detailedTypes: [DetailedType]
    }

    type Mutation {
        createDetailedType(name: String!, parent: ID!): DetailedType
        updateDetailedType(_id: ID!, name: String!): DetailedType
        deleteDetailedType(_id: ID!): DetailedType
    }
`;