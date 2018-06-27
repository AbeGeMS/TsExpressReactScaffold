import { SampleService } from '../../Service/sampleService'

describe('jasmine test suite', () => {
    it("1st test: a equl to true", () => {
        let a = true;
        expect(a).toBe(true);
    });

    it('sample service test sayHi()', () => {
        let sayHelloService = new SampleService();
        let actualResult = sayHelloService.SayHi("tester");
        expect(actualResult).toBe('Hello, my name is tester');
    });
});