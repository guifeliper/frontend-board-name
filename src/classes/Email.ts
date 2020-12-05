export default class Email {
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

  private deleteTag(element: HTMLElement): void {
    const parent = element.parentElement;
    parent?.remove();
  }

  private stringToHTML(str: string): HTMLElement {
    const context = this;
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    let element: HTMLElement = doc.getElementsByClassName('js-delete-tag')[0] as HTMLElement;
    element.addEventListener('click', function (e) {
      context.deleteTag(this);
    });
    return doc.body;
  };

  getEmailHTML(): HTMLElement {
    if (this.isValid) {
      return this.stringToHTML(this.validEmail);
    } else {
      return this.stringToHTML(this.invalidEmail);
    }
  }


}
