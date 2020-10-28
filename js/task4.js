function task4() {
    const arrWords = (prompt('enter some words through space  : ', ' ')).split(' ');

    let firstChar = arrWords.reduce((acc, item) => [...acc, ...item[0]], []);
    document.getElementById('task4').innerHTML = JSON.stringify(firstChar);

    document.getElementById('task4_2').innerHTML = arrWords.reduce(item => {
        let a = [];
        for (let i = 0; i < arrWords.length; i++) {
            if(arrWords[i][0].toLowerCase() == 'a') a.push(arrWords[i]);
        }
        return JSON.stringify(a);
    });

}

