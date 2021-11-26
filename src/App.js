import { Notifyer } from './Notifyer.js';
import { Timer } from './Timer.js';

const App = {
    async start() {
        try {
            Timer.init(time)
            /*
            await Notifyer.init()
            Notifyer.notify({
                title: "Hora do Break",
                body: "Descanse e tome uma água"
            })
            */
        } catch (err) {
            console.log(err.message);
        }
    }
}

export { App }