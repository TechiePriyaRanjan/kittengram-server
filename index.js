const {ApolloServer, gql} = require("apollo-server");

const photos = [
    {
        author: "TechiePriyaRanjan",
        url: "https://cataas.com/cat/cute/says/Apollo%20is%20awesome?size=50&color=magenta",
        comments: [
            {
                author: "Katty",
                text: "Meow Meow...🐱"
            },
            {
                author: "Gracie",
                text: "Meow Meow Meow..🐈"
            }
        ]
    },
    {
        author: "Subhamay Priyadarsi",
        url: "https://cataas.com/cat/cute/says/GraphQL%20is%20awesome?size=50&color=magenta",
        comments: [
            {
                author: "Katty Pie",
                text: "Meow Meow...🐱"
            },
            {
                author: "Gracie Doglus",
                text: "Meow Meow Meow..😽"
            }
        ]
    },
];

const typeDefs = gql`
    type Comment {
        author: String
        text: String
    }

    type Photo {
        author: String
        url: String
        comments: [Comment]
    }

    type Query {
        photos: [Photo]
    }
`;

// Resolvers are functions that populate our query with data
const resolvers = {
    Query: {
        photos: () => photos
    }
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url})=> {
    console.log(`🐱 Server is ready @ ${url}`);
})