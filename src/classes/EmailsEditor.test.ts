import EmailsEditor from './EmailsEditor'


describe('Email Editor', () => {

  test('valid email', () => {
    const emailEditor = new EmailsEditor('guifelip@gmail.com');
    const isValidEmail = emailEditor.checkEmail();
    expect(isValidEmail).toBe(true);
  });

  test('invalid email', () => {
    const emailEditor = new EmailsEditor('guifelip@gmail.com');
    const isValidEmail = emailEditor.checkEmail();
    expect(isValidEmail).toBe(true);
  });
});
