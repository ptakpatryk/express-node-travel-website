const fortuneCookie = [
  "Imagination is more important than knowledge.",
  "If you can't explain it simply, you don't understand it well enough.",
  "Life is like riding a bicycle. To keep your balance you must keep moving.",
  "Imagination is everything. It is the preview of life's coming attractions.",
  "No problem can be solved from the same level of consciousness that created it.",
  "Coincidence is God's way of remaining anonymous.",
  "In the middle of difficulty lies opportunity.",
  "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
  "Insanity: doing the same thing over and over again and expecting different results.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
]


exports.getCookie = () => {
  return fortuneCookie[Math.floor(Math.random() * fortuneCookie.length)];
}