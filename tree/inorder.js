const bt = require('./bt');

// const inorder = (root) => {
//     if (!root) {
//         return;
//     }
//     inorder(root.left);
//     console.log(root.val);
//     inorder(root.right);
// };

const inorder = (root) => {
    if (!root) {
        return;
    }
    const stack = [];
    // 新建一个指针
    let p = root;
    while (stack.length || p) {
        // 当指针有值的情况下
        while (p) {
            stack.push(p);
            p = p.left;
        }
        // 弹出尽头的左节点
        const n = stack.pop();
        console.log(n.val);

        p = n.right;
    }
};

inorder(bt);