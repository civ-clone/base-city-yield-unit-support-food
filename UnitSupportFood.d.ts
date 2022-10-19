import Food from '@civ-clone/base-terrain-yield-food/Food';
import Unit from '@civ-clone/core-unit/Unit';
import Yield from '@civ-clone/core-yield/Yield';
export declare class UnitSupportFood extends Food {
  #private;
  constructor(value?: Yield | number, unit?: Unit | null);
  unit(): Unit | null;
}
export default UnitSupportFood;
