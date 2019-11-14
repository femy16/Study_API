let xhr= new  XMLHttpRequest();
function displayNicely(apiData){
    apiData = JSON.parse(apiData);
    let htmlString =`<strong>Name:</strong> ${apiData.name} <br />`;
    htmlString +=  `<strong>Eye Colour:</strong> ${apiData.eye_color} <br />`
    document.getElementById("returnedData").innerHTML=htmlString;
    htmlString += `<strong>Hair Colour:</strong> ${apiData.hair_color} <br />`
    document.getElementById("returnedData").innerHTML=htmlString;
    htmlString += `<strong>Gender:</strong> ${apiData.gender} <br />`
    document.getElementById("returnedData").innerHTML=htmlString;
    
}
xhr.onreadystatechange= function(){
    if (this.readyState == 4 && this.status == 200){
        displayNicely(this.responseText);
    }
}
xhr.open("GET","https://swapi.co/api/people/10/");
xhr.send();