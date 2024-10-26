 import axios from 'axios'

const api = axios.create({
    baseURL:"https://cluster-17uz.onrender.com"
});

api.interceptors.request.use(function (config) {
    const token =localStorage.getItem('token'); 
  
    
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
  

api.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  export default api