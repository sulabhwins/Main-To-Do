const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("li-con");

function addtask() {
  if (inputbox.value === "") {
    alert("add some task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputbox.value = "";
}

listcontainer.addEventListener("click", function (e) {    
  if (e.target.tagName.toLowerCase() === "li") {    
    e.target.classList.toggle("checked");
  } else if (e.target.tagName.toLowerCase() === "span") {
    e.target.parentElement.remove();
  }
}, false);

