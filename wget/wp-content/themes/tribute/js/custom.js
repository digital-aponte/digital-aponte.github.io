jQuery( document ).ready( function( $ ) { 
        $('.fa-spin').hide();   
	$(document).on('click', '.loadmore_post', function(e) {	
	        $('.fa-angle-double-down').hide(); 
	         $('.fa-spin').show();
		var max_page = $( this ).attr( 'max_page' );
                var start_page = $( this ).attr( 'start_page' );
		var currentpaged = parseInt( start_page )+1;	
		jQuery.ajax({
			type: 'POST',
			url: tribute_wp_ajax_url,
			data: {
				action : 'tribute_load_more_posts',
				paged: currentpaged,
				query: tribute_wp_ajax_url.query,
			},
		})
		.done( function( response ) {
			if ( response ) {
			    $( '.loadmore_post' ).attr( 'start_page', currentpaged );
				$( '.left-section' ).append( response );
				 $('.fa-spin').hide(); 
				 $('.fa-angle-double-down').show(); 
			} 
			if(max_page==start_page)
			{
			$('.loadmore_post').hide();
			}
		} );
		e.preventDefault();
	});

});
jQuery( document ).ready( function( $ ) { 
        $('.fa-spin').hide();   
	$(document).on('click', '.templatehome_grid', function(e) {	
	        $('.fa-angle-double-down').hide(); 
	         $('.fa-spin').show();
		var max_page = $( this ).attr( 'max_page' );
                var start_page = $( this ).attr( 'start_page' );
		var currentpaged = parseInt( start_page )+1;	
		jQuery.ajax({
			type: 'POST',
			url: tribute_wp_ajax_url,
			data: {
				action : 'tribute_load_more_posts_grid',
				paged: currentpaged,
				query: tribute_wp_ajax_url.query,
			},
		})
		.done( function( response ) {
			if ( response ) {
			    $( '.templatehome_grid' ).attr( 'start_page', currentpaged );
				$( '.left-section' ).append( response );
				 $('.fa-spin').hide(); 
				 $('.fa-angle-double-down').show(); 
			} 
			if(max_page==start_page)
			{
			$('.templatehome_grid').hide();
			}
		} );
		e.preventDefault();
	});

});