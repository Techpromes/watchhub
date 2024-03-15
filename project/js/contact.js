const form = document.getElementById("myForm");

function sendEmail(formData) {
    const bodyMessage = `
        Full Name: ${formData.name}<br>
        Email: ${formData.email}<br>
        Phone Number: ${formData.phone}<br>
        Name of Product: ${formData.watch}<br>
        Message: ${formData.message}
    `;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "idudupromise2@gmail.com", // 
        Password: "580800E95290FA8997598946B61E9D8D01E8",
        To: 'idudupromise2@gmail.com', 
        From: "idudupromise2@gmail.com",
        Subject: "New Form Submission",
        Body: bodyMessage,
    }).then((message) => {
        if (message == "OK") {
            Swal.fire({
                title: "Success",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        watch: document.getElementById("watch").value,
        message: document.getElementById("message").value,
    };

    sendEmail(formData);
});