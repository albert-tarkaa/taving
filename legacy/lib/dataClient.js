import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(process.env.NEXT_DATOCMS_API_URL, {
    headers: {
        Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
});