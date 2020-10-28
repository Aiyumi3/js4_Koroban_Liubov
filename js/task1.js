function task1() {
    const arrWords = (prompt('enter some words through space wich includes one number 1-9  : ', ' ')).split(' ');
    document.getElementById('task1').innerHTML = sortByNum(arrWords);

}
function sortByNum(arr) {
    let el0, el1, el2, el3, el4, el5, el6, el7, el8;
    let ar = [];
    el0 = arr.find(item => item.includes(1));
    el1 = arr.find(item => item.includes(2));
    el2 = arr.find(item => item.includes(3));
    el3 = arr.find(item => item.includes(4));
    el4 = arr.find(item => item.includes(5));
    el5 = arr.find(item => item.includes(6));
    el6 = arr.find(item => item.includes(7));
    el7 = arr.find(item => item.includes(8));
    el8 = arr.find(item => item.includes(9));

    ar =[el0, el1, el2, el3, el4, el5, el6, el7, el8].join(' ');

    return JSON.stringify(ar);
}
