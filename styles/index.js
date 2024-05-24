const oi =document.querySelector(".wrapper"),
qrInput = oi.querySelector(".form input"),
generateBtn =oi.querySelector(".form button"),
qrImg = oi.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Gerando um Qr Code..."
    qrImg.src = `https://qrtag.net/api/qr_transparent.png" alt="qrtag${qrValue}`;
    qrImg.addEventListener("load", () => {
        generateBtn.innerText = "Gerar Qr Code"
        oi.classList.add("active");
    });
   
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        oi.classList.remove("active");
    }
});