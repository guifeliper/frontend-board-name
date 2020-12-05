import { EmailsEditor } from './classes/EmailsEditor';
import generateFakeEmail from './utils/generateFakeEmail';


(function (container: HTMLElement, input: HTMLInputElement, buttonAdd: HTMLButtonElement, buttonGetEmail: HTMLButtonElement) {
  // Functions 
  function getValidEmails(): number {
    const validEmails = container.getElementsByClassName('email');
    return validEmails.length;
  }

  function generateEmail(emailEditor: EmailsEditor): void {
    emailEditor.render(container);
  }

  function insertEmails(input: string): void {
    var emailArr = input.trim().split(',').filter(x => x);
    emailArr.forEach((email) => {
      const emailEditor = new EmailsEditor(email.trim());
      generateEmail(emailEditor);
    });
  }


  // ### Listeners
  input.addEventListener('keyup', function (e) {
    if (this.value.length < 3) return;
    if (e.key === 'Enter' || e.key === ',') {
      insertEmails(this.value);
      this.value = '';
    }
  });

  input.addEventListener('focusout', function (e) {
    if (this.value.length < 3) return;
    insertEmails(this.value);
    this.value = '';
  });

  buttonGetEmail.addEventListener('click', function (e) {
    let validEmailsCount: number = getValidEmails();
    if (validEmailsCount > 1) {
      alert(`You have ${validEmailsCount} valid emails`);
    } else {
      alert(`You have ${validEmailsCount} valid email`);
    }
  });

  buttonAdd.addEventListener('click', function (e) {
    const newEmail = generateFakeEmail();
    insertEmails(newEmail);
  });



})(document.getElementById("emailsContainer") as HTMLElement,
  document.getElementById("emailsInput") as HTMLInputElement,
  document.getElementById("addEmail") as HTMLButtonElement,
  document.getElementById("getEmails") as HTMLButtonElement);

// guilherme@gmail.com, mayara, karina@ghu.com, may@maracaja.com
