/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given the root of a binary tree, return a deepest node. For example, in the following tree, return d.
*/



$(document).ready(function() {
  $('#form-1').submit(function(){
    event.preventDefault()
    let input1 = $('#input-1').val()
    input1 = input1.replace(/\'/g,'"')  //JSON.parse does not like single quotes for arrays
    input1 = JSON.parse(input1)
    $('#output-1').text(JSON.stringify(makeDec(input1)))
  })
});
