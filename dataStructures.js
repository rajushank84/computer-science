// Generic item object that will be used in multiple data structures
var Item = function (value, previous, next) {
	this.value = value;
	this.previous = previous ? previous : null;
	this.next = next ? next : null;
};


// Stack
var Stack = function () {
	this.top = null;
	this.count = 0;
};

Stack.prototype.push = function (item) {
	var newItem = new Item(newItem, this.top, null);

	this.top = newItem;
	this.count++;

	return this.top.value;
};

Stack.prototype.pop = function () {
	var top = this.top;

	if (this.top) {
		this.top = this.top.previous;
		this.count--;
	}

	return top.value;
};

Stack.prototype.peek = function () {
	return this.top.value;
};

Stack.prototype.length = function () {
	return this.count;
};


// Queue
var Queue = function () {
	this.first = null;
	this.last = null;
	this.count = 0;
}

Queue.prototype.enqueue = function (item) {
	var last;

	if (this.last) {
		last = new Item(item, this.last);
		this.last.next = last;
	} else {
		last = new Item(item);
	}

	this.last = last;

	if (!this.first) {
		this.first = last;
	}

	this.count++;

	return last.value;
};

Queue.prototype.dequeue = function () {
	var first = this.first;

	if (!this.first) {
		return null;
	} else {
		this.first = this.first.next;
		this.count--;
		return first;
	}
};

Queue.prototype.length = function (item) {
	return this.count;
};


// Linked list
var LinkedList = function () {
	this.first = null;
	this.last = null;
	this.count = 0;
};

LinkedList.prototype.add = function (item) {
	var newItem = new Item(item);

	newItem.previous = this.last;

	if (this.last) {
		this.last.next = newItem;
		newItem.previous = this.last;
	}

	this.last = newItem;
	this.first = this.first || newItem;

	this.count++;
};

LinkedList.prototype.insert = function (item, position) {
	if (position === this.count) {
		this.add(item);
	} else if (this.count < position || position < 0) {
		return null;
	} else {
		var itemToInsertBefore = this.first,
			i = 0,
			newItem = new Item(item);

		while (i < position) {
			itemToInsertBefore = itemToInsertBefore.next;
			i++;
		}

		var previousItem = itemToInsertBefore.previous;

		itemToInsertBefore.previous = newItem;
		newItem.next = itemToInsertBefore;

		if (previousItem) {
			previousItem.next = newItem;
			newItem.previous = previousItem;
		}

		this.count++;
	}
};

LinkedList.prototype.delete = function (position) {
	if (position < 0 || position > this.count - 1) { // invalid position
		return null;
	} else if (this.count === 1) { // only one element
		this.count = 0;
		this.first = null;
		this.last = null;
	} else if (position === 0) { // deleting first element
		this.first.next.previous = null;
		this.first = this.first.next;
	} else if (position === this.count - 1) { // deleting last element
		this.last = this.last.previous;
		this.last.next = null;
	} else { // deleting in the middle
		var itemToDelete = this.first,
			i = 0;

		while (i < position) {
			itemToDelete = itemToDelete.next;
			i++;
		}

		itemToDelete.previous.next = itemToDelete.next;
		itemToDelete.next.previous = itemToDelete.previous;
	}

	this.count--;
};

LinkedList.prototype.get = function (position) {

	// invalid positions
	if (this.count < 1 || position > this.count - 1 || position < 0) {
		return null;
	}

	var i = 0,
		itemAtCurrent = this.first;

	while (i < position) {
		itemAtCurrent = itemAtCurrent.next;
		i++;
	}

	return itemAtCurrent.value;
};

LinkedList.prototype.toArray = function () {
	if (this.count < 0) {
		return [];
	}

	var arr = [],
		i = 0,
		item = this.first;

	while (item) {
		arr.push(item.value);
		item = item.next;
	}

	return arr;
};


// Binary tree
var BinaryTree = function () {
	this.root = null;
}

var BinaryTreeNode = function () {
	this.value = null;
	this.left = null;
	this.right = null;
	this.parent = null;
}

BinaryTree.prototype = {
	getNode: function (level, node) {
		// TODO: Implement
	},

	setNode: function (level, node, value) {
		// TODO: Implement
	},

	toArray: function () {
		// TODO: Implement
	}
};


// Binary search tree
var BinarySearchTree = function () {
	this.root = null;
};

var BinaryTreeNode = function () {
	this.value = null;
	this.left = null;
	this.right = null;
};

BinarySearchTree.prototype = {
	add: function (level, node) {
		// TODO: Implement
	},

	remove: function (level, node, value) {
		// TODO: Implement
	},

	clear: function () {
		// TODO: Implement
	},

	contains: function () {
		// TODO: Implement
	},

	height: function () {
		// TODO: Implement
	},

	isEmpty: function () {
		// TODO: Implement
	},

	size: function () {
		// TODO: Implement
	},

	toArray: function () {
		// TODO: Implement
	},

	toArray: function () {
		// TODO: Implement
	}
};


// Heap
var Heap = function () {
	// TODO: Implement
};

Heap.prototype = {
	// TODO: Implement
}