export default class Person {
    private static retirementAge = 60;

    private _name?: string;
    private _age?: number;

    get name(){
        if(this._name === undefined) throw new Error("_name is not defined");
        return this._name;
    }
    
    get age(){
        if(this._age === undefined) throw new Error("_age is not defined");
        return this._age;
    }

    constructor(name: string, age: number){
        this._name = name;
        this._age =  age;
    }

    getInfo(){
        return { name: this.name, age: this.age };
    }
    isRetired(){
        if(this.age >= Person.retirementAge) return true;
        else return false;
    }
}
