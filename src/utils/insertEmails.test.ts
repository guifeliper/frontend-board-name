import insertEmails from './insertEmails';

describe('Insert Emails', () => {
  test('Render one email', () => {
    const emails = 'gui@gmail.com'
    let containerMock: jest.Mocked<HTMLElement> = {
      insertBefore: jest.fn()
    } as any;
    insertEmails(emails, containerMock)

    expect(containerMock.insertBefore).toHaveBeenCalledTimes(1);
  });
  test('Render multiple emals', () => {
    const emails = 'gui@gmail.com, may@gmail.com, @gui'
    let containerMock: jest.Mocked<HTMLElement> = {
      insertBefore: jest.fn()
    } as any;
    insertEmails(emails, containerMock)

    expect(containerMock.insertBefore).toHaveBeenCalledTimes(3);
  });
});
