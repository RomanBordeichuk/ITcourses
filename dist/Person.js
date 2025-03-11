class Person {
    get name() {
        if (this._name === undefined)
            throw new Error("_name is not defined");
        return this._name;
    }
    get age() {
        if (this._age === undefined)
            throw new Error("_age is not defined");
        return this._age;
    }
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    getInfo() {
        return { name: this.name, age: this.age };
    }
    isRetired() {
        if (this.age >= Person.retirementAge)
            return true;
        else
            return false;
    }
}
Person.retirementAge = 60;
export default Person;
