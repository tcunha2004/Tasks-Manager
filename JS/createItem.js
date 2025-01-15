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
    "data:image/png;base64,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";
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
      const y = positioning.top / document.documentElement.scrollHeight;

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
