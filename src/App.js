import { Notifyer } from './Notifyer.js';

const App = {
    async start() {
        try {
            await Notifyer.init()
            Notifyer.notify({
                title: "Hora do Break",
                body: "Descanse e tome uma água"
            })
        } catch (err) {
            console.log(err.message);
        }
    }
}

export { App }