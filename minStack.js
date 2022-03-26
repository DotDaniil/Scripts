class MinStack {
    arr = [];

    MinStack() {
        return null
    }

    push(el) {
        this.arr.push(el)
        return null
    }
    
    pop() {
        this.arr.pop()
        return null
    }

    top() {
        return this.arr[this.arr.length - 1]
    }

    getMin() {
        return Math.min(...this.arr)
    }
}

const minStack = new MinStack()
