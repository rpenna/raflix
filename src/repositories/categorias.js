import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

const fetchFunction = (url) => {
    return fetch(url)
        .then(async (response) => {
            if (response.ok) {
                const content = await response.json();

                return content;
            }

            throw new Error('Couldn\'t get data :(');
        });  
}

const getAllWithVideos = () => {
    return fetchFunction(`${URL_CATEGORIES}?_embed=videos`)
};

const getCategories = () => {
    return fetchFunction(URL_CATEGORIES);
};

export default {
    getAllWithVideos,
    getCategories
};
