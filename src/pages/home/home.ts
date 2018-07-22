import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public operand1;
  public operand2;
  public operator;
  public finalResultValue;
  public showData;
  constructor(public navCtrl: NavController) {
    this.operator = '';
    this.operand1 = '';
    this.operand2 = '';
    this.showData = '';
  }
  returnValue(value) {
    if(this.operator) {
      this.operand2 = this.operand2 + value;
      this.showData = this.operand2;
    } else {
      this.operand1 = this.operand1 + value;
      this.showData = this.operand1;
    }
    console.log('op1', this.operand1);
    console.log('op2', this.operand2);
  }

  returnOperator(opt) {
    this.operator = opt;
  }

  finalResult() {
   switch(this.operator){
    case '+' : {
      this.finalResultValue = parseInt(this.operand1) + parseInt(this.operand2);
      break;
    }
    case '-' : {
      this.finalResultValue = parseInt(this.operand1) - parseInt(this.operand2);
      break;
    }
    case '*' : {
      this.finalResultValue = parseInt(this.operand1) - parseInt(this.operand2);
      break;
    }
    case '/' : {
      this.finalResultValue = parseInt(this.operand1) / parseInt(this.operand2);
      break;
    }
   }
    console.log(this.finalResultValue);
    this.showData = this.finalResultValue;
    this.operator = '';
  }

}
