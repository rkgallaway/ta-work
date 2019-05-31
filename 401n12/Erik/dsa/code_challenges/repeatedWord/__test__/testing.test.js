const repeatWord = require('../repeated-word');

describe ('Testing repeated Function', () => {

  test('testing simple sentence', () => {

    let answer = repeatWord('Why is there a cat in a hat?');
    expect(answer).toEqual('a');

  });

  test ('testing with commas', () => {
    expect(repeatWord('why is there a, cat in a hat?')).toEqual('a')  ;
  });

  test('testing with multiple repeat words', () => {
    expect(repeatWord('in a in a')).toEqual('in');
  });

});
