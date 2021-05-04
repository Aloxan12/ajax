


const resultBlock = document.querySelector('#result')
const pageNumber = document.querySelector('#page-number')
const clickMeButton = document.querySelector('#click-me')
const getTaskButton = document.querySelector('#get-task')
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
    tasks.forEach(task=>{
        const li = document.createElement('li');
        li.innerHTML = task
        document.querySelector('#task-result').appendChild(li)
    })
}
function onDataReceive(array){
    array.forEach(el=>{
        const img = document.createElement('img');
        img.src = el.thumbnail
        document.querySelector('#result').appendChild(img)
    })
}
