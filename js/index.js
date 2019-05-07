// // Navigation - show sections

// $(document).ready(() => {
// 	$('#nav a').on('click', (e) => {
//     e.preventDefault();
//     $('.show').removeClass('show');
//     $( $(this).attr('data-target')).addClass('show');
// 	})
// });

function handleNav() {
  $('#nav a').on('click', e => {
    let id = $(this).attr('id');
    console.log('id? ->', id)
    console.log('event data', e)
    e.preventDefault();
    console.log('inner html ->', e.target.innerHTML);
    $('.show').removeClass('show');
    // refactor this solution
    // $(e.target).addClass('show');
    // $(this).addClass('show');
    $('#' + e.target.innerHTML.toLowerCase()).addClass("show")
  });
}

$(handleNav);