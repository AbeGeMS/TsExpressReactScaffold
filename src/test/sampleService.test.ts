/// <reference path="../../node_modules/@types/jasmine/index.d.ts"/>
/// <reference path="../Service/sampleService.ts"/>

import * as sample from '../Service/sampleService'

describe(' jasmine test suite',()=>{
    it("1st test: a equl to true",()=>{
        let a = true;
        expect(a).toBe(true);
    });
    
    it('sample service test sayHi()', () => {
        let sayHelloService = new sample.Abe.Service.SampleService();
        let actualResult = sayHelloService.SayHi("tester");
        expect(actualResult).toBe('Hello, my name is tester');
    });
});