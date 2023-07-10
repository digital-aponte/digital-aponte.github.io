jQuery(document).ready(function() {

	//jQuery('li#note-1').css('margin-top:0px;');
	jQuery('div.sidebar').css('max-width', '950px');
	jQuery('div.sidebar').css('margin', 'auto');

	jQuery('.side-matter-ref').click(function() {
	
		jQuery( 'li.side-matter-note' ).each(function( index ) {
  			jQuery(this).removeClass('selected-note');
		});

		var note = jQuery(this).attr('href');
		jQuery(note).addClass('selected-note');
	})

	jQuery('.collapseomatic').click(function() {
		var collapseid = jQuery(this).attr('id');
		
		
		if( jQuery(this).hasClass('colomat-close') ){
			jQuery(this).text('READ MORE');
			jQuery(this).parent().prev().append("  ");
			jQuery(this).parent().prev().append(this);

		}
		else {
			jQuery(this).text('READ LESS');
			jQuery(this).detach();
			jQuery('#target-' + collapseid).append("  ");
			jQuery('#target-' + collapseid).append(this);
		}

	})
})