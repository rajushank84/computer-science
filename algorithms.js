//http://www.thatjsdude.com/interview/js1.html

var factorial = function () {
	if (num === 0) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
};

var reverseString = function (str) {
	for (var i = str.length - 1, result = ''; i >= 0; result+= str[i--]) {}
	return result;
};

var fibonacci = function (max) {
	var fib = [0, 1];

	for (var i = 2; i < max; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}

	return fib;
};

var isPrime = function (num) {
	var divider = 2;

	while (divider < num) {
		if (num % divider === 0) {
			return false;
		}
		divider++;
	}

	return true;
};

var deDupe = function (arr) {
	var result = [];

	for (var i = 0; i < arr.length; i++) {
		if (result.indexOf(arr[i]) === -1) {
			result.push(arr[i]);
		}
	}

	return result;
};

var primeFactors = function (num) {
	var divider = 2,
		result = [],
		temp;

	while (divider < num) {
		if (num % divider === 0) {
			result.push(divider);
		}
		divider++;
	}

	for (var i = 0; i < result.length; i++) {
		if (!isPrime(result[i])) {
			temp = primeFactors(result[i]);

			for (var j = 0; j < temp.length; j++) {
				result.splice(i, 1, temp[j]);
			}
		}
	}

	return deDupe(result);
};

var bubbleSort = function (arr) {
	var swapped,
		i,
		temp;

	do {
		swapped = false;

		for (i = 1; i < arr.length; i++) {
			if (arr[i - 1] > arr[i]) {
				temp = arr[i - 1];
				arr[i - 1] = arr[i];
				arr[i] = temp;
				swapped = true;
			}
		}
	} while (swapped);

	return arr;
};

var quickSort = function (arr) {
	if (!arr.length) {
		return [];
	}

	var left = [],
		right = [],
		pivot = arr[0];

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}

	return quickSort(left).concat(pivot, quickSort(right));
};

var insertionSort = function () {
	// TODO: Implement	
};

var shellSort = function () {
	// TODO: Implement	
};

var mergeSort = function () {
	// TODO: Implement	
};

var bucketSort = function () {
	// TODO: Implement	
};

var linearSearch = function () {
	// TODO: Implement	
};

var binarySearch = function () {
	// TODO: Implement	
};

