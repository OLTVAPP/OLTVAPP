class DataService {
  constructor() {
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

  getAxiosData2(url, callback, adatLeiro, ertek) {
    axios
      .get(url)
      .then(function (response) {
        //handle success
        console.log("response", response);
        console.log("data", response.data);
        console.log("státusz", response.request.status);
        console.log("text", response.statusText);
        callback(response.data, adatLeiro, ertek);
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
    axios
      .post(url, data)
      .then((response) => {
        console.log(response);
        location.reload();
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


  putData(url, obj) {
    console.log(obj)
    axios.put(url, obj)
      .then(function (response) {
        location.reload();
        console.log("resp", response);
      })
      .catch((error) => {
        console.log("hiba", error);
      })
  }

  patchData(url) {
    axios.patch(url)
      .then(function (response) {
        if (response.data == "Hiba") {
          alert("Rossz jelszót adtál meg!")
        } else {
          location.reload();
        }
        console.log("resp", response);
      })
      .catch((error) => {
        console.log("hiba", error);
      })
  }

  patchData2(url, data) {
    axios
      .patch(url, data)
      .then((response) => {
        console.log(response);
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      })
  }



}
export default DataService;