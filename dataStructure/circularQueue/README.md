# Circular Queue

- A Fixed Length Queue represents how an array works internally.
- You can tell that is not memory efficient if you want to reuse the same array.
- It will be great if we can reuse the unused portion of the array.

## Instructions

Implement a circular queue with constructor and 4 function.

1. constructor(length) // create a array using new Array(<size of array>);
2. enqueue(item) // takes in an item and adds it to the stack. Throws an error if queue is full.
3. dequeue // remove and return the first item that is in the stack
4. peek // return the first item that is in the stack
5. getSize // return the size/length of the Array.
