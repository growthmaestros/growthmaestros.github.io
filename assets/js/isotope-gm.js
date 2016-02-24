$(document).ready(function(){

	// var grid = ('.homepage-posts-container');
	// $(grid).isotope({
 // 		itemSelector: '.post-wrapper',
 //  		layoutMode: 'fitRows'
	// });


	// // Filter by interview or article
	// // $(grid).isotope({ filter: '.isotope-interview' });
	

	// // Filter by tag

	// $('.filter-li, .filter-interview-li').click(function(){
	// 	var innerText = $(this).text().toLowerCase();
	// 	console.log('inner is ', innerText);
	// 	$('.filter-li, .filter-interview-li').removeClass('filter-li-on');
	// 	$(this).addClass('filter-li-on');
	// 	$(grid).isotope({
	// 	  // filter element with numbers greater than 50
	// 	 	filter: function() {
	// 		    // _this_ is the item element. Get text of element's .number
	// 		    var tag = $(this).find('.hp-post-tags').text().toLowerCase();
	// 		    console.log('tag of ', $(this), 'is ', tag);
			    	
	// 		    // return true to show, false to hide
	// 		    console.log(tag.indexOf(innerText));
	// 		    if (innerText === 'all') {
	// 		    	return true;
	// 		    } else {
	// 		    	return (tag.indexOf(innerText)>-1);
	// 		    }
	// 	    }
	// 	});
	// });


	// init Isotope
	var $grid = $('.homepage-posts-container').isotope({
	    itemSelector: '.post-wrapper',
	    transformsEnabled: false,
		masonry: {
			fitWidth: true
		}
 	  // layoutMode: 'fitRows'
      // percentPosition: true,
      // masonry: {
      // 	// use element for option
      // 	columnWidth: '.post-wrapper'
      // }
	});


	  // var $container = $('.homepage-posts-container'),
	  //     $body = $('body'),
	  //     colW = 60,
	  //     columns = null;
	  
	  // $container.isotope({
	  //   // disable window resizing
	  //   resizable: false,
	  //   masonry: {
	  //     columnWidth: colW
	  //   }
	  // });
	  
	  // $(window).smartresize(function(){
	  //   // check if columns has changed
	  //   var currentColumns = Math.floor( ( $body.width() -10 ) / colW );
	  //   if ( currentColumns !== columns ) {
	  //     // set new column count
	  //     columns = currentColumns;
	  //     // apply width to container manually, then trigger relayout
	  //     $container.width( columns * colW )
	  //       .isotope('reLayout');
	  //   }
	    
	  // }).smartresize(); // trigger resize to set container width






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