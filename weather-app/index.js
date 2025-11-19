async function getWeather(){
    const response = await fetch("");

    if (!response.ok){
        throw new Error("Could not find the response");
    }

    const data = response.json();
}