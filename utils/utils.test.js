// .test.js extension tells our app that this is going to store our test cases and Mocha will run files with this extension
const expect = require('expect');
const utils = require('./utils')

// test case: where a test will be considered to succeed or fail - Mocha was built on behaviour-driven development (BDD)
// for a test to fail, you need to throw an error

describe('Utils', () => {

    describe('#add', () => {
        it ('should add two numbers', () => {
            var res = utils.add(33, 11);
        
            expect(res).toBe(44).toBeA('number');
            
            // if (res !== 44) {
            //     throw new Error(`Expected 44, but got ${res}.`)
            // }
        });
    });
    
    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        })
    })
    
    it ('should square a number', () => {
        var res = utils.sqare(4);
    
        expect(res).toBe(16).toBeA('number');
        
        // if (res !== 16) {
        //     throw new Error(`Expected 16, but got ${res}.`)
        // }
    });
    
    it ('should async square a number', (done) => {
        utils.asyncSquare(2, (res) => {
            expect(res).toBe(4).toBeA('number');
            done();
        });
    })
    
});

// it('should expect some values', () => {
   //  expect(12).toNotBe(11);
   // expect({name: 'Andrew'}).toNotEqual({name: 'Aurelia'}); // toBe() works well with strings, booleans, numbers. But it doesn't work with objeccts. Instead you have to use toEqual()
   // expect([1,2,3]).toInclude(3); //Use toInclude and toExclude with arrays and objects.
//    expect({
//        name: 'Aurelia',
//        age: 25,
//        location: 'London'
//    }).toExclude({
//        age: 23
//    })

// });

it ('should verify first and last names are set', () => {
    var person = {age: '25', location: 'London'};
    var me = utils.setName(person, 'Aurelia Specker');
    
    expect(me).toInclude({
        firstName: 'Aurelia', 
        lastName: 'Specker'
    });
});