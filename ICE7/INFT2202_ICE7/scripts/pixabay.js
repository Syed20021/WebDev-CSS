/**
 * Completed ICE7
 * Name: Syed Hassnat Ali
 * Date: 3/8/2024
 */
console.log('pixabay.js loaded');

// API Key for Pixabay
const PIXABAY_API_KEY = ''; // normally we would load a key through the .env file
// URL for Pixbay request
const PIXABAY_URL = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&image_type=photo`;
// Constant for image count
const IMAGE_COUNT = 10; // Example constant value for the number of images

/**
 * makePosts
 * Creates posts for pictures.
 * @param {Array} images - Array of image objects from Pixabay
 */
const makePosts = (images) => {
    images.forEach(image => {
        const postHtml = `
        <div class="card" style="width: 18rem;">
            <img src="${image.webformatURL}" class="card-img-top" alt="Image">
            <div class="card-body">
                <h5 class="card-title">Photo by ${image.user}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        `;
        $('.posts-container').append(postHtml);
    });
};

/**
 * getPictures
 * Retrieves the pictures from Pixabay API
 */
const getPictures = () => {
    fetch(`${PIXABAY_URL}&per_page=${IMAGE_COUNT}`)
        .then(response => response.json())
        .then(data => {
            if (data.hits && data.hits.length > 0) {
                makePosts(data.hits);
            } else {
                console.log('No images found');
            }
        })
        .catch(error => {
            console.error('Error fetching images:', error);
        });
};

getPictures();