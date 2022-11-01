const Node = (data, one = null, two = null, three = null, four = null, five = null, six = null, seven = null, eight = null, prev = null) => {
    this.data = data
    return {data}
}
const knightMoves = (kpos, goal) => {

    const possibleMoves = (kpos, goal) => {
        let testArray = [];
        let node = Node(kpos);
        let queue = [];
        let tempNode;
        let prevNode
        queue.push(node);
        while (queue.length != 0) {

            // if (tempNode === undefined) {
            //     prevNode = node;
            // } else if (tempNode.data == null) {
                
            // } else {
            //     prevNode = tempNode;
            // }
            
            // get previous node? let's check it.

            tempNode = queue.shift()
            
            tempkpos = tempNode.data;
            if (tempkpos[0] == goal[0] &&  tempkpos[1] == goal[1]) {
                console.log("goal found");

                let queuetwo = []
                queuetwo.push(tempNode);

                while (queuetwo.length != 0) {
                    tempNode = queuetwo.shift()
                    if (tempNode.prev == undefined) {
                        testArray.push(tempNode.data);
                        let finalArray = testArray.reverse();
                        return finalArray;
                    } else {
                        testArray.push(tempNode.data);
                        queuetwo.push(tempNode.prev);
                    }
                    
                }

                console.log(testArray);
                testArray.push
                return node;

            } else if (tempNode === null || tempkpos[0] >= 8 || tempkpos[1] >= 8 || tempkpos[0] < 0 || tempkpos[1] < 0) {
            tempNode.data = null;
            } else {
                // tempNode.prev = prevNode; // it's every 8 nodes! that it's the prev one.
                

                tempNode.one = Node(([tempkpos[0] - 2, tempkpos[1] + 1]));
                let tempNodeOne = tempNode.one;
                tempNodeOne.prev = tempNode;
                queue.push(tempNodeOne);

                tempNode.two = Node(([tempkpos[0] - 1, tempkpos[1] + 2]));
                let tempNodeTwo = tempNode.two;
                tempNodeTwo.prev = tempNode;
                queue.push(tempNodeTwo);

                tempNode.three = Node(([tempkpos[0] + 1, tempkpos[1] + 2]));
                let tempNodeThree = tempNode.three;
                tempNodeThree.prev = tempNode;
                queue.push(tempNodeThree);

                tempNode.four = Node(([tempkpos[0] + 2, tempkpos[1] + 1]));
                let tempNodeFour = tempNode.four;
                tempNodeFour.prev = tempNode;
                queue.push(tempNodeFour);

                tempNode.five = Node(([tempkpos[0] + 2, tempkpos[1] - 1]));
                let tempNodeFive = tempNode.five;
                tempNodeFive.prev = tempNode;
                queue.push(tempNodeFive);

                tempNode.six = Node(([tempkpos[0] + 1, tempkpos[1] - 2]));
                let tempNodeSix = tempNode.six;
                tempNodeSix.prev = tempNode;
                queue.push(tempNodeSix);

                tempNode.seven = Node(([tempkpos[0] - 1, tempkpos[1] - 2]));
                let tempNodeSeven = tempNode.seven;
                tempNodeSeven.prev = tempNode;
                queue.push(tempNodeSeven);

                tempNode.eight = Node(([tempkpos[0] - 2, tempkpos[1] - 1]));
                let tempNodeEight = tempNode.eight;
                tempNodeEight.prev = tempNode;
                queue.push(tempNodeEight);
            }
        }
    }



    return possibleMoves(kpos, goal)
}

console.log(knightMoves([0,0], [7,7]));
