import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname = "";
  pwd = "";

  constructor() { }

  ngOnInit(): void {
  }

  onUserNameChange(event: any) {    //this function is for retriving the input(username) from the textbox
    this.uname = event.target.value;
  }

  onPasswordChange(event: any) {    //for retriving password from textbox
    this.pwd = event.target.value;

  }


  accountDetails: any = {
    userone: { accno: 1000, balance: 1000, username: "userone", password: "testuser1" },
    usertwo: { accno: 1001, balance: 1000, username: "usertwo", password: "testuser2" },
    userthree: { accno: 1002, balance: 1000, username: "userthree", password: "testuser3" }
  }

  authenticateUser(uname: string, pwd: string) {
    let dataset = this.accountDetails;

    

    if (uname in dataset) {
      //alert("username exists")
      if (dataset[uname].password === pwd) {
        return 1;
        // window.location.href = "testhome.html"
        // alert("successful login")

      }
      else {
        return 0;
        // alert("invalid password")

      }
    }
    else {
      return -1;
      // let lab=document.querySelector("#lab");
      // lab.textContent="invalid username";
      // lab.style.color="red";
      // alert("username dosent exist")
    }

  }


  login() {
    let user = this.authenticateUser(this.uname,this.pwd)

    if (user == 1) {
        alert("successful login")
        window.location.href = "testhome.html"

    }
    else if (user == 0) {
        alert("invalid password")
        // let lab = document.querySelector("#plab");
        // lab.textContent = " invalid password";
        // lab.style.color = "red";
    }
    else {
        // let lab = document.querySelector("#lab");
        // lab.textContent = "invalid username";
        // lab.style.color = "red";
        alert("username dosent exist")

    }

  }
}
