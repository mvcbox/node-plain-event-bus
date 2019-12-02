import { EventEmitter } from 'events';
import { EventChanell } from './EventChanell';

export class EventBus extends EventEmitter {
    public createEventChanell(event: string | symbol, prepend?: boolean): EventChanell {
        return new EventChanell(this, event, prepend);
    }
}
