let x = 0;
let y = 0;
let blah;
// let chessboardarray = [];
// let row7 = [ ];

const Node = (data, one = null, two = null, three = null, four = null, five = null, six = null, seven = null, eight = null) => {
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
        let node = null;
        let og = kpos;
        let visited = [];

        const possibleMovesTreeRec = (kpos) => {
            stringkpos = kpos.toString()
            // validation for things that are above 7 SEVEN
            if (kpos[0] >= 8 || kpos[1] >= 8 || kpos[0] < 0 || kpos[1] < 0)
            {
                return null;
            } else if (visited.includes(stringkpos)) {
                return null;
            }
            
            visited.push(stringkpos);
            // if (kpos[0] >= 8 || kpos[1] >= 8 || kpos[0] < 0 || kpos[1] < 0) // || og == kpos
           

            // PUSH THE KPOS INTO AN ARRAY, THEN BEFORE EACH NODE CREATION,
            // CHECK IF IT'S BEEN VISITED, IF IT HAS, IN THE BASE LINE, DON'T GO THROUGH IT.

            // console.log(kpos);
            //console.log(kpos[0]);
            //console.log(kpos[1]);       
            //console.log(chessboard[tempx][tempy]);
            
            //[x, y]
             // your lines have issues with each  other as they loop
             // they need to be on separate sides i think that's the best choice.
             // the og  node needs a .left and a .right maybe, for each half.

            let node = Node(kpos); //[kpos[0] - 2, kpos[1] + 1]
            node.one = possibleMovesTreeRec([kpos[0] - 2, kpos[1] + 1]) // 1
            // console.log(node.data);

            // ALL I KNOW IS THAT THIS IS THE PROBLEM. IT CAN'T GO FROM 1-2-3-1-2-3-1-2-3-1-2-3.. INSTEAD IT HAS TO GO TO  1-1-1-1-2-2-2-2-3-3-3-3
            // DO THE FIRST ONE, BUT THEN IF IT'S NOT THAT RETURN,
            // THEN DO THE SECOND, IF IT;S NOT THAT STRAIGHT AWAY, THEN RETURN
            // ETC DO THIS FOR ALL 8, THEN IF IT'S STILL NOT THAT, THEN GO TO ONE AGAIN! can i set that up?
            // no.. unless i set up a variable with counts, for each.
            // what if i just used iteration instead? a for loop? one layer at a time? that might work, no?

            // do that for each of them right. i only need 8 roots. then by simple math i just have to have 
            node.two = possibleMovesTreeRec([kpos[0] - 1, kpos[1] + 2]) // 2
            node.three = possibleMovesTreeRec([kpos[0] + 1, kpos[1] + 2]) // 3
            node.four = possibleMovesTreeRec([kpos[0] + 2, kpos[1] + 1]) // 4
            // if kpos or maybe kpos +/- 2/1
            //  if (kpos)

            // console.log(node.two.data)
            // if (node.one =)
            // if ( kpos[0] - 2 == , kpos[1] == )
            node.five = possibleMovesTreeRec([kpos[0] + 2, kpos[1] - 1]) // 1
            node.six = possibleMovesTreeRec([kpos[0] + 1, kpos[1] - 2]) // 2
            node.seven = possibleMovesTreeRec([kpos[0] - 1, kpos[1] - 2]) // 3
            node.eight = possibleMovesTreeRec([kpos[0] - 2, kpos[1] - 1]) // 4

            // console.log(node);
            // return node;
            // take in the knights position, then build a tree showing all of possible moves it could take, if we get that up and running, we should be good. 

            // look into returning it.
            blah = node;
            return blah;

            // 
        }
        possibleMovesTreeRec(kpos);
        return blah;
    }
    
    const shortestMoves = (tree, goal) => {
        
        // traverse said tree   
        let preorderarray = [];

        const printpreorderRec = (root, goal) => {

            // not level order traversal...
            if (root == null || root.data.toString() == goal.toString()) {
                return;
            }   
            // does this even find depth?? find that out man.. fuck bruv.
            // if anything, just copy and paste the depth function in the other file, then just make it take a value and go through each of the tree with the smallest depth? idk
            // the one thing i just cannot wrap my head around is having multiple ways to the same point! otherwise it's endless? and when do you stop?

            preorderarray.push(root.data);
            printpreorderRec(root.one, goal);
            printpreorderRec(root.two, goal);
            printpreorderRec(root.three, goal);
            printpreorderRec(root.four, goal);
            printpreorderRec(root.five, goal);
            printpreorderRec(root.six, goal);
            printpreorderRec(root.seven, goal);
            printpreorderRec(root.eight, goal);
            return preorderarray;
            // console.log(goal);
            // let queue = [];
            // queue.push(root);
            // while (queue.length != 0) {
            //     let tempNode = queue.shift();
            //     // console.log(tempNode.data);
            //     movesarray.push(tempNode.data);
            //     // let test = tempNode.data.toString;
            //     // console.log(test);
            //     // let test2 = goal.toString;
            //     // console.log(test2)
            //     if (tempNode.data.toString() == goal.toString()) {
            //         return; // maybe empty queue if needed
            //     }

            //     if (tempNode.one != null) {
            //         queue.push(tempNode.one);
            //     }

            //     if (tempNode.two != null) {
            //         queue.push(tempNode.two);
            //     }
            //     if (tempNode.three != null) {
            //         queue.push(tempNode.three);
            //     }
            //     if (tempNode.four != null) {
            //         queue.push(tempNode.four);
            //     }
            //     if (tempNode.five != null) {
            //         queue.push(tempNode.five);
            //     }
            //     if (tempNode.six != null) {
            //         queue.push(tempNode.six);
            //     }
            //     if (tempNode.seven != null) {
            //         queue.push(tempNode.seven);
            //     }
            //     if (tempNode.eight != null) {
            //         queue.push(tempNode.eight);
            //     }
                
            // }
        }
        printpreorderRec(tree, goal);
        return preorderarray;
    }

    const knightMoves = (kpos, goal) => {

        let moves = possibleMovesTree(kpos);
        console.log(moves);
        optimalMove = shortestMoves(moves, goal);
        console.log(optimalMove);
        return optimalMove;
    }

    return { possibleMovesTree, chessboard, knightMoves, prettyPrint }
}

const board = Board();
// console.log(board.chessboard);
// console.log(board.chessboard[3][2]);
// let testing = board.possibleMovesTree([2,3]);
// testing.prettyPrint(node);
// board.prettyPrint(node);
// testing.prettyPrint(blah);
// board.prettyPrint(blah);
// board.prettyPrint([2,3]);
board.knightMoves([3,2], [2,4]);

// there's a problem getting the actual paths
// can't use the visited method since it means there's only one outcome
// for each square
// you need several different outcomes, so somehow find a way to do that without fucking uh, infinitely looping them?
// maybe tie searching into this? since it said one was infinite, maybe we just
// so maybe, MAYBE
// i use LEVEL ORDER TRAVERSAL AS THE DATA COMES IN, AND MAKE IT ALL ONE BIG FUNCTION.
// MEANING THAT ONCE I HIT THE GOAL, THEN SHARE THAT ARRAY. MAYBE I NEED EACH ARRAY FOR EACH INDIVIDUAL 
// WAIT LEVEL ORDER TRAVERSAL I DON'T THINK IS IT? unless it is... 

// maybe go back to my safescript, and use 4 if statements to get the quadrant of the board, then i can just make a tree for that quadrant!
// wait that wouldn't work, since it might need to go back and things in that quadrant, my safescript tree can only go two ways...

