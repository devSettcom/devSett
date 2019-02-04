function openSlideMenu(){
    document.getElementById('side-menu').style.width = '250px';
}
function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0';
}
function changeColor(){
    document.getElementById('one').style.stroke = '#84DCCF';
    document.getElementById('two').style.stroke = '#84DCCF';
    document.getElementById('three').style.stroke = '#84DCCF';
}
function revertColor(){
    document.getElementById('one').style.stroke = '#312F2F';
    document.getElementById('two').style.stroke = '#312F2F';
    document.getElementById('three').style.stroke = '#312F2F';
}