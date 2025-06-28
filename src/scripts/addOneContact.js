import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const newContact = createFakeContact();
  const contacts = await readContacts();
  contacts.push(newContact);
  await writeContacts(contacts);
};

addOneContact();
