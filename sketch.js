var tree;

function setup() {
//noCanvas();
  createCanvas(1000, 1000);
  background(51);
  tree = new Tree();
 tree.addValue(5);
 tree.addValue(3);
 tree.addValue(6);
 tree.addValue(2);
 tree.addValue(1);
 tree.addValue(9);
 tree.addValue(20);
 tree.addValue(10);
 tree.addValue(4);
 tree.addValue(7);
  console.log(tree);
  tree.traverse();
  tree.search(7);
}
