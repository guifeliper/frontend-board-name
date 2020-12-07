export default class Email {
  email: string;
  isValid: Boolean;
  validEmail: string;
  invalidEmail: string;
  private regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  
  constructor(email: string) {
    this.email = email;
    this.isValid = this.checkEmail();
    this.validEmail = `<span class="email">
                          <span>${this.email}</span>
                          <a class="js-delete-tag" title="Remove tag">
                            x
                          </a>
                        </span>`;
    this.invalidEmail = `<span class="emailInvalid">
                            <span>${this.email}</span>
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
    const self = this;
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    let element: HTMLElement = doc.getElementsByClassName('js-delete-tag')[0] as HTMLElement;
    element.addEventListener('click', function (e) {
      e.preventDefault();
      self.deleteTag(this);
    });
    return doc.body;
  };

  checkEmail(): Boolean {
    return this.regexp.test(this.email);
  }
  
  getEmailHTML(): HTMLElement {
    if (this.isValid) {
      return this.stringToHTML(this.validEmail);
    } else {
      return this.stringToHTML(this.invalidEmail);
    }
  }

  render(container: HTMLElement): HTMLElement {
    const inputItem = container.lastElementChild;
    const body = this.getEmailHTML();
    container.insertBefore(body.childNodes[0], inputItem);
    return container; 
  }
}
