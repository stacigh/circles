$(document).ready(function(){
	
	$('.button').click(function(){
		$(this).fadeOut();
		$('.circle').addClass('animate-bounce');
		$('.control-panel').slideDown();
	});

	// Change properties
	$("#radius").mousemove(function () {
	    var newValue = $(this).val();
		$('.circle').css('border-radius', newValue + '%');
	});

	$('#uniform').click(function(){
		if( $('#uniform').prop('checked') ) {
			$('.circle').addClass('circle--uniform');
		} else {
			$('.circle').removeClass('circle--uniform');
		}
	});

	// Delete Nodes Mode
	$('#delete').click(function(){
		if( $('#delete').prop('checked') ) {
			$('.circle').addClass('animate-shake circle--delete-node');
		} else {
			$('.circle').removeClass('animate-shake circle--delete-node animate-bounce').css('opacity', '1');
		}
	});

	// Display tooltip or remove circle
	$('.circle').click(function(){
		if( $('#delete').prop('checked') ) {
			$(this).remove();

			if ( $('.deleted-nodes-title:hidden, .deleted-nodes-title:hidden') ) {
				$('.deleted-nodes-title, .deleted-nodes-list').show();
			}
			$('.deleted-nodes-list').append('<li>' + $(this).attr('id') + '</li>');
		} else {
			$(this).find('.tooltip').text( $(this).attr('id') ).hide().fadeIn(50).delay(3000).fadeOut(400);
		}
	});
});