describe("Math Calculator", function () {
  var calculator;

  //This will be called before running each spec
  beforeEach(function () {
    calculator = new MathCalculator();
    spyOn(calculator, "sum");
  });

  describe("when calculator is used to peform basic math operations", function () {
    // Spec for sum operation
    it("should be able to calculate sum of 3 and 5", function () {
      //call any method
      calculator.sum(3, 5);
      // verify it got executed
      expect(calculator.sum).toHaveBeenCalled();
      expect(calculator.sum).toHaveBeenCalledWith(3, 5);
    });

    // Spec for minus operation
    it("should be able to calculate minus of 10 and 5", function () {
      expect(calculator.minus(10, 5)).toEqual(5);
    });

    // Spec for multiply operation
    it("should be able to multiply 10 and 40", function () {
      expect(calculator.multiply(10, 40)).toEqual(400);
    });

    // Spec for factorial operation for positive number
    it("should be able to calculate factorial of 9", function () {
      expect(calculator.factorial(9)).toEqual(362880);
    });

    // Spec for factorial operation for negative number
    it("should be able to throw error in factorial operation when the number is negative", function () {
      expect(function () {
        calculator.factorial(-7);
      }).toThrowError(Error);
    });
  });
});
