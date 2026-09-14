// ================================
// Innovation Academy JavaScript
// ================================

// Loader

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.transition = "1s";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 2000);

});

// Admission Form

const admissionForm = document.getElementById("admissionForm");

if (admissionForm) {

    admissionForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert(
            "🎉 Admission Form Submitted Successfully!\n\nThank you for choosing Innovation Academy."
        );

        admissionForm.reset();

    });

}

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// Scroll Animation

const revealElements = document.querySelectorAll(
    ".about-card, .class-box, .result-card, .manager-card, .teacher-card"
);

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0px)";

        }

    });

}

revealElements.forEach((item) => {

    item.style.opacity = "0";

    item.style.transform = "translateY(60px)";

    item.style.transition = "1s";

});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

// Welcome Message

setTimeout(() => {

    console.log(
        "Welcome To Innovation Academy Website"
    );

}, 1000);

// Live Clock

const clock = document.createElement("div");

clock.style.position = "fixed";
clock.style.top = "90px";
clock.style.right = "20px";
clock.style.padding = "10px 15px";
clock.style.background = "rgba(0,0,0,0.7)";
clock.style.color = "#00ff88";
clock.style.borderRadius = "10px";
clock.style.fontWeight = "bold";
clock.style.zIndex = "999";

document.body.appendChild(clock);

function updateClock() {

    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    clock.innerHTML =
        h + ":" + m + ":" + s;

}

setInterval(updateClock, 1000);

updateClock();

// RGB Cursor Effect

const cursor = document.createElement("div");

cursor.style.width = "20px";
cursor.style.height = "20px";
cursor.style.borderRadius = "50%";
cursor.style.position = "fixed";
cursor.style.pointerEvents = "none";
cursor.style.zIndex = "99999";

cursor.style.background =
    "linear-gradient(red, yellow, cyan, magenta)";

cursor.style.boxShadow =
    "0 0 20px red, 0 0 40px cyan";

document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

// Hero Text Animation

const heroTitle =
document.querySelector(".hero-left h1");

if (heroTitle) {

    let scale = 1;

    setInterval(() => {

        scale = scale === 1 ? 1.05 : 1;

        heroTitle.style.transform =
            `scale(${scale})`;

        heroTitle.style.transition =
            "0.8s";

    }, 1200);

}

// Floating Notification

setTimeout(() => {

    const note =
    document.createElement("div");

    note.innerHTML =
    "🎓 Admissions Open For 2026";

    note.style.position = "fixed";
    note.style.bottom = "100px";
    note.style.left = "20px";
    note.style.background = "#00ff88";
    note.style.color = "black";
    note.style.padding = "15px 20px";
    note.style.borderRadius = "10px";
    note.style.fontWeight = "bold";
    note.style.zIndex = "999";

    document.body.appendChild(note);

    setTimeout(() => {

        note.remove();

    }, 7000);

}, 4000);

// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const count =
        +counter.innerText;

        const increment =
        target / 100;

        if (count < target) {

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(
                updateCounter,
                20
            );

        } else {

            counter.innerText =
            target;

        }

    };

    updateCounter();

});

// Button Sound Effect

const buttons =
document.querySelectorAll(
".btn, button"
);

buttons.forEach(btn => {

    btn.addEventListener(
    "mouseenter",
    () => {

        btn.style.transform =
        "scale(1.05)";

    });

    btn.addEventListener(
    "mouseleave",
    () => {

        btn.style.transform =
        "scale(1)";

    });

});

// Academy Welcome Popup

setTimeout(() => {

    alert(
`Welcome to Innovation Academy

Principal: Mr. Abdulmoes

Admissions Open

Play Group To 1st Year

Contact:
+92 309 4183467`
    );

}, 3000);