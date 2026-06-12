async function getData(){
    try {
        const url = "https://api.jikan.moe/v4/anime/";
        const response = await fetch(`url/${animeName}`)
            .then(res => res.json())
            .then(data => console.log(data));
        const animeName = document.getElementById("animeName").value.toLowerCase();
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }
        // const data = await response.json()
        // console.log(data);
        const animeImage = data.image
        const imgElement = document.getElementById("animeImage");
        imgElement.src = animeImage;
        imgElement.style.display = "block";
    }
    catch (error) {
        console.error(error);
    }
}
getData()
// get/anime/{id}/full
// data.images

// const url = "https://api.jikan.moe/v4/anime/";
// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data));