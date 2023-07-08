// A set is a data structure that can hold a collection of values. The values however must be unique
// Set can contain a mix of different data types. You can store strings, booleans, numbers or even objects all in the same set
// Sets are dynamically sized. You don't have to declare the size of a set before creating it
// Sets do not maintain an insertion order

const set = new Set([1,2,3])

set.add(4)
console.log(set.has(4))
set.delete(3)
console.log(set.size)
set.clear()

for(const item of set){
    console.log(item)
}