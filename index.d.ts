import * as i0 from '@angular/core';
import { EventEmitter } from '@angular/core';

declare class UiComponents {
    static ɵfac: i0.ɵɵFactoryDeclaration<UiComponents, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UiComponents, "lib-ui-components", never, {}, {}, never, never, true, never>;
}

declare class Button {
    label: string;
    variant: 'text' | 'container' | 'outline';
    disabled: boolean;
    icon: string;
    iconPosition: 'left' | 'right';
    color: string;
    bgColor: string;
    borderStyles: string;
    size: 'sm' | 'md' | 'lg';
    fullWidth: boolean;
    iconsOnly: boolean;
    loading: boolean;
    loadingLabel: string;
    loaderBorderClass: string;
    tabindex: number;
    btnClicked: EventEmitter<string>;
    handleButtonClick(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Button, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Button, "lib-button", never, { "label": { "alias": "label"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "iconPosition": { "alias": "iconPosition"; "required": false; }; "color": { "alias": "color"; "required": false; }; "bgColor": { "alias": "bgColor"; "required": false; }; "borderStyles": { "alias": "borderStyles"; "required": false; }; "size": { "alias": "size"; "required": false; }; "fullWidth": { "alias": "fullWidth"; "required": false; }; "iconsOnly": { "alias": "iconsOnly"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "loadingLabel": { "alias": "loadingLabel"; "required": false; }; "loaderBorderClass": { "alias": "loaderBorderClass"; "required": false; }; "tabindex": { "alias": "tabindex"; "required": false; }; }, { "btnClicked": "btnClicked"; }, never, never, true, never>;
}

export { Button, UiComponents };
