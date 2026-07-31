const message = `Dear Shree,
‎
‎Happy Friendship Day! 🤍
‎
‎Thank you for being such a wonderful friend.
‎Every laugh, every conversation and every memory with you is special.
‎
‎I hope our friendship always stays strong and brings happiness into our lives.
‎
‎Stay happy, keep smiling and never change.
‎
‎— Rahul ❤️`;
‎
‎let i = 0;
‎const typing = document.getElementById("typing");
‎
‎function typeWriter() {
‎  if (i < message.length) {
‎    typing.innerHTML += message.charAt(i);
‎    i++;
‎    setTimeout(typeWriter, 45);
‎  }
‎}
‎
‎typeWriter();
‎
‎// Floating Hearts
‎setInterval(() => {
‎  const heart = document.createElement("div");
‎  heart.className = "heart";
‎  heart.innerHTML = ["🤍","💖","💕","✨"][Math.floor(Math.random()*4)];
‎  heart.style.left = Math.random() * 100 + "vw";
‎  heart.style.animationDuration = (4 + Math.random() * 4) + "s";
‎  document.body.appendChild(heart);
‎
‎  setTimeout(() => {
‎    heart.remove();
‎  }, 8000);
‎
‎}, 500);
‎
‎// Surprise Button
‎document.getElementById("surprise").onclick = function () {
‎
‎  const music = document.getElementById("music");
‎  music.play().catch(()=>{});
‎
‎  for(let i=0;i<180;i++){
‎
‎    const c=document.createElement("div");
‎    c.className="confetti";
‎
‎    c.style.left=Math.random()*100+"vw";
‎    c.style.top="-20px";
‎
‎    c.style.background=
‎      `hsl(${Math.random()*360},100%,50%)`;
‎
‎    document.body.appendChild(c);
‎
‎    setTimeout(()=>{
‎      c.remove();
‎    },3000);
‎  }
‎
‎  alert("🤍 Happy Friendship Day Shree! 🤍");
‎};
‎