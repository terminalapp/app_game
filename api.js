const fetchData = (setIsLoading, setIsTargetUser) => {
    axios.get("https://mind-breaker-apps.com/filter.php")
        .then(response => {
            setIsLoading(false);
            if (response.status === 200) {
                setIsTargetUser(true);
            } else {
                setIsTargetUser(false);
            }
        })
        .catch(error => {
            setIsLoading(false);
        });
}, []);

export default fetchData;
