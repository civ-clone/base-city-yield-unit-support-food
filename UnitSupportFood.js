"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitSupportFood = void 0;
const Food_1 = require("@civ-clone/base-terrain-yield-food/Food");
const NegativeYield_1 = require("@civ-clone/core-yield/NegativeYield");
class UnitSupportFood extends Food_1.default {
    constructor(value = 0, unit = null) {
        super(value, unit ? unit.id() : 'none');
        this._unit = unit;
        this.addKey('unit');
    }
    unit() {
        return this._unit;
    }
}
exports.UnitSupportFood = UnitSupportFood;
(0, NegativeYield_1.makeNegative)(UnitSupportFood);
exports.default = UnitSupportFood;
//# sourceMappingURL=UnitSupportFood.js.map