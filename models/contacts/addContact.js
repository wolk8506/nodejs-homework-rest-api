const shortid = require("shortid");
const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();
  const contact = {
    id: shortid(),
    name,
    email,
    phone,
  };
  contacts.push(contact);
  await updateContacts(contacts);
  return contact;
};

module.exports = addContact;
