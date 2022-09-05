window.addEventListener('load', (event) => {
    console.log('ready');
});

const accordion_panel = document.querySelectorAll(".accordion__panel");

accordion_panel.forEach((a_panel) => {
    a_panel.addEventListener("click", () => {
        a_panel.classList.toggle("panel-open");
    });
});