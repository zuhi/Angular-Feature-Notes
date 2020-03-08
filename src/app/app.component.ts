import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'Server', name: 'Testserver', content: 'Just a test!'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}){
    // called after the event addserver has been triggered
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });

  }
  onBlueprintAdded(blueprint: {serverName: string, serverContent: string}){
    // called after the event of blueprintadded is clicked
    this.serverElements.push({
      type: 'server',
      name: blueprint.serverName,
      content: blueprint.serverContent
    })
  }
}
