import { Notifyer } from './Notifyer.js';
import { Timer } from './Timer.js';
import { Emitter } from './Emitter.js';

const App = {
    async start() {
        try {
            await Notifyer.init()

            Emitter.on('countdown-start', () => {
                Notifyer.notify({
                    title: "Hora do Break",
                    body: "Descanse e tome uma água"
                })
            })

            Emitter.on('countdown-end', Timer.init)

            Timer.init()

        } catch (err) {
            console.log(err.message);
        }
    }
}

export { App }