/// <reference path="../../../node_modules/@types/react/index.d.ts"/>
/// <reference path="../../../node_modules/@types/react-dom/index.d.ts"/>

namespace Abe.Client{
    interface mainPageState{}

    export class mainPage extends React.Component<any,mainPageState>{
       public componentWillMount(){}
       public render(){
           return <div>Hello world!</div>;
       } 
    }
}

let mainPageProp = {};
ReactDOM.render(<Abe.Client.mainPage {...mainPageProp} />,document.getElementById("content-root"));