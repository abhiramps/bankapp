class bank {
    static getAccountDetails() {
        var accountDetails = {
            userone: { acno: 1000, balance: 1000, username: "userone", password: "testuser1" },
            usertwo: { acno: 1000, balance: 1000, username: "usertwo", password: "testuser2" },
            userthree: { acno: 1000, balance: 1000, username: "userthree", password: "testuser3" }
        }
        return accountDetails;
    }

    static authenticateUser(uname,pwd){
        let dataset = bank.getAccountDetails();

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

    static login() {      //static method.so v can call this method directly using  class name

        let uname = document.querySelector("#user").value; //userone
        let pwd = document.querySelector("#pass").value;

        let user=bank.authenticateUser(uname,pwd)
        
        if(user==1){
           
            window.location.href = "testhome.html"
           alert("successful login")
        }
        else if(user==0){
            alert("invalid password")

        }
        else{
            alert("username dosent exist")
        }
       
       
    }
    static deposit() {
        let uname = document.querySelector("#user").value;
        let pwd = document.querySelector("#pass").value;
        let amnt = Number(document.querySelector("#amnt").value);

        let dataset = bank.getAccountDetails();

        if (uname in dataset) {
            //alert("username exists")
            if (dataset[uname].password === pwd) {
                dataset[uname].balance += amnt;
                alert("ur acc has been credited with amnt" + amnt + "aval balance " + dataset[uname].balance)

            }
            else {
                alert("invalid password")

            }
        }
        else {
            
            alert("username dosent exist")
        }

    }
    static withdraw() {
        let uname = document.querySelector("#user").value;
        let pwd = document.querySelector("#pass").value;
        let amnt = Number(document.querySelector("#amnt").value);

        let dataset = bank.getAccountDetails();

        if (uname in dataset) {
            //alert("username exists")
            if (dataset[uname].password === pwd) {
                if (dataset[uname].balance >= amnt) {


                    dataset[uname].balance -= amnt;
                    alert("ur acc has been debited with amnt" + amnt + "aval balance " + dataset[uname].balance)
                }
                else {
                    alert("insufficient balance")
                }
            }
            else {
                alert("invalid password")

            }
        }
        else {
            alert("username dosent exist")
        }
    }
}
