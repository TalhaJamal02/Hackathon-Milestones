"use strict";
const form = document.getElementById('resume-form');
const resumeDisplay = document.getElementById('resume-display');
// handle the submission of form
form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the page from reloading
    // get input values inside the submit event listener
    const user_name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const workExperience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    // generate resume dynamically
    const resumeHtml = `
    <h2><b>Editable Resume</b></h2> <!-- Corrected closing tag -->
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true"> ${user_name}</span></p>
    <p><b>Email:</b><span contenteditable="true"> ${email}</span></p>
    <p><b>Phone:</b><span contenteditable="true"> ${phone}</span></p>

    <h3>Education</h3>
    <p contenteditable="true">${education}</p>

    <h3>Work Experience</h3>
    <p contenteditable="true">${workExperience}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
  `;
    // display the resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHtml;
    }
    else {
        console.log('Error: resumeDisplay element not found');
    }
});
