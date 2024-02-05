const fetchData = (setIsLoading, setIsTargetUser) => {
    fetch("https://mind-breaker-apps.com/filter.php")
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
};

fetchData(setIsLoading, setIsTargetUser);
