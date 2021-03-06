import * as React from "react"
import { SampleModel } from "../model/sampleModel";

interface SamplePageState {
    content: string
}

export class SamplePage extends React.Component<any, SamplePageState>{
    private model: SampleModel;
    private divRef = React.createRef<HTMLDivElement>();
    public componentWillMount() {
        this.UpdateContent();
    }
    public state = {
        content: "nothing to show...",
    }
    public render() {
        return <div ref = {this.divRef} className="basis-color">{this.state.content}</div>;
    }
    private UpdateContent() {
        let model = new SampleModel();
        model.getServerMessage()
            .then(msg => this.setState({
                content: msg,
            }));
    }
}
