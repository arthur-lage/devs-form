const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
let developsFor = document.querySelector(".developsFor div input:checked");
const seniorityLevel = document.querySelector("#seniority");
const checkboxes = document.querySelectorAll(".technology");
const about = document.querySelector("#about");

const submitButton = document.querySelector("#submit");

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

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();

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
});
