let message;
let str = '[{"message":"Testing a message"},{"message":"Second default message"}]'

let obj = JSON.parse(str);

window.onload = initialMessages();

function initialMessages() {
  message = "";
  for (el of obj) {
     message += el.message + "<br>";
  }
  document.getElementById("message").innerHTML = message;

}

function clearMessages() {
  message = "";
  document.getElementById("message").innerHTML = "";
}

function toggleMessages() {
  let button = document.getElementById("message");
  if (button.style.display === "none") {
    button.style.display = "block"
  }
  else {
    button.style.display = "none"
  }
}

function postMessage() {
  newMessage = document.getElementById("message-text").value
  if ((newMessage.trim().length === 0)) {
    return;
  }

  message += newMessage + "<br>";
  document.getElementById("message-text").value = "";
  document.getElementById("message").innerHTML = message;
}
