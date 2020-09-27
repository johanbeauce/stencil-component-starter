import {Component, Host, h, State} from "@stencil/core";

@Component({
  tag: 'custom-clock',
  styleUrl: 'custom-clock.css',
  shadow: true,
})
export class CustomClock {

  timer: number;

  @State() time: number = Date.now();

  connectedCallback() {
    this.timer = window.setInterval(() => {
      this.time = Date.now();
    }, 1000);
  }

  disconnectedCallback() {
    window.clearInterval(this.timer);
  }

  render() {
    const time = new Date(this.time).toLocaleTimeString();

    return (
      <span>{ time }</span>
    );
  }
}
