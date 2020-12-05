export class Email {
  email: string;
  isValid: Boolean;
  validEmail: string;
  invalidEmail: string;

  constructor(email: string, isValid: Boolean) {
    this.email = email;
    this.isValid = isValid;
    this.validEmail = `<span class="email">${this.email}
                          <a class="js-delete-tag" title="Remove tag">
                            x
                          </a>
                        </span>`;
    this.invalidEmail = `<span class="emailInvalid">${this.email}
                            <a class="js-delete-tag" title="Remove tag">
                              x
                            </a>
                          </span>`;
  }

  getEmailHTML() {
    if (this.isValid) {
      return this.validEmail;
    } else {
      return this.invalidEmail;
    }
  }


}
