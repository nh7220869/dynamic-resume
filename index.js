var form = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resume-output');
// Output sections
var nameOutput = document.getElementById('name-output');
var emailOutput = document.getElementById('email-output');
var phoneOutput = document.getElementById('phone-output');
var profilePicOutput = document.getElementById('profile-pic-output');
// Dynamic sections
var educationList = document.getElementById('education-list');
var workExperienceList = document.getElementById('work-experience-list');
var skillsList = document.getElementById('skills-list');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Personal Information
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var profilePic = document.getElementById('profile-pic').files[0];
    nameOutput.textContent = "Name: ".concat(name);
    emailOutput.textContent = "Email: ".concat(email);
    phoneOutput.textContent = "Phone: ".concat(phone);
    // Display the profile picture
    if (profilePic) {
        var reader = new FileReader();
        reader.onload = function (e) {
            profilePicOutput.src = e.target.result;
        };
        reader.readAsDataURL(profilePic);
    }
    // Education
    educationList.innerHTML = '';
    var education = document.getElementById('education').value;
    education.split(/\r?\n|,/).forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item.trim();
        educationList.appendChild(li);
    });
    // Work Experience
    workExperienceList.innerHTML = '';
    var workExperience = document.getElementById('work-experience').value;
    workExperience.split(/\r?\n|,/).forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item.trim();
        workExperienceList.appendChild(li);
    });
    // Skills
    skillsList.innerHTML = '';
    var skills = document.getElementById('skills').value;
    skills.split(/\r?\n|,/).forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item.trim();
        skillsList.appendChild(li);
    });
    // Show the resume
    resumeOutput.style.display = 'block'; // Ensure the resume section is visible
});
