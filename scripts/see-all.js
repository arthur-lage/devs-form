const mainContent = document.querySelector("main")

let page = 1
let rows = 5

window.addEventListener("load", async () => {
  let hasLoaded = false

  mainContent.innerHTML = "<p id='loading'>Loading...</p>"

  const res = await fetch(`https://devs-form-server-al.vercel.app/api/users/get`)
  const usersArray = await res.json()

  hasLoaded = true

  if(usersArray.length > 0 && hasLoaded) {
    let start = (page - 1) * rows
    let end = start + rows
    
    const slicedArray = usersArray.slice(start, end)
    
    buildTable(slicedArray)
    addPagination(usersArray)
    activateButton(1)
  } else { 
    mainContent.innerHTML = `<p id='no-devs'>There are no registered devs yet!</p>`
  } 
})

function buildTable(usersArray) {
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
}

function addPagination(usersArray) {
  const paginationWrapper = document.querySelector("#paginationWrapper")
  paginationNum = Math.ceil(usersArray.length / rows)

  for(let i = 1; i < paginationNum + 1; i++) {
    const button = document.createElement("button")
    button.classList.add("paginationButton")
    button.id = i
    button.innerHTML = i

    paginationWrapper.append(button)
  }

  document.querySelectorAll(".paginationButton").forEach(btn => {
    btn.addEventListener("click", () => {
      deactivateButtons()
      activateButton(btn.id)

      page = btn.id

      let start = (page - 1) * rows
      let end = start + rows
      
      const slicedArray = usersArray.slice(start, end)
      
      buildTable(slicedArray)
    })
  })
}

function deactivateButtons () {
  document.querySelectorAll(".paginationButton").forEach(btn => {
    btn.classList.remove("active")
  })
}

function activateButton (id) {
  document.querySelectorAll(".paginationButton").forEach(btn => {
    if(btn.id == id) {
      btn.classList.add("active")
    }
  })
}