const { makeExecutableSchema } = require("graphql-tools");

const typeDefs = `
type Author {
  id: ID! # the ! means that every author object _must_ have an id
  firstName: String
  lastName: String
  """
  the list of Posts by this author
  """
  posts: [Post]
}

type Post {
  id: ID!
  title: String
  author: Author
  votes: Int
}

# the schema allows the following query:
type Query {
  posts: [Post]
}

# this schema allows the following mutation:
type Mutation {
  upvotePost (
    postId: ID!
  ): Post
}

# we need to tell the server which types represent the root query
# and root mutation types. We call them RootQuery and RootMutation by convention.
schema {
  query: Query
  mutation: Mutation
}
`;

const resolvers = {
  Query: {
    posts() {
      return;
    }
  },
  Mutation: {
    upvotePost(_, { postId }) {
      return;
    }
  },
  Author: {
    posts(author) {
      return;
    }
  },
  Post: {
    author(post) {
      return;
    }
  }
};

module.exports.schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
