export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Author = {
  __typename?: 'Author',
  id: Scalars['ID'],
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  /** the list of Posts by this author */
  posts?: Maybe<Array<Maybe<Post>>>,
};

/** this schema allows the following mutation: */
export type Mutation = {
  __typename?: 'Mutation',
  upvotePost?: Maybe<Post>,
};


/** this schema allows the following mutation: */
export type MutationUpvotePostArgs = {
  postId: Scalars['ID']
};

export type Post = {
  __typename?: 'Post',
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  author?: Maybe<Author>,
  votes?: Maybe<Scalars['Int']>,
};

/** the schema allows the following query: */
export type Query = {
  __typename?: 'Query',
  posts?: Maybe<Array<Maybe<Post>>>,
};
