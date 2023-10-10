import getOpenAiEmbeddings from './openai.js';
import getServerlessEndpointEmbeddings from './serverlessEndpoint.js';

const EMBEDDINGS_SOURCE = process.env.EMBEDDINGS_SOURCE || 'openai';

async function getTermEmbeddings(query) {
    switch (EMBEDDINGS_SOURCE) {
    case 'openai':
        return await getOpenAiEmbeddings(query);
    case 'serverlessEndpoint':
        return await getServerlessEndpointEmbeddings(query);
    default:
        return await getOpenAiEmbeddings(query);
    }
}

export default getTermEmbeddings;