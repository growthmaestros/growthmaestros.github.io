$(document).ready(function(){

	// init Isotope
	var $grid = $('.homepage-posts-container').isotope({
	    itemSelector: '.post-wrapper',
		masonry: {
			// gutter: 10
		}
	});

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
	  // set filter for Isotope
	  console.log('filters are; ', filterValue);
	  	
	  $grid.isotope({ filter: filterValue });
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



	console.log('isotope ended');
	
// END JQUERY
});