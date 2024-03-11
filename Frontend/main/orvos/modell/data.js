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

      getAxiosData2(url, callback, adatLeiro, szuloLeiro, vakcinaLeiro) {
        axios
          .get(url)
          .then(function (response) {
            //handle success
            console.log("response", response);
            console.log("data", response.data);
            console.log("státusz", response.request.status);
            console.log("text", response.statusText);
            callback(response.data, adatLeiro, szuloLeiro, vakcinaLeiro);
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

    
    putData(url,id,obj){
        axios.put(url+'/'+id,obj)
        .then(function(response){
          location.reload();
          console.log("resp",response);
        })
        .catch((error)=>{
          console.log("hiba",error);
        })
      }


}
export default DataService;