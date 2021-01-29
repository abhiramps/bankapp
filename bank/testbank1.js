class bank {
    static getAccountDetails() {
        var accountDetails = {
            userone: { accno: 1000, balance: 1000, username: "userone", password: "testuser1" },
            usertwo: { accno: 1001, balance: 1000, username: "usertwo", password: "testuser2" },
            userthree: { accno: 1002, balance: 1000, username: "userthree", password: "testuser3" }
        }
        return accountDetails;
    }

    static authenticateUser(uname, pwd) {
        let dataset = bank.getAccountDetails();

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

    static login() {      //static method.so v can call this method directly using  class name

        let uname = document.querySelector("#user").value; //userone
        let pwd = document.querySelector("#pass").value;

        let user = bank.authenticateUser(uname, pwd)

        if (user == 1) {
            alert("successful login")
            window.location.href = "testhome.html"

        }
        else if (user == 0)  {
            // alert("invalid password")
            let lab = document.querySelector("#plab");
            lab.textContent = " invalid password";
            lab.style.color = "red";
        }
        else {
            let lab = document.querySelector("#lab");
            lab.textContent = "invalid username";
            lab.style.color = "red";
            //alert("username dosent exist")

        }


    }
    static deposit() {
        let uname = document.querySelector("#user").value;
        let pwd = document.querySelector("#pass").value;
        let amnt = Number(document.querySelector("#amnt").value);

        let user = bank.authenticateUser(uname, pwd)

        let dataset = bank.getAccountDetails();

        if (user == 1) {

            dataset[uname].balance += amnt;
            alert("ur acc has been credited with amnt" + amnt + "aval balance " + dataset[uname].balance)

        }
        else if (user == 0) {
            alert("invalid password")
            let lab = document.querySelector("#plab");
            lab.textContent = " invalid password";
            lab.style.color = "red";

        }
        else {
            let lab = document.querySelector("#lab");
            lab.textContent = "invalid username";
            lab.style.color = "red";
            alert("username dosent exist")
        }

    }

    static withdraw() {
        let uname = document.querySelector("#user").value;
        let pwd = document.querySelector("#pass").value;
        let amnt = Number(document.querySelector("#amnt").value);

        let user = bank.authenticateUser(uname, pwd)
        let dataset = bank.getAccountDetails();

        if (user == 1) {
            if (dataset[uname].balance >= amnt) {

                dataset[uname].balance -= amnt;
                alert("ur acc has been debited with amnt" + amnt + "aval balance " + dataset[uname].balance)
            }
            else {
                alert("insufficient balance");
            }
        }
        else if (user == 0) {
            alert("invalid password")

        }
        else {
            alert("username dosent exist")
        }


    }
    static register() {
        let dataset = bank.getAccountDetails();

        let uname = document.querySelector("#user").value;
        let accno = Number(document.querySelector("#accno").value);
        let bal = Number(document.querySelector("#balance").value);
        let pass = document.querySelector("#pass").value;

        let rpass = document.querySelector("#rpass").value;

        dataset[uname] = { accountno: accno, balance: bal, username: uname, password: pass }
        var list = {}
         list = dataset
        if (uname, accno, bal, pass in list) {

            alert("registered successfully")
            window.location.href = "login.html"


        }
        // if (dataset[uname].username != uname) {
        // }
        // else {

        // }

        // alert("username  already exists")
        // console.log(dataset)
    }

}



// bank.register()
