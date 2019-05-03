class FixedStack {
    constructor(size) {
        this.stack = new Array(size);
        this.maxSize = size;
        this.topIndex = -1;
    }

    push(item) {
        if (this.topIndex === this.maxSize - 1) {
            console.error('StackOverflowError')
            return;
        }
        this.topIndex++;
        this.stack[this.topIndex] = item;
    }

    pop() {
        if (this.topIndex === -1) {
            console.error('Stack is empty.');
            return;
        }
        this.stack[this.topIndex] = undefined;
        this.topIndex--;
    }

    peek() {
        return this.stack[this.topIndex];
    }

    isEmpty() {
        return this.topIndex === -1;
    }
}

// Test

const fixedStack = new FixedStack(5)
fixedStack.push(1)
fixedStack.push(2)
fixedStack.push(3)
fixedStack.push(4)
fixedStack.push(5)
fixedStack.push(6)

console.log(fixedStack)
console.log(fixedStack.peek())
fixedStack.pop()
fixedStack.pop()
fixedStack.pop()
fixedStack.pop()
fixedStack.pop()
fixedStack.pop()
fixedStack.pop()

console.log(fixedStack)
console.log(fixedStack.isEmpty());