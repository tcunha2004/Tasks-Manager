const message = document.getElementById("warning-empty-list");

export function checkEmptyList(list) {
  if (list.childElementCount === 1) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
}
