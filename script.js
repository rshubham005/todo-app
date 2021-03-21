   // Taking user input 
let arr =[]
let final_list=[]
let task= document.getElementById("todo")
let list = document.getElementById("task-list")
function addtask()  
{
if(task.value!="")
 arr.push(task.value)
 task.value=""
 show(arr)
}
//display functionality
function show(array)
{
final_list=[]

for(let i=0;i<array.length;i++)
{
    final_list.push(`<div class="col-md-4">
     <div class="task"  id="${i}">
         <h1 class="task-head">${array[i]}</h1>
         <button class="task-btn1" onclick="done(${i})" >&#10004</button>
         <button class="task-btn2" onclick="delete_ele(${i})">&#10008</button>
     </div>
     </div>`)
}

list.innerHTML=`${final_list}`
}
//done functionality
 function done(id)
 {
     let eleid= document.getElementById(id)
    eleid.style.background = "black"
    eleid.style.color="white"
    eleid.style.opacity="0.7"
 }

 //delete functionality

 function delete_ele(id)
 {
    if(id>=-1)
    {
       final_list.splice(id,1)
       arr.splice(id,1) 
    }

    list.innerHTML=`${final_list}`
 }
 