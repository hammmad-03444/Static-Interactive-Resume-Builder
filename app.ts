//getting elements
let objectiveHeading=document.querySelector('.objective-heading') as HTMLHeadingElement
let objective=document.querySelector('.objective') as HTMLDivElement
let educationHeading=document.querySelector('.education-heading') as HTMLHeadingElement
let education=document.querySelector('.education') as HTMLDivElement
let experienceHeading=document.querySelector('.workexperience-heading') as HTMLHeadingElement
let experience=document.querySelector('.workexperience') as HTMLDivElement
let skillsHeading=document.querySelector('.skill-heading')as HTMLHeadingElement
let skills=document.querySelector('.skillslist') as HTMLDivElement
let objectiveButton=document.getElementById("forobjective")
let educationButton=document.getElementById("foreducation")
let experienceButton=document.getElementById("forworkexp")
let skillsButton=document.getElementById("forskills")
let printButton=document.querySelector(".printbutton")

objectiveButton?.addEventListener('click',toggleObjective)
educationButton?.addEventListener('click', toggleEducation)
experienceButton?.addEventListener('click', toggleExperience)
skillsButton?.addEventListener('click', toggleSkills)
printButton?.addEventListener('click', printResume)
//functions
function toggleObjective(){
    // objectiveHeading.style.display=objectiveHeading.style.display==='none'?"block":"none"
    objectiveHeading.classList.toggle('hide')
    objective.classList.toggle('hide')
    objective.animate([
        {opacity:'0'},
        {opacity:'1'}
    ],{
        duration:500,
        iterations:1
    }
    )
}
function toggleEducation(){
    educationHeading.classList.toggle('hide')
    education.classList.toggle('hide')
    education.animate([
        {opacity:'0'},
        {opacity:'1'}
    ],{
        duration:500,
        iterations:1
    }
    )
    
}
function toggleExperience(){
    experienceHeading.classList.toggle('hide')
    experience.classList.toggle('hide')
    experience.animate([
        {opacity:'0'},
        {opacity:'1'}
    ],{
        duration:500,
        iterations:1
    }
    )
    
}
function toggleSkills(){
    skillsHeading.classList.toggle('hide')
    skills.classList.toggle('hide')
    skills.animate([
        {opacity:'0'},
        {opacity:'1'}
    ],{
        duration:500,
        iterations:1
    }
    )
}
function printResume(){
    window.print()
}


