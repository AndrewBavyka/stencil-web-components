import { Component, Prop, h } from '@stencil/core';

@Component ({
    tag: 'awc-tab',
    styleUrl: 'awc-tab.css',
    shadow: true,
})

export class AwcTab {
    @Prop() id: string;
    @Prop() name: string;
    
    render() {
        return (
        <div class="tab" id={this.id}>
        {this.name}<slot></slot>
        <span class="underline"></span>
        </div>
      );
    }
}