function downloadResume() {
  const link = document.createElement("a");
  link.href = "Kritika_Resume.pdf";
  link.download = "Kritika_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}
