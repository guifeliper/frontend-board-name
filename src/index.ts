import { EmailsEditor } from './classes/EmailsEditor';

const emailInput = document.getElementById("emailsInput") as HTMLInputElement;
const emailsContainer = document.getElementById("emailsContainer") as HTMLElement;


emailInput.addEventListener('keypress', function (e) {
  e.preventDefault();

  var emailArr = emailInput.value.split(',');
  console.log(emailArr);
  if (e.key === 'Enter') {
    var emailArr = emailInput.value.split(',');
    emailArr.forEach((email)=> {
      const emailEditor = new EmailsEditor(email.trim());
      if(emailEditor.checkEmail()){
        emailEditor.render(emailsContainer);
      }
      // console.log('Add email', emailEditor.checkEmail());
    });

  } else if(e.key === ','){
    const emailEditor = new EmailsEditor(emailInput.value);
    console.log('Add email', emailEditor.checkEmail());
  }
});
// guilherme@gmail.com, mayara, karina@ghu.com, may@maracaja.com
