jQuery(document).ready(function() {
	var prevurl = document.referrer
	var url = window.location.href;
	var bibinfo = url.split("?");
	if (bibinfo[1]){
		jQuery('#' + bibinfo[1]).addClass('selected-note');
	}
	
	jQuery(document).click(function(){
		jQuery('*').removeClass('selected-note');
	});

	//jQuery('ferrer2014').tooltip();
	
})