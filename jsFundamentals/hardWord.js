function hardWord(arr) {
  let sentance = arr[0];
  let words = arr[1];

  let underscores = [];

  for (let el of words) {
    let underscore = "_".repeat(el.length);
    underscores.push(underscore);
  }

  underscores.sort((a, b) => b.length - a.length);
  words.sort((a, b) => b.length - a.length);

  for (let i = 0; i < underscores.length; i++) {
    sentance = sentance.replace(underscores[i], words[i]);
  }
  console.log(sentance);
}
hardWord([
  `Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so 
_______ things happened. My dad bought me a sled. Mom started a new job as a 
__________. My brother\'s ankle is ________, and now it bothers me even more.
Every night Mom cooks ___ on your recipe because it is the most delicious. I
hope this year Santa will _____ me a robot.`,

  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
