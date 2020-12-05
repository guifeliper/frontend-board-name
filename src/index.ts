import { EmailsEditor } from './classes/EmailsEditor';

const emailInput = document.getElementById("emailsInput") as HTMLInputElement;
const emailsContainer = document.getElementById("emailsContainer") as HTMLElement;
const addEmail = document.getElementById("addEmail") as HTMLButtonElement;
const getEmailsCount = document.getElementById("getEmails") as HTMLButtonElement;
let validEmailsCount: number = 0; 


// Functions 
function emailCounter(emailEditor: EmailsEditor): void {
  const isValid = emailEditor.checkEmail();
  if(isValid) validEmailsCount++;
}

function generateEmail(emailEditor: EmailsEditor): void {
  emailEditor.render(emailsContainer);
}

function validateEmails(): void {
  var emailArr = emailInput.value.split(',');
  emailArr.forEach((email) => {
    const emailEditor = new EmailsEditor(email.trim());
    generateEmail(emailEditor);
    emailCounter(emailEditor);
  });
  emailInput.value = '';
}

// ### Listeners
emailInput.addEventListener('keyup', function (e) {
  if(emailInput.value.length < 3) return;
  if (e.key === 'Enter' || e.key === ',') {
    validateEmails();
  }
});

emailInput.addEventListener('focusout', function (e) {
  if(emailInput.value.length < 3) return;
  validateEmails();
});

getEmailsCount.addEventListener('click', function (e) {
  if(validEmailsCount>1){
    alert(`You have ${validEmailsCount} valid emails`);
  } else {
    alert(`You have ${validEmailsCount} valid email`);
  }
});


// guilherme@gmail.com, mayara, karina@ghu.com, may@maracaja.com
