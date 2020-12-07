import getValidEmails from './getValidEmails';

describe('Get Valid Emails', () => {
  test('Find element getElementsByClassName', () => {
    let containerMock: jest.Mocked<HTMLElement> = {
      getElementsByClassName: jest.fn(() => {
        return { length: 1 };
      })
    } as any;
    getValidEmails(containerMock);

    expect(containerMock.getElementsByClassName).toHaveBeenCalled();
  });

  test('Returns length', () => {
    let containerMock: jest.Mocked<HTMLElement> = {
      getElementsByClassName: jest.fn(() => {
        return { length: 1 };
      })
    } as any;

    expect(getValidEmails(containerMock)).toBe(1);
  });
});
