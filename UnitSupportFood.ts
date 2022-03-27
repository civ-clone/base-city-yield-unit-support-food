import Unit from '@civ-clone/core-unit/Unit';
import Yield from '@civ-clone/core-yield/Yield';

export class UnitSupportFood extends Yield {
  #unit: Unit;

  constructor(value: number, unit: Unit) {
    super(value, unit.id());

    this.#unit = unit;

    this.addKey('unit');
  }

  unit(): Unit {
    return this.#unit;
  }
}

export default UnitSupportFood;
