document.addEventListener("DOMContentLoaded", () => {
    // Inject Navbar
    const navPlaceholder = document.getElementById("navbar");
    if (navPlaceholder) {
        fetch("navbar.html")
            .then(res => res.text())
            .then(data => navPlaceholder.innerHTML = data);
    }

    // Inject Footer
    const footerPlaceholder = document.getElementById("footer");
    if (footerPlaceholder) {
        fetch("footer.html")
            .then(res => res.text())
            .then(data => footerPlaceholder.innerHTML = data);
    }
});
