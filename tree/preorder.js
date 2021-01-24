const bt = require('./bt');

// const preorder = (root) => {
//     if (!root) {
//         return;
//     }
//     console.log(root.val);
//     preorder(root.left);
//     preorder(root.right);
// };

const preorder = (root) => {
    if (!root) {
        return;
    }
    // 把根结点传入调用堆栈中 如果函数里面执行函数 需要在堆栈中添加函数 执行完毕后从栈顶移除
    const stack = [root];
    // 当有值的情况下
    while (stack.length) {
        // 访问根结点的值
        const n = stack.pop();
        console.log(n.val);
        // 如果左子树存在 推到调用栈中 (栈结构后进先出 先访问left 再访问right )
        if (n.right) stack.push(n.right);
        if (n.left) stack.push(n.left);
    }
};
preorder(bt);