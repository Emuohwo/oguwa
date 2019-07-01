
	// $(document).on("scroll", function(){
	// 	if
    //   ($(document).scrollTop() > 86){
	// 	  $("#banner").addClass("shrink");
	// 	}
	// 	else
	// 	{
	// 		$("#banner").removeClass("shrink");
	// 	}
	// });

	  /*--------------------------
  preloader
  ---------------------------- */
  $(window).on('load', function() {
    var pre_loader = $('#preloader');
    pre_loader.fadeOut('slow', function() {
      $(this).remove();
    });
  });

	// wow plugin
	new WOW().init();
	/*======================
		Count To
	=======================*/
	$('.counter').each(function() {
		var $this = $(this),
			countTo = $this.attr('data-count');
		
		$({ countNum: $this.text()}).animate({
		  countNum: countTo
		},
	  
		{
	  
		  duration: 8000,
		  easing:'linear',
		  step: function() {
			$this.text(Math.floor(this.countNum));
		  },
		  complete: function() {
			$this.text(this.countNum);
			//alert('finished');
		  }
	  
		});  
	
	});