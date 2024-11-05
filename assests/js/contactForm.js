const contactForm = document.querySelector("#contactForm");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const url = e.target.action;
    const formData = new FormData(contactForm);
    // console.log(formData);
    localStorage.setItem("formData", formData);

    fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors"
    })
        .then(() => {
            // window.location.href = "/"
            alert("Message Sent");
        })
        .catch((err) => alert(`Error : ${err}, Please try again`));
})