function togglePost(button) {
  const fullContent = button.nextElementSibling; // Select the next sibling (the full content)

  if (fullContent.style.display === "none") {
    fullContent.style.display = "block";
    button.innerHTML = "Read Less";
  } else {
    fullContent.style.display = "none";
    button.innerHTML = "Read More";
  }
}
