import * as Prismic from "@prismicio/client";
import sm from "./../../sm.json";

export function getPrismicClient(req?) {
  const endpoint = sm.apiEndpoint;

  // const endpoint = Prismic.getRepositoryEndpoint(process.env.PRISMIC_REPO_NAME);

  const prismic = Prismic.createClient(endpoint, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return prismic;
}

//TODO:  mudar para GraphQL futuramente

// import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
// import * as prismic from '@prismicio/client'

// // Fill in your repository name
// export const repositoryName = 'ignews-newdomain'

// const prismicClient = prismic.createClient(
//   prismic.getEndpoint(repositoryName),
//   {
//     // If your repository is private, add an access token
//     accessToken: process.env.PRISMIC_ACCESS_TOKEN,

//     // This defines how you will structure URL paths in your project.
//     // Update the types to match the Custom Types in your project, and edit
//     // the paths to match the routing in your project.
//     //
//     // If you are not using a router in your project, you can change this
//     // to an empty array or remove the option entirely.
//     routes: [
//       {
//         type: 'page',
//         path: '/:uid',
//       },
//     ],
//   }
// )

// export const client = new ApolloClient({
//   link: new HttpLink({
//     uri: prismic.getGraphQLEndpoint(repositoryName),
//     fetch: prismicClient.graphQLFetch,
//     useGETForQueries: true,
//   }),
//   cache: new InMemoryCache(),
// })
