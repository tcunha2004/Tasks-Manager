import { taskList } from "./addItem.js";
import { checkEmptyList } from "./checkEmptyList.js";

export function deleteItem(item) {
  if (confirm("Are you sure you want to delete the item?")) item.remove();

  checkEmptyList(taskList);
}
