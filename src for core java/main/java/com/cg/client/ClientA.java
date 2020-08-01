package com.cg.client;

import java.time.LocalDate;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.cg.wallet.entity.WalletAccount;
import com.cg.wallet.service.AddWalletService;
import com.cg.wallet.service.AddWalletServiceImpl;

public class ClientA {

	public static void main(String[] args) {
		ApplicationContext ctx = new AnnotationConfigApplicationContext(JpaConfiguration.class);
		WalletAccount account = new WalletAccount();
		account.setAccCreatedDt(LocalDate.now());
		account.setBalance(1000);
		account.setPassword("srujan123");
		account.setPhoneNo("9182708447");
		account.setUserName("srujan");
		AddWalletService service = ctx.getBean(AddWalletService.class); 
		service.createAccount(account);

	}

}
