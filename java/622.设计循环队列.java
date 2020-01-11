/*
 * @lc app=leetcode.cn id=622 lang=java
 *
 * [622] 设计循环队列
 */

// @lc code=start
class MyCircularQueue {

    private int capacity , front, last;;
    private int[] array;
    /** Initialize your data structure here. Set the size of the queue to be k. */
    public MyCircularQueue(int k) {
        this.capacity = k + 1;
        this.front = 0;
        this.last = 0;
        this.array = new int[this.capacity + 1];
    }
    
    /** Insert an element into the circular queue. Return true if the operation is successful. */
    public boolean enQueue(int value) {
        if (this.isFull()) {
            return false;
        }
        this.array[this.last] = value;
        this.last = (this.last + 1) % this.capacity; 
        return true;
    }
    
    /** Delete an element from the circular queue. Return true if the operation is successful. */
    public boolean deQueue() {
        if (this.isEmpty()) {
            return false;
        }
        this.front = (this.front + 1) % this.capacity;
        return true;
    }
    
    /** Get the front item from the queue. */
    public int Front() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.array[this.front];
    }
    
    /** Get the last item from the queue. */
    public int Rear() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.array[(this.last - 1 + this.capacity) % this.capacity];
    }
    
    /** Checks whether the circular queue is empty or not. */
    public boolean isEmpty() {
        return (this.front == this.last);
    }
    
    /** Checks whether the circular queue is full or not. */
    public boolean isFull() {
        return ((this.last + 1) % this.capacity == this.front );
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * MyCircularQueue obj = new MyCircularQueue(k);
 * boolean param_1 = obj.enQueue(value);
 * boolean param_2 = obj.deQueue();
 * int param_3 = obj.Front();
 * int param_4 = obj.Rear();
 * boolean param_5 = obj.isEmpty();
 * boolean param_6 = obj.isFull();
 */
// @lc code=end

