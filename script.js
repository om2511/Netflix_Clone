let faqQue = document.getElementsByClassName("faq-que");
let i;

for (i = 0; i < faqQue.length; i++) {
    faqQue[i].addEventListener("click", function() {
        let queAns = this.nextElementSibling;
        let icon = this.lastElementChild;
        if (queAns.style.display === "grid") {
            queAns.style.display = "none";
        } else {
            queAns.style.display = "grid";
        }
        icon.classList.toggle("ri-close-line");
    });
}