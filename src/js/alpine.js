import apiData from "../common/serviceAPI";

window.dataApi = function() {
  return{
    dataUsers : [],
    dataPosts : [],
    connect(){
      apiData.getUsers()
      .then(json => {
        this.dataUsers = json;
        console.log(this.dataUsers)
      });
      apiData.getPosts()
      .then(json => {
        this.dataPosts = json;
        console.log(this.dataPosts)
      })
    }
  }
}