let compliments = [
  'You have such a unique and interesting perspective on things.',
  'Your creativity never ceases to amaze me.',
  'You are so good at making others feel comfortable and welcomed.',
  'Your ability to find humor in any situation is a special talent.',
  'You have a beautiful soul and a kind heart.',
  'You are so resilient and strong, and I admire your determination.',
  'You have a great sense of style and always know how to make a statement.',
  'Your intelligence and quick wit never fail to impress me.',
  'You have a special gift for bringing people together and fostering connections.',
  'You are a true friend and always there for me when I need you.',
  'Your presence is like a gust of wind, always unexpected and surprising.',
  'Your mind is like a puzzle, always putting things together in unexpected ways.'
];

let unused = [...compliments];

random = function() {
  if (unused.length === 0) {
    unused = [...compliments];
  }
  
  const randomIndex = Math.floor(Math.random() * unused.length);
  const compliment = unused[randomIndex];

  unused.splice(randomIndex, 1);
  
  return compliment;
}

// Preloads the page with some random compliment
let startingCompliment = random();
let text = $('#compliment');
text.html(startingCompliment);

let button = $('#randomize');
button.click(function() {
  let randomCompliment = random();

  // Add the hide class, which hides the compliments
  text.addClass('hide');
  button.prop('disabled', true);

  setTimeout(function() {
    text.addClass('show');
    setTimeout(function() {
      text.removeClass('show hide');
      text.html(randomCompliment);
      button.prop('disabled', false);
    }, 1500);
  });
});