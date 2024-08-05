import axios from './axiosConfing';

const pageURL = import.meta.env.VITE_API_PAGE_URL;
const authURL = import.meta.env.VITE_API_AUTH_URL;

export const createPage = async () => await axios.post(`${pageURL}/page`);
export const getPage = async () => await axios.get(`${pageURL}/page`);
export const login = async (user) => await axios.post(`${authURL}/login`,user);
export const register = async (user) => await axios.post(`${authURL}/register`,user);
export const gertUserInfo = async () => await axios.get(`${authURL}/check`);
export const Logout = async () => await axios.get(`${authURL}/logout`);