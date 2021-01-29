import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";

  accountDetails: any = {
    userone: { accno: 1000, balance: 1000, username: "userone", password: "testuser1" },
    usertwo: { accno: 1001, balance: 1000, username: "usertwo", password: "testuser2" },
    userthree: { accno: 1002, balance: 1000, username: "userthree", password: "testuser3" }
  }


  constructor() { }

  ngOnInit(): void {
  }
  onUserNameChange(event: any) {
    // alert(event.target.value);
    this.username = event.target.value;
  }
  onPasswordChange(event: any) {
    // alert(event.target.value);
    this.password = event.target.value;
  }

  login() {
    // alert("login")
    let user = this.authenticateUser(this.username, this.password)
    //let user = bank.authenticateUser(uname, pwd)
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

  authenticateUser(uname: string, pwd: string) {
    let dataset = this.accountDetails;

    // var list = {}
    // list = dataset;

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

}
