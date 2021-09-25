import axios from "axios";

axios.defaults.baseURL = "http://localhost:3004";

export async function fetchContactsData() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function postContactData(contactData) {
  const { data } = await axios.post("/contacts", contactData);
  return data;
}

export async function deleteContactData(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}
