const BusHelper = require('./BusHelper')

/**
 * @classdesc GattManager class interacts with a remote GATT Manager.
 * @class GattManager
 */
class GattManager {
  constructor (dbus,adapter) {
    this.dbus = dbus
    this.helper = new BusHelper(dbus, 'org.bluez', `/org/bluez/${adapter}`, 'org.bluez.GattManager1')
  }

  async registerApplication(application,options){
    try{
        let result=await this.helper.callMethod(application,options)
        console.log({"RegisterApplication_Result":result})
    }catch(error){
        console.log({"RegisterApplication_Error":error})
    }

  }

  async UnregisterApplication(application){
    this.helper.callMethod(application)
  }
}

module.exports = GattManager
