import { Component, h } from '@stencil/core';


@Component ({
    tag: 'awc-tab-group',
    styleUrl: 'awc-tab-group.css',
    shadow: true,
})

export class TabGroup {
    
    render() {
        return (
            <div class="tab-group">
            <slot></slot>
            </div>
        )
    }
}