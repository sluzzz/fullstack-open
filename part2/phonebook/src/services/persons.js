import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  return axios.get(baseUrl);
};

const create = newObject => {
  return axios.post(baseUrl, newObject);
};

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
};

const post = object => {
  return axios.post(baseUrl, object);
};

const deletePerson = id => {
  return axios.delete(`${baseUrl}/${id}`);
};

const put = (id, changedPerson) => {
  return axios.put(`${baseUrl}/${id}`, changedPerson);
};

export default {
  getAll,
  create,
  update,
  post,
  put,
  del: deletePerson
};
