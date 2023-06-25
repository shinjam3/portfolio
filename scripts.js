const skillsCard = document.getElementById("skills-card-container");
const experienceCard = document.getElementById("experience-card-container");
const educationCard = document.getElementById("education-card-container");
const contactCard = document.getElementById("contact-card-container");

function scrollToAboutSection() {
  window.scrollTo(0, innerHeight);
}

function scrollToProjectsSection() {
  window.scrollTo(0, innerHeight*2);
}

function showCard(arg) {
  if (arg === "skills") skillsCard.style.display = "flex";
  else if (arg === "experience") experienceCard.style.display = "flex";
  else if (arg === "education") educationCard.style.display = "flex";
  else contactCard.style.display = "flex";
}

function closeCard(arg) {
  if (arg === "skills") skillsCard.style.display = "none";
  else if (arg === "experience") experienceCard.style.display = "none";
  else if (arg === "education") educationCard.style.display = "none";
  else contactCard.style.display = "none";
}