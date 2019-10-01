/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given the root of a binary tree, return a deepest node. For example, in the following tree, return d.
*/

class singleNode{
  constructor(value=null,left=null,right=null) {
    this.value=value;
    this.left=left;
    this.right=right;
  }

  addLeft(leftNode) {
    this.left=leftNode
    return this.left
  }

  addRight(rightNode) {
    this.right=rightNode
    return this.right
  }
}

let root = new singleNode('a')
let node2 = new singleNode('b')
let node3 = new singleNode('c')
let node4 = new singleNode('d')

root.addLeft(node2)
root.addRight(node3)
node2.addLeft(node4)
console.log(root)

$(document).ready(function() {
  $('#form-1').submit(function(){
    event.preventDefault()
    let input1 = $('#input-1').val()
    input1 = input1.replace(/\'/g,'"')  //JSON.parse does not like single quotes for arrays
    input1 = JSON.parse(input1)
    $('#output-1').text(JSON.stringify(makeDec(input1)))
  })
});
