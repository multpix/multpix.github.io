new Vivus('dru_logo', {
  type: 'oneByOne',
  duration: 150,
  file: 'dru_logo.svg'
}, doDone());

new Vivus('dru_text', {
  type: 'oneByOne',
  duration: 150,
  file: 'dru_text.svg'
}, doDone());

function doDone() {
  console.log('Animation finished.');
}
