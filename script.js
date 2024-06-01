var input = document.getElementById("input")
var list = document.getElementById("listContainer")


function addTask() {
    // console.log("hello")
    if(input.value === ''){  // agr hamari input ke andr value empty toh alert shhow kre
        alert('please fill the task')
    }

    else{
        //ek list bnyngy block scope ke andr he km krega, jo hum task likhe woh input ki value ke andr aaye , jo humne ul bnyi thi uske andr he list bnyngy
        var task = document.createElement("li") 
        task.textContent = input.value
        list.appendChild(task)   

        // ek or create element bnyngy X emoji ka
        var span = document.createElement("span")
        span.textContent = '\u00D7';
        task.appendChild(span)

    }
    input.value = '' //text likhne ke baad empty hojaye
}

list.addEventListener('click', (el)=>{
    if(el.target.tagName == 'LI'){
        el.target.classList.toggle('checked')
    }
    else if(el.target.tagName == 'SPAN'){
        el.target.parentElement.remove()
    }
})

// addTask()