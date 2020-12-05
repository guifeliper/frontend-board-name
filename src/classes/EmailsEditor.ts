import Email from './Email';
export default class EmailsEditor {
  email: string;

  constructor(email: string) {
    this.email = email;
  }

  checkEmail(): Boolean {
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regexp.test(this.email);
  }

  render(container: HTMLElement): void {
    const htmlTemplate = new Email(this.email, this.checkEmail())

    const body = htmlTemplate.getEmailHTML();
    container.append(body);
  }


}
