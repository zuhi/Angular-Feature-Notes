import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name:string, content: string};
  @Input() name: string;
  constructor() {
    console.log("constructor called");
   }

  ngOnInit(): void {
    console.log("ngOnInit called");
  }
  ngOnChanges(changes: SimpleChange) {
    console.log("ngOnChange called");
    console.log(changes);
  }

  ngDoChange(){
    console.log("ngDoChange is called");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit");
  }
  ngAfterContentChanged() {
    console.log("ngAfterContentChanged");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }

}
