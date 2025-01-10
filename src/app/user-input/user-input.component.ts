import {Component, EventEmitter, output, Output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InvestmentInputModel} from "../investment-input.model";
import {InvestmentService} from "../investment.service";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
 //calculate=output<InvestmentInputModel>();
  enteredInitialInvestment=signal("0");
  enteredAnnualInvestment=signal("0");
  enteredExpectedReturn=signal('4');
  enteredDuration=signal('5');

  constructor(private investmentService: InvestmentService) {
  }

  onSubmit(){
    //  this.calculate.emit({
    //  initialInvestment: +this.enteredInitialInvestment(),
    //    annualInvestment: +this.enteredAnnualInvestment(),
    //      expectedReturn: +this.enteredExpectedReturn(),
    //    duration:+this.enteredDuration()
    // })
    this.investmentService.onCalculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration:+this.enteredDuration()
    })
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('4');
    this.enteredDuration.set('5');
  }

}
