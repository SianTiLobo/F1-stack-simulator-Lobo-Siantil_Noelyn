
class Queue {
    constructor() {
        this.items = [];
    }

    // Add an element at the rear
    enqueue(element) {
        this.items.push(element);
        return element;
    }

    // Remove the element at the front
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items.shift();
    }

    // Check the front element
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[0];
    }

    // Check if queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get queue size
    size() {
        return this.items.length;
    }

    // Clear the queue
    clear() {
        this.items = [];
    }
}

const queue = new Queue();

$(document).ready(function () {

    // ENQUEUE
    $("#enqueueBtn").click(function () {

        let value = $("#queueInput").val().trim();

        if (value === "") {
            $("#message").text("Please enter a value.");
            return;
        }

        queue.enqueue(value);

        $("#queue").append(
            $("<div>")
                .addClass("row push bg-primary text-white")
                .text(value)
        );

        $("#queueInput").val("");

        $("#message").text(value + " added to the rear.");
    });


    // DEQUEUE
    $("#dequeueBtn").click(function () {

        if (queue.isEmpty()) {
            $("#message").text("Queue is empty. Nothing to dequeue.");
            return;
        }

        let deletedItem = queue.dequeue();

        $("#queue .push").first().remove();

        $("#deleted").append(
            $("<div>")
                .addClass("row pop text-bg-danger border border-light")
                .text(deletedItem)
        );

        $("#message").text(deletedItem + " removed from the front.");
    });


    // PEEK
    $("#peekBtn").click(function () {

        if (queue.isEmpty()) {
            $("#message").text("Queue is empty. Nothing to peek.");
            return;
        }

        $("#queue .push").removeClass("peeked");

        $("#queue .push").first().addClass("peeked");

        $("#message").text("Front element: " + queue.peek());
    });


    // CLEAR
    $("#clearBtn").click(function () {

        queue.clear();

        $("#queue").empty();
        $("#deleted").empty();

        $("#message").text("Queue cleared successfully.");
    });

});
