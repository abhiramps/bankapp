class bank {
   static getAccountDetails() {
        var accountDetails = {
            userone: { accno: 1000, balance: 1000, username: "userone", password: "testuser1" },
            usertwo: { accno: 1001, balance: 1000, username: "usertwo", password: "testuser2" },
            userthree: { accno: 1002, balance: 1000, username: "userthree", password: "testuser3" }
        }
        // console.log(accountDetails)
        return accountDetails;
    }
}

var data=bank.getAccountDetails()

//console.log(data.userone.accno)
data["userfour"]={accno: 1004, balance: 1000, username: "userfour", password: "testuser4"}
console.log(data)





// var accountDetails = {
//                 userone: { accno: 1000, balance: 1000, username: "userone", password: "testuser1" },
//                 usertwo: { accno: 1001, balance: 1000, username: "usertwo", password: "testuser2" },
//                 userthree: { accno: 1002, balance: 1000, username: "userthree", password: "testuser3" }
//             }



// accountDetails["userfour"]={accno: 1004, balance: 1000, username: "userfour", password: "testuser4"}
// console.log(accountDetails)



