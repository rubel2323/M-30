const house = {
  name: "shanti niketon",
  color: "multi-coloured",
  age: 20,
  location: "uttara",
};

const { name, ...aged } = house;
console.log(aged);
