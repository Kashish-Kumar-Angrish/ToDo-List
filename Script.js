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

LISTCONTAINER.addEventListener("click", function(event){
    if(event.target.tagname === "li"){
        event.target.classlist.toggle("checked");
    }else if(event.target.tagname === "span"){
        event.target.parentelement.remove();
    }
}, false);

let cla = document.getElementById("inpdiv");
console.log(cla.classlist);
