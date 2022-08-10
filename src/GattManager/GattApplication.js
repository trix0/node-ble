
class GattApplication {
    constructor(dbus) {
        this.dbus = dbus
        this.services = []
    }

    addService(service){
        this.services.push(service)
    }

}


module.exports = GattApplication