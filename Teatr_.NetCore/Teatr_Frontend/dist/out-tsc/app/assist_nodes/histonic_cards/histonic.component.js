import { __decorate } from "tslib";
import { Component, Injectable, Input } from '@angular/core';
let HistonicComponentCard = class HistonicComponentCard {
    set(id, Name, Description, Roles, Time, VideoUrl, Images) {
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
], HistonicComponentCard.prototype, "id", void 0);
__decorate([
    Input()
], HistonicComponentCard.prototype, "VideoUrl", void 0);
__decorate([
    Input()
], HistonicComponentCard.prototype, "Name", void 0);
__decorate([
    Input()
], HistonicComponentCard.prototype, "Description", void 0);
__decorate([
    Input()
], HistonicComponentCard.prototype, "Roles", void 0);
__decorate([
    Input()
], HistonicComponentCard.prototype, "Images", void 0);
__decorate([
    Input()
], HistonicComponentCard.prototype, "Time", void 0);
HistonicComponentCard = __decorate([
    Component({
        selector: 'div.histonicCard',
        template: ``,
    }),
    Injectable()
], HistonicComponentCard);
export { HistonicComponentCard };
//# sourceMappingURL=histonic.component.js.map