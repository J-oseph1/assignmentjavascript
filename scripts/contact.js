// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
const submitButton = document.getElementById("submit-button");
const contactPage = document.getElementById("contact-page");

submitButton.addEventListener("click", (event) => {
    event.preventDefault();  // Prevent form submission
    
    // Clear the contact form and display the thank you message
    contactPage.innerHTML = "";  // Clear the content
    const thankYouMessage = document.createElement("p");
    thankYouMessage.textContent = "Thank you for your message";
    thankYouMessage.style.fontSize = "24px";
    thankYouMessage.style.textAlign = "center";  // Optional: Center the message
    contactPage.appendChild(thankYouMessage);  // Append the message to the contact page
});
