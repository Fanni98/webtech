$(document).ready(function () {
    $.getJSON('manufacturers', function (data) {
        var table = $('<table id="table"></table>');
        table.append("<tr>" +
            "<th id='th'>Name</th>" +
            "<th id='th'>Country</th>" +
            "<th id='th'>Founded</th>" +
            "</tr>");

        $.each(data, function (key, value) {
            var row = $('<tr></tr>');
            var nameCell = $('<td id="td">' + value.name + '</td>');
            var countryCell = $('<td id="td">' + value.country + '</td>');
            var foundedCell = $('<td id="td">' + value.founded + '</td>');
            row.append(nameCell);
            row.append(countryCell);
            row.append(foundedCell);
            table.append(row);
        });
        $(".manufacturers_table").append(table);
    });
});