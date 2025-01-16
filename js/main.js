const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datime", thisYear)
year.textContent = thisYear