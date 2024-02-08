/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let Rows = [];
    for(let i=1;i < numRows+1;i++){
        let Row = [];
        for (let j=0;j < i;j++){
            Row.push(1);
        }
        Rows.push(Row);
    }

    for(let i=2;i < numRows;i++){
        for(let j=1; j<i ;j++){
            Rows[i][j] = Rows[i-1][j-1] + Rows[i-1][j] ;
            
        }
    }
    
    return Rows;
};
