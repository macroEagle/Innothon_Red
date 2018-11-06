package com.hsbc.api.ibuilding.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication (scanBasePackages = { "com.hsbc.api.ibuilding.main", "com.hsbc.api.ibuilding.rest" })

public class IBuildingRestApplication {
	
	public static void main(String[] args) {
		SpringApplication.run (IBuildingRestApplication.class, args);
	}

}