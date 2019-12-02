import { EventEmitter } from 'events';

export class EventChanell extends EventEmitter {
    public _event: string | symbol;
    public _eventBus: EventEmitter;
    public _callback: (...args: any[]) => void;

    public constructor(eventBus: EventEmitter, event: string | symbol, prepend?: boolean) {
        super();
        this._event = event;
        this._eventBus = eventBus;
        this._callback = (...args: any[]) => {
            this.emit('event', ...args);
        };
        prepend ? this._eventBus.prependListener(this._event, this._callback) : this._eventBus.on(this._event, this._callback);
    }

    public destroy(): void {
        this.removeAllListeners();
        this._eventBus.removeListener(this._event, this._callback);
    }
}
