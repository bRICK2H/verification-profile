import axios from 'axios'

const config = {
	root: ' http://127.0.0.1:5000/api/v1/verification-profile/',
	method_get: 'get-data',
}

const { root, method_get } = config;

const get_request = (method = method_get) => {
	return axios.get(`${root}${method}`);
}
const post_request = (method, params) => {
	return axios.post(`${root}${method}`, params);
}
export { get_request, post_request };