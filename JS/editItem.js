export function editItem(name, editButton) {
  const input = document.createElement("input");
  input.type = "text";
  if (name.innerHTML == '"Untitled"') {
    input.value = "";
  } else {
    input.value = name.innerHTML;
  }

  name.replaceWith(input);
  input.focus();

  input.addEventListener("keydown", handleInput);
  input.addEventListener("blur", handleInput);

  function handleInput(event) {
    if (event.key === "Enter" || event.type === "blur") {
      const newName = document.createElement("p");
      if (input.value.trim() == "") {
        newName.innerHTML = '"Untitled"';
        input.replaceWith(newName);
      } else {
        newName.innerHTML = input.value;
        input.replaceWith(newName);
      }

      newName.classList.add("item-name");
      // make editable again
      editButton.addEventListener("click", () => {
        editItem(newName, editButton);
      });
    }
  }
}
