const defineUrl = () => {
    if (window.location.hostname.includes('localhost')) {
        return 'http://localhost:8080';
    } 
    else {
        return 'https://raflix-react.herokuapp.com';
    }
};

const URL = defineUrl();

export default {
    URL
};