import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INCREMENT, DECREMENT, RESET, ADD, REMOVE } from './../counter';

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


    @Input() counter;
    @Output() counterUpdated = new EventEmitter();
    constructor() {}

    changeCounter(type) {
        console.dir(this.counter);
        this.counterUpdated.emit({type: type, payload: this.counter});
    }

    ngOnInit() {
    }

}
