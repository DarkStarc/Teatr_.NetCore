import { __decorate } from "tslib";
import { Component, Injectable, Input } from '@angular/core';
let CardComponent = class CardComponent {
    set(id, Name, Description, Preview) {
        this.id = id;
        this.name = Name;
        this.description = Description;
        this.preview = Preview;
    }
};
__decorate([
    Input()
], CardComponent.prototype, "id", void 0);
__decorate([
    Input()
], CardComponent.prototype, "name", void 0);
__decorate([
    Input()
], CardComponent.prototype, "description", void 0);
__decorate([
    Input()
], CardComponent.prototype, "preview", void 0);
CardComponent = __decorate([
    Component({
        selector: 'div.card',
        template: `<a [routerLink]="['/Represent',this.id]" style="text-decoration:none;color:black;">
    <div class="image" [mxWidth]="'100%'" [path]="preview.path" [title]="preview.title"></div>
    <div class="mt-3">
        <p class="text-center" style="font-size:1.4rem;font-weight:600;color: #95af00; text-shadow: 3px -3px 1px rgba(153,153,153,0.13)">{{name}}</p>
        <p class="m-4" style="height:120px;text-overflow:ellipsis; overflow:hidden">{{description}}</p>
    </div>
</a>`
    }),
    Injectable()
], CardComponent);
export { CardComponent };
//# sourceMappingURL=card.component.js.map