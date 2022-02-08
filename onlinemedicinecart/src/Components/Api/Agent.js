import axios, { AxiosError, AxiosResponse } from "axios";

const sleep = () => new Promise(resolve => setTimeout(resolve, 500));

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

const responseBody = (response) => response.data;



const requests = {
    get: (url, params) => axios.get(url, {params}).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody),
    put: (url, body) => axios.put(url, body).then(responseBody),
    delete: (url) => axios.delete(url).then(responseBody),
    postForm: (url, data) => axios.post(url, data, {
        headers: {'Content-type': 'multipart/form-data'}
    }).then(responseBody),
    putForm: (url, data) => axios.put(url, data, {
        headers: {'Content-type': 'multipart/form-data'}
    }).then(responseBody)
}

function createFormData(item) {
    let formData = new FormData();
    for (const key in item) {
        formData.append(key, item[key])
    }
    return formData;
}


const Catalog = {
    list: (params) => requests.get('products', params),
    details: (id) => requests.get(`products/${id}`),
    fetchFilters: () => requests.get('products/filters')
}



const agent = {
    Catalog
}

export default agent;