
// Assume you have two columns with IDs 'left-column' and 'right-column'
// This code adds hover effects to both columns

document.addEventListener('DOMContentLoaded', () => {
    const leftCol = document.querySelector('.left');
    const rightCol = document.querySelector('.right');
    const container = document.querySelector('.container');

    if (leftCol) {
        leftCol.addEventListener('mouseenter', () => {
            container.classList.add('hover-left');
            leftCol.style.backgroundColor = '#e0f7fa'; // Light blue on hover
        });
        leftCol.addEventListener('mouseleave', () => {
            container.classList.remove('hover-left');
            leftCol.style.backgroundColor = ''; // Reset on mouse leave
        });
    }

    if (rightCol) {
        rightCol.addEventListener('mouseenter', () => {
            container.classList.add('hover-right');
            rightCol.style.backgroundColor = '#f7d2c4'; // Light orange on hover
        });
        rightCol.addEventListener('mouseleave', () => {
            container.classList.remove('hover-right');
            rightCol.style.backgroundColor = ''; // Reset on mouse leave
        });
    }
});