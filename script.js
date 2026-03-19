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

const projectSections = [
  {
    label: "Low Level Engineering",
    projects: [
      {
        name: "FCB Series",
        description: "Linux-based controller interfaces for Sony FCB security block cameras using C and Bash. Includes motion-detection-triggered spot focusing and menu-driven remote camera control.",
        image: "https://www.activesilicon.com/wp-content/uploads/PRODUCT-AS-Sony-FCB-EV7520A-camera-800x532.jpg",
        link: "https://github.com/BillyCherres/fcbSeries",
      },
      {
        name: "Sony Alpha Series",
        description: "Camera control software for Sony Alpha mirrorless systems, delivered as reference example code alongside official Sony firmware for customer engineers.",
        image: "https://www.pictureline.com/cdn/shop/products/Alpha-a7-IV-Digital-Camera-Body-1.jpg?v=1704236721",
        link: "https://github.com/BillyCherres/SonyAlphaSeries",
      },
    ]
  },
  {
    label: "Full Stack Web",
    projects: [
      {
        name: "Notes App",
        description: "Full-stack notes application with a REST API backend (notes-api) and React frontend, deployed on Vercel.",
        image: "https://api.microlink.io/?url=https://notes-web-1.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
        link: "https://notes-web-1.vercel.app/",
      },
      {
        name: "Stat2Games — Grinnell College",
        description: "Contributed to this platform for teaching statistics through game data, developed during my time at Grinnell College.",
        image: "https://api.microlink.io/?url=https://stat2games.sites.grinnell.edu/&screenshot=true&meta=false&embed=screenshot.url",
        link: "https://stat2games.sites.grinnell.edu/",
      },
    ]
  }
];

function loadProjects() {
  projectsStatus.textContent = "";
  projectsContainer.innerHTML = projectSections.map(section => `
    <p class="project-section-label">${section.label}</p>
    <div class="projects-grid">
      ${section.projects.map(p => `
        <div class="project-item">
          <a href="${p.link}" target="_blank" rel="noopener noreferrer">
            <img class="project-preview" src="${p.image}" alt="${p.name} preview" />
          </a>
          <a class="project-title" href="${p.link}" target="_blank" rel="noopener noreferrer">${p.name}</a>
          <p class="project-desc">${p.description}</p>
        </div>
      `).join("")}
    </div>
  `).join("");
}

loadProjects();
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
