import ApiRequest from "../utils/config/ApiRequest";
export default function getRandomJoke() {
    return ApiRequest.get("/",{
        validateStatus: function (status) {
          return status < 500; }
    }) 
}
