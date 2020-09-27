import {Component, h, Prop} from "@stencil/core";

@Component({
  tag: "sample-component",
  styleUrl: "sample-component.css",
  shadow: true
})

export class SampleComponent {
  @Prop() text: string = "toto";
  render() {
    return (
      <div>
        <h1>Hello {this.text}</h1>
      </div>
    );
  }
}
