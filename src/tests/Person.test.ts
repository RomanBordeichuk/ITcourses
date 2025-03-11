import Person from "../Person";

describe("Person", () => {
    test("getting info", () => {
        let tom = new Person("Tom", 20);
        expect(tom.getInfo()).toEqual({ name: "Tom", age: 20 });
    });

    test("checking retirement age, age = 70", () => {
        let tom = new Person("Tom", 70);
        expect(tom.isRetired()).toBe(true);
    })
    
    test("checking retirement age, age = 50", () => {
        let tom = new Person("Tom", 50);
        expect(tom.isRetired()).toBe(false);
    })
});