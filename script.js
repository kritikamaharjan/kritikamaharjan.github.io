function downloadResume() {
  const link = document.createElement("a");
  link.href = "Kritika_Maharjan_Resume.pdf";
  link.download = "Kritika_Maharjan_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}
