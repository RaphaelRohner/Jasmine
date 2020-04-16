describe("Calculator", function() {

    beforeEach(function() {
        calc = new Calculator;
    });

    describe("Addition", function() {
        it("should return 42", function() {
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it("should return 26", function() {
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });
        it("return error if strings instead of numbers", function() {
            spyOn(window, "alert");
            calc.add("string");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });      
    });
});
