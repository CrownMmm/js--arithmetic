const tree = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'd',
                    children: [],
                },
                {
                    val: 'e',
                    children: [],
                }
            ],
        },
        {
            val: 'c',
            children: [
                {
                    val: 'f',
                    children: [],
                },
                {
                    val: 'g',
                    children: [],
                }
            ],
        }
    ],
};

const bfs = (root) => {
    // 新建一个对列把根结点入队
    const q = [root];
    // 在队列不为空的时候进行循环
    while (q.length > 0) {
        //出队
        const n = q.shift();
        console.log(n.val);
        //把对头的children挨个入队列
        n.children.forEach(child => {
            q.push(child);
        });
    }
};

bfs(tree);
