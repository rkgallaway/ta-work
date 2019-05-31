const repeatWord = (val) => {

  const strArr = [''];
  let counter = 0;
  for (let i = 0; i < val.length; i++) {
    if(val[i] === ',') {
      i++;
    }
    if (val[i] === ' ') {
      counter ++;
      strArr[counter] = '';
    } else {
      strArr[counter] += val[i];
    }
  }

  counter = strArr.length;
  let word;

  for (let i = 0; i < strArr.length; i++) {
    let newCounter = 0;
    for (let j = i + 1; j < strArr.length; j++) {
      if(strArr[i] !== strArr[j]) {
        newCounter++
      }
      if (strArr[i] === strArr[j] && newCounter < counter) {
        counter = newCounter;
        word = strArr[i];
      }
    }
  }
  return word;
};

module.exports = repeatWord;
