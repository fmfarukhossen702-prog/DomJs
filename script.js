let text = document.getElementById("text")
let btn = document.getElementById("submit")
let ulList = document.getElementById("ulList")
// let relode  = document.getElementById("relode")


// relode.style.display = "none";
// function inputClick () {
//   relode.style.display = "block";
// }


function handleClick() {
  let list = document.createElement("li");
  let delet = document.createElement("button");

  // delet style
  delet.innerHTML =
    '<i class="fa-solid fa-trash-can" style="color: rgb(0, 0, 0);"></i>';
  delet.style.fontSize = " 12px ";
  delet.style.color = "white";
//   delet.style.backgroundColor = "black";
  delet.style.borderRadius = "15px"
  delet.style.border = "1px solid white"
  delet.style.padding = "3px"
  list.style.display = "flex";
  list.style.justifyContent = "space-between";
  delet.style.marginLeft = "10px";

  list.style.paddingRight = "10px";
  list.style.paddingLeft = "10px";
  // list.style.height = "35px";
  list.style.border = "1px solid white";
  list.style.alignItems = "center";
  list.style.borderRadius = "10px";
  list.style.marginBottom = "10px"

  delet.onclick = function () {
    list.remove();
  };
  let deletAndEite = document.createElement("div");

  let btnEite = document.createElement("button");
  btnEite.innerHTML = "Eite";

  // btnEite style
  btnEite.style.fontSize = "12px";
  btnEite.style.border = "1px solid white";
  btnEite.style.paddingTop = "3px";
  btnEite.style.paddingBottom = "3px";
  btnEite.style.paddingRight = "8px";
  btnEite.style.paddingLeft = "8px";
  btnEite.style.borderRadius = "5px";
  btnEite.style.backgroundColor = "black";
  deletAndEite.style.display = "flex";
  deletAndEite.style.alignItems = "center";
  deletAndEite.style.padding = "5px";
  

//   btnEite click abble 
  btnEite.onclick = function () {
   
  }


  list.innerHTML = text.value;
  ulList.appendChild(list);
  list.appendChild(deletAndEite);
  deletAndEite.appendChild(btnEite);
  deletAndEite.appendChild(delet);  
  text.value = "";
}


