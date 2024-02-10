console.log('app.js loaded');

/**
 * IIFE to insert nav bar at the top of each page
 */
$(function () {
    let navBar = `<div class="navigation">
	                <nav class="nav">
		                <a class="nav-link active" href="index.html">Home</a>
		                <a class="nav-link" href="slideshow.html">Slideshow</a>
		                <a class="nav-link disabled" id="username" href="#"></a>
		                <a class="nav-link" href="form.html">Form</a>
	                </nav>
                </div>`;
    // Replace the nav-holder
    $("#nav-holder").replaceWith(navBar);
});

/**
 * Function to add styling to all links on the page
 */
$(function () {
    $("a").addClass("fancy-link");
});

/**
 * Function to demo adding content with .text() and .html()
 */
$(function () {
    // Create a paragraph and add text with html()
    let text = "It is one of his best works!";
    let newP = $("<p></p>").html(text);
    $("#content-div").append(newP);

    // Add text with .text() and test when "very excited" is in a strong tag
    newP.text("I am very excited for the opening of the new adaptation of his work.").append($("<strong></strong>").text(" Very excited!"));
});

/**
 * Function to demo adding toggle to button
 */
$(function () {
    // Complete the function
    $("#toggleButton").click(function () {
        $("#parentDiv p").each(function () {
            if ($(this).hasClass("toggleHide")) {
                $(this).removeClass("toggleHide").addClass("toggleShow");
            } else {
                $(this).removeClass("toggleShow").addClass("toggleHide");
            }
        });
    });
});

// If the submit button is on the page
if ($("#btnRegSubmit").length) {
    $("#btnRegSubmit").click(function (e) {
        e.preventDefault(); // Prevent the default submit action

        // Assuming User class exists and has a constructor and displayUser method
        // let user = new User(firstName, lastName, username, email, password);

        console.log(`UserDetails: ${user.displayUser()}`);

        // Validate inputs here
        // For example: validateFirstName(firstName);
    });
}

// If reset button is present
if ($("#btnReset").length) {
    $("#btnReset").click(function () {
        // Clear out all error message paragraphs
        $("p.error").text("");
    });
}

// Slideshow
if ($(".gallery").length) {
    (function handleGalleryRotation() {
        let images = [
            "./images/portraits/portrait-01.jpg",
            // Add the rest of your image paths here
        ];
        let index = 0;
        setInterval(function () {
            let galleryImage = $(".gallery img");
            index = (index + 1) % images.length; // Cycle through images
            galleryImage.fadeOut(function () {
                $(this).attr("src", images[index]).fadeIn();
            });
        }, 3000); // Adjust time as needed
    })();
}

