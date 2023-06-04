window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiurl = 'https://getresumecounterraj.azurewebsites.net/api/GetResumeCounter?code=sszHh8nUr1Gnj4u0wjL790JhDi71hZoK9kDMcA9-m34TAzFuICTyYg==&clientId=default';
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiurl).then(Response => {
        return Response.json()
    }).then(Response =>{
        console.log("Website called function API.");
        count = Response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}