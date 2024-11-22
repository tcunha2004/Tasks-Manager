import { checkEmptyList } from "./checkEmptyList.js";
import { deleteItem } from "./deleteItem.js";
import { editItem } from "./editItem.js";

const taskListDone = document.getElementById("task-list-done");

export function createItem(itemInputName, taskList) {
  // Cria os elementos necessários
  const listItem = document.createElement("li");
  const containerItem = document.createElement("div");
  const containerItemName = document.createElement("div");
  const checkBox = document.createElement("input");
  const itemName = document.createElement("p");
  const containerButtons = document.createElement("div");
  const deleteButton = document.createElement("button");
  const deleteImage = document.createElement("img");
  const editButton = document.createElement("button");
  const editImage = document.createElement("img");
  const itemDate = document.createElement("p");

  // Adiciona as classes CSS
  containerItem.classList.add("item");
  containerItemName.classList.add("item-name-container");
  itemName.classList.add("item-name");
  containerButtons.classList.add("item-edit-container");
  deleteButton.classList.add("item-edit-button");
  deleteImage.classList.add("item-edit-img");
  editButton.classList.add("item-edit-button");
  editImage.classList.add("item-edit-img");
  itemDate.classList.add("item-date");

  // Monta a estrutura HTML
  listItem.appendChild(containerItem);
  containerItem.appendChild(containerItemName);
  containerItemName.appendChild(checkBox);
  containerItemName.appendChild(itemName);
  containerItem.appendChild(containerButtons);
  containerButtons.appendChild(deleteButton);
  deleteButton.appendChild(deleteImage);
  containerButtons.appendChild(editButton);
  editButton.appendChild(editImage);
  listItem.appendChild(itemDate);

  // Configurações dos elementos
  checkBox.type = "checkbox";
  itemName.innerHTML = itemInputName.trim();
  containerItemName.style.width = "100%";

  deleteImage.src = "https://cdn-icons-png.flaticon.com/512/1214/1214428.png";
  deleteImage.alt = "delete";
  editImage.src =
    "https://www.clipartmax.com/png/middle/121-1212376_edit-comments-sign-up-icon-png.png";
  editImage.alt = "edit";

  // Funcao especifica do JS pra data e hora (bem interessante)
  itemDate.innerHTML = `${new Date().toLocaleDateString("en-US", {
    weekday: "long",
  })} (${new Date().toLocaleDateString()}) at ${new Date().toLocaleTimeString(
    "en-US",
    { hour: "numeric", minute: "numeric" }
  )}`;

  // Adiciona eventos ao checkbox
  checkBox.addEventListener("click", () => {
    if (checkBox.checked) {
      listItem.classList.add("checked");
      taskListDone.appendChild(listItem);
      checkEmptyList(taskList);

      // Coordinates of CheckBox
      const positioning = checkBox.getBoundingClientRect();
      const x = positioning.left / window.innerWidth;
      const y = positioning.top / window.innerHeight;

      console.log(x);
      console.log(y);
      //animation
      confetti({
        particleCount: 70,
        spread: 50,
        origin: { x: x, y: y },
        scalar: 0.7,
      });
    } else {
      listItem.classList.remove("checked");
      taskList.appendChild(listItem);
      checkEmptyList(taskList);
    }
  });

  deleteButton.addEventListener("click", () => deleteItem(listItem));
  editButton.addEventListener("click", () => editItem(itemName, editButton));

  return listItem;
}
