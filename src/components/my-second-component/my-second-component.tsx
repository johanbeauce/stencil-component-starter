import {Component, Host, h, Prop, State} from "@stencil/core";

@Component({
  tag: 'my-second-component',
  styleUrl: 'my-second-component.css',
  shadow: true,
})
export class MySecondComponent {
  @Prop() color = 'blue';
  @State() var = "toto";

  connectedCallback() {
    console.log("connectedCallback");
  }

  componentWillLoad() {
    console.log("componentWillLoad");
  }

  componentWillRender() {
    console.log("componentWillRender");
  }

  render() {
    return (
      <Host>
        <slot>My favorite color is {this.color}</slot>
      </Host>
    );
  }

  componentDidRender() {
    console.log("componentDidRender");
  }

  componentDidLoad() {
    console.log("componentDidLoad");
  }

  disconnectedCallback() {
    console.log("disconnectedCallback");
  }

  componentShouldUpdate() {
    console.log("componentShouldUpdate", arguments)
  }

}
