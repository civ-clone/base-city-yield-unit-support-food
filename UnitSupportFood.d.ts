import Unit from '@civ-clone/core-unit/Unit';
import Yield from '@civ-clone/core-yield/Yield';
export declare class UnitSupportFood extends Yield {
  #private;
  constructor(value: number, unit: Unit);
  unit(): Unit;
}
export default UnitSupportFood;
