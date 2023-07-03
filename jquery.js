$('document').ready(function(){
    $('#main-menu').smartmenus();
}); // end function

$('document').ready(function(){
    $('.gallery a').attr('data-fancybox', 'mygallery');
    $('.gallery a').each(function(){
        $(this).attr('data-caption', $(this).find('img').attr('alt'));
        $(this).attr('title', $(this).find('img').attr('alt'));
    });
    $('.gallery a').fancybox();
    $('#tabContainer').tabs();
}); // end function

$(document).ready(function() {
	$('#tabContainer').tabs({
		show: 'fadeIn',
		hide: 'fadeOut'
	});
	var hash = location.hash;
	if (hash) {
		$('#tabContainer').tabs('load', hash)
	}
}); // end function

$('documetn').ready(function(){
    $('#name, #email, #phone, #subject, #message').focus(function(){
        $(this).css('background-color', 'lightblue');
    });
    $('#name, #email, #phone, #subject, #message').blur(function(){
        $(this).css('background-color', 'pink');
    });
}); // end function

$('document').ready(function(){
    $('#button').click(function(){
        alert('Thank you for submitting!');
    });
}); // end function

$('document').ready(function(){
    $('#photo').width(0).height(0).css('opacity', 0);
    $('#caption').hide();
    $('#photo').animate({
        width: '700px',
        height: '500px',
        opacity: 1,
    },
    1000,
    function(){
        $('#caption').fadeIn(1000);
    });
}); // end function
