const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => item.id === contactId.toString());
  if (idx === -1) {
    return null;
  }
  contacts[idx] = { id: contactId, ...body };
  await updateContacts(contacts);
  return contacts[idx];
};

module.exports = updateContact;
