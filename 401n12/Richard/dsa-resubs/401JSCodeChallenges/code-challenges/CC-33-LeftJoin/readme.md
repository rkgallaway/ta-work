# Hashmap LEFT JOIN
preform a left join on two hash maps
if the hasmaps share any keys add the values from the second onto the keys onm the first and return the first

## Challenge
Take in two hashmaps. itterate over the first one and at each index check the index of the second

## Approach & Efficiency
Big o of time for my approach was O(n) because we have to check the second hashmap at O(1) for each point in the first hash map.  that makes this O(n) for time and O(n) for space because worst case scenario it stores the same amount of data that it did before time 2 O(2n) reduces to O(n).  
