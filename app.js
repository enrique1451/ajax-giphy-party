const form = document.querySelector('form');
const form2 = document.querySelector('form2') 
const searchInput = document.querySelector('#searchTerm');
const imgDiv = document.querySelector('.images-container');
console.log('i am here');


form.addEventListener('click', async function(e) {
    e.preventDefault();
    console.log('reload prevented');
    
    let searchTerm = searchInput.value; //text entered 
    

    const response = await axios.get('http://api.giphy.com/v1/gifs/search', { params: 
        {q: searchTerm, api_key: '9xOl32M5BH9q5wX91YMyXYslzMeGYUqk'}
    });  
    
    searchInput.value = '';
    console.log(response);  
    return appendGif(response);       
});

form2.addEventListener('click', function(e){
    e.preventDefault();
    if(imgDiv.hasChildNodes) {
        imgDiv.remove('img');
    }
    return false; 
})



function appendGif(response) {
    //const img = document.createElement('img'); 
    const dataArrays = response.data.data; //data arrays from response
    const totalResults = dataArrays.length; //length of data arrays (50)
    let random = Math.floor(Math.random() * totalResults); //random number selected from length of array
    let newGif = document.createElement('img'); //new element created in DOM
    if (totalResults) {        
        newGif.src = dataArrays[random].images.original.url; 
    };
    imgDiv.appendChild(newGif);
    return totalResults; 
};









//9xOl32M5BH9q5wX91YMyXYslzMeGYUqk