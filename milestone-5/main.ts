const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;

// handle the submission of form
form.addEventListener('submit', (event: Event) => {
  event.preventDefault(); // prevent the page from reloading

  // get input values inside the submit event listener
  const user_name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLInputElement).value;
  const workExperience = (document.getElementById('experience') as HTMLInputElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value;

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
  } else {
    console.log('Error: resumeDisplay element not found');
  }
});

const generateresumeBtn = document.getElementById('Btn') as HTMLButtonElement
const shareablelinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement
const downloadButton = document.getElementById('download-pdf') as HTMLButtonElement

downloadButton.addEventListener('click', () => {
  form.style.display = "none"
  shareablelinkContainer.style.display = "none"
  window.print()
})

const shareablelink = document.getElementById('shareable-link') as HTMLAnchorElement

shareablelink.addEventListener('click', () => {
})

shareablelinkContainer.style.display = "none"

generateresumeBtn.addEventListener('click', ()=>{
  shareablelinkContainer.style.display = "block"
})
