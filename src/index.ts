import { EmailsEditor } from './classes/EmailsEditor';
import generateFakeEmail from './utils/generateFakeEmail';

const emailInput = document.getElementById("emailsInput") as HTMLInputElement;
const emailsContainer = document.getElementById("emailsContainer") as HTMLElement;
const addEmail = document.getElementById("addEmail") as HTMLButtonElement;
const getEmailsCount = document.getElementById("getEmails") as HTMLButtonElement;


// Functions 
function getValidEmails(): number {
  const validEmails = document.getElementsByClassName('email');

  return validEmails.length;
}

function generateEmail(emailEditor: EmailsEditor): void {
  emailEditor.render(emailsContainer);
}

function insertEmails(input: string): void {
  var emailArr = input.trim().split(',').filter(x => x);
  emailArr.forEach((email) => {
    const emailEditor = new EmailsEditor(email.trim());
    generateEmail(emailEditor);
  });
}



// ### Listeners
emailInput.addEventListener('keyup', function (e) {
  if (emailInput.value.length < 3) return;
  if (e.key === 'Enter' || e.key === ',') {
    insertEmails(emailInput.value);
    emailInput.value = '';
  }
});

emailInput.addEventListener('focusout', function (e) {
  if (emailInput.value.length < 3) return;
  insertEmails(emailInput.value);
  emailInput.value = '';
});

getEmailsCount.addEventListener('click', function (e) {
  let validEmailsCount: number = getValidEmails();
  if (validEmailsCount > 1) {
    alert(`You have ${validEmailsCount} valid emails`);
  } else {
    alert(`You have ${validEmailsCount} valid email`);
  }
});

addEmail.addEventListener('click', function (e) {
  const newEmail = generateFakeEmail();
  insertEmails(newEmail);
});


// guilherme@gmail.com, mayara, karina@ghu.com, may@maracaja.com
