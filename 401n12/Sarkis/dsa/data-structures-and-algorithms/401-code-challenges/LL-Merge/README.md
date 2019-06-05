# Code Challenge 08
### Linked List Merge

## Challenge
* Merge two linked lists, and return the combined linked list.

## Approach
* Method takes in two lists - `linkedList1` and `linkedList2`
* Has four variables: `currentListA` (current of list1  which starts out as `list1.head`), `currentListB` (current of list2, which starts out as `list2.head`) and `tempA` and `tempB` which holds the next pointers.
* If one of the lists is empty, it will return the other list.
* Otherwise - While `currentListA` is not `null` OR `currentListB` is not `null`
  * if there is still a node in list1 (that isn't null), `currentListA` will get redefined as the next node in list1
  * the next node will get assigned as `currentListB` / `currentListA`
  * both  `currentListB` / `currentListA` get incremented to the next node
* Once we're done traversing both list1 and list2, it returns the head of the new linked list.

## Solution
![Whiteboard](https://github.com/sarkis74/data-structures-and-algorithms/blob/master/401-code-challenges/LL-Merge/merged%20linked%20list.jpg)

## Tests
* Can successfully merge two linked lists with same amount of nodes.
* Can successfully merge two linked lists with different amounts of nodes.
* If one list is empty, it should return the non-empty list.

## Big O
* Time - O(n)
* Space - O(1)
