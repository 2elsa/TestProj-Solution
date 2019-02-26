
$(() => {

    $('button[name="generateTreeBtn"]').click(() => {
        $.get(window.baseUrl + '/recursion/GetLocationsView', (page) => {
            $('div#tree-view-container').hide().html('').html(page).fadeIn();
        })
    })

})