// ***** ICONO DE CHECK *****

const checkComplete = () => {
  const i = document.createElement("i")
  i.classList.add("far", "fa-check-square", "icon")
  i.addEventListener("click", completeTask)
  return i
}

// ***** CAMBIAR EL ESTADO DEL CHECK *****
const completeTask = (e) => {
  const element = e.target // donde se le da click
  element.classList.toggle("fas")
  element.classList.toggle("completeIcon")
  element.classList.toggle("far")
}

export default checkComplete;
