import { __decorate } from "tslib";
import { Component, Injectable, Input } from '@angular/core';
let HistonicComponent = class HistonicComponent {
    constructor(id, Name, Description, Roles, Time, VideoUrl, Images) {
        this.id = id;
        this.Name = Name;
        this.Description = Description;
        this.Roles = Roles;
        this.Time = Time;
        this.VideoUrl = VideoUrl;
        this.Images = Images;
    }
};
__decorate([
    Input()
], HistonicComponent.prototype, "id", void 0);
__decorate([
    Input()
], HistonicComponent.prototype, "VideoUrl", void 0);
__decorate([
    Input()
], HistonicComponent.prototype, "Name", void 0);
__decorate([
    Input()
], HistonicComponent.prototype, "Description", void 0);
__decorate([
    Input()
], HistonicComponent.prototype, "Roles", void 0);
__decorate([
    Input()
], HistonicComponent.prototype, "Images", void 0);
__decorate([
    Input()
], HistonicComponent.prototype, "Time", void 0);
HistonicComponent = __decorate([
    Component({
        selector: 'div.histonic',
        template: ``,
    }),
    Injectable()
], HistonicComponent);
export { HistonicComponent };
//# sourceMappingURL=histonic.component.js.map