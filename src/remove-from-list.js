const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let arr = []
  function arrayMaker(list) {
    arr.push(list.value)
    if (list.next != null) {
      arrayMaker(list.next)
    }
  }
  function listMaker(arr) {
    let i = 0
    function m() {
      let list = new ListNode(arr[i])
      if (arr[i + 1] != undefined) {
        i++
        list.next = m(arr[i])
      }
      return list
    }
    return m()
  }
  arrayMaker(l)
  let arr1 = []
  arr.forEach(el => {
    if (el != k) {
      arr1.push(el)
    }
  })
  return listMaker(arr1)
}

module.exports = {
  removeKFromList
};
