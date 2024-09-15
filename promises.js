document.getElementById('promiseButton').addEventListener('click', function () {
    // Message which should be dispaly during fetching process
    document.getElementById('result').innerText = "Loading...";

    fetchDataWithPromise()
        .then(data => {
            let posts = data.posts.map(post => post.title).join("<br>");
            document.getElementById('result').innerHTML = posts;
        })
        .catch(error => document.getElementById('result').innerText = error);
});

 // Function to fetch and display the fetched data
function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        let timeout = setTimeout(() => reject('Operation timed out'), 5000);

        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => {
                clearTimeout(timeout);
                resolve(data);
            })
            .catch(err => reject('Failed to fetch data'));
    });
}