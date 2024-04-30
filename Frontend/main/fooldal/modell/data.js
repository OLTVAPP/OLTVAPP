class DataService {
    constructor() {
        console.log("hello");
    }


    getData(vegpont, callback, elem, hibaCallback) {
        axios.get(vegpont)
            .then(function (response) {
                console.log("response", response);
                console.log("data", response.data);
                console.log("statusz", response.status);
                console.log("statusz", response.request.status);
                console.log("text", response.statusText);
                callback(response.data, elem);
            })
            .catch(function (error) {
                console.log(error);
                hibaCallback(error);
            })
            .finally(function () {
                // always executed
            });
    }

    getAxiosData(url, callback, leiro) {
        axios
            .get(url)
            .then(function (response) {
                //handle success
                console.log("response", response);
                console.log("data", response.data);
                console.log("státusz", response.request.status);
                console.log("text", response.statusText);
                callback(response.data, leiro);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
                console.log("finally");
            });
    }

    postData(url, data) {
        console.log("put")
        axios
            .post(url, data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteData(url, id) {
        axios
            .delete(`${url}/${id}`)
            .then((response) => {
                console.log("RESP", response);
            })
            .catch((error) => {
                console.log("hiba", error);
            })
    }


    putData(url, id, obj) {
        axios.put(url + '/' + id, obj)
            .then(function (response) {
                location.reload();
                console.log("resp", response);
            })
            .catch((error) => {
                console.log("hiba", error);
            })
    }


}
export default DataService;