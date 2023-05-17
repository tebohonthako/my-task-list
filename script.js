let array = [];

let ul = document.getElementById("array");

const emptytask = document.getElementById("emptytask");

array.forEach((item) => {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  ul.appendChild(li);
});

function addFirst() {
  const input = document.getElementById("text").value;
  if (input.length < 1) {
    alert("enter text");
    return;
  }
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input));
  ul.prepend(li);
  emptytask.remove();
  array.unshift(input);
  console.log(array);
}

function addLast() {
  const input = document.getElementById("text").value;
  if (input.length < 1) {
    alert("enter text");
    return;
  }
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input));
  ul.appendChild(li);
  emptytask.remove();
  array.push(input);
  console.log(array);
}

function removeFirst() {
  const lastEl = document.querySelector("#array :first-child");
  lastEl.remove();
  array.shift();
  console.log(array);
}

function removeLast() {
  const lastEl = document.querySelector("#array :last-child");
  lastEl.remove();
  array.pop();
  console.log(array);
}

function indexToRemove() {
  const num = prompt("enter index to remove");
  const el = document.querySelector(`#array :nth-child(${num})`);
  el.remove();
  let newlist = array.filter((item) => item !== array[num]);
  array = newlist;
  console.log(array);
}
