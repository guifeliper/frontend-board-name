import generateFakeEmail  from './generateFakeEmail';

describe('Generate Fake Email Factor', () => {
  test('matches Email', () => {
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = generateFakeEmail(); 
    expect(email).toMatch(emailRegEx);
  });
});
