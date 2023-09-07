import { Component, Prop, h } from '@stencil/core';

import './awc-input.css';

@Component ({
    tag: 'awc-input',
    styleUrl: 'awc-input.css',
    shadow: true,
})

export class AwcInput {
    @Prop() id: string;
    @Prop() name: string;
    @Prop() placeholder: string;
    @Prop() color: string;

    
    render() {
        return <input 
        class={`awc-input ${this.color}`}
        type="text"
        placeholder={this.placeholder}
        name={this.name}
        id={this.id}
        color={this.color}
        />;
    }
}

