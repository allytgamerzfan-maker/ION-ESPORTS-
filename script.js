/*=====================================
      ION ESPORTS - SCRIPT PART 1
=====================================*/

// Loader
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1200);

});

// Sticky Navbar

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Active Menu

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.clientHeight;

if(scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// Fade Up Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".game-card,.tournament-card,.stat,.about-content,.contact-box").forEach(el=>{

observer.observe(el);

});


/*=====================================
      COUNTER ANIMATION
=====================================*/

const counters = document.querySelectorAll(".stat h2");

const speed = 200;

const runCounter = () => {

    counters.forEach(counter => {

        const targetText = counter.innerText;

        const target = parseInt(targetText.replace(/[^0-9]/g,""));

        let count = 0;

        const update = () => {

            const increment = Math.ceil(target / speed);

            if(count < target){

                count += increment;

                if(targetText.includes("K")){

                    counter.innerText = count + "K+";

                }else if(targetText.includes("L")){

                    counter.innerText = "₹" + count + "L+";

                }else{

                    counter.innerText = count + "+";

                }

                requestAnimationFrame(update);

            }else{

                counter.innerText = targetText;

            }

        };

        update();

    });

};

const statSection = document.querySelector(".stats");

const counterObserver = new IntersectionObserver((entries)=>{

    if(entries[0].isIntersecting){

        runCounter();

        counterObserver.disconnect();

    }

});

counterObserver.observe(statSection);

/*=====================================
        BUTTON RIPPLE EFFECT
=====================================*/

document.querySelectorAll(".btn1,.btn2,.card-btn,.join-btn").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";

ripple.style.top=(e.clientY-rect.top-size/2)+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/*=====================================
        HERO TEXT EFFECT
=====================================*/

const heroTitle=document.querySelector(".hero-content h2");

if(heroTitle){

heroTitle.animate(

[

{transform:"translateY(20px)",opacity:0},

{transform:"translateY(0)",opacity:1}

],

{

duration:1200,

fill:"forwards"

}

);

}

/*=====================================
      SCROLL PROGRESS BAR
=====================================*/

const progress=document.createElement("div");

progress.id="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const progressHeight=(window.pageYOffset/total)*100;

progress.style.width=progressHeight+"%";

});


/*=====================================
        BACK TO TOP BUTTON
=====================================*/

const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:100px;
right:25px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#00d9ff;
color:#000;
font-size:24px;
font-weight:bold;
cursor:pointer;
display:none;
box-shadow:0 0 20px #00d9ff;
z-index:9999;
transition:.3s;
`;

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*=====================================
        CARD TILT EFFECT
=====================================*/

document.querySelectorAll(".game-card,.tournament-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*16;

const rotateX=((y/rect.height)-0.5)*-16;

card.style.transform=
`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

});

});

/*=====================================
      MOUSE GLOW EFFECT
=====================================*/

const glow=document.createElement("div");

glow.id="cursorGlow";

document.body.appendChild(glow);

glow.style.cssText=`
position:fixed;
width:180px;
height:180px;
background:radial-gradient(circle,#00d9ff55,transparent 70%);
border-radius:50%;
pointer-events:none;
transform:translate(-50%,-50%);
z-index:0;
`;

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

/*=====================================
        RANDOM FLOATING PARTICLES
=====================================*/

for(let i=0;i<25;i++){

const particle=document.createElement("span");

particle.style.position="fixed";

particle.style.width="4px";

particle.style.height="4px";

particle.style.background="#00d9ff";

particle.style.borderRadius="50%";

particle.style.left=Math.random()*100+"vw";

particle.style.top=Math.random()*100+"vh";

particle.style.opacity=Math.random();

particle.style.boxShadow="0 0 15px #00d9ff";

particle.style.animation=
`float ${6+Math.random()*8}s linear infinite`;

document.body.appendChild(particle);

}

/*=====================================
      WEBSITE LOADED
=====================================*/

console.log("ION ESPORTS Premium Website Loaded Successfully 🚀");
