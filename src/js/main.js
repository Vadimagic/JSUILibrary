import './lib/lib';

$('button').on('click', function() {
	$('div').eq(2).toggleClass('active');;
});

// $('div').click(function() {
// 	console.log($(this).index());
// });

// console.log($('div').eq(6).find('.more'));

console.log($('.some').closest('.findmasde'));