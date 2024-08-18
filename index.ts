#! /usr/bin/env node 

//OOP Mybank project
import chalk from "chalk";
console.log(chalk.yellowBright("**********OOP Mybank**********(By:m.a.s)"))
interface ibankaccount{
   credit(amount:number):void;
   debit(amount:number):void;
}

class Bankaccount implements ibankaccount{
   accountBalance:number;
   constructor(accountBalance:number){
      this.accountBalance=accountBalance
   }

   //publically credit
   public credit(amount: number){
       if(amount>0){
         this.accountBalance+=amount
         console.log("Credit successfully get into new account and your balance is:"+this.accountBalance);

       }
       else{
         console.log("Credit unsuccessful")
       }
   }

   //publically debit
   public debit(amount: number) {
       if(amount>0 && amount<this.accountBalance){
         this.accountBalance-=amount
         console.log("Debit successfully share in new account balance:"+this.accountBalance)

       }
       else{
         console.log("Debit unsuccessful")
       }
   }
}

//Customer details

class Customer{
   person:{
      firstname:string;
      lastname:string;
   }
   age:number;
   gender:string;
   mobile_number:number;
   bankaccount:Bankaccount;

   constructor(person:{firstname:string,lastname:string},age:number,gender:string,mobile_number:number,bankaccount:Bankaccount){
      //this property utalization
      this.person=person;
      this.age=age;
      this.gender=gender;
      this.mobile_number=mobile_number;
      this.bankaccount=bankaccount;
   }

   //publically user access
   public display(){
      console.log("Name:"+this.person.firstname+" "+this.person.lastname)
      console.log("Age:"+this.age)
      console.log("Gender:"+this.gender)
      console.log("Mobile Number:"+this.mobile_number)
      console.log("Account In Bank:"+this.bankaccount.accountBalance)
      console.log()
   }

}

const a1=new Bankaccount(800)
const c1=new Customer({firstname:"ALi",lastname:"Shahid"},18,"Male",21888945600,a1);
c1.display()
c1.bankaccount.debit(500)
console.log()

const a2=new Bankaccount(500)
const c2=new Customer({firstname:"Owais" , lastname:"Shah"},20,"Male",2231000987,a2);
c2.display()
c2.bankaccount.debit(200)
console.log()




//This is Object-oriented programming based project "Mybank",




