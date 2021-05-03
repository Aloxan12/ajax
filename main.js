


const resultBlock = document.querySelector('#result')
const pageNumber = document.querySelector('#page-number')
const clickMeButton = document.querySelector('#click-me')
clickMeButton.addEventListener('click', ()=>{
    const promise = getImages(pageNumber.value, onDataReceive);
    promise.then(onDataReceive)
})


function onDataReceive(array){
    array.forEach(el=>{
        const img = document.createElement('img');
        img.src = el.thumbnail
        document.querySelector('#result').appendChild(img)
    })
}
