// let skills = document.querySelector("#skills");
// skills.classList.add("hide");
// let projects = document.querySelector("#projects");
// projects.classList.add("hide");
// let contact = document.querySelector("#contact");
// contact.classList.add("hide");

let clickAbout = document.querySelector("#clickAbout");
clickAbout.addEventListener("click", displayAbout);
function displayAbout() {
  let about = document.querySelector("#about");
  about.classList.remove("hide");
  skills.classList.add("hide");
  projects.classList.add("hide");
  contact.classList.add("hide");
}

let clickSkills = document.querySelector("#clickSkills");
clickSkills.addEventListener("click", displaySkills);
function displaySkills() {
  about.classList.add("hide");
  projects.classList.add("hide");
  contact.classList.add("hide");
  let skills = document.querySelector("#skills");
  skills.classList.remove("hide");
  
  skills.innerHTML = `
    <i class="fab fa-html5"><span>HTML</span></i>
    <i class="fab fa-css3-alt">CSS</i>
    <br/>
    <i class="fab fa-js-square">JavaScript</i>
    <i class="fab fa-react">ReactJS</i>
    <br/>
    <i class="fab fa-php">PHP</i>
    <i class="fas fa-database">mySQL</i>
    <i class="fab fa-angular">AngularJS</i>
    <br/>
    <i class="fab fa-wordpress">WordPress</i>
    <i class="fab fa-git"></i>
    <i class="fas fa-cogs">API</i>
    `;
  skills.classList.add("i-skills");
}

let clickProjects = document.querySelector("#clickProjects");
clickProjects.addEventListener("click", displayProjects);
function displayProjects() {
  // let projects = document.querySelector("#projects");
  about.classList.add("hide");
  skills.classList.add("hide");
  contact.classList.add("hide");
  let projects = document.querySelector("#projects");
  projects.classList.remove("hide");

  projects.innerHTML = `
    
    <i class="fas fa-angle-double-left" id="arrow-left"></i>
    <img src="img/law-office.png" alt="project-law-office" class="project-img" />
    <i class="fas fa-angle-double-right" id="arrow-right"></i>
  `;

  let arrowRight = document.querySelector("#arrow-right");
  arrowRight.addEventListener("click", slideImageRight);

  let images = new Array();
  images[0] = "img/law-office.png";
  images[1] = "img/food-blog-wordpress.png";
  images[2] = "img/food-blog-2.png";
  images[3] = "img/fitnesscenter-php.png";
  images[4] = "img/fitnesscenter-php-2.png";
  images[5] = "img/travel-agency-php.png";
  images[6] = "img/travel-agency-php-2.png";
  images[7] = "img/weather-app-js.png";
  images[8] = "img/weather-app-react.png";

  let i = 1;
  let z = 8;

  function slideImageRight() {
    if (i > 8)
        i = 0;
    let img = document.querySelector(".project-img");
    img.src = images[i];
    i++;
  }

  let arrowLeft = document.querySelector("#arrow-left");
  arrowLeft.addEventListener("click", slideImageLeft);
  
  function slideImageLeft() {
    if (z < 0)
        z = 8;
    let img = document.querySelector(".project-img");
    img.src = images[z];
    z--;
  }

}

// let clickContact = document.querySelector("#clickContact");
// clickContact.addEventListener("click", displayContact);
// function displayContact() {
//   // let contact = document.querySelector("#contact");
//   about.classList.add("hide");
//   skills.classList.add("hide");
//   projects.classList.add("hide");
//   let contact = document.querySelector("#contact");
//   contact.classList.remove("hide");
//   contact.innerHTML = "<h1>contact</h1>";
// }