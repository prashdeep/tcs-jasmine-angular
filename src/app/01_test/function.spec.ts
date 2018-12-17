import {greet} from './functionTest';

describe('tests casea',()=>{

    it('assert with positive test cases',()=>{
        let result = greet('good morning', 'Vikas');
        expect(result).toBe('welcome Vikas!! message ');
    });

    it('assert with negative test case',()=>{
        let result = greet('naveen', 'welcome');
        expect(result).not.toBe('welcome Vikas!! good morning ');
    });

});