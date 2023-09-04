document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const senderNameInput = document.getElementById("senderName");
  const senderEmailInput = document.getElementById("senderEmail");
  const subjectInput = document.getElementById("subject");
  const commentInput = document.getElementById("comment");
  const submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", async function () {
    const formData = {
      recieverEmail: "Your Email Address", // Replace with your email address
      senderName: senderNameInput.value,
      senderEmail: senderEmailInput.value,
      subject: subjectInput.value,
      comment: commentInput.value,
      API_KEY: "Your API Key", // Replace with your API key
    };

    try {
      const response = await fetch(
        "https://portfolio-email-service.azurewebsites.net/submit-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  });
});
