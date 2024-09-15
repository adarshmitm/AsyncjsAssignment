document.getElementById('asyncButton').addEventListener('click', async function () {
    // Message which should be dispaly during fetching process
    document.getElementById('result').innerText = "Loading...";

    try {
        let data = await fetchDataAsync();
        let posts = data.posts.map(post => post.title).join("<br>");
        document.getElementById('result').innerHTML = posts;
    } catch (error) {
        document.getElementById('result').innerText = error;
    }
});

 // Function to fetch and display the fetched data
async function fetchDataAsync() {
    try {
        const response = await fetch('https://dummyjson.com/posts');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        return data;
    } catch (error) {
        throw 'Network error or timeout';
    }
}