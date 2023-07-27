import axios from 'axios';

const searchImages = async (query) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID viIHnFBJZNZ6AR7ikroZpqIqZO7wr1VTfWRpqqepFmY'
        },
        params: {
            query: query,
        }
    });

    return response.data.results;
};

export default searchImages;
