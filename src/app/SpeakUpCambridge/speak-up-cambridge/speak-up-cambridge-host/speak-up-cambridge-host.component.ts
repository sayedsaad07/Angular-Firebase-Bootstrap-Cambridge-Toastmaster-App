import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Timerinfo } from '../../../shared/timer/Timerinfo';
//import 'rxjs/add/operator/create';
//import 'rxjs/add/operator/create';
//import 'rxjs/add/observable/create';


@Component({
    selector: 'app-speak-up-cambridge-host',
    templateUrl: './speak-up-cambridge-host.component.html',
    styleUrls: ['./speak-up-cambridge-host.component.css'],
})
export class SpeakUpCambridgeHostComponent implements OnInit {

    _Timerinfo: Timerinfo;
    ticks: string;
    constructor() {
    }

    ngOnInit() {

        //let timer = TimerObservable.create(2000, 1000);
        //this.subscription = timer.subscribe(t => {
        //    this.ticks = t;
        //});
        // --- Observable ---
        let randomNumGenerator1 = Observable.create(observer => {
            observer.next(Math.random());
        });

        let observer1 = randomNumGenerator1
            .subscribe(num => console.log('observer 1: ' + num));

        let observer2 = randomNumGenerator1
            .subscribe(num => console.log('observer 2: ' + num));


        // ------ BehaviorSubject/ Subject

        let randomNumGenerator2 = new BehaviorSubject(0);
        randomNumGenerator2.next(Math.random());

        let observer1Subject = randomNumGenerator2
            .subscribe(num => console.log('observer subject 1: ' + num));

        let observer2Subject = randomNumGenerator2
            .subscribe(num => console.log('observer subject 2: ' + num));
        
    }
    public doSomething(data: Timerinfo): void {
        this._Timerinfo = data;
        console.log('Picked date: ', this._Timerinfo.ticks);
    }

    UpdateUI() {
        this.ticks = this._Timerinfo.ticks;
    }
}
