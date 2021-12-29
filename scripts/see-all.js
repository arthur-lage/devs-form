const mainContent = document.querySelector("main")

window.addEventListener("load", async () => {
  let hasLoaded = false

  mainContent.innerHTML = "<p id='loading'>Loading...</p>"

  const res = await fetch(`https://devs-form-server-al.vercel.app/api/users/get`)
  const usersArray = await res.json()

  hasLoaded = true

  if(usersArray.length > 0 && hasLoaded) {
    mainContent.innerHTML = 
    `
      <table id="users-table">
      <thead>
          <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Develops for</th>
              <th>Seniority</th>
              <th>Technologies</th>
          </tr>
      </thead>
      <tbody></tbody>
      </table>
    `

    const usersTableBody = document.querySelector("#users-table tbody")

    usersArray.forEach((user) => {
      const newRow = usersTableBody.insertRow()
      const newCellName = newRow.insertCell()
      const newCellSurname = newRow.insertCell()
      const newCellEmail = newRow.insertCell()
      const newCellDevelopsFor = newRow.insertCell()
      const newCellSeniorityLevel = newRow.insertCell()
      const newCellTechnologies = newRow.insertCell()
  
      const nameTxt = document.createTextNode(user.name)
      const surnameTxt = document.createTextNode(user.surname)
      const emailTxt = document.createTextNode(user.email)
      const developsForTxt = document.createTextNode(user.developsFor.toUpperCase())
      const seniorityLevelTxt = document.createTextNode(user.seniorityLevel.toUpperCase())
      const technologiesTxt = document.createTextNode(user.technologies.join(" / ").toUpperCase())
  
      newCellName.appendChild(nameTxt)
      newCellSurname.appendChild(surnameTxt)
      newCellEmail.appendChild(emailTxt)
      newCellDevelopsFor.appendChild(developsForTxt)
      newCellSeniorityLevel.appendChild(seniorityLevelTxt)
      newCellTechnologies.appendChild(technologiesTxt)
    })
  } else { 
    mainContent.innerHTML = `<p id='no-devs'>There are no registered devs yet!</p>`
  } 
})