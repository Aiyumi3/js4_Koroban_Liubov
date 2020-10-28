function task3() {
    const numMaxChairMyConf = 8;
    let arrMyConf = [];

    const strP = prompt('enter X (people) in your conf: ', ' ');
    arrMyConf = [strP, numMaxChairMyConf];

    let numChairNeed ;
    for (let i = 0; i < numMaxChairMyConf; i++ ) {
        numChairNeed = numMaxChairMyConf - strP.length;
    }
    document.getElementById('task3').innerHTML = 'my conf: ' + JSON.stringify(arrMyConf) + ', ' +
        'number of chairs required to find : ' + JSON.stringify(numChairNeed);
    let arrConfs = [];
    let arrfoundChairs = [];
    switch (numChairNeed) {
        case 0 :
            arrConfs = [[['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0];
            document.getElementById('task3_2').innerHTML = ' conf: ' + JSON.stringify(arrConfs) + '--->  ' +
                ' Game On ' ;
            break;
        case 1 :
            arrConfs = [[['XX', 2], ['XXXXX', 5]], 1];
            document.getElementById('task3_2').innerHTML = ' conf: ' + JSON.stringify(arrConfs) + '--->  ' +
                ' Not enough ' ;
            break;
        case 2 :
            arrConfs = [[['XXXX', 5], ['XXXXX', 3], ['XXX', 4]], 2];
            for (let i = 0; i < arrConfs.length; i++ ) {
                for (let j = 0; j < arrConfs[i].length - 1; j++) {
                    let numChairFind = arrConfs[i][0][1] - arrConfs[i][0][0].length;
                    let numChairFind2 = arrConfs[i][1][1] - (arrConfs[i][1][0].length - 2);
                    let numChairFind3 = arrConfs[i][2][1] - arrConfs[i][2][0].length;
                    arrfoundChairs = [numChairFind, numChairFind2, numChairFind3];
                }
            }
            document.getElementById('task3_2').innerHTML = ' conf: ' + JSON.stringify(arrConfs) + '---> ' +
                'number of found chairs : ' + JSON.stringify(arrfoundChairs);
            break;
        case 3 :
            arrConfs = [[['XXX', 2], ['XXXXX', 7],['XXXXX', 4]], 3];
            document.getElementById('task3_2').innerHTML = ' conf: ' + JSON.stringify(arrConfs) + '--->  ' +
                ' Not enough ' ;
            break;
        case 4 :
            arrConfs = [[['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4];
            for (let i = 0; i < arrConfs.length; i++ ) {
                for (let j = 0; j < arrConfs[i].length - 1; j++) {
                    //document.getElementById('task3_2').innerHTML = JSON.stringify(arrConfs[i][0]); // ['XXX', 3]
                    //document.getElementById('task3_2').innerHTML = JSON.stringify(arrConfs[i][0][1]); //3 - chairs in conf exists
                    let numChairFind = arrConfs[i][0][1] - arrConfs[i][0][0].length;
                    //document.getElementById('task3_2').innerHTML = JSON.stringify(numChairFind);
                    let numChairFind2 = arrConfs[i][1][1] - arrConfs[i][1][0].length;
                    let numChairFind3 = arrConfs[i][2][1] - arrConfs[i][2][0].length;
                    arrfoundChairs = [numChairFind, numChairFind2, numChairFind3];
                }
            }
            document.getElementById('task3_2').innerHTML = ' conf: ' + JSON.stringify(arrConfs) + '---> ' +
                'number of found chairs : ' + JSON.stringify(arrfoundChairs);
           // [0, 1, 3]
            break;
        case 5 :
            arrConfs = [[['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5];
            for (let i = 0; i < arrConfs.length; i++ ) {
                for (let j = 0; j < arrConfs[i].length - 1; j++) {
                    let numChairFind = arrConfs[i][0][1] - (arrConfs[i][0][0].length - 2);
                    let numChairFind2 = arrConfs[i][1][1] - arrConfs[i][1][0].length;
                    let numChairFind3 = arrConfs[i][2][1] - arrConfs[i][2][0].length;
                    let numChairFind4 = arrConfs[i][3][1] - arrConfs[i][3][0].length;
                    let numChairFind5 = arrConfs[i][4][1] - arrConfs[i][4][0].length;
                    arrfoundChairs = [numChairFind];
                    arrfoundChairs.push(numChairFind2);
                    arrfoundChairs.push(numChairFind3);
                    arrfoundChairs.push(numChairFind4);
                    arrfoundChairs.push(numChairFind5);
                }
            }
            document.getElementById('task3_2').innerHTML = ' conf: ' + JSON.stringify(arrConfs) + '---> ' +
                'number of found chairs : ' + JSON.stringify(arrfoundChairs);
            //[0, 0, 1, 2, 2]
            break;
        case 6 :
            arrConfs = [[['XXXX', 5], ['XXX', 3], ['X', 2], ['XXXX', 7], ['XX', 3], ['XXX', 1]], 6];
            for (let i = 0; i < arrConfs.length; i++ ) {
                for (let j = 0; j < arrConfs[i].length - 1; j++) {
                    let numChairFind = arrConfs[i][0][1] - arrConfs[i][0][0].length;
                    let numChairFind2 = arrConfs[i][1][1] - arrConfs[i][1][0].length;
                    let numChairFind3 = arrConfs[i][2][1] - arrConfs[i][2][0].length;
                    let numChairFind4 = arrConfs[i][3][1] - arrConfs[i][3][0].length;
                    let numChairFind5 = arrConfs[i][4][1] - arrConfs[i][4][0].length;
                    arrfoundChairs = [numChairFind];
                    arrfoundChairs.push(numChairFind2);
                    arrfoundChairs.push(numChairFind3);
                    arrfoundChairs.push(numChairFind4);
                    arrfoundChairs.push(numChairFind5);
                }
            }
            document.getElementById('task3_2').innerHTML = ' conf: ' + JSON.stringify(arrConfs) + '---> ' +
                'number of found chairs : ' + JSON.stringify(arrfoundChairs);
            break;
        case 7 :
            arrConfs = [[['XX', 1], ['XXXX', 2], ['XXX', 5]], 7];
            document.getElementById('task3_2').innerHTML = ' conf: ' + JSON.stringify(arrConfs) + '--->  ' +
                ' Not enough ' ;
            break;
        default :
            alert(' error ');
    }
}