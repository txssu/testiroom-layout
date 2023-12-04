src="https://code.jquery.com/jquery-3.6.4.min.js">
$(document).ready(function() {
$('#qsn-text-input-place').on('input', function() {
	this.style.height = 'auto';
	this.style.height = (this.scrollHeight) + 'px';
});
});
