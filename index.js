const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require('./contacts');

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      return console.table(listContacts());
      break;
    case 'get':
      return console.log(getContactById(id));
      break;

    case 'add':
      return console.log(addContact(name, email, phone));
      break;

    case 'remove':
      return console.log(removeContact(id));
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
