export class EmailsEditor {
  email: string;

  constructor(email: string) {
    this.email = email;
  }


  private createElementFromHTML(htmlString: string) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
  }
  private stringToHTML = function (str: string) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    return doc.body;
  };

  checkEmail(): Boolean {
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regexp.test(this.email);
  }

  render(container: HTMLElement): void {
    const htmlTemplate = `<span class="email">${this.email}
                            <a class="js-delete-tag" title="Remove tag">
                              x
                            </a>
                          </span>`;

    const body = this.stringToHTML(htmlTemplate);
    container.append(body);
  }
}
