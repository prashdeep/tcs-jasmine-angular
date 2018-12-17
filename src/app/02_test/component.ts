export class UserComponent{

    constructor(private _name:string, 
                private _age:number, 
                private _salary:number){
    }

    descUser(){
        return `Name:${this._name} Age:${this._age} Salary:${this._salary}` ;
    }

    set name(name:string){
        this._name = name;
    }


    get name(){
        return this._name;
    }

    get age(){
        return this._age;
    }

    get salary(){
        return this._salary;
    }
}