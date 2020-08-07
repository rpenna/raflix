import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

const fetchFunction = (url) => {
    return fetch(url)
        .then(async (response) => {
            if (response.ok) {
                const content = await response.json();

                return content;
            }

            throw new Error('Couldn\'t get data :(');
        });  
};

const postFunction = (url, body) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(async (response) => {
            if (response.ok) {
                const content = await response.json();

                return content;
            }

            throw new Error('Couldn\'t send data');
        });
};

const getVideos = () => {
    return fetchFunction(URL_VIDEOS);
};

const sendVideo = (body) => {
    return postFunction(URL_VIDEOS, body);
}

export default {
    getVideos,
    sendVideo
};
