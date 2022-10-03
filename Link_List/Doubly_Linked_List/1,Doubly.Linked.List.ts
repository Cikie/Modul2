// value: Chứa giá trị của phần tử
// next: Một con trỏ đến phần tử tiếp theo trong danh sách được liên kết (null nếu không có)
// previous: Một con trỏ đến phần tử trước đó trong danh sách liên kết (null nếu không có)
// size: Số lượng các phần tử trong danh sách
// head: Phần tử đầu tiên trong danh sách được liên kết đôi
// tail: Phần tử cuối cùng trong danh sách được liên kết đôi
// insertAt: Chèn một phần tử vào chỉ mục cụ thể
// removeAt: Loại bỏ phần tử tại chỉ mục cụ thể
// getAt: Truy xuất phần tử tại chỉ mục cụ thể
// clear: Làm trống danh sách


// triển khai một danh sách liên kết đôi:
export class DoublyLinkedList {
    node: any[] = [];

    size(): number {
        return this.node.length
    }

    head() {
        return this.size ? this.node[0] : null;
    }

    tail() {
        return this.size ? this.node[this.size() - 1] : null;
    }

    insertAt(index, value) {
        const presiousNode = this.node[index - 1] || null;
        const nextNode = this.node[index] || null;
        const node = {value, next: nextNode, previous: presiousNode};
        if (presiousNode) {
            presiousNode.next = node;
        }
        if (nextNode) {
            nextNode.previous = node
        }
        this.node.splice(index, 0, node)
    }

    insertFirst(value) {
        this.insertAt(0, value)
    }

    insertLast(value) {
        this.insertAt(this.size(), value)
    }

    getAt(index) {
        return this.node[index];
    }

    removeAt(index) {
        const previousNode = this.node[index - 1] || null
        const nextNode = this.node[index + 1] || null

        if (previousNode) previousNode.next = nextNode;
        if (nextNode) nextNode.next = previousNode;

        return this.node.splice(index, 1)
    }

    clear() {
        this.node = []
    }

    reverse() {
        this.node = this.node.reduce((acc, {value}) => {
            const nextNode = acc[0] || null;
            const node = {value, next: nextNode, previous: null};
            if (nextNode) nextNode.previous = node;
            return [node, ...acc];
        });
    }
}
const list = new DoublyLinkedList();

list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);
list.insertLast(4);
list.insertAt(3,5);
console.log(list)