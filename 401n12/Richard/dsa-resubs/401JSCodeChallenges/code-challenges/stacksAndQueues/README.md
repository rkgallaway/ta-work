# Stacks and Queues
Two types of data structures that empty in different ways

## Challenge
create working stack and que classes that function as intended

## Approach & Efficiency
The majority of the functions are o(1) as long as they operate on a refrenced node and don't require us to loop through the structure.

 my approach is to create stacks and queueues as constructed objects that hold nodes somewhat in the style of a linked list.

## API
For a Stack:
pushToStack = adds a node to the top of the stack
popOff = takes off the top node
peek = Look at the value of the top node in the stack

for a Queue:
Enqueue = Adds a node to the rear of the queue
dequeue = removes the first node of the queue
peek = looks at the top nod of a queue