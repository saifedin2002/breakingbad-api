const api = "https://www.breakingbadapi.com/api/characters";
const container = document.querySelector("#container")

async function get (){
    try{
        response = await fetch(api)
    data = await response.json();
    printData(data)
    }catch(e){
        console.log("Erorr:" ,e.message)
    }
   
}

function printData(data){
   const mainHeader = document.querySelector("#main-header")   
   mainHeader.innerHTML += `<select onchange="getCharachter(this.value)">
   <option>please select</option>
   ${data.map(charachter => `<option>${charachter.name}</option>`)}
   </select>`
}
async function getCharachter(name){
    if(name!=="please select"){
        const response = await fetch(`${api}?name=${name}`)
    const data = await response.json()
    container.innerHTML = `
    <h2> ${data[0].name} (${data[0].nickname})</h2>
    <h4> ${data[0].portrayed} </h4>
    <img src="${data[0].img}" width="250px">
    `
    }else{
        container.innerHTML = ``  
    }
}
get()