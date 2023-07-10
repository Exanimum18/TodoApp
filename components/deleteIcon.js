  // ***** ICONO DE BASURA *****
  const deleteIcon = () => {
    const i = document.createElement("i")
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon")
    i.addEventListener('click', deleteTask)
    return i
  }

  // *********** BORRAR LAS TASK **********
  const deleteTask = (e) => {
    const parent = e.target.parentElement;
    parent.remove();
  }
export default deleteIcon
