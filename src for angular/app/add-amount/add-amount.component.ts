import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WalletService } from '../wallet.service';
import { Txnform } from '../txnform';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-amount',
  templateUrl: './add-amount.component.html',
  styleUrls: ['./add-amount.component.css']
})
export class AddAmountComponent implements OnInit {
  amount: number=0;
  @ViewChild('accFrm')
  form: NgForm;
  showFlag = true;
  msg: string;
  errorMsg: string;

  constructor(private walletService: WalletService, private route: Router) { }

  ngOnInit() {
  }

  add(amount: number) {
    this.amount = this.amount + amount;
  }

  addAmount() {
    let txnForm = new Txnform();
    txnForm.amount = this.amount;
    let token = localStorage.getItem("token");
    console.log(this.walletService.decrypt(token.split("-")[0]));
    if (token != null) {
      txnForm.walletAccountId = this.walletService.decrypt(token.split("-")[0]);
      this.walletService.addAmount(txnForm).subscribe(data => {
        this.msg = data.message; 
        this.showFlag = false;
        console.log(data);
      },
        error => this.errorMsg = error.error.message);
    } else this.errorMsg = "You are not authenticated";
  }



}
