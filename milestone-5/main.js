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
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span> ${user_name}</span></p>
    <p><b>Email:</b><span> ${email}</span></p>
    <p><b>Phone:</b><span> ${phone}</span></p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Work Experience</h3>
    <p>${workExperience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
  `;
    // display the resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHtml;
    }
    else {
        console.log('Error: resumeDisplay element not found');
    }
});
const generateresumeBtn = document.getElementById('Btn');
const shareablelinkContainer = document.getElementById('shareable-link-container');
const downloadButton = document.getElementById('download-pdf');
downloadButton.addEventListener('click', () => {
    form.style.display = "none";
    shareablelinkContainer.style.display = "none";
    window.print();
});
const shareablelink = document.getElementById('shareable-link');
shareablelink.addEventListener('click', () => {
});
shareablelinkContainer.style.display = "none";
generateresumeBtn.addEventListener('click', () => {
    shareablelinkContainer.style.display = "block";
});
