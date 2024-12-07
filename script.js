//Create a New Note
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");
//Save as Text
const textarea = document.querySelector("textarea"),
fileNameInput = document.querySelector(".file-name input"),
selectMenu = document.querySelector(".save-as select"),
saveBtn = document.querySelector(".save-btn");


function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let container = document.createElement("div");
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    container.className = "Notes-Input";
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "img/delete.png";
    container.appendChild(inputBox);
    container.appendChild(img);
    notesContainer.appendChild(container);
})
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();  
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
//Ends

//Save as Text
selectMenu.addEventListener("change", ()=>{
    let selectOption = selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerText = `Save As ${selectOption.split(" ")[0]} File`;
});

saveBtn.addEventListener("click", ()=>{
    const blob = new Blob([textarea.value], {type: selectMenu.value});
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = fileNameInput.value;
    link.href = fileUrl;
    link.click();
})
//Ends

function create(){
    var val=document.getElementById("cbtn").innerText;
    if(val==="Notes"){
    document.getElementById("notectn").style.display="block";
    document.getElementById("wrapper").style.display="none";
    display = 1;
    document.getElementById("cbtn").innerText="Create Notes";
    }
}

let display = 1;
function hide(){
    var val=document.getElementById("hide").innerText;
    if(display === 1){
        document.getElementById("notectn").style.display="none";
        document.getElementById("wrapper").style.display="block";
        display = 0;
        document.getElementById("cbtn").innerText="Notes";
    }
}

document.addEventListener('keypress', function(event){
    if(display === 0){
        document.getElementById('textarea').focus();
    }
});


var menuList =  document.getElementById("menuList");
menuList.style.maxHeight = "0px";
function togglemenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "130px"
    } else {
        menuList.style.maxHeight = "0px"
    }
}
