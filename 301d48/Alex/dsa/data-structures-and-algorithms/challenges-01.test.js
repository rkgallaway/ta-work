function operate(a, b, operation) {
	if(operation === 'add') {
		return a + b;
	} else if(operation === 'subtract') {
		return a -b;
	}
}

describe('sum two numbers', () => {
	it('should add two numbers', () => {
		const expected = 4;
		const actual = operate(2,2, 'add');
		expect(actual).toBe(expected);
	});

	it('should subtract two numbers', () => {
		const expected = 0;
		const actual = operate(2,2, 'subtract');
		expect(actual).toBe(expected);
	});
});

