//getting elements
var objectiveHeading = document.querySelector('.objective-heading');
var objective = document.querySelector('.objective');
var educationHeading = document.querySelector('.education-heading');
var education = document.querySelector('.education');
var experienceHeading = document.querySelector('.workexperience-heading');
var experience = document.querySelector('.workexperience');
var skillsHeading = document.querySelector('.skill-heading');
var skills = document.querySelector('.skillslist');
var objectiveButton = document.getElementById("forobjective");
var educationButton = document.getElementById("foreducation");
var experienceButton = document.getElementById("forworkexp");
var skillsButton = document.getElementById("forskills");
var printButton = document.querySelector(".printbutton");
objectiveButton === null || objectiveButton === void 0 ? void 0 : objectiveButton.addEventListener('click', toggleObjective);
educationButton === null || educationButton === void 0 ? void 0 : educationButton.addEventListener('click', toggleEducation);
experienceButton === null || experienceButton === void 0 ? void 0 : experienceButton.addEventListener('click', toggleExperience);
skillsButton === null || skillsButton === void 0 ? void 0 : skillsButton.addEventListener('click', toggleSkills);
printButton === null || printButton === void 0 ? void 0 : printButton.addEventListener('click', printResume);
//functions
function toggleObjective() {
    // objectiveHeading.style.display=objectiveHeading.style.display==='none'?"block":"none"
    objectiveHeading.classList.toggle('hide');
    objective.classList.toggle('hide');
    objective.animate([
        { opacity: '0' },
        { opacity: '1' }
    ], {
        duration: 500,
        iterations: 1
    });
}
function toggleEducation() {
    educationHeading.classList.toggle('hide');
    education.classList.toggle('hide');
    education.animate([
        { opacity: '0' },
        { opacity: '1' }
    ], {
        duration: 500,
        iterations: 1
    });
}
function toggleExperience() {
    experienceHeading.classList.toggle('hide');
    experience.classList.toggle('hide');
    experience.animate([
        { opacity: '0' },
        { opacity: '1' }
    ], {
        duration: 500,
        iterations: 1
    });
}
function toggleSkills() {
    skillsHeading.classList.toggle('hide');
    skills.classList.toggle('hide');
    skills.animate([
        { opacity: '0' },
        { opacity: '1' }
    ], {
        duration: 500,
        iterations: 1
    });
}
function printResume() {
    window.print();
}
