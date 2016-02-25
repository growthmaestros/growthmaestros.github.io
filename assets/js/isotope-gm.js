$(document).ready(function(){

	var isMobile = false; //initiate as false
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;


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
	  
	  // containerHeight(3);

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
		var bodyWidth = $('body').width() + 15;
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
		containerHeight(boxesPerRow);
		console.log('calcpadding');
		console.log(bodyWidth);
		console.log(boxWidth);
		console.log(totalWidth);	
		console.log('0px ' + paddingValue + 'px');
		return ('0px ' + paddingValue + 'px');
	}

	function containerHeight (boxesPerRow) {
		var totalBoxes = $('.post-wrapper').length;
		// var hiddenBoxes = $('.post-wrapper[style*="display: none"]').length;
		var hiddenBoxes = 0;
		var numberOfRows = Math.ceil( (totalBoxes - hiddenBoxes)/boxesPerRow );
		var heightOfBox =  $('.post-wrapper').height();
		var minHeight = numberOfRows * heightOfBox + (20* (numberOfRows) ) + 60 + 215;
		$('.homepage-posts-container').css('min-height', minHeight + 'px');
		console.log('total is, ', totalBoxes);
		console.log('hidden is  ', hiddenBoxes);
		console.log('b per row ', boxesPerRow);
		console.log('rows is ', numberOfRows);
		console.log('height is ', heightOfBox);
		console.log('min-height: '+ minHeight + 'px');
	}

	var windowHeight = $(window).height();
	window.addEventListener("scroll",function() {
		if (isMobile) {
			var newWindowHeight = $(window).height();
			// console.log(newWindowHeight);
			if (newWindowHeight !== windowHeight) {
				console.log('change');
	  			$('.homepage-posts-container').css('padding',responsivePadding);
				windowHeight = newWindowHeight;
			}

				


			console.log('done');
				
		}	
	});




	console.log('isotope ended');
	
// END JQUERY
});