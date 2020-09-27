import {Component, h, Prop} from "@stencil/core";

@Component({
  tag: "sample-component",
  styleUrl: "sample-component.css",
  shadow: true
})

export class SampleComponent {
  @Prop() name: string
  render() {
    return (
      <div>
        <h1>Hello my name is {this.name}</h1>
      </div>
    );
  }
}
