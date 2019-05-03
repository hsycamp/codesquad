class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        return this.stack.pop();
    }

    size() {
        return this.stack.length;
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    clear() {
        this.stack = [];
    }
}


// Test

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack)
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.size());
console.log(stack)
console.log(stack.isEmpty());

stack.clear()
console.log(stack)
stack.push(1);
console.log(stack)
stack.push(2);
console.log(stack)