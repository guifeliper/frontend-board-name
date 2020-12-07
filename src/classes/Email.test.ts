import Email from './Email';

describe('Email Editor', () => {

  test('valid email', () => {
    const email = new Email('guifelip@gmail.com');
    const isValidEmail = email.isValid;
    expect(isValidEmail).toBe(true);
  });

  test('invalid email', () => {
    const email = new Email('guifelip@gmail.com');
    const isValidEmail = email.isValid;
    expect(isValidEmail).toBe(true);
  });

  test('Render valid email', () => {
    const email = new Email('guifelip@gmail.com')
    let containerMock: jest.Mocked<HTMLElement> = {
      insertBefore: jest.fn()
    } as any;

    email.render(containerMock);

    expect(containerMock.insertBefore).toHaveBeenCalled();
  });

  test('Render invalid email', () => {
    const email = new Email('guifelipgmail.com')
    let containerMock: jest.Mocked<HTMLElement> = {
      insertBefore: jest.fn()
    } as any;

    email.render(containerMock);

    expect(containerMock.insertBefore).toHaveBeenCalled();
  });

});
