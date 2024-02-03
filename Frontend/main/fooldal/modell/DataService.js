class DataService {
    postAxiosData(url, data) {
        axios
            .post(url, data)
            .then((response) => {
                console.log("RESP", response);
            })
            .catch((error) => {
                console.log("hiba", error);
            });
    }
}

export default DataService;