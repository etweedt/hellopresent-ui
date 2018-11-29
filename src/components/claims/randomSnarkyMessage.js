export default function() {
  const snark = [
    "I bet you're popular on Christmas.",
    "It's a wonder you have friends.",
    'Gifts must not be your love language.',
    'You must be one of those "last minute" shoppers.',
    "That's ok, I'm sure you have a great personality.",
    'I am also a fan of gifting experiences instead of something tangible.',
    "You're a mean one, Mr. Grinch."
  ];

  return snark[Math.floor(Math.random() * (snark.length - 0)) + 0];
}
