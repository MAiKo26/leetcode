class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        
        let hash1 = new Map();
        let hash2 = new Map();
        let hash3 = new Map();
        hash3.set("0,0" , new Map());
        hash3.set("0,1" , new Map());
        hash3.set("0,2" , new Map());
        hash3.set("1,0" , new Map());
        hash3.set("1,1" , new Map());
        hash3.set("1,2" , new Map());
        hash3.set("2,0" , new Map());
        hash3.set("2,1" , new Map());
        hash3.set("2,2" , new Map());

        for (let i = 0 ; i < board.length ; i++){
            hash1 = new Map();
            hash2 = new Map();
            for (let j = 0; j < board.length ; j++){


                if (!hash1.has(board[i][j]) || (board[i][j] === ".")){ 
                    hash1.set(board[i][j],"seen")
                }else{
                    console.log(hash1)
                    console.log("1 exist")
                    return false
                }

                if (!hash2.has(board[j][i]) || (board[j][i] === ".")){ 
                    hash2.set(board[j][i],"seen")
                }else{
                    console.log(hash2)
                    console.log("2 exist")
                    return false
                }

                const current3x3 = hash3.get(`${Math.floor(i/3)},${Math.floor(j/3)}`) ;

                if (!current3x3.has(board[i][j]) || (board[i][j] === ".")){ 
                    current3x3.set(board[i][j],"seen")
                }else{
                    console.log(Math.floor(i/3),Math.floor(j/3))
                    console.log(hash3)
                    console.log("3 exist")
                    return false
                }

                
            }
        }

        return true;
    }
}
