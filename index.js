const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require('./contacts');

const argsObject = yargs(hideBin(process.argv)).argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      return console.table(listContacts());
      break;

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

invokeAction(argsObject);
