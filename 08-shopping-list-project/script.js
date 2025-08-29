const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");

const addItem = (e) => {
  e.preventDefault();
  const newItem = itemInput.value;
  if (newItem === "" || newItem.length < 3) {
    alert("Please add and item");
    return;
  }
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  const button = createButton("remove-item btn-link text-red");

  li.appendChild(button);
  itemList.appendChild(li);

  itemInput.value = "";
};

function createButton(className) {
  const button = document.createElement("button");
  button.className = className;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function createIcon(className) {
  const icon = document.createElement("i");
  icon.className = className;
  return icon;
}

// Event Listeners
itemForm.addEventListener("submit", addItem);

/* <li>
  Apples
  <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
  </button>
</li>; */
