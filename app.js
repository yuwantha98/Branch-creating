console.log((document.getElementById("heading").innerHTML = "Saman"));

console.log(document.getElementById("username"));
console.log(document.getElementById("password"));
console.log(document.getElementById("age"));
console.log(document.getElementById("btn_login_onAction"));

document
  .getElementById("btn_login_onAction")
  .addEventListener("click", loginOnAction);

function loginOnAction() {
  let userName = document.getElementById("username").value;
  let userPassword = document.getElementById("password").value;
  let userAge = document.getElementById("age").value;

  if (userAge > 18) {
    console.log("you are eligible!");
    alert("you are eligible!");
  } else {
    console.log("you are not eligible!");
    alert("you are not eligible!");
  }

  alert("Hello");

  console.log(userName);
  console.log(userPassword);
  console.log(userAge);

  console.log(typeof userName);
  console.log(typeof userPassword);
  console.log(typeof userAge);
}

let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

numbers.push(100);

console.log(numbers);

const customers = [
  {
    name: "saman",
    age: 15,
    address: "gampaha",
  },
  {
    name: "kamal",
    age: 10,
    address: "kalutar",
  },
  {
    name: "nimal",
    age: 16,
    address: "galle",
  },
  {
    name: "sunil",
    age: 22,
    address: "matara",
  },
];

console.log(customers[0].name);

document.addEventListener("DOMContentLoaded", function () {
  let isSubscribed = false;
  let subscriberCount = 0;
  const subscribeButton = document.getElementById("subscribe");
  const subscribersDisplay = document.getElementById("subscribers");

  subscribeButton.addEventListener("click", function () {
    if (isSubscribed) {
      isSubscribed = false;
      subscribeButton.textContent = "Subscribe";
      subscribeButton.style.backgroundColor = "red";
      subscriberCount--;
    } else {
      isSubscribed = true;
      subscribeButton.textContent = "Unsubscribe";
      subscribeButton.style.backgroundColor = "gray";
      subscriberCount++;
    }
    subscribersDisplay.textContent = `Subscribers: ${subscriberCount}`;
  });
});
