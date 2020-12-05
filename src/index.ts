import { getValidEmails, generateFakeEmail, insertEmails } from './utils';


(function (container: HTMLElement, input: HTMLInputElement, buttonAdd: HTMLButtonElement, buttonGetEmail: HTMLButtonElement) {
  // ### Listeners
  input.addEventListener('keyup', function (e) {
    if (this.value.length < 3) return;
    if (e.key === 'Enter' || e.key === ',') {
      insertEmails(this.value, container);
      this.value = '';
    }
  });

  input.addEventListener('focusout', function (e) {
    if (this.value.length < 3) return;
    insertEmails(this.value, container);
    this.value = '';
  });

  buttonGetEmail.addEventListener('click', function (e) {
    let validEmailsCount: number = getValidEmails(container);
    if (validEmailsCount > 1) {
      alert(`You have ${validEmailsCount} valid emails`);
    } else {
      alert(`You have ${validEmailsCount} valid email`);
    }
  });

  buttonAdd.addEventListener('click', function (e) {
    const newEmail = generateFakeEmail();
    insertEmails(newEmail, container);
  });



})(document.getElementById("emailsContainer") as HTMLElement,
  document.getElementById("emailsInput") as HTMLInputElement,
  document.getElementById("addEmail") as HTMLButtonElement,
  document.getElementById("getEmails") as HTMLButtonElement);

// guilherme@gmail.com, mayara, karina@ghu.com, may@maracaja.com
