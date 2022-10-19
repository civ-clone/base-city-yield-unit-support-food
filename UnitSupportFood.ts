import Food from '@civ-clone/base-terrain-yield-food/Food';
import Unit from '@civ-clone/core-unit/Unit';
import Yield from '@civ-clone/core-yield/Yield';
import { makeNegative } from '@civ-clone/core-yield/NegativeYield';

export class UnitSupportFood extends Food {
  #unit: Unit | null;

  constructor(value: Yield | number = 0, unit: Unit | null = null) {
    super(value, unit ? unit.id() : 'none');

    this.#unit = unit;

    this.addKey('unit');
  }

  unit(): Unit | null {
    return this.#unit;
  }
}

makeNegative(UnitSupportFood);

export default UnitSupportFood;
