fetch("https://api.jikan.moe/v4/anime")
.then(response => {
    if(!response.ok){
        throw new Error("Could not fetch resource");
    }
    return response.json();
})
.then(data => console.log(data))
.catch(error => console.error(error));