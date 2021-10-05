import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  showSecert = false;
  allowNewServer = false;
   serverCreationStatus = 'No server was created!';
   UserStatus = 'No User Name Update!';
   serverName = 'TestServer';
   userName = 'Lalit';
   serverCreated = false;
   servers = ['TestServer 1, TestServer 2'];
   log = [];
  constructor() {
    setTimeout(() => this.allowNewServer = true,
     2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
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
  onToggleDetails() {
    this.showSecert = !this.showSecert;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());

  }
}
