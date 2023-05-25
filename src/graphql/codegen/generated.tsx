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
  login: LoginSuccess;
  newImage: ImageTypeSuccess;
  newProject: ProjectTypeSuccess;
  register: UserTypeSuccess;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationNewImageArgs = {
  input: ImageInput;
};


export type MutationNewProjectArgs = {
  input: ProjectInput;
};


export type MutationRegisterArgs = {
  input: ResgisterInput;
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
  id?: InputMaybe<Scalars['ID']>;
  imageIds?: InputMaybe<Array<Scalars['Int']>>;
  liveUrl?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ProjectType = {
  __typename?: 'ProjectType';
  dateAdded: Scalars['String'];
  description: Scalars['String'];
  github?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  images?: Maybe<Array<ImageType>>;
  liveUrl?: Maybe<Scalars['String']>;
  title: Scalars['String'];
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
};


export type QueryImagesArgs = {
  options?: InputMaybe<ImageFilterPageOptions>;
};


export type QueryProjectArgs = {
  id: Scalars['Int'];
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

export type NewProjectMutationVariables = Exact<{
  input: ProjectInput;
}>;


export type NewProjectMutation = { __typename?: 'Mutation', newProject: { __typename?: 'ProjectTypeSuccess', success: boolean, data: { __typename?: 'ProjectType', id: string, title: string } } };

export type NewImageMutationVariables = Exact<{
  input: ImageInput;
}>;


export type NewImageMutation = { __typename?: 'Mutation', newImage: { __typename?: 'ImageTypeSuccess', success: boolean, data: { __typename?: 'ImageType', url: string, description: string, id: string } } };


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
export const NewProjectDocument = gql`
    mutation NewProject($input: ProjectInput!) {
  newProject(input: $input) {
    success
    data {
      id
      title
    }
  }
}
    `;

export function useNewProjectMutation() {
  return Urql.useMutation<NewProjectMutation, NewProjectMutationVariables>(NewProjectDocument);
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