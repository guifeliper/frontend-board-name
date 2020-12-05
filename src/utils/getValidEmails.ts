export default function getValidEmails(container: HTMLElement): number {
  const validEmails = container.getElementsByClassName('email');
  return validEmails.length;
}
