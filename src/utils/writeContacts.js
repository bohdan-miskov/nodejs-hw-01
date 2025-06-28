import { writeFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    return await writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
  } catch (error) {
    console.log(error);
  }
};
