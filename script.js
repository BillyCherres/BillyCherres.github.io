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
    "BrawlStarsTeamGuide",
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


//############################# API work ################################################
const API_ENDPOINT = "https://billy-contact-api.billycodes23.workers.dev/api/contact";

contactForm.addEventListener("submit", async (e)=>{
    e.preventDefault();

    const name = document.querySelector("#contactName").value.trim();
    const email = document.querySelector("#contactEmail").value.trim();
    const message = document.querySelector("#contactMessage").value.trim();
    const gotcha = document.querySelector("#gotcha").value.trim(); // honeypot
    const contactForm = document.querySelector("#contactForm");
    const contactStatus = document.querySelector("#contactStatus");
    const contactSendBtn = document.querySelector("#contactSendBtn");


    if(!name || !email || !message){
        contactStatus.textContent = "Please fill out all fields";
        return;
    }

    contactSendBtn.disabled = true;
    contactSendBtn.textContent = "Sending...";
    contactStatus.textContent = "";

    try{
        const res = await fetch(API_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                message,
                gotcha, // bots get caught here
              }),
        });
        const data = await res.json();
        if (!res.ok || !data.ok) {
            throw new Error(data.error || "Request failed");
          }
        contactStatus.textContent =
            "Message sent successfully! I’ll get back to you soon.";
        contactForm.reset();
    } catch (err) {
        console.error(err);
        contactStatus.textContent =
        "Couldn’t send message right now. Please try again later.";
    } finally {
        contactSendBtn.disabled = false;
        contactSendBtn.textContent = "Send";
    }
});

// ===== Resume Chatbot Frontend =====
const CHAT_ENDPOINT = "https://resumereviewai.billycodes23.workers.dev/api/chat";

const chatFab = document.querySelector("#chatFab");
const chatWidget = document.querySelector("#chatWidget");
const chatClose = document.querySelector("#chatClose");
const chatForm = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatInput");
const chatMessages = document.querySelector("#chatMessages");
const quickBtns = document.querySelectorAll(".chatQuickBtn");

function toggleChat(open) {
    if (!chatWidget) return;
  
    // If open is passed: open/close explicitly
    if (typeof open === "boolean") {
      chatWidget.classList.toggle("chat-hidden", !open);
      if (open) setTimeout(() => chatInput?.focus(), 50);
      return;
    }
  
    // Otherwise: toggle
    const isHidden = chatWidget.classList.contains("chat-hidden");
    chatWidget.classList.toggle("chat-hidden", !isHidden);
    if (isHidden) setTimeout(() => chatInput?.focus(), 50);
  }

function addMessage(text, who) {
  const div = document.createElement("div");
  div.className = `chatMsg ${who === "user" ? "chatUser" : "chatBot"}`;
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return div;
}

async function askAssistant(message) {
  const res = await fetch(CHAT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  // Worker always returns JSON in our setup
  const data = await res.json().catch(() => ({}));
  return data;
}

chatFab?.addEventListener("click", () => toggleChat(true));
chatClose?.addEventListener("click", () => toggleChat(false));

quickBtns.forEach(btn => {
  btn.addEventListener("click", async () => {
    const q = btn.getAttribute("data-q");
    if (!q) return;
    toggleChat(true);
    chatInput.value = q;
    chatForm.requestSubmit();
  });
});

// Optional: greet once
let greeted = false;
function maybeGreet() {
  if (greeted) return;
  greeted = true;
  addMessage("Hey — ask me anything about my experiences.", "bot");
}
chatFab?.addEventListener("click", maybeGreet);

chatForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const msg = (chatInput.value || "").trim();
  if (!msg) return;

  addMessage(msg, "user");
  chatInput.value = "";

  const loadingNode = addMessage("…", "bot");

  try {
    const data = await askAssistant(msg);
    loadingNode.textContent = data.reply || "No reply received.";
  } catch (err) {
    loadingNode.textContent = "Couldn’t reach the assistant. Please try again.";
  }
});
