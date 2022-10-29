let x = 0;
let y = 0;
let blah;
// let chessboardarray = [];
// let row7 = [ ];

const Node = (data, left = null, right = null) => {
    this.data = data
    return {data}
}

const Board = () => {

    const prettyPrint = (node, prefix = '', isLeft = true) => {
        // console.log(node);
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
      }

    let kpos = null;
    
    let chessboard = [];
    for (let i = 0; i < 8; i++) {
        let row = [];
        for (let j = 0; j < 8; j++) {
            let temp = [i, j]
            row.push(temp);
        }
        chessboard.push(row);
        row = [];
    }
    // const BuildBoard = (x, y) => {
    //     // if it goes past or equal to 8, return.
    //     if (x >= 8 || x < 0 || y >= 8 || y < 0) {
    //         return null;
    //     }
    //     // build an 8x8 board, so it should have 64 blocks
    //     let node = Node([x, y]);
        
    //     node.right = BuildBoard(x + 1, y);
    //     node.up = BuildBoard(x, y + 1);
    //     node.left = BuildBoard(x - 1, y);
    //     node.down = BuildBoard(x, y - 1);
    //     console.log(node);
    //     return node;
    // }

    const possibleMovesTree = (kpos) => {

        // validation for things that are above 7 SEVEN
        if (kpos[0] >= 8 || kpos[1] >= 8 || kpos[0] < 0 || kpos[1] < 0) {
            return null;
        }

        // console.log(kpos);
//         console.log(kpos[0]);
//         console.log(kpos[1]);
//         let tempx = kpos[0] + 1;
//         let tempy = kpos[1] + 2;        
// // MAYBE DO 8 DIFFERENT LINES?
//         console.log(chessboard[tempx][tempy]);
        
        //[x, y]

        let node = Node(kpos);
        node.left = possibleMovesTree([kpos[0] + 2, kpos[1] + 1])
        node.right = possibleMovesTree([kpos[0] + 1, kpos[1] + 2])
        console.log(node);
        // return node;
        // take in the knights position, then build a tree showing all of possible moves it could take, if we get that up and running, we should be good. 

        // look into returning it.
        blah = node;
        return blah;
    }
    
    const shortestMoves = (tree) => {
        // traverse said tree   
    }

    const knightMoves = (kpos, goal) => {

        let moves = possibleMovesTree(kpos);

        optimalMove = shortestMoves(moves);
    }

    return { possibleMovesTree, chessboard, knightMoves, prettyPrint }
}

const board = Board();
// console.log(board.chessboard);
// console.log(board.chessboard[3][2]);
let testing = board.possibleMovesTree([2,3]);
// testing.prettyPrint(node);
// board.prettyPrint(node);
// testing.prettyPrint(blah);
board.prettyPrint(blah);
// board.prettyPrint([2,3]);
// console.log(board.knightMoves([0,0], [2,4]));

// THIS IS SAFE BECAUSE SO FAR IT WORKS COVERING 25% OF THE MOVES!
// HOWEVER, IT ONLY DOES TO THE LEFT MOVES, THERE ARE TO THE RIGHT, BOTTOM RIGHT, AND BOTTOM LEFT TO DO.