$(document).ready(function(){

	// init Isotope
	var $grid = $('.homepage-posts-container').isotope({
	    itemSelector: '.post-wrapper',
		masonry: {
			gutter: 20
		}
	});
	// set centering padding
	$('.homepage-posts-container').css('padding',responsivePadding);

	// store filter for each group
	var filters = {};

	$('.filter-li, .filter-interview-li').on( 'click', function() {
	  var $this = $(this);
	  // get group key
	  var $buttonGroup = $this.parents('.filter-ul');
	  var filterGroup = $buttonGroup.attr('data-filter-group');
	  // set filter for group
	  filters[ filterGroup ] = $this.attr('data-filter');
	  // combine filters
	  var filterValue = concatValues( filters );
	  //reset padding
	  $('.homepage-posts-container').css('padding','0px 0px');
	  // set filter for Isotope
	  $grid.isotope({ filter: filterValue });
	  //set centering padding again
	  $('.homepage-posts-container').css('padding',responsivePadding);
	});

	// change is-checked class on buttons
	$('.filter-ul').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'li', function() {
	    $buttonGroup.find('.is-checked').removeClass('is-checked');
	    $( this ).addClass('is-checked');
	  });
	});
	  
	// flatten object by concatting values
	function concatValues( obj ) {
	  var value = '';
	  for ( var prop in obj ) {
	    value += obj[ prop ];
	  }
	  return value;
	}

	function responsivePadding () {
		var bodyWidth = $('body').width();
		if (bodyWidth > 1023) {
			return calcPadding(3,20)
		} else if (bodyWidth > 767 && bodyWidth <= 1023) {
			return calcPadding (2,20);
		} else if (bodyWidth <= 767){
			return calcPadding (1,20);
		}
	}

	function calcPadding (boxesPerRow, gutter) {
		var percentages = {
			3: 0.3,
			2: 0.4,
			1: 0.9
		};
		var bodyWidth = $('body').width();
		var boxWidth = bodyWidth * percentages[boxesPerRow];
		var totalWidth = boxWidth * boxesPerRow + (boxesPerRow-1)*gutter;
		var paddingValue = (bodyWidth - totalWidth)*0.5;
		console.log('0px ' + paddingValue + 'px');
		return ('0px ' + paddingValue + 'px');
			
	}



	console.log('isotope ended');
	
// END JQUERY
});