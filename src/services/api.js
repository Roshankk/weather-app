// import axios from "axios";
// const API_KEY ="c49c2d27d39bb278974c13f0f52a4fce"
// const API_URL ="http://api.openweathermap.org/data/2.5/weather"
// const getWeather = async (city,country)=>{
//     try{
//     let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}$units=metric`)
//         return response.data;
      
//     } catch(error){
//         console.log("Error while calling the api" , error.message)
//         return error.response;
//     }
// }

// export default getWeather;



import axios from "axios";

const API_KEY = "c49c2d27d39bb278974c13f0f52a4fce";
const API_URL = "http://api.openweathermap.org/data/2.5/weather";

const getWeather = async (city, country) => {
  try {
    const response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    console.log("Error while calling the API:", error.message);
    throw error;
  }
};

export default getWeather;
