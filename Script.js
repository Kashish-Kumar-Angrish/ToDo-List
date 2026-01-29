const INPUTFIELD = document.getElementById("inputfield");
const LISTCONTAINER = document.getElementById("list-container");
const btn = document.getElementById("add");


btn.addEventListener("click", function(){
    if(INPUTFIELD.value === ""){
        alert("Please enter a task of something");   
    }else{
        let task = document.createElement("li");
        task.innerHTML = INPUTFIELD.value;
        LISTCONTAINER.appendChild(task);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        task.appendChild(span);

    }
    INPUTFIELD.value = "";
}

);

/*LISTCONTAINER.addEventListener("click", function(e){
    if(e.target.tagName === "li"){
        e.target.classlist.toggle("Checked");
        console.log("object")
    }
    else if(e.target.tagName === "span"){
        e.target.parentelement.remove();
        console.log("object")
    }
}, false);*/
LISTCONTAINER.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("Checked")
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
})
