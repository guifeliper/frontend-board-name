import { EmailsEditor } from '../classes';
import renderEmail from './renderEmail';

export default function insertEmails(input: string, container: HTMLElement): void {
  var emailArr = input.trim().split(',').filter(x => x);
  emailArr.forEach((email) => {
    const emailEditor = new EmailsEditor(email.trim());
    renderEmail(emailEditor, container);
  });
}
