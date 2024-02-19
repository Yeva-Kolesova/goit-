import { program } from "commander";
import * as constactsServise from './contacts.js'


program
    .option("-a, --action <type>", "choose action")
    .option("-i, --id <type>", "user id")
    .option("-n, --name <type>", "user name")
    .option("-e, --email <type>", "user email")
    .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list":
            const allConctacts = await constactsServise.listContacts()
            console.table(allConctacts);
            break;
            table
        case "get":
            const oneContact = await constactsServise.getContactById(id);
            console.table(oneContact);
            break;

        case "add":
            const newContact = await constactsServise.addContact(name, email, phone)
            console.table(newContact);
            break;

        case "remove":
            const deleteContact = await constactsServise.removeContact(id);
            console.table(deleteContact)
            break;

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction(options);