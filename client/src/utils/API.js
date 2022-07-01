import axios from 'axios';

const search = async () =>
  axios.get(`http://localhost:3001/api/tracking`);


const searchOne = async () => 
axios.get(`http://localhost:3001/api/tracking/John`)
export default { search, searchOne};