
const dialog = document.getElementById("orderDialog");
const form = document.getElementById("orderForm");
const closeButton = document.getElementById("closeDialog");
const selectedProduct = document.getElementById("selectedProduct");
const formMessage = document.getElementById("formMessage");

document.querySelectorAll(".order-button").forEach(button => {
    button.addEventListener("click", () => {
        form.reset();
        formMessage.textContent = "";

        selectedProduct.value = button.dataset.product;
        document.getElementById("orderTopic").value = "order";

        dialog.showModal();
    });
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

dialog.addEventListener("click", event => {
    if (event.target === dialog) {
        dialog.close();
    }
});

form.addEventListener("submit", event => {
    event.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    formMessage.textContent = "Форма успешно отправлена!";
    form.reset();
});
