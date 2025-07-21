import * as i0 from '@angular/core';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class UiComponents {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.1", ngImport: i0, type: UiComponents, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.1.1", type: UiComponents, isStandalone: true, selector: "lib-ui-components", ngImport: i0, template: `
    <p>
      ui-components works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.1", ngImport: i0, type: UiComponents, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ui-components', imports: [], template: `
    <p>
      ui-components works!
    </p>
  ` }]
        }] });

class Button {
    label = 'Button';
    variant = 'text';
    disabled = false;
    icon = "";
    iconPosition = "right";
    color = '';
    bgColor = '';
    borderStyles = '';
    size = 'md';
    fullWidth = false;
    iconsOnly = false;
    loading = false;
    loadingLabel = '';
    loaderBorderClass = '';
    tabindex = 0;
    btnClicked = new EventEmitter();
    handleButtonClick(event) {
        this.btnClicked.emit('btn clicked...');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.1", ngImport: i0, type: Button, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.1.1", type: Button, isStandalone: true, selector: "lib-button", inputs: { label: "label", variant: "variant", disabled: "disabled", icon: "icon", iconPosition: "iconPosition", color: "color", bgColor: "bgColor", borderStyles: "borderStyles", size: "size", fullWidth: "fullWidth", iconsOnly: "iconsOnly", loading: "loading", loadingLabel: "loadingLabel", loaderBorderClass: "loaderBorderClass", tabindex: "tabindex" }, outputs: { btnClicked: "btnClicked" }, ngImport: i0, template: "<button [disabled]=\"disabled\"\n    [ngClass]=\"[variant,size,fullWidth? 'fullWidth':'',iconsOnly?'icons-only':'',loading?'loader':'']\" [ngStyle]=\"{\n        backgroundColor:bgColor,\n        color:color,\n        border:borderStyles,\n    }\" [attr.tabindex]=\"tabindex\" class=\"ui-button\" (click)=\"handleButtonClick($event)\">\n\n\n\n    <ng-container *ngIf=\"!loading\">\n        <ng-container *ngIf=\"icon && iconPosition==='left'\">\n            <img *ngIf=\"icon\" [src]=\"icon\" class=\"icon\" alt=\"icon\" />\n        </ng-container>\n\n        <ng-container *ngIf=\"!iconsOnly\">\n            {{ label }}\n        </ng-container>\n\n        <ng-container *ngIf=\"icon && iconPosition==='right'\">\n            <img *ngIf=\"icon\" [src]=\"icon\" class=\"icon\" alt=\"icon\" />\n        </ng-container>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading\">\n        <span *ngIf=\"iconPosition==='left'\" class=\"spinner\" [ngStyle]=\"{border:loaderBorderClass}\"></span>\n        <span *ngIf=\"loadingLabel && !iconsOnly\" class=\"loadingLabel\">&nbsp;{{loadingLabel}}</span>\n        <span *ngIf=\"iconPosition==='right'\" class=\"spinner\" [ngStyle]=\"{border:loaderBorderClass}\"></span>\n    </ng-container>\n\n</button>", styles: [".ui-button{padding:8px 16px;border:none;border-radius:4px;font-weight:600;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;column-gap:4px}.ui-button.text{background-color:transparent;color:#0052cc}.ui-button.container{background-color:#0052cc;color:#fff}.ui-button.outline{background-color:transparent;color:#0052cc;border:2px solid #0052cc}.ui-button:disabled{opacity:.6;cursor:not-allowed}.ui-button .icon{width:16px;height:16px}.ui-button.sm{padding:4px 8px;font-size:12px}.ui-button.md{padding:8px 16px;font-size:14px}.ui-button.lg{padding:12px 20px;font-size:16px}.ui-button.fullWidth{width:100%}.ui-button.icons-only{padding:8px;justify-content:center}.ui-button .spinner{width:16px;height:16px;border-radius:50%;border:2px solid black;border-top:2px solid transparent!important;animation:spin 1s linear infinite}.ui-button .loadingLabel{font-size:12px}@keyframes spin{to{transform:rotate(360deg)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.1", ngImport: i0, type: Button, decorators: [{
            type: Component,
            args: [{ selector: 'lib-button', imports: [CommonModule], template: "<button [disabled]=\"disabled\"\n    [ngClass]=\"[variant,size,fullWidth? 'fullWidth':'',iconsOnly?'icons-only':'',loading?'loader':'']\" [ngStyle]=\"{\n        backgroundColor:bgColor,\n        color:color,\n        border:borderStyles,\n    }\" [attr.tabindex]=\"tabindex\" class=\"ui-button\" (click)=\"handleButtonClick($event)\">\n\n\n\n    <ng-container *ngIf=\"!loading\">\n        <ng-container *ngIf=\"icon && iconPosition==='left'\">\n            <img *ngIf=\"icon\" [src]=\"icon\" class=\"icon\" alt=\"icon\" />\n        </ng-container>\n\n        <ng-container *ngIf=\"!iconsOnly\">\n            {{ label }}\n        </ng-container>\n\n        <ng-container *ngIf=\"icon && iconPosition==='right'\">\n            <img *ngIf=\"icon\" [src]=\"icon\" class=\"icon\" alt=\"icon\" />\n        </ng-container>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading\">\n        <span *ngIf=\"iconPosition==='left'\" class=\"spinner\" [ngStyle]=\"{border:loaderBorderClass}\"></span>\n        <span *ngIf=\"loadingLabel && !iconsOnly\" class=\"loadingLabel\">&nbsp;{{loadingLabel}}</span>\n        <span *ngIf=\"iconPosition==='right'\" class=\"spinner\" [ngStyle]=\"{border:loaderBorderClass}\"></span>\n    </ng-container>\n\n</button>", styles: [".ui-button{padding:8px 16px;border:none;border-radius:4px;font-weight:600;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;column-gap:4px}.ui-button.text{background-color:transparent;color:#0052cc}.ui-button.container{background-color:#0052cc;color:#fff}.ui-button.outline{background-color:transparent;color:#0052cc;border:2px solid #0052cc}.ui-button:disabled{opacity:.6;cursor:not-allowed}.ui-button .icon{width:16px;height:16px}.ui-button.sm{padding:4px 8px;font-size:12px}.ui-button.md{padding:8px 16px;font-size:14px}.ui-button.lg{padding:12px 20px;font-size:16px}.ui-button.fullWidth{width:100%}.ui-button.icons-only{padding:8px;justify-content:center}.ui-button .spinner{width:16px;height:16px;border-radius:50%;border:2px solid black;border-top:2px solid transparent!important;animation:spin 1s linear infinite}.ui-button .loadingLabel{font-size:12px}@keyframes spin{to{transform:rotate(360deg)}}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], variant: [{
                type: Input
            }], disabled: [{
                type: Input
            }], icon: [{
                type: Input
            }], iconPosition: [{
                type: Input
            }], color: [{
                type: Input
            }], bgColor: [{
                type: Input
            }], borderStyles: [{
                type: Input
            }], size: [{
                type: Input
            }], fullWidth: [{
                type: Input
            }], iconsOnly: [{
                type: Input
            }], loading: [{
                type: Input
            }], loadingLabel: [{
                type: Input
            }], loaderBorderClass: [{
                type: Input
            }], tabindex: [{
                type: Input
            }], btnClicked: [{
                type: Output
            }] } });

/*
 * Public API Surface of ui-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Button, UiComponents };
//# sourceMappingURL=ui-kit-jeevan.mjs.map
