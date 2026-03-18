const showFriend = (names) => {
  friendEven = [];
  console.log(names);
  for (const name of names) {
    if (name.length % 2 !== 1) {
      friendEven.push(name);
    }
  }
  return friendEven;
};
const friends = ["bari", "mario", "mokbulo", "shikha"];
console.log(showFriend(friends));
