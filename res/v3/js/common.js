
	function center(obj) {
		var screenWidth = $(window).width(), screenHeight = $(window).height();  
	    var scrolltop = $(document).scrollTop(); 
	    var objLeft = (screenWidth - obj.width())/2 ; 
	    var objTop = (screenHeight - obj.height())/2 + scrolltop; 
	    obj.css({left: objLeft + 'px', top: objTop + 'px'}); 
	    	
	    $(window).resize(function() { 
	    	screenWidth = $(window).width(); 
	    	screenHeight = $(window).height(); 
	    	scrolltop = $(document).scrollTop(); 
	    	objLeft = (screenWidth - obj.width())/2 ; 
	    	objTop = (screenHeight - obj.height())/2 + scrolltop; 
	    	obj.css({left: objLeft + 'px', top: objTop + 'px'}); 
	    }); 
	    		
	    $(window).scroll(function() { 
	    	screenWidth = $(window).width(); 
	    	screenHeight = $(window).height(); 
	    	scrolltop = $(document).scrollTop(); 
	    	objLeft = (screenWidth - obj.width())/2 ; 
	    	objTop = (screenHeight - obj.height())/2 + scrolltop; 
	    	obj.css({left: objLeft + 'px', top: objTop + 'px'}); 
	    }); 
	}
	   
	function openShutManager(oSourceObj,oTargetObj,shutAble,oOpenTip,oShutTip){
		var sourceObj = typeof oSourceObj == "string" ? document.getElementById(oSourceObj) : oSourceObj;
		var targetObj = typeof oTargetObj == "string" ? document.getElementById(oTargetObj) : oTargetObj;
		var openTip = oOpenTip || "";
		var shutTip = oShutTip || "";
		if(targetObj.style.display!="none"){
		   if(shutAble) return;
		   targetObj.style.display="none";
		   if(openTip  &&  shutTip){
		    sourceObj.innerHTML = shutTip; 
		   }
		} else {
		   targetObj.style.display="block";
		   if(openTip  &&  shutTip){
		    sourceObj.innerHTML = openTip; 
		   }
		}
	}