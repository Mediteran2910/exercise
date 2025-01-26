const contactForm = document.querySelector("form");
const nameInput = document.getElementById("senderName");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");
const formButton = document.getElementById("form-button");

const respondMessage = async (response, responseData) => {
  const messageElement = document.createElement("p");
  if (response.ok && responseData.success) {
    messageElement.textContent =
      responseData.message || "Message sent succesfully";
  } else if (responseData) {
    messageElement.textContent =
      responseData.message || "Failed to send message.";
  } else {
    messageElement.textContent = "An unexpected error occurred.";
  }
  contactForm.appendChild(messageElement);

  setTimeout(() => {
    contactForm.removeChild(messageElement);
  }, 3500);
};

contactForm.addEventListener("submit", async (evt) => {
  evt.preventDefault();

  let infoObj = {
    senderName: nameInput.value,
    subject: "Zepralak question",
    text: `Hi, you have new message from: ${nameInput.value},
    you can contact me on ${emailInput.value} ,
    message:${message.value}`,
    html: `<p><b>You have new message from:</b> ${nameInput.value}</p>, 
    <p> <b>You can contact me on:</b> ${emailInput.value} </p> ,
    <p><b>Message:${message.value} </b></p>`,
  };

  try {
    const response = await fetch(
      "https://mediteran2910.github.io/exercise/contact.html",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(infoObj),
      }
    );
    const responseData = await response.json();
    respondMessage(response, responseData);
  } catch (error) {
    console.log("Error:", error);
    respondMessage({
      success: false,
      message: "An error occurred while sending the message",
    });
  }
});
