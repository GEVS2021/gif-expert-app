export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=q5GiNsf98gEidVjTtDb5tEWBw37morcx&q=${category}`;
    const res = await fetch(url);
    const { data=[] } = await res.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    console.log("gifs", gifs);
    return gifs;
}