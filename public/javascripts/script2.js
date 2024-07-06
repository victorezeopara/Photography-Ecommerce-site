document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("chatbot-toggle");
  const chatPopup = document.getElementById("chatbot-popup");
  const openChat = toggleButton.querySelector(".open-chat");
  const closeChat = toggleButton.querySelector(".close-chat");

  toggleButton.addEventListener("click", function () {
    if (chatPopup.style.display === "none" || chatPopup.style.display === "") {
      chatPopup.style.display = "block";
      openChat.style.display = "none";
      closeChat.style.display = "block";
    } else {
      chatPopup.style.display = "none";
      openChat.style.display = "block";
      closeChat.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".photographer-card");

  card.addEventListener("mousemove", function (e) {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    this.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

  card.addEventListener("mouseenter", function () {
    this.style.transition = "none";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transition = "transform 0.5s ease";
    this.style.transform = "rotateY(0deg) rotateX(0deg)";
  });
});
