$(document).ready(function(){	
	$('.inner-container').slimScroll({
		size:'6px',
		alwaysVisible: true
	});
	
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
		$('#f1')
			.fadeOut(1000)				
			.queue(function(next){$(this).html(parseInt(Math.random()*(max-min+1)+min,10));next();$(this).dequeue()})
			.fadeIn(1000);
		$('#f2')
			.fadeOut(1000)				
			.queue(function(next){$(this).html(parseInt(Math.random()*(max-min+1)+min,10));next();$(this).dequeue()})
			.fadeIn(1000);
		$('#f3')
			.fadeOut(1000)				
			.queue(function(next){$(this).html(parseInt(Math.random()*(max-min+1)+min,10));next();$(this).dequeue()})
			.fadeIn(1000);
		$('#f4')
			.fadeOut(1000)				
			.queue(function(next){$(this).html(parseInt(Math.random()*(max-min+1)+min,10));next();$(this).dequeue()})
			.fadeIn(1000);
		$('#f5')
			.fadeOut(1000)				
			.queue(function(next){$(this).html(parseInt(Math.random()*(max2-min2+1)+min2,10));next();$(this).dequeue()})
			.fadeIn(1000);
		$('#f6')
			.fadeOut(1000)				
			.queue(function(next){$(this).html(parseInt(Math.random()*(max2-min2+1)+min2,10));next();$(this).dequeue()})
			.fadeIn(1000);
		$('#f7')
			.fadeOut(1000)				
			.queue(function(next){$(this).html(parseInt(Math.random()*(max2-min2+1)+min2,10));next();$(this).dequeue()})
			.fadeIn(1000);
		$('#f8')
			.fadeOut(1000)				
			.queue(function(next){$(this).html(parseInt(Math.random()*(max2-min2+1)+min2,10));next();$(this).dequeue()})
			.fadeIn(1000);
		$('#f9')
			.fadeOut(1000)				
			.queue(function(next){$(this).html(parseInt(Math.random()*(max2-min2+1)+min2,10));next();$(this).dequeue()})
			.fadeIn(1000);
		$('#f10')
			.fadeOut(1000)				
			.queue(function(next){$(this).html(parseInt(Math.random()*(max2-min2+1)+min2,10));next();$(this).dequeue()})
			.fadeIn(1000);
		$('#f11')
			.fadeOut(1000)				
			.queue(function(next){$(this).html(parseInt(Math.random()*(max2-min2+1)+min2,10));next();$(this).dequeue()})
			.fadeIn(1000);
		$('#f12')
			.fadeOut(1000)				
			.queue(function(next){$(this).html(parseInt(Math.random()*(max-min2+1)+min2,10));next();$(this).dequeue()})
			.fadeIn(1000);
		$('#f13')
			.fadeOut(1000)				
			.queue(function(next){$(this).html(parseInt(Math.random()*(max-min2+1)+min2,10));next();$(this).dequeue()})
			.fadeIn(1000);
	}
	
	function switchLiftImage()
	{
		var img_arrow1 = $('.img_arrow1').attr("src");
		var img_arrow2 = $('.img_arrow2').attr('src');
		var img_arrow3 = $('.img_arrow3').attr('src');
		var img_arrow4 = $('.img_arrow4').attr('src');
		
		if("images/up_red.png" == img_arrow1){
			$('.img_arrow1')
				.fadeOut(1000)				
				.queue(function(next){$(this).attr('src','images/down_green.png');next();$(this).dequeue()})
				.fadeIn(1000);			
			
			$('.cave1')
				.fadeOut(1000)				
				.queue(function(next){$(this).attr('src','images/lift_green.png');next();$(this).dequeue()})
				.fadeIn(1000);
			
			$('#lift_up_mins').html("Lift is up available in 2 mins") 
			$('#lift_down_mins').html("Lift is down available in 4 mins") 
		}else{
			$('.img_arrow1')
				.fadeOut(1000)				
				.queue(function(next){$(this).attr('src','images/up_red.png');next();$(this).dequeue()})
				.fadeIn(1000);
				
			$('.cave1')
				.fadeOut(1000)				
				.queue(function(next){$(this).attr('src','images/lift_red.png');next();$(this).dequeue()})
				.fadeIn(1000);
				
			$('#lift_up_mins').html("Lift is up available in 1 mins") 
			$('#lift_down_mins').html("Lift is down available in 3 mins") 
		}
		
		if("images/down_green.png" == img_arrow2){
			$('.img_arrow2')
				.fadeOut(1000)				
				.queue(function(next){$(this).attr('src','images/up_red.png');next();$(this).dequeue()})
				.fadeIn(1000);			
			
			$('.cave2')
				.fadeOut(1000)				
				.queue(function(next){$(this).attr('src','images/lift_red.png');next();$(this).dequeue()})
				.fadeIn(1000);	
		}else{
			$('.img_arrow2')
				.fadeOut(1000)				
				.queue(function(next){$(this).attr('src','images/down_green.png');next();$(this).dequeue()})
				.fadeIn(1000);			
			
			$('.cave2')
				.fadeOut(1000)				
				.queue(function(next){$(this).attr('src','images/lift_green.png');next();$(this).dequeue()})
				.fadeIn(1000);
		}
		
		if("images/down_red.png" == img_arrow3){
			$('.img_arrow3')
				.fadeOut(1000)				
				.queue(function(next){$(this).attr('src','images/up_green.png');next();$(this).dequeue()})
				.fadeIn(1000);			
			
			$('.cave3')
				.fadeOut(1000)				
				.queue(function(next){$(this).attr('src','images/lift_green.png');next();$(this).dequeue()})
				.fadeIn(1000);
		}else{
			$('.img_arrow3')
				.fadeOut(1000)				
				.queue(function(next){$(this).attr('src','images/down_red.png');next();$(this).dequeue()})
				.fadeIn(1000);			
			
			$('.cave3')
				.fadeOut(1000)				
				.queue(function(next){$(this).attr('src','images/lift_red.png');next();$(this).dequeue()})
				.fadeIn(1000);
		}
		
		if("images/up_green.png" == img_arrow4){
			$('.img_arrow4')
				.fadeOut(1000)				
				.queue(function(next){$(this).attr('src','images/down_red.png');next();$(this).dequeue()})
				.fadeIn(1000);			
			
			$('.cave4')
				.fadeOut(1000)				
				.queue(function(next){$(this).attr('src','images/lift_red.png');next();$(this).dequeue()})
				.fadeIn(1000);		
		}else{
			$('.img_arrow4')
				.fadeOut(1000)				
				.queue(function(next){$(this).attr('src','images/up_green.png');next();$(this).dequeue()})
				.fadeIn(1000);			
			
			$('.cave4')
				.fadeOut(1000)				
				.queue(function(next){$(this).attr('src','images/lift_green.png');next();$(this).dequeue()})
				.fadeIn(1000);
		}
		$('.repair_lift').fadeOut(1000).fadeIn(1000);
		
	}
	
	function switchWcImage()
	{
		var wc1 = $('.wc1').attr("src");
		var wc2 = $('.wc2').attr("src");
		if("images/wc_green.png" == wc1){	
			$('.wc1')
				.fadeOut(1000)				
				.queue(function(next){$(this).attr('src','images/wc_red.png');next();$(this).dequeue()})
				.fadeIn(1000);
			$('.wc_count').html("Two toilets are avaliable") 
		}else{
			$('.wc1')
				.fadeOut(1000)
				.queue(function(next){$(this).attr('src','images/wc_green.png');next();$(this).dequeue()})
				.fadeIn(1000);
			$('.wc_count').html("Three toilets are avaliable") 				
		}
		
		if("images/wc_green.png" == wc2){
			$('.wc2')
				.fadeOut(1000)
				.queue(function(next){$(this).attr('src','images/wc_red.png');next();$(this).dequeue()})
				.fadeIn(1000);
		}else{
			$('.wc2')
				.fadeOut(1000)
				.queue(function(next){$(this).attr('src','images/wc_green.png');next();$(this).dequeue()})
				.fadeIn(1000);
		}	
		$('.wc3').fadeOut(1000).fadeIn(1000);
	}
	
});

