import { readFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    return JSON.parse(await readFile(PATH_DB, { encoding: 'utf-8' }));
  } catch (error) {
    console.log(error);
  }
};
