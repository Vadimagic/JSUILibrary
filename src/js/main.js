import './lib/lib';

// $('button').on('click', function() {
// 	$('div').eq(2).toggleClass('active');;
// });

// $('div').click(function() {
// 	console.log($(this).index());
// });

// console.log($('div').eq(6).find('.more'));

// console.log($('.some').closest('.findmasde'));


// $('.findme').fadeOut(1800);

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

$('#trigger').click(() => $('#trigger').createModal({
	text: {
		title: 'Vadimchiik',
		body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus eius velit iste obcaecati blanditiis atque fugit cumque sapiente? Dolore, odit.'
	},
	btns: {
		count: 3,
		settings: [
			 [
				  'Close',
				  ['btn-danger', 'mr-10'],
				  true
			 ],
			 [
				  'Save changes',
				  ['btn-success'],
				  false,
				  () => {
						alert('Данные сохранены');
				  }
			 ],
			 [
				  'Another btn',
				  ['btn-warning', 'ml-10'],
				  false,
				  () => {
						alert('Hello World');
				  }
			 ]
		]
	}
}));