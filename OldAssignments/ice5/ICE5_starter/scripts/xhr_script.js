console.log('xhr_script.js loaded');

// URLs for different data types from JSONPlaceholder
let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

// Instantiate the XMLHttpRequest object with the new keyword
let xhr = new XMLHttpRequest();
// Create a callback function to fire when the onreadystatechange happens
xhr.onreadystatechange = function() {
    // Check that the state is done
    if (xhr.readyState === 4) {
        // Check if the request was successful
        if (xhr.status === 200) {
            // Turn into JSON
            let data = JSON.parse(xhr.responseText);
            // Console log to see what we have
            console.log(data);
            // Assuming there's an img and figcaption in your HTML to update
            // Update the 1st image if data and an image URL exists
            if (data[0] && data[0].url) {
                document.querySelector('img:first-of-type').src = data[0].url;
                document.querySelector('figcaption:first-of-type').innerText = data[0].title;
            }
            // Update the 2nd image, similar check as above
            if (data[1] && data[1].url) {
                document.querySelectorAll('img')[1].src = data[1].url;
                document.querySelectorAll('figcaption')[1].innerText = data[1].title;
            }
        } else {
            // Send error message
            console.error('Error fetching data: ', xhr.statusText);
        }
    }
};

// Use the .open() method to configure the object
xhr.open('GET', url_posts, true); // Example using url_posts

// Use the .send() method to send the request
xhr.send();
