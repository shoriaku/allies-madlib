function makeStory() {

    var adjective1 = document.getElementById('adjective1').value;

    var noun1 = document.getElementById('noun1').value;

    var noun2 = document.getElementById('noun2').value;

    var verb1 = document.getElementById('verb1').value;

    var noun3 = document.getElementById('noun3').value;

    var verb2 = document.getElementById('verb2').value;

    var noun4 = document.getElementById('noun4').value;

    var verb3 = document.getElementById('verb3').value;

    var verb4 = document.getElementById('verb4').value;

    var noun5 = document.getElementById('noun5').value;

    // Set title of story.
    var title = "Crazy Lady and Her Job";



    // Build story.
    var story = " Today a " + adjective1 + " woman named " + noun1 +
    " came to our school to talk to us about her " + noun2 + ". She said the most important skill you need to know to do her job is to be able to " + verb1 +
     " around " + noun3 + ". She said it was easy for her to learn her job because she loved " + verb2 +
     "--and that helps a lot! If you're considering her profession of " + noun4 +
     ", that's very important! If you get too distracted " + verb3 +
     " in that situation so you won't have to " + verb4 + " next to the " + noun5;

    // Display story.
    document.getElementById('story').innerHTML = story;
    document.getElementById('title').innerHTML = title;

    var x = document.getElementById("instru");
       if (x.style.display === "none") {
           x.style.display = "block";
       } else {
           x.style.display = "none";
       }
}
