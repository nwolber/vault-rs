var searchIndex = {};
searchIndex["hashicorp_vault"] = {"doc":"","items":[[3,"VaultClient","hashicorp_vault","",null,null],[12,"host","","",0,null],[12,"token","","",0,null],[11,"new","collections::string","Creates a new empty `String`.",1,{"inputs":[],"output":{"name":"string"}}],[11,"with_capacity","","Creates a new empty `String` with a particular capacity.",1,{"inputs":[{"name":"usize"}],"output":{"name":"string"}}],[11,"from_utf8","","Converts a vector of bytes to a `String`.",1,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[11,"from_utf8_lossy","","Converts a slice of bytes to a string, including invalid characters.",1,null],[11,"from_utf16","","Decode a UTF-16 encoded vector `v` into a `String`, returning `Err`\nif `v` contains any invalid data.",1,null],[11,"from_utf16_lossy","","Decode a UTF-16 encoded vector `v` into a string, replacing\ninvalid data with the replacement character (U+FFFD).",1,null],[11,"from_raw_parts","","Creates a new `String` from a length, capacity, and pointer.",1,null],[11,"from_utf8_unchecked","","Converts a vector of bytes to a `String` without checking that the\nstring contains valid UTF-8.",1,{"inputs":[{"name":"vec"}],"output":{"name":"string"}}],[11,"into_bytes","","Converts a `String` into a byte vector.",1,null],[11,"as_str","","Extracts a string slice containing the entire string.",1,null],[11,"as_mut_str","","Extracts a string slice containing the entire string.",1,null],[11,"push_str","","Appends a given string slice onto the end of this `String`.",1,null],[11,"capacity","","Returns this `String`&#39;s capacity, in bytes.",1,null],[11,"reserve","","Ensures that this `String`&#39;s capacity is at least `additional` bytes\nlarger than its length.",1,null],[11,"reserve_exact","","Ensures that this `String`&#39;s capacity is `additional` bytes\nlarger than its length.",1,null],[11,"shrink_to_fit","","Shrinks the capacity of this `String` to match its length.",1,null],[11,"push","","Appends the given `char` to the end of this `String`.",1,null],[11,"as_bytes","","Returns a byte slice of this `String`&#39;s contents.",1,null],[11,"truncate","","Shortens this `String` to the specified length.",1,null],[11,"pop","","Removes the last character from the string buffer and returns it.",1,null],[11,"remove","","Removes a `char` from this `String` at a byte position and returns it.",1,null],[11,"insert","","Inserts a character into this `String` at a byte position.",1,null],[11,"as_mut_vec","","Returns a mutable reference to the contents of this `String`.",1,null],[11,"len","","Returns the length of this `String`, in bytes.",1,null],[11,"is_empty","","Returns `true` if this `String` has a length of zero.",1,null],[11,"clear","","Truncates this `String`, removing all contents.",1,null],[11,"drain","","Create a draining iterator that removes the specified range in the string\nand yields the removed chars.",1,null],[11,"into_boxed_str","","Converts this `String` into a `Box&lt;str&gt;`.",1,null],[11,"clone","collections::binary_heap","",2,null],[11,"clone_from","","",2,null],[11,"default","","",2,{"inputs":[],"output":{"name":"binaryheap"}}],[11,"fmt","","",2,null],[11,"new","","Creates an empty `BinaryHeap` as a max-heap.",2,{"inputs":[],"output":{"name":"binaryheap"}}],[11,"with_capacity","","Creates an empty `BinaryHeap` with a specific capacity.\nThis preallocates enough memory for `capacity` elements,\nso that the `BinaryHeap` does not have to be reallocated\nuntil it contains at least that many values.",2,{"inputs":[{"name":"usize"}],"output":{"name":"binaryheap"}}],[11,"iter","","Returns an iterator visiting all values in the underlying vector, in\narbitrary order.",2,null],[11,"peek","","Returns the greatest item in the binary heap, or `None` if it is empty.",2,null],[11,"capacity","","Returns the number of elements the binary heap can hold without reallocating.",2,null],[11,"reserve_exact","","Reserves the minimum capacity for exactly `additional` more elements to be inserted in the\ngiven `BinaryHeap`. Does nothing if the capacity is already sufficient.",2,null],[11,"reserve","","Reserves capacity for at least `additional` more elements to be inserted in the\n`BinaryHeap`. The collection may reserve more space to avoid frequent reallocations.",2,null],[11,"shrink_to_fit","","Discards as much additional capacity as possible.",2,null],[11,"pop","","Removes the greatest item from the binary heap and returns it, or `None` if it\nis empty.",2,null],[11,"push","","Pushes an item onto the binary heap.",2,null],[11,"push_pop","","Pushes an item onto the binary heap, then pops the greatest item off the queue in\nan optimized fashion.",2,null],[11,"replace","","Pops the greatest item off the binary heap, then pushes an item onto the queue in\nan optimized fashion. The push is done regardless of whether the binary heap\nwas empty.",2,null],[11,"into_vec","","Consumes the `BinaryHeap` and returns the underlying vector\nin arbitrary order.",2,null],[11,"into_sorted_vec","","Consumes the `BinaryHeap` and returns a vector in sorted\n(ascending) order.",2,null],[11,"len","","Returns the length of the binary heap.",2,null],[11,"is_empty","","Checks if the binary heap is empty.",2,null],[11,"drain","","Clears the binary heap, returning an iterator over the removed elements.",2,null],[11,"clear","","Drops all items from the binary heap.",2,null],[11,"append","","Moves all the elements of `other` into `self`, leaving `other` empty.",2,null],[11,"clone","","",3,null],[11,"next","","",3,null],[11,"size_hint","","",3,null],[11,"next_back","","",3,null],[11,"clone","","",4,null],[11,"next","","",4,null],[11,"size_hint","","",4,null],[11,"next_back","","",4,null],[11,"next","","",5,null],[11,"size_hint","","",5,null],[11,"next_back","","",5,null],[11,"from","","",2,{"inputs":[{"name":"vec"}],"output":{"name":"binaryheap"}}],[11,"from","collections::vec","",6,{"inputs":[{"name":"binaryheap"}],"output":{"name":"vec"}}],[11,"from_iter","collections::binary_heap","",2,{"inputs":[{"name":"i"}],"output":{"name":"binaryheap"}}],[11,"into_iter","","Creates a consuming iterator, that is, one that moves each value out of\nthe binary heap in arbitrary order. The binary heap cannot be used\nafter calling this.",2,null],[11,"extend","","",2,null],[11,"extend","","",2,null],[11,"drop","collections::btree::map","",7,null],[11,"clone","","",7,null],[11,"new","","Makes a new empty BTreeMap with a reasonable choice for B.",7,{"inputs":[],"output":{"name":"btreemap"}}],[11,"clear","","Clears the map, removing all values.",7,null],[11,"get","","Returns a reference to the value corresponding to the key.",7,null],[11,"contains_key","","Returns true if the map contains a value for the specified key.",7,null],[11,"get_mut","","Returns a mutable reference to the value corresponding to the key.",7,null],[11,"insert","","Inserts a key-value pair into the map.",7,null],[11,"remove","","Removes a key from the map, returning the value at the key if the key\nwas previously in the map.",7,null],[11,"append","","Moves all elements from `other` into `Self`, leaving `other` empty.",7,null],[11,"range","","Constructs a double-ended iterator over a sub-range of elements in the map, starting\nat min, and ending at max. If min is `Unbounded`, then it will be treated as &quot;negative\ninfinity&quot;, and if max is `Unbounded`, then it will be treated as &quot;positive infinity&quot;.\nThus range(Unbounded, Unbounded) will yield the whole collection.",7,null],[11,"range_mut","","Constructs a mutable double-ended iterator over a sub-range of elements in the map, starting\nat min, and ending at max. If min is `Unbounded`, then it will be treated as &quot;negative\ninfinity&quot;, and if max is `Unbounded`, then it will be treated as &quot;positive infinity&quot;.\nThus range(Unbounded, Unbounded) will yield the whole collection.",7,null],[11,"entry","","Gets the given key&#39;s corresponding entry in the map for in-place manipulation.",7,null],[11,"next","","",8,null],[11,"size_hint","","",8,null],[11,"next_back","","",8,null],[11,"len","","",8,null],[11,"clone","","",8,null],[11,"next","","",9,null],[11,"size_hint","","",9,null],[11,"next_back","","",9,null],[11,"len","","",9,null],[11,"into_iter","","",7,null],[11,"drop","","",10,null],[11,"next","","",10,null],[11,"size_hint","","",10,null],[11,"next_back","","",10,null],[11,"len","","",10,null],[11,"next","","",11,null],[11,"size_hint","","",11,null],[11,"next_back","","",11,null],[11,"len","","",11,null],[11,"clone","","",11,null],[11,"next","","",12,null],[11,"size_hint","","",12,null],[11,"next_back","","",12,null],[11,"len","","",12,null],[11,"clone","","",12,null],[11,"next","","",13,null],[11,"next","","",14,null],[11,"size_hint","","",14,null],[11,"next_back","","",14,null],[11,"len","","",14,null],[11,"next_back","","",13,null],[11,"clone","","",13,null],[11,"next","","",15,null],[11,"next_back","","",15,null],[11,"from_iter","","",7,{"inputs":[{"name":"t"}],"output":{"name":"btreemap"}}],[11,"extend","","",7,null],[11,"extend","","",7,null],[11,"hash","","",7,null],[11,"default","","",7,{"inputs":[],"output":{"name":"btreemap"}}],[11,"eq","","",7,null],[11,"partial_cmp","","",7,null],[11,"cmp","","",7,null],[11,"fmt","","",7,null],[11,"index","","",7,null],[11,"iter","","Gets an iterator over the entries of the map, sorted by key.",7,null],[11,"iter_mut","","Gets a mutable iterator over the entries of the map, sorted by key.",7,null],[11,"keys","","Gets an iterator over the keys of the map, in sorted order.",7,null],[11,"values","","Gets an iterator over the values of the map, in order by key.",7,null],[11,"values_mut","","Gets a mutable iterator over the values of the map, in order by key.",7,null],[11,"len","","Returns the number of elements in the map.",7,null],[11,"is_empty","","Returns true if the map contains no elements.",7,null],[11,"or_insert","","Ensures a value is in the entry by inserting the default if empty, and returns\na mutable reference to the value in the entry.",16,null],[11,"or_insert_with","","Ensures a value is in the entry by inserting the result of the default function if empty,\nand returns a mutable reference to the value in the entry.",16,null],[11,"key","","Returns a reference to this entry&#39;s key.",16,null],[11,"key","","Gets a reference to the key that would be used when inserting a value\nthrough the VacantEntry.",17,null],[11,"insert","","Sets the value of the entry with the VacantEntry&#39;s key,\nand returns a mutable reference to it.",17,null],[11,"key","","Gets a reference to the key in the entry.",18,null],[11,"get","","Gets a reference to the value in the entry.",18,null],[11,"get_mut","","Gets a mutable reference to the value in the entry.",18,null],[11,"into_mut","","Converts the entry into a mutable reference to its value.",18,null],[11,"insert","","Sets the value of the entry with the OccupiedEntry&#39;s key,\nand returns the entry&#39;s old value.",18,null],[11,"remove","","Takes the value of the entry out of the map, and returns it.",18,null],[11,"partial_cmp","collections::btree::set","",19,null],[11,"lt","","",19,null],[11,"le","","",19,null],[11,"gt","","",19,null],[11,"ge","","",19,null],[11,"cmp","","",19,null],[11,"eq","","",19,null],[11,"ne","","",19,null],[11,"hash","","",19,null],[11,"clone","","",19,null],[11,"new","","Makes a new BTreeSet with a reasonable choice of B.",19,{"inputs":[],"output":{"name":"btreeset"}}],[11,"iter","","Gets an iterator over the BTreeSet&#39;s contents.",19,null],[11,"range","","Constructs a double-ended iterator over a sub-range of elements in the set, starting\nat min, and ending at max. If min is `Unbounded`, then it will be treated as &quot;negative\ninfinity&quot;, and if max is `Unbounded`, then it will be treated as &quot;positive infinity&quot;.\nThus range(Unbounded, Unbounded) will yield the whole collection.",19,null],[11,"difference","","Visits the values representing the difference, in ascending order.",19,null],[11,"symmetric_difference","","Visits the values representing the symmetric difference, in ascending order.",19,null],[11,"intersection","","Visits the values representing the intersection, in ascending order.",19,null],[11,"union","","Visits the values representing the union, in ascending order.",19,null],[11,"len","","Returns the number of elements in the set.",19,null],[11,"is_empty","","Returns true if the set contains no elements.",19,null],[11,"clear","","Clears the set, removing all values.",19,null],[11,"contains","","Returns `true` if the set contains a value.",19,null],[11,"get","","Returns a reference to the value in the set, if any, that is equal to the given value.",19,null],[11,"is_disjoint","","Returns `true` if the set has no elements in common with `other`.\nThis is equivalent to checking for an empty intersection.",19,null],[11,"is_subset","","Returns `true` if the set is a subset of another.",19,null],[11,"is_superset","","Returns `true` if the set is a superset of another.",19,null],[11,"insert","","Adds a value to the set.",19,null],[11,"replace","","Adds a value to the set, replacing the existing value, if any, that is equal to the given\none. Returns the replaced value.",19,null],[11,"remove","","Removes a value from the set. Returns `true` if the value was\npresent in the set.",19,null],[11,"take","","Removes and returns the value in the set, if any, that is equal to the given one.",19,null],[11,"append","","Moves all elements from `other` into `Self`, leaving `other` empty.",19,null],[11,"from_iter","","",19,{"inputs":[{"name":"i"}],"output":{"name":"btreeset"}}],[11,"into_iter","","Gets an iterator for moving out the BtreeSet&#39;s contents.",19,null],[11,"extend","","",19,null],[11,"extend","","",19,null],[11,"default","","",19,{"inputs":[],"output":{"name":"btreeset"}}],[11,"fmt","","",19,null],[11,"clone","","",20,null],[11,"next","","",20,null],[11,"size_hint","","",20,null],[11,"next_back","","",20,null],[11,"len","","",20,null],[11,"next","","",21,null],[11,"size_hint","","",21,null],[11,"next_back","","",21,null],[11,"len","","",21,null],[11,"clone","","",22,null],[11,"next","","",22,null],[11,"next_back","","",22,null],[11,"clone","","",23,null],[11,"next","","",23,null],[11,"size_hint","","",23,null],[11,"clone","","",24,null],[11,"next","","",24,null],[11,"size_hint","","",24,null],[11,"clone","","",25,null],[11,"next","","",25,null],[11,"size_hint","","",25,null],[11,"clone","","",26,null],[11,"next","","",26,null],[11,"size_hint","","",26,null],[11,"borrow","collections::borrow","",27,null],[11,"clone","","",27,null],[11,"to_mut","","Acquires a mutable reference to the owned form of the data.",27,null],[11,"into_owned","","Extracts the owned data.",27,null],[11,"deref","","",27,null],[11,"cmp","","",27,null],[11,"eq","","",27,null],[11,"partial_cmp","","",27,null],[11,"fmt","","",27,null],[11,"fmt","","",27,null],[11,"hash","","",27,null],[11,"as_ref","","",27,null],[11,"hash","collections::enum_set","",28,null],[11,"cmp","","",28,null],[11,"partial_cmp","","",28,null],[11,"lt","","",28,null],[11,"le","","",28,null],[11,"gt","","",28,null],[11,"ge","","",28,null],[11,"eq","","",28,null],[11,"ne","","",28,null],[11,"clone","","",28,null],[11,"fmt","","",28,null],[11,"new","","Returns an empty `EnumSet`.",28,{"inputs":[],"output":{"name":"enumset"}}],[11,"len","","Returns the number of elements in the given `EnumSet`.",28,null],[11,"is_empty","","Returns true if the `EnumSet` is empty.",28,null],[11,"clear","","",28,null],[11,"is_disjoint","","Returns `false` if the `EnumSet` contains any enum of the given `EnumSet`.",28,null],[11,"is_superset","","Returns `true` if a given `EnumSet` is included in this `EnumSet`.",28,null],[11,"is_subset","","Returns `true` if this `EnumSet` is included in the given `EnumSet`.",28,null],[11,"union","","Returns the union of both `EnumSets`.",28,null],[11,"intersection","","Returns the intersection of both `EnumSets`.",28,null],[11,"insert","","Adds an enum to the `EnumSet`, and returns `true` if it wasn&#39;t there before",28,null],[11,"remove","","Removes an enum from the EnumSet",28,null],[11,"contains","","Returns `true` if an `EnumSet` contains a given enum.",28,null],[11,"iter","","Returns an iterator over an `EnumSet`.",28,null],[11,"sub","","",28,null],[11,"bitor","","",28,null],[11,"bitand","","",28,null],[11,"bitxor","","",28,null],[11,"clone","","",29,null],[11,"next","","",29,null],[11,"size_hint","","",29,null],[11,"from_iter","","",28,{"inputs":[{"name":"i"}],"output":{"name":"enumset"}}],[11,"extend","","",28,null],[11,"extend","","",28,null],[11,"clone","collections::linked_list","",30,null],[11,"clone","","",31,null],[11,"default","","",32,{"inputs":[],"output":{"name":"linkedlist"}}],[11,"new","","Creates an empty `LinkedList`.",32,{"inputs":[],"output":{"name":"linkedlist"}}],[11,"append","","Moves all elements from `other` to the end of the list.",32,null],[11,"iter","","Provides a forward iterator.",32,null],[11,"iter_mut","","Provides a forward iterator with mutable references.",32,null],[11,"is_empty","","Returns `true` if the `LinkedList` is empty.",32,null],[11,"len","","Returns the length of the `LinkedList`.",32,null],[11,"clear","","Removes all elements from the `LinkedList`.",32,null],[11,"contains","","Returns `true` if the `LinkedList` contains an element equal to the\ngiven value.",32,null],[11,"front","","Provides a reference to the front element, or `None` if the list is\nempty.",32,null],[11,"front_mut","","Provides a mutable reference to the front element, or `None` if the list\nis empty.",32,null],[11,"back","","Provides a reference to the back element, or `None` if the list is\nempty.",32,null],[11,"back_mut","","Provides a mutable reference to the back element, or `None` if the list\nis empty.",32,null],[11,"push_front","","Adds an element first in the list.",32,null],[11,"pop_front","","Removes the first element and returns it, or `None` if the list is\nempty.",32,null],[11,"push_back","","Appends an element to the back of a list",32,null],[11,"pop_back","","Removes the last element from a list and returns it, or `None` if\nit is empty.",32,null],[11,"split_off","","Splits the list into two at the given index. Returns everything after the given index,\nincluding the index.",32,null],[11,"front_place","","Returns a place for insertion at the front of the list.",32,null],[11,"back_place","","Returns a place for insertion at the back of the list.",32,null],[11,"drop","","",32,null],[11,"next","","",30,null],[11,"size_hint","","",30,null],[11,"next_back","","",30,null],[11,"next","","",33,null],[11,"size_hint","","",33,null],[11,"next_back","","",33,null],[11,"insert_next","","Inserts `elt` just after the element most recently returned by `.next()`.\nThe inserted element does not appear in the iteration.",33,null],[11,"peek_next","","Provides a reference to the next element, without changing the iterator.",33,null],[11,"next","","",31,null],[11,"size_hint","","",31,null],[11,"next_back","","",31,null],[11,"from_iter","","",32,{"inputs":[{"name":"t"}],"output":{"name":"linkedlist"}}],[11,"into_iter","","Consumes the list into an iterator yielding elements by value.",32,null],[11,"extend","","",32,null],[11,"extend","","",32,null],[11,"eq","","",32,null],[11,"ne","","",32,null],[11,"partial_cmp","","",32,null],[11,"cmp","","",32,null],[11,"clone","","",32,null],[11,"fmt","","",32,null],[11,"hash","","",32,null],[11,"make_place","","",34,null],[11,"pointer","","",34,null],[11,"finalize","","",34,null],[11,"make_place","","",35,null],[11,"pointer","","",35,null],[11,"finalize","","",35,null],[11,"start","core::ops","",36,null],[11,"end","","",37,null],[11,"start","","",38,null],[11,"end","","",38,null],[11,"borrow","collections::vec","",6,null],[11,"borrow_mut","","",6,null],[11,"clone","collections::str","",39,null],[11,"next","","",39,null],[11,"size_hint","","",39,null],[11,"borrow","collections::string","",1,null],[11,"fmt","core::str::pattern","",40,null],[11,"eq","","",40,null],[11,"ne","","",40,null],[11,"clone","","",40,null],[11,"fmt","","",41,null],[11,"clone","","",41,null],[11,"haystack","","",41,null],[11,"next","","",41,null],[11,"next_match","","",41,null],[11,"next_reject","","",41,null],[11,"next_back","","",41,null],[11,"next_match_back","","",41,null],[11,"next_reject_back","","",41,null],[11,"fmt","","",42,null],[11,"clone","","",42,null],[11,"haystack","","",42,null],[11,"next","","",42,null],[11,"next_match","","",42,null],[11,"next_reject","","",42,null],[11,"next_back","","",42,null],[11,"next_match_back","","",42,null],[11,"next_reject_back","","",42,null],[11,"clone","","",43,null],[11,"fmt","","",43,null],[11,"haystack","","",43,null],[11,"next","","",43,null],[11,"next_match","","",43,null],[11,"next_reject","","",43,null],[11,"next_back","","",43,null],[11,"next_match_back","","",43,null],[11,"next_reject_back","","",43,null],[11,"fmt","","",44,null],[11,"clone","","",44,null],[11,"haystack","","",44,null],[11,"next","","",44,null],[11,"next_match","","",44,null],[11,"next_back","","",44,null],[11,"next_match_back","","",44,null],[11,"cmp","collections::string","",1,null],[11,"partial_cmp","","",1,null],[11,"lt","","",1,null],[11,"le","","",1,null],[11,"gt","","",1,null],[11,"ge","","",1,null],[11,"fmt","","",45,null],[11,"fmt","","",46,null],[11,"into_bytes","","Returns the bytes that were attempted to convert to a `String`.",45,null],[11,"utf8_error","","Fetch a `Utf8Error` to get more details about the conversion failure.",45,null],[11,"fmt","","",45,null],[11,"fmt","","",46,null],[11,"clone","","",1,null],[11,"clone_from","","",1,null],[11,"from_iter","","",1,{"inputs":[{"name":"i"}],"output":{"name":"string"}}],[11,"from_iter","","",1,{"inputs":[{"name":"i"}],"output":{"name":"string"}}],[11,"from_iter","","",1,{"inputs":[{"name":"i"}],"output":{"name":"string"}}],[11,"extend","","",1,null],[11,"extend","","",1,null],[11,"extend","","",1,null],[11,"extend","","",1,null],[11,"eq","","",1,null],[11,"ne","","",1,null],[11,"eq","","",1,null],[11,"ne","","",1,null],[11,"eq","","",1,null],[11,"ne","","",1,null],[11,"eq","collections::borrow","",27,null],[11,"ne","","",27,null],[11,"eq","","",27,null],[11,"ne","","",27,null],[11,"eq","","",27,null],[11,"ne","","",27,null],[11,"eq","collections::string","",1,null],[11,"ne","","",1,null],[11,"default","","",1,{"inputs":[],"output":{"name":"string"}}],[11,"fmt","","",1,null],[11,"fmt","","",1,null],[11,"hash","","",1,null],[11,"add","","",1,null],[11,"index","","",1,null],[11,"index","","",1,null],[11,"index","","",1,null],[11,"index","","",1,null],[11,"index","","",1,null],[11,"index","","",1,null],[11,"index_mut","","",1,null],[11,"index_mut","","",1,null],[11,"index_mut","","",1,null],[11,"index_mut","","",1,null],[11,"index_mut","","",1,null],[11,"index_mut","","",1,null],[11,"deref","","",1,null],[11,"deref_mut","","",1,null],[11,"from_str","","",1,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"clone","","",47,null],[11,"fmt","","",47,null],[11,"fmt","","",47,null],[11,"eq","","",47,null],[11,"as_ref","","",1,null],[11,"as_ref","","",1,null],[11,"from","","",1,{"inputs":[{"name":"str"}],"output":{"name":"string"}}],[11,"from","collections::borrow","",27,{"inputs":[{"name":"str"}],"output":{"name":"cow"}}],[11,"from","","",27,{"inputs":[{"name":"string"}],"output":{"name":"cow"}}],[11,"into","collections::string","",1,null],[11,"write_str","","",1,null],[11,"write_char","","",1,null],[11,"drop","","",48,null],[11,"next","","",48,null],[11,"size_hint","","",48,null],[11,"next_back","","",48,null],[11,"new","collections::vec","Constructs a new, empty `Vec&lt;T&gt;`.",6,{"inputs":[],"output":{"name":"vec"}}],[11,"with_capacity","","Constructs a new, empty `Vec&lt;T&gt;` with the specified capacity.",6,{"inputs":[{"name":"usize"}],"output":{"name":"vec"}}],[11,"from_raw_parts","","Creates a `Vec&lt;T&gt;` directly from the raw components of another vector.",6,null],[11,"capacity","","Returns the number of elements the vector can hold without\nreallocating.",6,null],[11,"reserve","","Reserves capacity for at least `additional` more elements to be inserted\nin the given `Vec&lt;T&gt;`. The collection may reserve more space to avoid\nfrequent reallocations.",6,null],[11,"reserve_exact","","Reserves the minimum capacity for exactly `additional` more elements to\nbe inserted in the given `Vec&lt;T&gt;`. Does nothing if the capacity is already\nsufficient.",6,null],[11,"shrink_to_fit","","Shrinks the capacity of the vector as much as possible.",6,null],[11,"into_boxed_slice","","Converts the vector into Box&lt;[T]&gt;.",6,null],[11,"truncate","","Shorten a vector to be `len` elements long, dropping excess elements.",6,null],[11,"as_slice","","Extracts a slice containing the entire vector.",6,null],[11,"as_mut_slice","","Extracts a mutable slice of the entire vector.",6,null],[11,"set_len","","Sets the length of a vector.",6,null],[11,"swap_remove","","Removes an element from anywhere in the vector and return it, replacing\nit with the last element.",6,null],[11,"insert","","Inserts an element at position `index` within the vector, shifting all\nelements after it to the right.",6,null],[11,"remove","","Removes and returns the element at position `index` within the vector,\nshifting all elements after it to the left.",6,null],[11,"retain","","Retains only the elements specified by the predicate.",6,null],[11,"push","","Appends an element to the back of a collection.",6,null],[11,"pop","","Removes the last element from a vector and returns it, or `None` if it\nis empty.",6,null],[11,"append","","Moves all the elements of `other` into `Self`, leaving `other` empty.",6,null],[11,"drain","","Create a draining iterator that removes the specified range in the vector\nand yields the removed items.",6,null],[11,"clear","","Clears the vector, removing all values.",6,null],[11,"len","","Returns the number of elements in the vector.",6,null],[11,"is_empty","","Returns `true` if the vector contains no elements.",6,null],[11,"split_off","","Splits the collection into two at the given index.",6,null],[11,"resize","","Resizes the `Vec` in-place so that `len()` is equal to `new_len`.",6,null],[11,"extend_from_slice","","Appends all elements in a slice to the `Vec`.",6,null],[11,"dedup","","Removes consecutive repeated elements in the vector.",6,null],[11,"clone","","",6,null],[11,"clone_from","","",6,null],[11,"hash","","",6,null],[11,"index","","",6,null],[11,"index_mut","","",6,null],[11,"index","","",6,null],[11,"index","","",6,null],[11,"index","","",6,null],[11,"index","","",6,null],[11,"index","","",6,null],[11,"index","","",6,null],[11,"index_mut","","",6,null],[11,"index_mut","","",6,null],[11,"index_mut","","",6,null],[11,"index_mut","","",6,null],[11,"index_mut","","",6,null],[11,"index_mut","","",6,null],[11,"deref","","",6,null],[11,"deref_mut","","",6,null],[11,"from_iter","","",6,{"inputs":[{"name":"i"}],"output":{"name":"vec"}}],[11,"into_iter","","Creates a consuming iterator, that is, one that moves each value out of\nthe vector (from start to end). The vector cannot be used after calling\nthis.",6,null],[11,"extend","","",6,null],[11,"extend","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","collections::borrow","",27,null],[11,"ne","","",27,null],[11,"eq","","",27,null],[11,"ne","","",27,null],[11,"eq","","",27,null],[11,"ne","","",27,null],[11,"eq","collections::vec","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"partial_cmp","","",6,null],[11,"cmp","","",6,null],[11,"drop","","",6,null],[11,"default","","",6,{"inputs":[],"output":{"name":"vec"}}],[11,"fmt","","",6,null],[11,"as_ref","","",6,null],[11,"as_mut","","",6,null],[11,"as_ref","","",6,null],[11,"as_mut","","",6,null],[11,"from","","",6,null],[11,"from","","",6,{"inputs":[{"name":"str"}],"output":{"name":"vec"}}],[11,"from","collections::borrow","",27,null],[11,"from","","",27,{"inputs":[{"name":"vec"}],"output":{"name":"cow"}}],[11,"from_iter","","",27,{"inputs":[{"name":"i"}],"output":{"name":"cow"}}],[11,"next","collections::vec","",49,null],[11,"size_hint","","",49,null],[11,"count","","",49,null],[11,"next_back","","",49,null],[11,"clone","","",49,null],[11,"drop","","",49,null],[11,"next","","",50,null],[11,"size_hint","","",50,null],[11,"next_back","","",50,null],[11,"drop","","",50,null],[11,"clone","collections::vec_deque","",51,null],[11,"drop","","",51,null],[11,"default","","",51,{"inputs":[],"output":{"name":"vecdeque"}}],[11,"new","","Creates an empty `VecDeque`.",51,{"inputs":[],"output":{"name":"vecdeque"}}],[11,"with_capacity","","Creates an empty `VecDeque` with space for at least `n` elements.",51,{"inputs":[{"name":"usize"}],"output":{"name":"vecdeque"}}],[11,"get","","Retrieves an element in the `VecDeque` by index.",51,null],[11,"get_mut","","Retrieves an element in the `VecDeque` mutably by index.",51,null],[11,"swap","","Swaps elements at indices `i` and `j`.",51,null],[11,"capacity","","Returns the number of elements the `VecDeque` can hold without\nreallocating.",51,null],[11,"reserve_exact","","Reserves the minimum capacity for exactly `additional` more elements to be inserted in the\ngiven `VecDeque`. Does nothing if the capacity is already sufficient.",51,null],[11,"reserve","","Reserves capacity for at least `additional` more elements to be inserted in the given\n`VecDeque`. The collection may reserve more space to avoid frequent reallocations.",51,null],[11,"shrink_to_fit","","Shrinks the capacity of the `VecDeque` as much as possible.",51,null],[11,"truncate","","Shortens a `VecDeque`, dropping excess elements from the back.",51,null],[11,"iter","","Returns a front-to-back iterator.",51,null],[11,"iter_mut","","Returns a front-to-back iterator that returns mutable references.",51,null],[11,"as_slices","","Returns a pair of slices which contain, in order, the contents of the\n`VecDeque`.",51,null],[11,"as_mut_slices","","Returns a pair of slices which contain, in order, the contents of the\n`VecDeque`.",51,null],[11,"len","","Returns the number of elements in the `VecDeque`.",51,null],[11,"is_empty","","Returns true if the buffer contains no elements",51,null],[11,"drain","","Create a draining iterator that removes the specified range in the\n`VecDeque` and yields the removed items.",51,null],[11,"clear","","Clears the buffer, removing all values.",51,null],[11,"contains","","Returns `true` if the `VecDeque` contains an element equal to the\ngiven value.",51,null],[11,"front","","Provides a reference to the front element, or `None` if the sequence is\nempty.",51,null],[11,"front_mut","","Provides a mutable reference to the front element, or `None` if the\nsequence is empty.",51,null],[11,"back","","Provides a reference to the back element, or `None` if the sequence is\nempty.",51,null],[11,"back_mut","","Provides a mutable reference to the back element, or `None` if the\nsequence is empty.",51,null],[11,"pop_front","","Removes the first element and returns it, or `None` if the sequence is\nempty.",51,null],[11,"push_front","","Inserts an element first in the sequence.",51,null],[11,"push_back","","Appends an element to the back of a buffer",51,null],[11,"pop_back","","Removes the last element from a buffer and returns it, or `None` if\nit is empty.",51,null],[11,"swap_remove_back","","Removes an element from anywhere in the `VecDeque` and returns it, replacing it with the\nlast element.",51,null],[11,"swap_remove_front","","Removes an element from anywhere in the `VecDeque` and returns it,\nreplacing it with the first element.",51,null],[11,"insert","","Inserts an element at `index` within the `VecDeque`. Whichever\nend is closer to the insertion point will be moved to make room,\nand all the affected elements will be moved to new positions.",51,null],[11,"remove","","Removes and returns the element at `index` from the `VecDeque`.\nWhichever end is closer to the removal point will be moved to make\nroom, and all the affected elements will be moved to new positions.\nReturns `None` if `index` is out of bounds.",51,null],[11,"split_off","","Splits the collection into two at the given index.",51,null],[11,"append","","Moves all the elements of `other` into `Self`, leaving `other` empty.",51,null],[11,"retain","","Retains only the elements specified by the predicate.",51,null],[11,"resize","","Modifies the `VecDeque` in-place so that `len()` is equal to new_len,\neither by removing excess elements or by appending copies of a value to the back.",51,null],[11,"clone","","",52,null],[11,"next","","",52,null],[11,"size_hint","","",52,null],[11,"next_back","","",52,null],[11,"next","","",53,null],[11,"size_hint","","",53,null],[11,"next_back","","",53,null],[11,"clone","","",54,null],[11,"next","","",54,null],[11,"size_hint","","",54,null],[11,"next_back","","",54,null],[11,"drop","","",55,null],[11,"next","","",55,null],[11,"size_hint","","",55,null],[11,"next_back","","",55,null],[11,"eq","","",51,null],[11,"partial_cmp","","",51,null],[11,"cmp","","",51,null],[11,"hash","","",51,null],[11,"index","","",51,null],[11,"index_mut","","",51,null],[11,"from_iter","","",51,{"inputs":[{"name":"t"}],"output":{"name":"vecdeque"}}],[11,"into_iter","","Consumes the list into a front-to-back iterator yielding elements by\nvalue.",51,null],[11,"extend","","",51,null],[11,"extend","","",51,null],[11,"fmt","","",51,null],[11,"from","","",51,{"inputs":[{"name":"vec"}],"output":{"name":"vecdeque"}}],[11,"from","collections::vec","",6,{"inputs":[{"name":"vecdeque"}],"output":{"name":"vec"}}],[11,"eq","collections","",56,null],[11,"ne","","",56,null],[11,"hash","","",56,null],[11,"fmt","","",56,null],[11,"clone","","",56,null],[11,"clone","alloc::boxed","",57,null],[11,"pointer","","",58,null],[11,"make_place","","",58,{"inputs":[],"output":{"name":"intermediatebox"}}],[11,"finalize","","",58,null],[11,"finalize","","",59,{"inputs":[{"name":"intermediatebox"}],"output":{"name":"box"}}],[11,"make_place","","",57,null],[11,"drop","","",58,null],[11,"new","","Allocates memory on the heap and then places `x` into it.",59,{"inputs":[{"name":"t"}],"output":{"name":"box"}}],[11,"from_raw","","Constructs a box from a raw pointer.",59,null],[11,"into_raw","","Consumes the `Box`, returning the wrapped raw pointer.",59,null],[11,"default","","",59,{"inputs":[],"output":{"name":"box"}}],[11,"default","","",59,{"inputs":[],"output":{"name":"box"}}],[11,"clone","","Returns a new box with a `clone()` of this box&#39;s contents.",59,null],[11,"clone_from","","Copies `source`&#39;s contents into `self` without creating a new allocation.",59,null],[11,"clone","","",59,null],[11,"eq","","",59,null],[11,"ne","","",59,null],[11,"partial_cmp","","",59,null],[11,"lt","","",59,null],[11,"le","","",59,null],[11,"ge","","",59,null],[11,"gt","","",59,null],[11,"cmp","","",59,null],[11,"hash","","",59,null],[11,"from","","",59,{"inputs":[{"name":"t"}],"output":{"name":"box"}}],[11,"downcast","","Attempt to downcast the box to a concrete type.",59,null],[11,"downcast","","Attempt to downcast the box to a concrete type.",59,null],[11,"fmt","","",59,null],[11,"fmt","","",59,null],[11,"fmt","","",59,null],[11,"deref","","",59,null],[11,"deref_mut","","",59,null],[11,"next","","",59,null],[11,"size_hint","","",59,null],[11,"next_back","","",59,null],[11,"call_once","","",59,null],[11,"call_once","","",59,null],[11,"clone","","",59,null],[11,"borrow","","",59,null],[11,"borrow_mut","","",59,null],[11,"as_ref","","",59,null],[11,"as_mut","","",59,null],[11,"new","hashicorp_vault","",0,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"result"}}],[11,"set_secret","","",0,null],[11,"get_secret","","",0,null],[11,"delete_secret","","",0,null]],"paths":[[3,"VaultClient"],[3,"String"],[3,"BinaryHeap"],[3,"Iter"],[3,"IntoIter"],[3,"Drain"],[3,"Vec"],[3,"BTreeMap"],[3,"Iter"],[3,"IterMut"],[3,"IntoIter"],[3,"Keys"],[3,"Values"],[3,"Range"],[3,"ValuesMut"],[3,"RangeMut"],[4,"Entry"],[3,"VacantEntry"],[3,"OccupiedEntry"],[3,"BTreeSet"],[3,"Iter"],[3,"IntoIter"],[3,"Range"],[3,"Difference"],[3,"SymmetricDifference"],[3,"Intersection"],[3,"Union"],[4,"Cow"],[3,"EnumSet"],[3,"Iter"],[3,"Iter"],[3,"IntoIter"],[3,"LinkedList"],[3,"IterMut"],[3,"FrontPlace"],[3,"BackPlace"],[3,"RangeFrom"],[3,"RangeTo"],[3,"Range"],[3,"EncodeUtf16"],[4,"SearchStep"],[3,"CharSearcher"],[3,"CharSliceSearcher"],[3,"CharPredicateSearcher"],[3,"StrSearcher"],[3,"FromUtf8Error"],[3,"FromUtf16Error"],[4,"ParseError"],[3,"Drain"],[3,"IntoIter"],[3,"Drain"],[3,"VecDeque"],[3,"Iter"],[3,"IterMut"],[3,"IntoIter"],[3,"Drain"],[4,"Bound"],[3,"ExchangeHeapSingleton"],[3,"IntermediateBox"],[3,"Box"]]};
initSearch(searchIndex);
