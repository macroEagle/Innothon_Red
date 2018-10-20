$(document).ready(function(){
	setInterval(function working(){ 
		changeLiftNumber();
		switchLiftImage();
		switchWcImage();		
	},10000);
	
	function changeLiftNumber(){
		max = 27
		min = 21
		max2 = 19
		min2 = 2
		$('#f1').html(parseInt(Math.random()*(max-min+1)+min,10));
		$('#f2').html(parseInt(Math.random()*(max-min+1)+min,10));
		$('#f3').html(parseInt(Math.random()*(max-min+1)+min,10));
		$('#f4').html(parseInt(Math.random()*(max-min+1)+min,10));
		$('#f5').html(parseInt(Math.random()*(max2-min2+1)+min2,10));
		$('#f6').html(parseInt(Math.random()*(max2-min2+1)+min2,10));
		$('#f7').html(parseInt(Math.random()*(max2-min2+1)+min2,10));
		$('#f8').html(parseInt(Math.random()*(max2-min2+1)+min2,10));
		$('#f9').html(parseInt(Math.random()*(max2-min2+1)+min2,10));
		$('#f10').html(parseInt(Math.random()*(max2-min2+1)+min2,10));
		$('#f11').html(parseInt(Math.random()*(max2-min2+1)+min2,10));
		$('#f12').html(parseInt(Math.random()*(max-min2+1)+min2,10));
		$('#f13').html(parseInt(Math.random()*(max-min2+1)+min2,10));
	}
	
	function switchLiftImage()
	{
		var img_arrow1 = $('.img_arrow1').attr("src");
		var img_arrow2 = $('.img_arrow2').attr('src');
		var img_arrow3 = $('.img_arrow3').attr('src');
		var img_arrow4 = $('.img_arrow4').attr('src');
		
		if("images/up_red.png" == img_arrow1){
			$('.img_arrow1').attr('src','images/down_green.png');
			$('.cave1').attr('src','images/lift_green.png');
			$('#lift_up_mins').html("Lift are up available in 2 mins.") 
			$('#lift_down_mins').html("Lift are down available in 4 mins.") 
		}else{
			$('.img_arrow1').attr('src','images/up_red.png');
			$('.cave1').attr('src','images/lift_red.png');
			$('#lift_up_mins').html("Lift are up available in 1 mins.") 
			$('#lift_down_mins').html("Lift are down available in 3 mins.") 
		}
		
		if("images/down_green.png" == img_arrow2){
			$('.img_arrow2').attr('src','images/up_red.png');
			$('.cave2').attr('src','images/lift_red.png');		
		}else{
			$('.img_arrow2').attr('src','images/down_green.png');
			$('.cave2').attr('src','images/lift_green.png');
		}
		
		if("images/down_red.png" == img_arrow3){
			$('.img_arrow3').attr('src','images/up_green.png');
			$('.cave3').attr('src','images/lift_green.png');
		}else{
			$('.img_arrow3').attr('src','images/down_red.png');
			$('.cave3').attr('src','images/lift_red.png');
		}
		
		if("images/up_green.png" == img_arrow4){
			$('.img_arrow4').attr('src','images/down_red.png');
			$('.cave4').attr('src','images/lift_red.png');			
		}else{
			$('.img_arrow4').attr('src','images/up_green.png');
			$('.cave4').attr('src','images/lift_green.png');
		}
		
	}
	
	function switchWcImage()
	{
		var wc1 = $('.wc1').attr("src");
		var wc2 = $('.wc2').attr("src");
		var wc3 = $('.wc3').attr("src");
		
		if("images/wc_green.png" == wc1){
			$('.wc1').attr('src','images/wc_red.png');	
			$('.wc_count').html("One toilet is avaliable.") 
		}else{
			$('.wc1').attr('src','images/wc_green.png');
			$('.wc_count').html("Three toilets are avaliable.") 
		}
		
		if("images/wc_green.png" == wc2){
			$('.wc2').attr('src','images/wc_red.png');			
		}else{
			$('.wc2').attr('src','images/wc_green.png');
		}
		
		if("images/wc2_red.png" == wc3){
			$('.wc3').attr('src','images/wc2_green.png');			
		}else{
			$('.wc3').attr('src','images/wc2_red.png');
		}
		
	}
});

