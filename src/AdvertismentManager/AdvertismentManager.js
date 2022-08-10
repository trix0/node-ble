class AdvertistmentManager {
    constructor(dbus,adapter) {
        this.dbus = dbus
        this.services = []
        this.adapter=adapter
        this.helper = new BusHelper(dbus, 'org.bluez', `/org/bluez/${adapter}`, 'org.bluez.LEAdvertisingManager1')
    }

    async registerAdvertisment(options){
        try{
            let result=await this.helper.callMethod("RegisterAdvertisement",options);
            console.log({"registerAdvertisment_Result":result})
        }catch(error){
            console.log({"registerAdvertisment_Error":error})
        }


        await this.helper.callMethod('SetDiscoveryFilter', {
            Transport: buildTypedValue("boolean", 'le')
          })
          await this.helper.callMethod('StartDiscovery')
    }

}


module.exports = AdvertistmentManager