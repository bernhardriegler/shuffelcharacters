function tree(leafs) {
    var branches = [];
    if (leafs.length === 1) return leafs;

    for (let k in leafs) {
        const leaf = leafs[k];
        tree(leafs.join('').replace(leaf, '').split('')).concat('').map(subtree => {
            branches.push([leaf].concat(subtree));
        });
    }
    return branches;
}
console.log(tree('EBSREN'.split('')).map(str => str.join('')));
