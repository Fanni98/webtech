$(function (){
    $('form').on('submit', function (submit) {
        submit.preventDefault();

        $.ajax({
            type:'post',
            url: 'addManufacturers',
            data: $('form').serialize(),
            success: function () {
                confirm("Yay!")
            },
            error: function () {
                window.alert("Oops!");
            }
        })
    })
});