import './lib/lib';

$('button').on('click', function() {
	$('div').eq(2).toggleClass('active');;
});

// $('div').click(function() {
// 	console.log($(this).index());
// });

// console.log($('div').eq(6).find('.more'));

// console.log($('.some').closest('.findmasde'));


$('.findme').fadeOut(1800);

// $('.wrap').html(
// 	`
// 		<div class="dropdown">
// 			<button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
// 			<div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
// 				<a href="#" class="dropdown-item">Vadim</a>
// 				<a href="#" class="dropdown-item">Bida</a>
// 				<a href="#" class="dropdown-item">Pavlovich</a>
// 			</div>
// 		</div>
// 	`
// );

// $('.dropdown-toggle').dropdown();