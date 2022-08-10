const { systemBus: createSystemBus } = require('dbus-next')
const AdvertistmentManager = require('./AdvertismentManager/AdvertismentManager')
const Bluetooth = require('./Bluetooth')
const GattManager = require('./GattManager')
const GattApplication = require('./GattManager/GattApplication')
const GattService = require('./GattService')


const buildTypedValue = require('./buildTypedValue')

/**
   * @typedef {Object} NodeBleSession
   * @property {Bluetooth} bluetooth - Bluetooth session
   * @property {func} destroy - Close bluetooth session
*/

/**
 * @function createBluetooth
 * @description Init bluetooth session and return
 * @returns {NodeBleInit}
 * @example
 * const { createBluetooth } = require('node-ble')
 *

 */

async function main(bluetooth) {
  const adapter = await bluetooth.defaultAdapter();
  let currentValue = true;

  setInterval(() => {
    console.log("Setting adapter to:" + currentValue)
    adapter.helper.set("Powered",buildTypedValue('boolean', currentValue ? 1 : 0))
    currentValue = !currentValue;
  }, 2000);

}
function createBluetooth() {
  const dbus = createSystemBus()

  const bluetooth = new Bluetooth(dbus)
  main(bluetooth)


  //const advertismentManager=new AdvertistmentManager(dbus)

  //advertismentManager.registerAdvertisment()
  // const GattApplication = new GattApplication(dbus);
  // const gattManager=new GattManager(dbus);

  // let firstService=new GattService()
  const destroy = () => dbus.disconnect()

  return { bluetooth, destroy }
}

module.exports.createBluetooth = createBluetooth
