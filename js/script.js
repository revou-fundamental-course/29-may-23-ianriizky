const mynameisElement = document.getElementById("mynameis");
mynameisElement.innerHTML = 'NgodingBang';

function submitForm(form) {
  const name = form.querySelector('input[name=name]');
  const dateofbirth = form.querySelector('input[name=dateofbirth]');
  const gender = form.querySelector('input[name=gender]:checked');
  const message = form.querySelector('textarea[name=message]');

  if (!name.value
    || !dateofbirth.value
    || !gender.value
    || !message.value) {
    alert("Your data is not valid");
  }

  const nameAnswerElement = document.getElementById("nameAnswer");
  nameAnswerElement.innerHTML = name.value;

  const dateofbirthAnswerElement = document.getElementById("dateofbirthAnswer");
  dateofbirthAnswerElement.innerHTML = dateofbirth.value;

  const genderAnswerElement = document.getElementById("genderAnswer");
  genderAnswerElement.innerHTML = gender.value;

  const messageAnswerElement = document.getElementById("messageAnswer");
  messageAnswerElement.innerHTML = message.value;
}
