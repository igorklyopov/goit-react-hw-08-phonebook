import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

async function postUserRegistrData(userData) {
  const { data } = await axios.post("/users/signup", userData);
  return data;
}

async function postUserLoginData(userData) {
  const { data } = await axios.post("/users/login", userData);
  return data;
}

async function deleteUserLoginData() {
  const { data } = await axios.post("/users/logout");
  return data;
}

async function fetchCurrentUser() {
  const { data } = await axios.get("/users/current");
  return data;
}

async function fetchContactsData() {
  const { data } = await axios.get("/contacts");
  return data;
}

async function postContactData(contactData) {
  const { data } = await axios.post("/contacts", contactData);
  return data;
}

async function deleteContactData(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}

const contactsAPI = {
  postUserRegistrData,
  postUserLoginData,
  deleteUserLoginData,
  fetchCurrentUser,
  fetchContactsData,
  postContactData,
  deleteContactData,
};

export default contactsAPI;
