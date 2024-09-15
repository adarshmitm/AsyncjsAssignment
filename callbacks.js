document.getElementById('callbackButton').addEventListener('click', function () {
    // Callback Function call
    displayMessageAfterDelay(5000, function() {
        document.getElementById('result').innerText = "Callback executed after 5 seconds";
    });
    // Fetch data function call
    fetchDataAfterDelay(5000, function(data) {
        let posts = data.posts.map(post => post.title).join("<br>");
        document.getElementById('result').innerHTML = posts;
    });
});
 // Function callback function
function displayMessageAfterDelay(delay, callback) {
    setTimeout(callback, delay);
}

 // Function to fetch and display the fetched data
function fetchDataAfterDelay(delay, callback) {
    setTimeout(() => {
        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(callback)
            .catch(err => console.error(err));
    }, delay);
}