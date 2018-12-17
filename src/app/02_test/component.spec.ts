import { UserComponent } from "./component";
    

describe('testing the UserComponent',()=>{
    let user;

    beforeEach(()=>{
        user= new UserComponent('vinay',22,250000);
    });
    it('testing the component creation',()=>{
        expect(user.name).not.toBeNull();
        expect(user.name).toBe('vinay');
        expect(user.age).toBe(22);
        expect(user.salary).toBe(250000);
    });

    it('test the description function',()=>{
        expect(user.descUser()).toBe('Name:vinay Age:22 Salary:250000');
    });

    it('test the setter method',()=>{
        let strName="kiran";
        user.name=strName;
        expect(user.name).toBe(strName);
    });

})