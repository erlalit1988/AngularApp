import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
   allowNewServer = false;
   serverCreationStatus = 'No server was created!';
   UserStatus = 'No User Name Update!';
   serverName = 'TestServer';
   userName = 'Lalit';
  constructor() {
    setTimeout(() => this.allowNewServer = true,
     2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: InputEvent){
    // console.log(event);
    this.serverName = (event.target as HTMLInputElement).value;
  }
  onUserClicked(event: InputEvent){
    this.UserStatus = 'User Name is updated! Name is ' + this.userName;
    this.userName = (event.target as HTMLInputElement).value = '';
  }
  // onUpdateUserName(event: InputEvent){
  //   this.userName = (event.target as HTMLInputElement).value;
  // }

}
