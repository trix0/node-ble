const BusHelper = require('./BusHelper')

/**
 * @classdesc GattManager class interacts with a remote GATT Manager.
 * @class GattManager
 */
class GattManager {
  constructor (dbus) {
    this.dbus = dbus
    this.helper = new BusHelper(dbus, 'org.freedesktop.DBus.ObjectManager', '/org/bluez', 'org.bluez.GattManager1')
    this.init()
  }

  async init () {
    const managedObjects = await this.helper.children()
    console.log(JSON.stringify(managedObjects));
    managedObjects.forEach(element => {
        console.log(JSON.stringify(element));
    });
  }
}

module.exports = GattManager
