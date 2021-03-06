// function getImagesOld(pageNumber){
//     const promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
//     return promise
// }

function getImages(pageNumber){
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
    return promise.then((response)=>{
        return response.data;
    });
}
function getTasks(){
    const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=5345235&count=30`);
    return promise.then((response)=>{
        return response.data;
    });
}

function createTask(title) {
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
        widgetId: 5345235,
        title: title
    });
    return promise.then((response) => {
        return response.data
    })
}
function updateTask(title) {
    const promise = axios.put(`https://repetitora.net/api/JS/Tasks`, {
        widgetId: 5345235,
        title: title
    });
    return promise.then((response) => {
        return response.data
    })
}
function deleteTask(id) {
    const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=5345235&taskId=${id}`)
    return promise.then((response) => {
        return response.data
    });
}

