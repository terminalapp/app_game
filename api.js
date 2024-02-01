import axios from 'axios';

const fetchData = (url, setIsLoading, setIsTargetUser) => {
    axios.get(url)
        .then(response => {
            setIsLoading(false);
            if (response.status === 200) {
                setIsTargetUser(true);
            } else {
                setIsTargetUser(false);
            }
        })
        .catch(error => {
            console.log('Произошла ошибка:', error);
            setIsLoading(false);
        });
};

export default fetchData;
