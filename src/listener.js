
export default class VueSocketIOListener {

    /**
     * socket.io-client reserved event keywords
     * @type {string[]}
     */
    static staticEvents = [
            'onopen',
            'onerror',
            'onmessage',
            'onclose',
    ];

    constructor(io, emitter){
        this.io = io;
        this.register();
        this.emitter = emitter;
    }

    /**
     * Listening all socket.io events
     */
    register(){
        this.io.onevent = (packet) => {
            let [event, ...args] = packet.data;

            if(args.length === 1) args = args[0];

            this.onEvent(event, args)
        };
        VueSocketIOListener.staticEvents.forEach(event => this.io[event] = args => this.onEvent(event, args))
    }

    /**
     * Broadcast all events to vuejs environment
     */
    onEvent(event, args){
        this.emitter.emit(event, args);
    }

}
