var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
// handle the submission of form
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent the page from reloading
    // get input values inside the submit event listener
    var user_name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // generate resume dynamically
    var resumeHtml = "\n    <h2><b>Resume</b></h2> <!-- Corrected closing tag -->\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> ".concat(user_name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Phone:</b> ").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Work Experience</h3>\n    <p>").concat(workExperience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n  ");
    // display the resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHtml;
    }
    else {
        console.log('Error: resumeDisplay element not found');
    }
});
