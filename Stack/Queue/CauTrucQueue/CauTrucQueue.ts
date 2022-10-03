// Queue (hàng đợi) là một cấu trúc dữ liệu danh sách
//  trong đó việc thêm và lấy các phần tử được thực hiện theo quy tắc FIFO(Fist-In/First-Out)
// có nghĩa là phần tử nào được thêm vào sau cùng thì được lấy ra sau cùng.
// enqueue:  thêm một phần tử vào phần cuối (đuôi - tail) của hàng đợi.
// dequeue:  lấy ra phần tử đầu tiên (đầu - head) của hàng đợi (đầu).
// size:  trả về kích thước của hàng đợi

interface IQueue<T> {
    enqueue(item: T): void;

    dequeue(): T | undefined;

    size(): number;
}

class Queue<T> implements IQueue<T> {
    private storage: T[] = []

    constructor(private capacity: number = Infinity) {
    }

    dequeue(): T | undefined {
        return this.storage.shift();
    }

    enqueue(item: T): void {
        if (this.size() === this.capacity) {
            throw Error("Queue has reached max capacity, you cannot add more items")
        }
        this.storage.push(item)
    }

    size(): number {
        return this.storage.length;
    }

}

const queue = new Queue<string>();
queue.enqueue("A");
queue.enqueue("B");
queue.size();
queue.dequeue();
queue.size();