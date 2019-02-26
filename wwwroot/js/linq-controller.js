
$(() => {

    $('button[name="runBtn"').click(() => {
        var baseUrl = window.baseUrl;

        getPage(`${baseUrl}/linq/GetAverageGrade`, (page) => {
            $('.avg-content').hide().html('').html(page).fadeIn();
        });
        getPage(`${baseUrl}/linq/GetStudentAndGradeLetter`, (page) => {
            $('.grade-count-content').hide().html('').html(page).fadeIn();
        });
        getPage(`${baseUrl}/linq/GetStudentsOrderedByGrade`, (page) => {
            $('.ordered-students-content').hide().html('').html(page).fadeIn();
        });

    });
});

const getPage = (url, on_success_callback) => $.get(url, on_success_callback);