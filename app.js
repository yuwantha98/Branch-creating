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

let number = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}

number.push(100);

console.log(number);

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

const customer = {
  name: "saman",
  age: 12,
  run: () => console.log("Hello.."),
};

customer.run();

function sample() {
  console.log("Hello..");
}

sample = function () {
  console.log("Hello..");
};

sample = () => {
  console.log("Hello..");
};

sample = () => console.log("Hello..");

let numbers = [10, 50, 67, 54, 86, 11, 245, 43, 76];

console.log(numbers.sort());
console.log(numbers.push(354));
console.log(numbers.sort());
console.log(numbers.length);
console.log(numbers.pop());

console.log(numbers.shift());
console.log(numbers.sort());
console.log(numbers.toString());

const customers = [
  {
    name: "saman",
    age: 12,
    address: "gampaha",
  },
  {
    name: "kamal",
    age: 11,
    address: "kurunegala",
  },
  {
    name: "nimal",
    age: 15,
    address: "anuradhapura",
  },
  {
    name: "sunimal",
    age: 20,
    address: "panadura",
  },
  {
    name: "wimal",
    age: 30,
    address: "moratuwa",
  },
];

function addCustomer() {
  let name = document.getElementById("txtUserName").value;
  let age = document.getElementById("txtAge").value;
  let address = document.getElementById("txtAddress").value;

  customers.push({
    name,
    age,
    address,
  });

  console.log(customers);
  showAllCustomers();
}

function showAllCustomers() {
  let tblCustomers = document.getElementById("tblCustomers");

  let tableBody = `<tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Address</th>
                  </tr>`;

  customers.forEach((data) => {
    console.log(data);

    tableBody += ` <tr>
                      <td> ${data.name}</td>
                      <td> ${data.age}</td>
                      <td> ${data.address}</td>
                  </tr>`;
  });
  tblCustomers.innerHTML = tableBody;
  console.log(tableBody);
}
