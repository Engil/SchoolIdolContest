
$(document).keydown(function(e) {
    switch(e.which) {
    case 37:
	e.preventDefault();
	$('#left').click();
	break;
    case 39:
	e.preventDefault();
	$('#right').click();
	break;
    default: return;
    }
});
