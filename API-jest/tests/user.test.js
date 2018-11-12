jest.mock('../request');

import * as user from '../user';

// A afirmação para uma promessa deve ser retornada.
it('funciona com promessas', () => {
  expect.assertions(1);
  return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
});