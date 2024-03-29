import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
  Void: any;
};

export type ImageFilter = {
  description?: InputMaybe<Scalars['String']>;
};

export type ImageFilterPageOptions = {
  filter?: InputMaybe<ImageFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ImageInput = {
  description?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['Upload']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type ImageType = {
  __typename?: 'ImageType';
  description: Scalars['String'];
  id: Scalars['ID'];
  projects?: Maybe<Array<ProjectType>>;
  url: Scalars['String'];
};

export type ImageTypePaginatedList = {
  __typename?: 'ImageTypePaginatedList';
  /** the total number of reccords returned */
  count: Scalars['Int'];
  /** the list of reccords */
  data: Array<ImageType>;
  /** the total number of reccords available */
  total: Scalars['Int'];
};

export type ImageTypeSuccess = {
  __typename?: 'ImageTypeSuccess';
  data: ImageType;
  success: Scalars['Boolean'];
};

export type Login = {
  __typename?: 'Login';
  refreshToken: Scalars['String'];
  token: Scalars['String'];
  user: UserType;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginSuccess = {
  __typename?: 'LoginSuccess';
  data: Login;
  success: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUpdateProject: ProjectTypeSuccess;
  login: LoginSuccess;
  newImage: ImageTypeSuccess;
  refreshToken: TokenTypeSuccess;
  register: UserTypeSuccess;
};


export type MutationCreateUpdateProjectArgs = {
  input: ProjectInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationNewImageArgs = {
  input: ImageInput;
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationRegisterArgs = {
  input: ResgisterInput;
  secretCode: Scalars['String'];
};

export type NoneTypePageOptions = {
  filter?: InputMaybe<Scalars['Void']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ProfileType = {
  __typename?: 'ProfileType';
  bio?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<ImageType>;
  lastName?: Maybe<Scalars['String']>;
  user: UserType;
};

export type ProjectInput = {
  description?: InputMaybe<Scalars['String']>;
  github?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  imageIds?: InputMaybe<Array<Scalars['Int']>>;
  liveUrl?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ProjectType = {
  __typename?: 'ProjectType';
  dateAdded: Scalars['String'];
  description: Scalars['String'];
  github?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  images?: Maybe<Array<ImageType>>;
  liveUrl?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ProjectTypePaginatedList = {
  __typename?: 'ProjectTypePaginatedList';
  /** the total number of reccords returned */
  count: Scalars['Int'];
  /** the list of reccords */
  data: Array<ProjectType>;
  /** the total number of reccords available */
  total: Scalars['Int'];
};

export type ProjectTypeSuccess = {
  __typename?: 'ProjectTypeSuccess';
  data: ProjectType;
  success: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  images: ImageTypePaginatedList;
  me?: Maybe<UserType>;
  project: ProjectType;
  projects: ProjectTypePaginatedList;
};


export type QueryImagesArgs = {
  options?: InputMaybe<ImageFilterPageOptions>;
};


export type QueryProjectArgs = {
  id: Scalars['Int'];
};


export type QueryProjectsArgs = {
  options?: InputMaybe<NoneTypePageOptions>;
};

export type ResgisterInput = {
  email: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  count: Scalars['Int'];
};


export type SubscriptionCountArgs = {
  target?: Scalars['Int'];
};

export type TokenType = {
  __typename?: 'TokenType';
  refreshToken: Scalars['String'];
  token: Scalars['String'];
  user: UserType;
};

export type TokenTypeSuccess = {
  __typename?: 'TokenTypeSuccess';
  data: TokenType;
  success: Scalars['Boolean'];
};

export type UserType = {
  __typename?: 'UserType';
  email: Scalars['String'];
  id: Scalars['Int'];
  profile: ProfileType;
};

export type UserTypeSuccess = {
  __typename?: 'UserTypeSuccess';
  data: UserType;
  success: Scalars['Boolean'];
};

export type ImagesQueryVariables = Exact<{
  options?: InputMaybe<ImageFilterPageOptions>;
}>;


export type ImagesQuery = { __typename?: 'Query', images: { __typename?: 'ImageTypePaginatedList', total: number, count: number, data: Array<{ __typename?: 'ImageType', url: string, description: string, id: string }> } };

export type ProjectsQueryVariables = Exact<{
  options?: InputMaybe<NoneTypePageOptions>;
}>;


export type ProjectsQuery = { __typename?: 'Query', projects: { __typename?: 'ProjectTypePaginatedList', total: number, count: number, data: Array<{ __typename?: 'ProjectType', id: number, title: string, description: string, github?: string | null, dateAdded: string, liveUrl?: string | null, images?: Array<{ __typename?: 'ImageType', url: string, description: string, id: string }> | null }> } };

export type ProjectQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ProjectQuery = { __typename?: 'Query', project: { __typename?: 'ProjectType', id: number, title: string, github?: string | null, liveUrl?: string | null, description: string, dateAdded: string, images?: Array<{ __typename?: 'ImageType', url: string, description: string, id: string }> | null } };

export type CreateUpdateProjectMutationVariables = Exact<{
  input: ProjectInput;
}>;


export type CreateUpdateProjectMutation = { __typename?: 'Mutation', project: { __typename?: 'ProjectTypeSuccess', success: boolean, data: { __typename?: 'ProjectType', id: number } } };

export type NewImageMutationVariables = Exact<{
  input: ImageInput;
}>;


export type NewImageMutation = { __typename?: 'Mutation', newImage: { __typename?: 'ImageTypeSuccess', success: boolean, data: { __typename?: 'ImageType', url: string, description: string, id: string } } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginSuccess', success: boolean, data: { __typename?: 'Login', token: string, refreshToken: string, user: { __typename?: 'UserType', id: number, email: string, profile: { __typename?: 'ProfileType', id: number, firstName?: string | null, lastName?: string | null, bio?: string | null, image?: { __typename?: 'ImageType', url: string, description: string, id: string } | null } } } } };

export type RefreshTokenMutationVariables = Exact<{
  refreshToken: Scalars['String'];
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'TokenTypeSuccess', success: boolean, data: { __typename?: 'TokenType', token: string, refreshToken: string, user: { __typename?: 'UserType', id: number, email: string, profile: { __typename?: 'ProfileType', id: number, firstName?: string | null, lastName?: string | null, bio?: string | null, image?: { __typename?: 'ImageType', url: string, description: string, id: string } | null } } } } };


export const ImagesDocument = gql`
    query Images($options: ImageFilterPageOptions) {
  images(options: $options) {
    total
    count
    data {
      url
      description
      id
    }
  }
}
    `;

export function useImagesQuery(options?: Omit<Urql.UseQueryArgs<ImagesQueryVariables>, 'query'>) {
  return Urql.useQuery<ImagesQuery, ImagesQueryVariables>({ query: ImagesDocument, ...options });
};
export const ProjectsDocument = gql`
    query Projects($options: NoneTypePageOptions) {
  projects(options: $options) {
    total
    count
    data {
      id
      title
      description
      github
      dateAdded
      liveUrl
      images {
        url
        description
        id
      }
    }
  }
}
    `;

export function useProjectsQuery(options?: Omit<Urql.UseQueryArgs<ProjectsQueryVariables>, 'query'>) {
  return Urql.useQuery<ProjectsQuery, ProjectsQueryVariables>({ query: ProjectsDocument, ...options });
};
export const ProjectDocument = gql`
    query Project($id: Int!) {
  project(id: $id) {
    id
    title
    github
    liveUrl
    description
    dateAdded
    images {
      url
      description
      id
    }
  }
}
    `;

export function useProjectQuery(options: Omit<Urql.UseQueryArgs<ProjectQueryVariables>, 'query'>) {
  return Urql.useQuery<ProjectQuery, ProjectQueryVariables>({ query: ProjectDocument, ...options });
};
export const CreateUpdateProjectDocument = gql`
    mutation CreateUpdateProject($input: ProjectInput!) {
  project: createUpdateProject(input: $input) {
    success
    data {
      id
    }
  }
}
    `;

export function useCreateUpdateProjectMutation() {
  return Urql.useMutation<CreateUpdateProjectMutation, CreateUpdateProjectMutationVariables>(CreateUpdateProjectDocument);
};
export const NewImageDocument = gql`
    mutation NewImage($input: ImageInput!) {
  newImage(input: $input) {
    success
    data {
      url
      description
      id
    }
  }
}
    `;

export function useNewImageMutation() {
  return Urql.useMutation<NewImageMutation, NewImageMutationVariables>(NewImageDocument);
};
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    success
    data {
      token
      refreshToken
      user {
        id
        email
        profile {
          id
          firstName
          lastName
          bio
          image {
            url
            description
            id
          }
        }
      }
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const RefreshTokenDocument = gql`
    mutation RefreshToken($refreshToken: String!) {
  refreshToken(refreshToken: $refreshToken) {
    success
    data {
      token
      refreshToken
      user {
        id
        email
        profile {
          id
          firstName
          lastName
          bio
          image {
            url
            description
            id
          }
        }
      }
    }
  }
}
    `;

export function useRefreshTokenMutation() {
  return Urql.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument);
};