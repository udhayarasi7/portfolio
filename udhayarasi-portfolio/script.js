console.log("script.js is running");

// ================= Scroll Reveal Animations =================

ScrollReveal().reveal('.hero-left', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  delay: 300
});

ScrollReveal().reveal('.hero-right', {
  origin: 'right',
  distance: '50px',
  duration: 1000,
  delay: 500
});

ScrollReveal().reveal('.navbar', {
  origin: 'top',
  distance: '20px',
  duration: 800,
  delay: 200
});

ScrollReveal().reveal('.about-img', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  delay: 200
});

ScrollReveal().reveal('.about-content', {
  origin: 'right',
  distance: '50px',
  duration: 1000,
  delay: 300
});

ScrollReveal().reveal('.contact-section', {
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 300
});


// ================= Contact Form Logic =================

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("FORM SUBMITTED");

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

   const token = localStorage.getItem("token");
 // JWT token
    if (!token) {
      alert("Token missing in browser");
      return;
    }
    try {
      

      const res = await fetch("http://127.0.0.1:7000/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
     "Authorization": `Bearer ${token}`
  },
  body: JSON.stringify({ name, email, message })
});



      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Request failed");
        return;
      }

      alert("Message sent successfully ");
      form.reset();
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  });
});
