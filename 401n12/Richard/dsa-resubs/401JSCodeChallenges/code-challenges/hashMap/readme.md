# Hashtables
saving key value pairs in a way that uis searchable in o(1)

## Challenge
to code your own hashtable rather then usinhg built in language specific map

## Approach & Efficiency
storing tables as arrays in an array hashing keys
o(1) amortized

## API
hash: takes in a string, a maximum capacity, and a salt, returns a numeric value.

basicHash: takes in a string and preforms a hash with a max cap of 250 and a salt of 1.

set: sets a key, value pair in the hashtable and if there are collisions adds them to an array

get: gets the valuemof a key if it exists in table

contains: takes in a key and returns a boolean if that key is present in the hash table.

   