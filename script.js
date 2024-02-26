const inputBox = document.querySelector("#text-box");
const btn = document.querySelector("button");
const unoList = document.querySelector("#list")

btn.addEventListener("click", () => {

  // const taskText = inputBox.value;
  
  if(inputBox.value === ""){
    alert("please write first")
  } else {
    let li = document.createElement("li");
    li.innerText = inputBox.value;
    unoList.appendChild(li);
    inputBox.value = "";
    saveData();


    const span = document.createElement("span");
    span.innerHTML = '<i class="material-icons">close</i>';
    li.appendChild(span)
    

    const closeBtn = span.querySelector("i");

    closeBtn.addEventListener("click", () => {
    unoList.removeChild(li);
    saveData();
    });

    li.addEventListener("click", () => {
    li.style.opacity = "0.3";
    li.style.textDecoration = "line-through"
    saveData();

    });

    li.addEventListener("dblclick", () => {
      li.style.opacity = "1";
      // li.style.onselectstart = "false"
      li.style.userSelect = "none"
      li.style.textDecoration = "none"  
      saveData();   
    });       
  };
});

function saveData() {
  localStorage.setItem("data", unoList.innerHTML);
}

function showData() {
  unoList.innerHTML = localStorage.getItem("data")
}

showData();

function reset() {
  localStorage.clear();
  showData();
  
}
 


