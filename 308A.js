async function fetchData(){
    try {
        const search = document.getElementById("Search").value.toLowerCase();
        const response = await fetch("https://api.jikan.moe/v4/anime")
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
}
