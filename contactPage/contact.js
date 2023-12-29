document.addEventListener('DOMContentLoaded', function() {
    const showEmailResult = async (e) => { 
        e.preventDefault();
        const result = document.getElementById("result");
        let response = await getEmailResult();
        if(response.status == 200) {
            result.innerHTML = "Email successfully sent!";
        } else {
            result.innerHTML = "Error; email did not send";
        }
    };

    const getEmailResult = async (e) => {
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.getElementById("result");
    result.innerHTML = "Sending..."

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        });
        return response;
    }
    catch(error) {
        console.log(error);
        document.getElementById("result").innerHTML = "Error; email did not send";
    }
};

const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.onsubmit = showEmailResult;
    }

});
