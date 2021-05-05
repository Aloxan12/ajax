


const resultBlock = document.querySelector('#result')
const pageNumber = document.querySelector('#page-number')
const clickMeButton = document.querySelector('#click-me')
const getTaskButton = document.querySelector('#get-task')

deleteTask( "755acc34-048e-4f09-be48-361411e5d4b2");

clickMeButton.addEventListener('click', ()=>{
    const promise = getImages(pageNumber.value, onDataReceive);
    promise.then(onDataReceive)
})
getTaskButton.addEventListener('click', ()=>{
    const promise = getTasks(onTasksReceive);
    promise.then(onTasksReceive)
})

createTask('Learn axios').then((data)=>{
    console.log(data)
})

function onTasksReceive(tasks){
    const result = document.querySelector('#task-result')
    result.innerHTML = '';
    tasks.forEach(task=>{
        const li = document.createElement('li');
        li.innerHTML = task.title
        result.appendChild(li)
    })
}
function onDataReceive(array){
    array.forEach(el=>{
        const img = document.createElement('img');
        img.src = el.thumbnail
        document.querySelector('#result').appendChild(img)
    })
}
