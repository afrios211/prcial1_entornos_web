const myDiv = document.getElementById('mydiv');


myDiv.addEventListener('mouseover', () => {
    myDiv.classList.add('mouseover');
});


myDiv.addEventListener('mouseout', () => {
    myDiv.classList.remove('mouseover');
});