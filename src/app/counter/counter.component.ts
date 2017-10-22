import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INCREMENT, DECREMENT, RESET} from './../counter';

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


    @Input() counter;
    @Output() counterUpdated = new EventEmitter();

    constructor() {
    }

    changeCounter(type) {
        this.counterUpdated.emit(type);
    }

    ngOnInit() {
    }

}
