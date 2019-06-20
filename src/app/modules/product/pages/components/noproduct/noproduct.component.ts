import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'no-product',
  templateUrl: './noproduct.component.html',
  styleUrls: ['./noproduct.component.css']
})
export class NoProductComponent implements OnInit {

  constructor() { }

    ngOnInit() {
        console.log("No Product available");
    }

}
