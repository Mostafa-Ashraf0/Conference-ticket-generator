let form = document.querySelector("form");
let main = document.querySelector(".main");
let final = document.querySelector(".final");
let finalHeader = document.querySelector(".final h1");
let finalText = document.querySelector(".final p");
let ticketImg = document.querySelector(".lower img");
let ticketHeader = document.querySelector(".lower h3");
let ticketText = document.querySelector(".lower p");
let uploadImg = document.querySelector(".upload img");
let uploadpnote = document.querySelector(".upload p");
let avatarInput = document.querySelector("#avatar");
let uploadp = document.querySelector(".note");
let uploadBtn = document.querySelector(".upload .btn");
let removeBtn = document.querySelector(".btn .remove");
let changeBtn = document.querySelector(".btn .change");
let formbtn = document.querySelector("form button");

avatarInput.addEventListener("click", () => {
  uploadp.textContent = "Upload your photo (JPG or PNG, max size: 500KB)";
  uploadp.style.color = "white";
});

avatarInput.addEventListener("change", () => {
  const file = avatarInput.files[0];
  const maxsize = 500 * 1024; // 500 KB
  if (file.size > maxsize) {
    uploadp.textContent = "File too large! Please upload a file under 500 KB.";
    uploadp.style.color = "hsl(7, 71%, 60%)";
    avatarInput.value = ""; // Reset the file input
  } else {
    const reader = new FileReader();
    reader.onload = function (event) {
      uploadImg.src = event.target.result;
    };
    reader.readAsDataURL(file);
    uploadpnote.style.display = "none";
    uploadBtn.style.display = "flex";
  }
});

removeBtn.addEventListener("click", () => {
  avatarInput.value = ""; // Reset the file input
  uploadBtn.style.display = "none";
  uploadpnote.style.display = "flex";
  uploadImg.src = "assets/images/icon-upload.svg"; // Reset to placeholder image
});

changeBtn.addEventListener("click", () => {
  avatarInput.click(); // Trigger the file input click
  uploadp.textContent = "Upload your photo (JPG or PNG, max size: 500KB)";
  uploadp.style.color = "white";
  uploadImg.src = "assets/images/icon-upload.svg"; // Reset to placeholder image
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.querySelector("#userName").value;
  let email = document.querySelector("#email").value.trim();
  let github = document.querySelector("#github").value;

  finalHeader.innerHTML = `Congrats, <span>${name}!</span>  Your ticket is ready!`;
  finalText.innerHTML = `We've emailed your ticket to <span>${email}</span> and will send updates in the run-up to the event.`;
  ticketHeader.textContent = name;
  ticketText.textContent = github;
  const file = avatarInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      ticketImg.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }

  main.style.display = "none";
  final.style.display = "flex";
});
