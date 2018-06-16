import * as React from "react"
import { SampleModel } from "../model/sampleModel";
import { message } from "gulp-typescript/release/utils";

interface SamplePageState {
    content: string
}

export class SamplePage extends React.Component<any, SamplePageState>{
    public componentWillMount() {
        this.UpdateContent();
    }
    public state = {
        content: "nothing to show...",
    }
    private model: SampleModel;
    public render() {
        return <div>{this.state.content}</div>;
    }
    private UpdateContent() {
        let model = new SampleModel();
        model.getServerMessage()
            .then(msg => this.setState({
                content: msg,
            }));
    }
}
