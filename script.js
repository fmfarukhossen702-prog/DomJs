let text = document.getElementById("text")
let btn = document.getElementById("submit")
let ulList = document.getElementById("ulList")



const handleClick = () => {

    if (text.value){

        let list1 = document.createElement("li")
        list1.innerHTML = text.value
        ulList.appendChild(list1)

        let list2 = document.createElement("li")
        list2.innerHTML = text.value
        ulList.appendChild(list2)

        let list3 = document.createElement("li")
        list3.innerHTML = text.value
        ulList.appendChild(list3)
        
    }
}