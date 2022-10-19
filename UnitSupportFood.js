"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _UnitSupportFood_unit;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitSupportFood = void 0;
const Food_1 = require("@civ-clone/base-terrain-yield-food/Food");
const NegativeYield_1 = require("@civ-clone/core-yield/NegativeYield");
class UnitSupportFood extends Food_1.default {
    constructor(value = 0, unit = null) {
        super(value, unit ? unit.id() : 'none');
        _UnitSupportFood_unit.set(this, void 0);
        __classPrivateFieldSet(this, _UnitSupportFood_unit, unit, "f");
        this.addKey('unit');
    }
    unit() {
        return __classPrivateFieldGet(this, _UnitSupportFood_unit, "f");
    }
}
exports.UnitSupportFood = UnitSupportFood;
_UnitSupportFood_unit = new WeakMap();
(0, NegativeYield_1.makeNegative)(UnitSupportFood);
exports.default = UnitSupportFood;
//# sourceMappingURL=UnitSupportFood.js.map