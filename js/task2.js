function task2() {
    let arr = [];
    document.getElementById('task2').innerHTML = getArr(arr);
    document.getElementById('task2_2').innerHTML = checkWin(arr);
}
function getArr(arr) {

    const m = 3; // number of columns ;
    const n = 3; //number of rows ;
    for (let i = 0; i < n; i++) {
        arr[i] = [];
        for (let j = 0; j < m; j++) {
            arr[i][j] = +prompt('enter number 0(empty) or 1(X) or 2(O) : ', ' ');
        }
    }
    return JSON.stringify(arr);
}
function checkWin(arr) {

    for (let i = 0; i < 3; i++) {

           if ((arr[0][0] == 1 && arr[0][1] == 1 && arr[0][2] == 1) ||
                (arr[1][0] == 1 && arr[1][1] == 1 && arr[1][2] == 1) ||
                (arr[2][0] == 1 && arr[2][1] == 1 && arr[2][2] == 1) ||
                (arr[0][0] == 1 && arr[1][0] == 1 && arr[2][0] == 1) ||
                (arr[0][1] == 1 && arr[1][1] == 1 && arr[2][1] == 1) ||
                (arr[0][2] == 1 && arr[1][2] == 1 && arr[2][2] == 1) ||
                (arr[0][0] == 1 && arr[1][1] == 1 && arr[2][2] == 1) ||
                (arr[0][2] == 1 && arr[1][1] == 1 && arr[2][0] == 1)){

                let str = ' = 1 -> win - X ';
                return JSON.stringify(str);

            } else if ((arr[0][0] == 2 && arr[0][1] == 2 && arr[0][2] == 2) ||
               (arr[1][0] == 2 && arr[1][1] == 2 && arr[1][2] == 2) ||
               (arr[2][0] == 2 && arr[2][1] == 2 && arr[2][2] == 2) ||
               (arr[0][0] == 2 && arr[1][0] == 2 && arr[2][0] == 2) ||
               (arr[0][1] == 2 && arr[1][1] == 2 && arr[2][1] == 2) ||
               (arr[0][2] == 2 && arr[1][2] == 2 && arr[2][2] == 2) ||
               (arr[0][0] == 2 && arr[1][1] == 2 && arr[2][2] == 2) ||
               (arr[0][2] == 2 && arr[1][1] == 2 && arr[2][0] == 2)){

               let str = ' = 2 -> win - O ';
               return JSON.stringify(str);

           } else if (arr[0][0] == 0 || arr[0][1] == 0 || arr[0][2] == 0 ||
               arr[1][0] == 0 || arr[1][1] == 0 || arr[1][2] == 0 ||
               arr[2][0] == 0 || arr[2][1] == 0 || arr[2][2] == 0 ||
               arr[0][0] == 0 || arr[1][0] == 0 || arr[2][0] == 0 ||
               arr[0][1] == 0 || arr[1][1] == 0 || arr[2][1] == 0 ||
               arr[0][2] == 0 || arr[1][2] == 0 || arr[2][2] == 0 ||
               arr[0][0] == 0 || arr[1][1] == 0 || arr[2][2] == 0 ||
               arr[0][2] == 0 || arr[1][1] == 0 || arr[2][0] == 0){

               let str = ' -1, not finished ';
               return JSON.stringify(str);

           }
           else {
                return JSON.stringify(' 0, standoff ');
           }
    }
}



