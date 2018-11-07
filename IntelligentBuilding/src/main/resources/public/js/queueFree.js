$(document).ready(function(){	
		
	$('.inner-container').slimScroll({
		size:'6px',
		alwaysVisible: true
	});
	
	setInterval(function working(){ 
		changeLiftNumber();
		switchLiftImage();
		//switchWcImage();
	},10000);
	
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
							.fadeOut(1000)
							.queue(function(next){$(this).attr('src','images/wc_red.png');next();$(this).dequeue()})
							.fadeIn(1000);
					}else if("0"==data.toString() && "images/wc_red.png" == $(".wc-1").attr("src")){
						$('.wc-1')
							.fadeOut(1000)
							.queue(function(next){$(this).attr('src','images/wc_green.png');next();$(this).dequeue()})
							.fadeIn(1000);
					}
				}else{
					if("1"==data.toString() && "images/wc_green.png" == $(".wc-2").attr("src")){
						$('.wc-2')
							.fadeOut(1000)
							.queue(function(next){$(this).attr('src','images/wc_red.png');next();$(this).dequeue()})
							.fadeIn(1000);
					}else if("0"==data.toString() && "images/wc_red.png" == $(".wc-2").attr("src")){
						$('.wc-2')
							.fadeOut(1000)
							.queue(function(next){$(this).attr('src','images/wc_green.png');next();$(this).dequeue()})
							.fadeIn(1000);
					}
				}
			},
			complete:function(data){
				if("1"==number.toString()){
					setTimeout(fetchDataToiletOne,1000);
				}else{
					setTimeout(fetchDataToiletTwo,1000);
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
						.fadeOut(1000)				
						.queue(function(next){$(this).html(data.toString());next();$(this).dequeue()})
						.fadeIn(1000);
				}
			},
			complete:function(data){
				setTimeout(fetchLDataAjax,1000);
			}
		});
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

