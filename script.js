let text = document.getElementById("text")
let btn = document.getElementById("submit")
let ulList = document.getElementById("ulList")



function handleClick() {
  let list = document.createElement("li");
  let delet = document.createElement("button");

  // delet style
  delet.innerHTML =
    '<i class="fa-solid fa-trash-can" style="color: rgb(1, 1, 1);"></i>';
  delet.style.fontSize = " 12px ";
  list.style.display = "flex";
  list.style.justifyContent = "space-between";
  delet.style.color = "white";
  delet.style.marginLeft = "10px";

  list.style.paddingRight = "10px";
  list.style.paddingLeft = "10px";
  list.style.height = "35px";
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

//   btnEite click abble 
  btnEite.onclick = function () {
   
  }


  list.innerHTML = text.value;
  ulList.appendChild(list);
  list.appendChild(deletAndEite);
  deletAndEite.appendChild(btnEite);
  deletAndEite.appendChild(delet);
}
