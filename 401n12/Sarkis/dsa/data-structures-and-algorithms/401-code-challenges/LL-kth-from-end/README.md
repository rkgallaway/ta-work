# Code Challenge 07
### Linked List Kth Value

## Challenge
* Find kth value from the **end** of a linked list.

## Approach
* Iterated once through linked list to determine its length using a counter variable.
* Iterated once more through the linked list (counter - k) times.
* Returned the current value.

## Solution
![Whiteboard](https://github.com/sarkis74/data-structures-and-algorithms/blob/master/401-code-challenges/LL-kth-from-end/LinkedListKth.jpg);

## Tests
* Can successfully find the kth value of a linked list.
* Returns 'value not found' if k = a negative integer.
* Returns 'value not found' if k is not a number.
* Returns 'value not found' if k > length of linked list.

## Big O
* Time - O(n)
* Space - O(1)
