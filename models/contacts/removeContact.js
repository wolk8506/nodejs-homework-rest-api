const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((i) => i.id === contactId.toString());
  if (idx === -1) {
    return null;
  }
  const [result] = contacts.splice(idx, 1);
  await updateContacts(contacts);
  return result;
};

module.exports = removeContact;
