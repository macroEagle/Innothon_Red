package com.hsbc.api.ibuilding.rest;

import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping (value = "/api")
public class IBuildingResource {

	//Store state within same class
	private static String toiletOneStatus = "O";
	private static String toiletTwoStatus = "O";
	private static String liftWaitingNumber = "O" ;

	//Toilet status get/set
	@RequestMapping(value = "/toilet/{number}/{status}", method = RequestMethod.GET)
	public String setStatus(@PathVariable(value = "number") String number,
							@PathVariable(value = "status") String status) {
		if ("1".equals (number)) {
			toiletOneStatus = status;
		} else if ("2".equals (number)) {
			toiletTwoStatus = status;
		}

		String result = status;
		return result;
	}

	@RequestMapping (value = "/toilet/ {number}"，method = RequestMethod.GET)
	public String getToiletStatus (@PathVariable (value ="number") String number) {
		String result;
		String status;
		System.out.println("Number " + number + "====toiletoneStatus:" + toiletoneStatas + "===toiletTwoStatus:" + toiletTwoStatus);

		if ("1".equals (number)){
			status = toiletOneStatus;
		}else if ("2".equals (number)) {
			status = toiletTwoStatus;
		}else {
			statuse "O";
		}

		result = status;
		return result;
	}

	//Lift waiting number get/set
	@RequestMapping(value = "/lift/{number}", method = RequestMethod.GET)
	public String setListWaitingNumber(@PathVariable(value = "number") String number) {
		liftWaitingNumber = number;
		String result = liftWaitingNumber;
		return result;
	}

	@RequestMapping (value = "/lift", method = RequestMethod.GET)
	public String getLiftWaitingNumber() {
		String result = liftWaitingNumber;
		return result;
	}

	//obsolet method
	@PostMapping("/toilet")
	public object setStatus(
		@Valid
		@RequestBody
		final object requestobject) {
	
		String result = "toilet status change to" + requestobject.toString();  
		return result;
	}
}