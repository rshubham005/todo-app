   // Taking user input 
let arr =[]
let task= document.getElementById("todo")
let list = document.getElementById("task-list")
function addtask()  
{
 arr.push(task.value)
 task.value=""
 show(arr)
}
//display functionality
function show(array)
{
let final_list=[]

for(let i=0;i<array.length;i++)
{
    final_list.push(`<div class="col-md-4">
     <div class="task">
         <h1 class="task-head">${array[i]}</h1>
         <button class="task-btn1">&#10004</button>
         <button class="task-btn2">&#10008</button>
     </div>
     </div>`)
}

list.innerHTML=`${final_list}`
}
// Delete functionality