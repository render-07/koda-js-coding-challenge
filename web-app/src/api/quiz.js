import axios from 'axios';

const fetchQuiz = () => {
    return axios.get(`http://localhost:5000/get-all-quiz`)
};

export default fetchQuiz;