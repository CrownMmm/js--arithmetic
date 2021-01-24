const bt = require('./bt');

// const postorder = (root) => {
//     if (!root) {
//         return;
//     }
//     postorder(root.left);
//     postorder(root.right);
//     console.log(root.val);
// };

const postorder = (root) => {
    if (!root) {
        return;
    }
    // 与先序遍历相反 反向输出先序遍历的值 利用栈结构后进先出的特性
    const stack = [root];
    const outputStack = [];
    while (stack.length) {
        // 访问根结点的值
        const n = stack.pop();
        outputStack.push(n);
        // 如果左子树存在 推到调用栈中 (栈结构后进先出 先访问right 再访问left )
        if (n.left) stack.push(n.left);
        if (n.right) stack.push(n.right);
    }
    // 倒序输出
    while (outputStack.length) {
        const n = outputStack.pop();
        console.log(n.val);
    }
};


postorder(bt);