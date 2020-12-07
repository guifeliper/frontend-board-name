import { Email } from '../classes';

export default function insertEmails(input: string, container: HTMLElement): void {
  var emailArr = input.trim().split(',').filter(x => x);
  emailArr.forEach((email) => {
    const emailEditor = new Email(email.trim());
    emailEditor.render(container)
  });
}
