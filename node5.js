/*You are helping to design a basic e-wallet feature for a mobile app. The user should be able to add money and spend money. You also want to make sure the system detects if the user is "guest" and prevent them from using the wallet.
 Your Tasks:
Create variables to store:
The user’s name: "Alex"
The initial balance: 1000
Amount added: 500
Amount spent: 700
Write a function updateWallet() that:
Accepts the user's name, current balance, amount added, and amount spent
Returns "Access Denied" if the user is "guest"
Otherwise, calculates and returns the updated balance
Print the final balance using the function.
Print whether the final balance is greater than 0 using a comparison operator.
Use typeof to confirm the data type of the final balance. */

let user = "Alex";
    let  Balance = 1000;
    let  Added = 500;
    let Spend = 700;

    function updateWallet(){
      if(user.toLowerCase()==="guest"){
        return("Access Denied");
      }
      else {
        let updatedbalance = Balance+Added-Spend;
        return("Updated Balance is:"+ updatedbalance);
      }
    };
    let finalbalance = updateWallet();
    if(finalbalance>0){
      console.log("Final balance is greater than zero");
    };
    
    if(typeof finalbalance === Number){
      console.log("datatype is number",typeof finalbalance);
    }
    else{
      console.log("Final balance is:",finalbalance);
    };

