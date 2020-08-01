import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAmountComponent } from './add-amount/add-amount.component';
import { ViewAccountSummaryComponent } from './view-account-summary/view-account-summary.component';
import {LoginPageComponent} from './login-page/login-page.component'
import {SignUpPageComponent} from './sign-up-page/sign-up-page.component'
import {HomePageComponent} from './home-page/home-page.component'
import { TransferFundComponent} from './transfer-fund/transfer-fund.component'
import {ViewTxnComponent} from './view-txn/view-txn.component'
import {ViewTxnQueryComponent} from './view-txn-query/view-txn-query.component'
import { ShowbalanceComponent } from './showbalance/showbalance.component';
import { AuthguardService } from './authguard.service';
import { ErrorComponent } from './error/error.component';
const routes: Routes = [
  {path:'addamount', component:AddAmountComponent, canActivate :[AuthguardService]}, 
  {path:'login', component:LoginPageComponent},
  {path:'signup', component:SignUpPageComponent},
  {path:'home', component:HomePageComponent},
  {path:'viewaccount', component:ViewAccountSummaryComponent, canActivate :[AuthguardService]},
  {path:'viewtxns/:walletid', component: ViewTxnComponent, canActivate :[AuthguardService]},
   {path:'viewtxnquery', component: ViewTxnQueryComponent, canActivate :[AuthguardService]},
   {path:'transfer', component: TransferFundComponent, canActivate :[AuthguardService]},
   {path:'showbalance/:walletid', component: ShowbalanceComponent, canActivate :[AuthguardService]},
   {path:'error', component:ErrorComponent},
   {path:'', component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
