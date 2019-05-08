// // Navigation - show sections

function handleNav() {
  $('#nav a').on('click', e => {
    console.log('event data ->', e)
    e.preventDefault();
    $('.show').removeClass('show');
    $('#' + e.target.className).addClass('show');
    // $('#' + e.target.innerHTML.toLowerCase()).addClass("show")
  });
}

$(handleNav);