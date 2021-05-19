import axios from "axios";
const baseUrl = "/api/persons/";

const getAll = () => {
  const request = axios.get(baseUrl);

  return request.then((response) => response.data);
};

const create = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then((response) => response.data);
};
const removePerson = (person) => {
  const request = axios.delete(baseUrl + person.id);
  return request.then((response) => response.data);
};
const update = (id, person) => {
  const request = axios.put(baseUrl + id, person);
  return request.then((response) => response.data);
};

export default { getAll, create, removePerson, update };
