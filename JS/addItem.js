import { checkEmptyList } from "./checkEmptyList.js";
import { createItem } from "./createItem.js";

export const taskList = document.getElementById("task-list");
const itemInputName = document.getElementById("input-item");

export function addItem(event) {
  event.preventDefault(); // Evita o recarregamento da página

  // Verifica se o campo está vazio ou contém apenas espaços
  if (itemInputName.value.trim() == "") {
    alert("Invalid Input!");
    return;
  }

  const listItem = createItem(itemInputName.value, taskList);
  taskList.appendChild(listItem);
  checkEmptyList(taskList);
}
