document.getElementById('fetchComicBtn').addEventListener('click', async () => {
    try {
        const email = document.getElementById('inno-email').value;
        console.log(email)
        const urlParams = new URLSearchParams({ email: email })
        const apiUrl = `https://fwd.innopolis.university/api/hw2?${urlParams.toString()}`

        const response = await fetch(apiUrl);
        const comicID = await response.text();

        

        const urlJokeParams = new URLSearchParams({ id: comicID })

        const comicUrl = `https://fwd.innopolis.university/api/comic?${urlJokeParams.toString()}`

        const jokeResponse = await fetch(comicUrl);
        const jokeData = await jokeResponse.json()

        const image = document.getElementById('comicImage');
        const title = document.getElementById('comicTitle');
        const date = document.getElementById('comicDate');

        image.src = jokeData.img;
        image.alt = jokeData.alt;
        title.textContent = jokeData.safe_title;

        const comicDate = new Date(
            parseInt(jokeData.year),
            parseInt(jokeData.month) - 1, 
            parseInt(jokeData.day) 
          );
        date.textContent = comicDate.toLocaleDateString();


    } catch (error) {
        console.error('Error fetching and displaying the comic:', error);
    }
});