import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INCREMENT, DECREMENT, RESET, ADD, REMOVE, EFFECT_TEST } from '../state/counter';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
    increment: string = INCREMENT;
    decrement: string = DECREMENT;
    reset: string = RESET;
    add: string = ADD;
    remove: string = REMOVE;
    effectTest: string = EFFECT_TEST;


    @Input() counter;
    @Output() counterUpdated = new EventEmitter();
    constructor() {}

    changeCounter(type) {
        this.counterUpdated.emit({type: type, payload: this.counter});
    }

    ngOnInit() {
    }

}
