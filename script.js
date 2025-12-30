//#######################This is code for a random counter#################################
// let increment = document.querySelector("#btn1");
// let decrement = document.querySelector("#btn2");
// let buttonMessage = document.querySelector("#message");
// let counter = 0;

// increment.addEventListener("click", () => {
//     counter++;
//     buttonMessage.textContent = counter;
// });

// decrement.addEventListener("click", () => {
//     counter--;
//     buttonMessage.textContent = counter;
// });
//###########################################################################################

//####################### Home page ############################################

let myName = document.querySelector("#name");
let myExpTitle = document.querySelector("#experienceTitle");
let myExpDate = document.querySelector("#experienceDate");
let myExpLocation = document.querySelector("#experienceLocation");
let myExpDescription = document.querySelector("#experienceDescription");
let myExpSkills = document.querySelector("#experienceSkills");
let nextExp = document.querySelector("#btnExpN");
let prevExp = document.querySelector("#btnExpP");
let resume = document.querySelector("#resume");
let projectsContainer = document.querySelector("#projects");
let projectsStatus = document.querySelector("#projectsStatus");


let user = {
    name: "William Cherres",
    exp1: ["Sony Electronics — Software Development Intern","June 2024 – August 2024","San Diego", "During my internship at Sony Electronics, I worked on camera control software for the FCB security camera and Sony Alpha systems. I built Linux-based controller interfaces using C and Bash scripting, implemented motion-detection-triggered spot focusing, and developed menu-driven tools for remotely managing advanced camera features. My code was delivered alongside official firmware as reference example code for customers, giving me experience writing production-quality tools that engineers actually rely on.", "C,Bash, Linux"],
    exp2: ["Flexera — Software Engineering Intern","May 2025 – August 2025","Remote (San Diego)","At Flexera, I worked primarily with React and TypeScript building UI components for multi-tenant enterprise software. I focused on access-control features, improving how users and organizations manage permissions across Flexera’s platform. I collaborated closely with designers and backend engineers, learned best practices for reusable components, debugging, version control, and testing, and gained real experience contributing to a live product used by customers.", "React, Javascript/Typescript"],
    exp3: ["Shonda Kuipers — Website Developer","Jan 2025 - May 2025 / Aug 2025 - Dec 2025","Grinnell Iowa","As a website developer for Kuiper Shondas, I helped design and maintain the company website to improve usability, organization, and visual layout. I worked with HTML, CSS, and JavaScript to update content, create responsive pages, and ensure the site worked smoothly on desktop and mobile devices. This role helped me understand real-world client needs, communication, and maintaining an active site instead of just building projects for practice.", "HTML/CSS, PHP, MySQL"]
}

myName.textContent = user.name;


myExpTitle.textContent = user.exp1[0];
myExpDate.textContent = user.exp1[1];
myExpLocation.textContent = user.exp1[2];
myExpDescription.textContent = user.exp1[3];
myExpSkills.textContent = user.exp1[4];
nextExp.addEventListener("click", () =>{
    if(myExpTitle.textContent == user.exp1[0] ){
        myExpTitle.textContent = user.exp2[0] 
        myExpDate.textContent = user.exp2[1];
        myExpLocation.textContent = user.exp2[2];
        myExpDescription.textContent = user.exp2[3];
        myExpSkills.textContent = user.exp2[4];
    }else if(myExpTitle.textContent == user.exp2[0] ){
        myExpTitle.textContent = user.exp3[0] 
        myExpDate.textContent = user.exp3[1];
        myExpLocation.textContent = user.exp3[2];
        myExpDescription.textContent = user.exp3[3];
        myExpSkills.textContent = user.exp3[4];
    }
}); 

prevExp.addEventListener("click", () =>{
    if(myExpTitle.textContent == user.exp2[0] ){
        myExpTitle.textContent = user.exp1[0] 
        myExpDate.textContent = user.exp1[1];
        myExpLocation.textContent = user.exp1[2];
        myExpDescription.textContent = user.exp1[3];
        myExpSkills.textContent = user.exp1[4];
    }else if(myExpTitle.textContent == user.exp3[0] ){
        myExpTitle.textContent = user.exp2[0] 
        myExpDate.textContent = user.exp2[1];
        myExpLocation.textContent = user.exp2[2];
        myExpDescription.textContent = user.exp2[3];
        myExpSkills.textContent = user.exp2[4];
    }
}); 

resume.addEventListener("click", () =>{
    window.location.href = "Resume2026.pdf";
});

const pinnedRepos = [
    "BillyCherres.github.io",
    "fcbSeries",
    "SonyAlphaSeries",
    "ArtificialLifeSimulator"
  ];

async function loadGitHubProjects() {
    // Show loading state
    projectsStatus.textContent = "Loading projects...";
  
    try {
      const url = "https://api.github.com/users/billycherres/repos?sort=updated&per_page=6";
      const res = await fetch(url);
  
      if (!res.ok) {
        throw new Error(`GitHub API error: ${res.status}`);
      }
  
      const repos = await res.json();
  
      // Optional: filter out forks
      const filtered = repos.filter(
        repo => pinnedRepos.includes(repo.name)
      );
  
      // If no repos found
      if (filtered.length === 0) {
        projectsStatus.textContent = "No projects found.";
        return;
      }
  
      // Clear status once we have data
      projectsStatus.textContent = "";
  
      // Build HTML
      projectsContainer.innerHTML = filtered.map(repo => {
        const description = repo.description ? repo.description : "No description yet.";
        const language = repo.language ? repo.language : "N/A";
        const stars = repo.stargazers_count ?? 0;
        const updated = new Date(repo.updated_at).toLocaleDateString();
  
        return `
          <div class="project-item">
            <a class="project-title" href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
              ${repo.name}
            </a>
            <p class="project-desc">${description}</p>
            <p class="project-meta">
              <span>${language}</span>
              <span>★ ${stars}</span>
              <span>Updated: ${updated}</span>
            </p>
          </div>
        `;
      }).join("");
  
    } catch (err) {
      projectsStatus.textContent = "Couldn’t load projects right now.";
      projectsContainer.innerHTML = "";
      console.error(err);
    }
  }
  
  // Run it once when the page loads
  loadGitHubProjects();
//############################# End of Home Page ################################################




