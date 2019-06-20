import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'badge',
  templateUrl: './badge.component.html',

})
export class BadgeComponent implements OnInit {
    @Input('ref') public href: string;
    constructor() { }

    ngOnInit() {
    }

}
