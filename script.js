function mailList(event) {
  let name = prompt(`Thanks for the interest!  What's your name?`);
  let email = prompt("... and your email address?");

  if (name.length > 0 && email.length > 0) {
    alert(`Success! Thanks ${name}, you have been added to the mailing list!`);
  } else {
    alert(`Please enter your details to subscribe to the mailing list`);
  }
}
let button = document.querySelector("button");
button.addEventListener("click", mailList);
