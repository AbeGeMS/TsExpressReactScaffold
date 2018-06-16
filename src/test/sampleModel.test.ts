/*
// This test can not work. Because we use webpack compile all client code into one js file(main.min.js).
// In this case, the test code couldn't reach to related product code. 
// TODO Find a manner to compile code for test or compile client size test to one js too.
import { SampleModel } from "../public/script/model/sampleModel";
import { DataProvider } from "../public/script/provider/dataProvider";

describe('Client test', () => {
    it('SampleModel.getServiceMessage should be ', () => {
        let testModel:SampleModel = new SampleModel();
        testModel.Provider = jasmine.createSpyObj<DataProvider>({["getServerMessage"]:"Hi spy"});
        let expectedResult = "Sever said: Hi spy";
        testModel.getServerMessage()
        .then(actualResult=>{
            expect(actualResult).toBe(expectedResult);
        });
    });
});
*/