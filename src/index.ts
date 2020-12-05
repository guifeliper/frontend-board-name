import { EmailsEditor } from './classes/EmailsEditor';

console.log('Hello World!');
console.log('Hello Typescript!');

const emailInput = document.getElementById("emailsInput") as HTMLInputElement;

console.log(emailInput);

const emailEditor = new EmailsEditor('gui@gmail.com');

console.log(emailEditor.checkEmail());
