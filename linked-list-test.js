



class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}



class ListNode {
    constructor(data) {
        this.data = data
        this.next = null

    }
}



let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2

let list = new LinkedList(node1)

console.log(list.head.next.data)