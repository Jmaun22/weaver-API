import axios from 'axios';

const search = async () =>
  axios.get(`http://localhost:3001/api/tracking`);



export default { search };