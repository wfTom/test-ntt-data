import axios from 'axios';
import _ from 'lodash';

const omdapi = axios.create({
  baseURL: 'http://www.omdbapi.com/',
});

export default omdapi;
