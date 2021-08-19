const assertEqual = function(actual, expected) {
  let result = '';
  if (actual === expected)  {
    result = console.log(`😀😀😀 ${actual} === ${expected}`);
  } else  {
    result = console.log(`😔😔😔 ${actual} !== ${expected}`);
  }
  return result;
};

const countLetters = (sentence) => {
  let counter = {};
  sentence = sentence.split(' ').join('')

  for ( const letter of sentence) {
    counter[letter] ? counter[letter] += 1 : counter[letter] = 1;
        
  }
  return counter;
}
console.log(countLetters("lighthouse in the house"))
assertEqual(countLetters('hello')['l'], 2);
assertEqual(countLetters("teacher")['t'], 1);
assertEqual(countLetters("LightHouselab")['o'], 1);
assertEqual(countLetters("objects are cool")['x'], undefined);