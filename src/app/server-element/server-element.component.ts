import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name:string, content: string};
  @ViewChild('heading',{static:true}) header: ElementRef; //static is true as it has to be called in ngOnInit
  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit called");
    console.log("Text COntent"+this.header.nativeElement.textContent);
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit called");
    console.log("Text COntent: "+this.header.nativeElement.textContent);
  }

}
