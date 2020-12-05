import { EmailsEditor } from './classes/EmailsEditor';

const emailInput = document.getElementById("emailsInput") as HTMLInputElement;
const emailsContainer = document.getElementById("emailsContainer") as HTMLElement;


function generateEmail(email: string): void {
  const emailEditor = new EmailsEditor(email.trim());
  emailEditor.render(emailsContainer);
}

function someFunction(): void {
  var emailArr = emailInput.value.split(',');
  emailArr.forEach((email) => {
    generateEmail(email);
  });
  emailInput.value = '';
}

emailInput.addEventListener('keyup', function (e) {
  console.log(emailInput.value.length);
  if(emailInput.value.length < 3) return;
  if (e.key === 'Enter' || e.key === ',') {
    someFunction();
  }
});

emailInput.addEventListener('focusout', function (e) {
  if(emailInput.value.length < 3) return;
  someFunction();
});
// guilherme@gmail.com, mayara, karina@ghu.com, may@maracaja.com
