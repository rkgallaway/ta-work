# Code Challenge/Lab 10: Stacks and Queues
Implement a Stack and a Queue Data Structure

## Challenge
Within the Code Challenge repository, make data structures that implement Node, Stack, and Queue classes.


## Approach & Efficiency

## API
### Node
Has properties for the value of a given node, and a pointer to the next node.

### Stack
Class that has a top property. Creates an empty stack when instantiated.
Default empty value assigned to <b>top</b> when stack is created.
#### push
Method that takes any value as an argument and adds a new node with that value to the <b>top</b> of the stack.
#### pop
Method that does not take an argument. Removes the node at the top of the stack.
#### peek
This method returns the value of the node located on <b>top</b>.

### Queue
Has a top property, and creates an empty queue when instantiated.
Object is aware of a default empty value assigned to <b>front</b> when the queue is created.
#### enqueue
Method that takes in any value as an argument and adds a new node with that value to the back of the queue.
#### dequeue
Method that removes the node from the front of the queue. Does not take an argument.
#### peek
Method that does not take an argument, and returns the value of the node located in the front of the stack.