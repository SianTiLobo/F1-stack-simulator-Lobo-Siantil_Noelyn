
class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // Add element to top of stack
    push(element) {
        this.items[this.count] = element;
        this.count++;
        return element;
    }

    // Remove top element
    pop() {
        if (this.isEmpty()) return undefined;

        this.count--;
        let deletedItem = this.items[this.count];

        this.items.pop();

        return deletedItem;
    }

    // Check top element
    peek() {
        if (this.isEmpty()) return undefined;

        return this.items[this.count - 1];
    }

    // Check if stack is empty
    isEmpty() {
        return this.count === 0;
    }

    // Check stack size
    size() {
        return this.count;
    }

    // Clear stack
    clear() {
        this.items = [];
        this.count = 0;
    }
}

const stack = new Stack();

$(document).ready(function () {

    // PUSH
    $("#pushBtn").click(function () {

        let value = $("#stackInput").val().trim();

        if (value === "") {
            $("#message").text("Please enter a value.");
            return;
        }

        stack.push(value);

        $("#stack").prepend(
            $("<div>").addClass("row push bg-primary text-white")
                .text(value)
        );

        $("#stackInput").val("");
        $("#message").text(value + " added to the stack.");
    });


    // POP
    $("#popBtn").click(function () {

        if (stack.isEmpty()) {
            $("#message").text("Stack is empty. Nothing to pop.");
            return;
        }

        let deletedItem = stack.pop();

        $("#stack .push").first().remove();

        $("#deleted").append(
            $("<div>").addClass("row pop text-bg-danger border border-light")
                .text(deletedItem)
        );

        $("#message").text(deletedItem + " removed from the stack.");
    });


    // PEEK
    $("#peekBtn").click(function () {

        if (stack.isEmpty()) {
            $("#message").text("Stack is empty. Nothing to peek.");
            return;
        }

        $("#stack .push").removeClass("peeked");

        $("#stack .push").first().addClass("peeked");

        $("#message").text("Top element: " + stack.peek());
    });


    // CLEAR
    $("#clearBtn").click(function () {

        stack.clear();

        $("#stack").empty();
        $("#deleted").empty();

        $("#message").text("Stack cleared successfully.");
    });

});
