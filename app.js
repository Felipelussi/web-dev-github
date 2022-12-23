let greetingText = "hi i am max";
let age = 32;
let hobbies = ["Sports", "cooking", "reading"];
let job = {
  title: "Developer",
  place: "New York",
  salary: 50000,
};

let adultYears;

function calculateAdultYears(userAge) {
  return userAge - 18;
}
adultYears = calculateAdultYears(age);
alert(adultYears)
age = 45;

alert(calculateAdultYears(age));
