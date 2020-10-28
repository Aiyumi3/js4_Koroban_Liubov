function task5() {

    let color = document.getElementById('t1').value;
    let size = document.getElementById('t2').value.split(' ');
    let radius = document.getElementById('t3').value;

    document.getElementById('circ').style.fill = color;
    document.getElementById('svg').style.height = size[0];
    document.getElementById('svg').style.width = size[1];
    document.getElementById('circ').setAttribute('r', radius);


}