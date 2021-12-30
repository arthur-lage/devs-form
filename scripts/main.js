const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
let developsFor = document.querySelector(".developsFor div input:checked");
const seniorityLevel = document.querySelector("#seniority");
const checkboxes = document.querySelectorAll(".technology");
const about = document.querySelector("#about");

const submitButton = document.querySelector("#submit");

const errorElement = document.querySelector("#error");
const successElement = document.querySelector("#success");

let technologiesArray = [];

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      technologiesArray.push(e.target.value);
    } else {
      technologiesArray = technologiesArray.filter(
        (tech) => tech !== e.target.value
      );
    }
  });
});

const validateEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();

  let messages = [];

  if (name.value == "" || name.value == null) {
    messages.push("Name is required");
  }

  if (surname.value == "" || surname.value == null) {
    messages.push("Surname is required");
  }

  if (email.value == "" || email.value == null) {
    messages.push("Email is required");
  }

  if (!validateEmail(email.value)) {
    messages.push("Invalid email");
  }

  if (technologiesArray.length == 0) {
    messages.push("You need to select at least 1 technology");
  }

  if (about.value == "" || about.value == null) {
    messages.push("You need to write something here!");
  }

  if (messages.length > 0) {
    errorElement.classList.add("visible");
    errorElement.innerHTML = messages.join("</br>");
    errorElement.scrollIntoView();
    return;
  } else {
    errorElement.classList.remove("visible");
  }

  developsFor = document.querySelector(".developsFor div input:checked");

  const newUser = {
    name: name.value,
    surname: surname.value,
    email: email.value,
    developsFor: developsFor.value,
    seniorityLevel: seniorityLevel.value,
    technologies: technologiesArray,
    about: about.value,
  };

  const res = await fetch(
    "https://devs-form-server-al.vercel.app/api/users/register",
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }
  );

  if (res.status != 201) {
    errorElement.classList.add("visible");
    successElement.classList.remove("visible");

    if (res.status == 409) {
      errorElement.innerHTML = "This email is already being used!";
    }

    if (res.status == 500) {
      errorElement.innerHTML = "An error occurred!";
    }

    errorElement.scrollIntoView();
  } else {
    successElement.classList.add("visible");
    errorElement.classList.remove("visible");
    successElement.innerHTML = "Dev successfully registered!";
    errorElement.scrollIntoView();
  }
});
