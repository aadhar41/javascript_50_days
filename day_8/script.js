const labels = document.querySelectorAll(".form-control label");
const inputs = document.querySelectorAll(".input");
const buttons = document.querySelectorAll(".button");

labels.forEach((label) => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, i) => `<span style="transition-delay:${i * 50}ms">${letter}</span>`)
        .join('');
});
