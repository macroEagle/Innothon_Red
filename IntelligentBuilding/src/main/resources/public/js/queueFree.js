$(document).ready(function(){	
		
	$('.inner-container').slimScroll({
		size:'6px',
		alwaysVisible: true
	});
	
	var fast_lift_time = 12;
	var slow_lift_time = 15;
	
	var lift_status = {
		f1:{
			up:false,
			floor:23,
			ow:true,
			fast_below:21,
			max:28,
			stop_count:1,
			stop_max:1
		},
		f2:{
			up:false,
			floor:24,
			ow:false,
			fast_below:21,
			max:28,
			stop_count:1,
			stop_max:1
		},
		f3:{
			up:false,
			floor:20,
			ow:true,
			fast_below:21,
			max:28,
			stop_count:1,
			stop_max:1
		},
		f12:{
			up:true,
			floor:3,
			ow:false,
			fast_below:1,
			max:28,
			stop_count:1,
			stop_max:1
		},
		f13:{
			up:true,
			floor:1,
			ow:false,
			fast_below:1,
			max:28,
			stop_count:1,
			stop_max:1
		}
		
	};
	lift();
	$('#scontainer').click( 
	function(){
		setInterval(function working(){ 
			//changeLiftNumber();
			//switchLiftImage();
			//switchWcImage();
			lift();
		},1000);
	});
	
	setTimeout(fetchDataToiletOne,2000);
	setTimeout(fetchDataToiletTwo,2000);
	setTimeout(fetchLDataAjax,2000);
	
	function fetchDataToiletOne(){
		fetchTDataAjax(1);
	}
	
	function fetchDataToiletTwo(){
		fetchTDataAjax(2);
	}
	
	function fetchTDataAjax(number){
		$.ajax({
			url:"http://207.246.95.229:8090/api/toilet/" + number,
			type:"GET",
			success:function(data){
				if("1"==number.toString()){
					if("1"==data.toString() && "images/wc_green.png" == $(".wc-1").attr("src")){
						$('.wc-1')
							.fadeOut(250)
							.queue(function(next){$(this).attr('src','images/wc_red.png');next();$(this).dequeue()})
							.fadeIn(250);
					}else if("0"==data.toString() && "images/wc_red.png" == $(".wc-1").attr("src")){
						$('.wc-1')
							.fadeOut(250)
							.queue(function(next){$(this).attr('src','images/wc_green.png');next();$(this).dequeue()})
							.fadeIn(250);
					}
				}else{
					if("1"==data.toString() && "images/wc_green.png" == $(".wc-2").attr("src")){
						$('.wc-2')
							.fadeOut(250)
							.queue(function(next){$(this).attr('src','images/wc_red.png');next();$(this).dequeue()})
							.fadeIn(250);
					}else if("0"==data.toString() && "images/wc_red.png" == $(".wc-2").attr("src")){
						$('.wc-2')
							.fadeOut(250)
							.queue(function(next){$(this).attr('src','images/wc_green.png');next();$(this).dequeue()})
							.fadeIn(250);
					}
				}
			},
			complete:function(data){
				if("1"==number.toString()){
					setTimeout(fetchDataToiletOne,500);
				}else{
					setTimeout(fetchDataToiletTwo,500);
				}
			}
		});
	}
		
	function fetchLDataAjax(){

		$.ajax({
			url:"http://207.246.95.229:8090/api/lift",
			type:"GET",
			success:function(data){
				if(null != data.toString() && "" != data.toString() && data.toString() != $(".count-person").text() ){
					$(".count-person")
						.fadeOut(250)				
						.queue(function(next){$(this).html(data.toString());next();$(this).dequeue()})
						.fadeIn(250);
				}
			},
			complete:function(data){
				setTimeout(fetchLDataAjax,1000);
			}
		});
	}
	
	function lift(){
		
		up_time = 999999999;
		down_time = 999999999;
		for(lift_number in lift_status)
		{	
			//$('#'+lift_number).fadeOut(250);
			$('#'+lift_number).html(parseInt(changeLiftStatus(lift_number),10));
			
			lift_img = '';
			arrow_img = '';
			
			if(lift_status[lift_number].ow)
			{
				lift_img = "images/lift_red.png";
				if(lift_status[lift_number].up)
				{
					arrow_img = 'images/up_red.png';
				}
				else
				{
					arrow_img = 'images/down_red.png';
				}
			}
			else
			{
				lift_img = "images/lift_green.png";
				if(lift_status[lift_number].up)
				{
					arrow_img = 'images/up_green.png';
				}
				else
				{
					arrow_img = 'images/down_green.png';
				}
			}
			
			$('#'+lift_number+"_arrow").children("img").attr('src',arrow_img);
			$('#'+lift_number+"_cave").children("img").attr('src',lift_img);
			count_up_time = countWaitTime(lift_number, true);
			count_down_time = countWaitTime(lift_number, false);
			
			if(count_up_time < up_time)
			{
				up_time = count_up_time;
			}
			if(count_down_time < down_time)
			{
				down_time = count_down_time;
			}
			
		}
		$('#up_time').html(Math.round(up_time/60)/1);
		$('#down_time').html(Math.round(down_time/60)/1);
	}
	
	function countWaitTime(lift_number,for_up)
	{
		current_floor = 25;
		estimated_time = 0;
		if(lift_status[lift_number].up == for_up)
		{
			if(lift_status[lift_number].floor == current_floor)
			{
				estimated_time = 0;
			}
			else
			{
				if(for_up)
				{
					if(lift_status[lift_number].floor < current_floor)
					{
						fast_floor = lift_status[lift_number].fast_below - lift_status[lift_number].floor;
						if(fast_floor>0)
						{
							estimated_time += fast_floor * fast_lift_time;
						}
						slow_floor = current_floor - lift_status[lift_number].floor;
						estimated_time += slow_floor * slow_lift_time;
					}
					else
					{
						slow_floor = (lift_status[lift_number].max - lift_status[lift_number].floor) + (lift_status[lift_number].max - lift_status[lift_number].fast_below) + (current_floor - lift_status[lift_number].fast_below);
						estimated_time += slow_floor * slow_lift_time;
						fast_floor = lift_status[lift_number].fast_below * 2;
						estimated_time += fast_floor * fast_lift_time;
					}
				}
				else
				{
					if(lift_status[lift_number].floor > current_floor)
					{
						slow_floor = lift_status[lift_number].floor - current_floor;
						estimated_time += slow_floor * slow_lift_time;
					}
					else
					{
						slow_floor = (lift_status[lift_number].floor - lift_status[lift_number].fast_below) + (lift_status[lift_number].max - lift_status[lift_number].fast_below) + (lift_status[lift_number].max - current_floor);
						
						fast_floor = lift_status[lift_number].fast_below*2;		
						
						if(lift_status[lift_number].floor < lift_status[lift_number].fast_below)
						{
							slow_floor = (lift_status[lift_number].max - lift_status[lift_number].fast_below) + (lift_status[lift_number].max - current_floor);
							fast_floor = lift_status[lift_number].fast_below + lift_status[lift_number].floor;
						}
						estimated_time += slow_floor * slow_lift_time;
						estimated_time += fast_floor * fast_lift_time;
					}
				}
			}
		}
		else
		{
			if(for_up)
			{
				slow_floor = (lift_status[lift_number].floor - lift_status[lift_number].fast_below) + (current_floor - lift_status[lift_number].fast_below);
				
				fast_floor = lift_status[lift_number].fast_below*2;		
				
				if(lift_status[lift_number].floor < lift_status[lift_number].fast_below)
				{
					slow_floor = (current_floor - lift_status[lift_number].fast_below);
					fast_floor = lift_status[lift_number].fast_below + lift_status[lift_number].floor;
				}
				estimated_time += slow_floor * slow_lift_time;
				estimated_time += fast_floor * fast_lift_time;
			}
			else
			{
				slow_floor = (lift_status[lift_number].max - lift_status[lift_number].floor)+(lift_status[lift_number].max - current_floor);
				fast_floor = 0;		
				
				if(lift_status[lift_number].floor < lift_status[lift_number].fast_below)
				{
					slow_floor = (lift_status[lift_number].max - lift_status[lift_number].fast_below)+(lift_status[lift_number].max - current_floor);
					fast_floor = lift_status[lift_number].fast_below - lift_status[lift_number].floor;
				}
				estimated_time += slow_floor * slow_lift_time;
				estimated_time += fast_floor * fast_lift_time;
			}
		}
		return estimated_time;
	}
	
	function changeLiftStatus(lift_number)
	{
		floor = lift_status[lift_number].floor;
		lift_status[lift_number].stop_count++;
		if(lift_status[lift_number].stop_count>lift_status[lift_number].stop_max)
		{
			lift_status[lift_number].stop_count = 1;
			if(floor >=lift_status[lift_number].fast_below)
			{
				lift_status[lift_number].stop_max = Math.random()*5;
				/*if(lift_status[lift_number].stop_max > 7)
				{
					lift_status[lift_number].ow = true;
				}
				else
				{
					lift_status[lift_number].ow = false;
				}*/
			}
			else
			{
				lift_status[lift_number].stop_max = 2;
			}
			if(lift_status[lift_number].up)
			{
				floor++;
			}
			else
			{
				floor--;
			}
			
			if(floor>lift_status[lift_number].max)
			{
				lift_status[lift_number].up = false;
				floor = lift_status[lift_number].floor -1;
			}
			if(floor < 1)
			{
				lift_status[lift_number].up = true;
				floor = 1;
			}
			
			lift_status[lift_number].floor = floor;
		}
		
		return floor;
	}
	
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
		
	}
	
	function switchWcImage()
	{
		var wc1 = $('.wc1').attr("src");
		var wc2 = $('.wc2').attr("src");
		if("images/wc_green.png" == wc1){	
			$('.wc1')
				.fadeOut(500)				
				.queue(function(next){$(this).attr('src','images/wc_red.png');next();$(this).dequeue()})
				.fadeIn(500);
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
	}


	//For Test.html
		function setToiletOneOpen(){
    		$.ajax({
    			url:"http://207.246.95.229:8090/api/toilet/1/0",
    			type:"GET",
    			success:function(data){
    			}
    		});
    	}
    	function setToiletOneClose(){
    		$.ajax({
    			url:"http://207.246.95.229:8090/api/toilet/1/1",
    			type:"GET",
    			success:function(data){
    			}
    		});
    	}
    	function setToiletTwoOpen(){
    		$.ajax({
    			url:"http://207.246.95.229:8090/api/toilet/2/0",
    			type:"GET",
    			success:function(data){
    			}
    		});
    	}
    	function setToiletTwoClose(){
    		$.ajax({
    			url:"http://207.246.95.229:8090/api/toilet/2/1",
    			type:"GET",
    			success:function(data){
    			}
    		});
    	}
        $("#T10").click(function(event){
             setToiletOneOpen();
        });
        $("#T11").click(function(event){
            setToiletOneClose();
        });
       $("#T20").click(function(event){
            setToiletTwoOpen();
        });
        $("#T21").click(function(event){
            setToiletTwoClose();
        });

	function setQueueCount(number){
		$.ajax({
			url:"http://207.246.95.229:8090/api/lift/" + number,
			type:"GET",
			success:function(data){
			}
		});
	}
        $("#liftwaiting").click(function(event) {
        		//alert($(".lift-count").val());
        		setQueueCount($(".lift-count").val());
       	});
});

