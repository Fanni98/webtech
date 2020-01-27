$(document).ready(function () {
    $.getJSON('manufacturerNames', function (data) {
        var select = $('<select id="selector"></select>');
        var optionAll = $('<option value="all">All</option>');
        select.append(optionAll);
        $.each(data, function (key, value) {
            var option = $('<option value="' + value+ '">' + value + '</option>');
            select.append(option);
        });
        $(".select").append(select);
    });
});

function list(){
    $("table").remove();
    var e = document.getElementById("selector");
    var selectorValue = e.options[e.selectedIndex].value;
    document.cookie='name=' + selectorValue;
    if (selectorValue === 'all') {
        $.getJSON('cars', function (data) {
            lister(data);
        });
    }
    else{
        $.getJSON('/manufacturer', function (data) {
            lister(data);
        });
    }
}

function lister(data){
    var table = $('<table id="table"></table>');
    table.append("<tr>" +
        "<th id='th'>Name</th>" +
        "<th id='th'>Consumption</th>" +
        "<th id='th'>Color</th>" +
        "<th id='th'>Manufacturer</th>" +
        "<th id='th'>Available</th>" +
        "<th id='th'>Year</th>" +
        "<th id='th'>Horsepower</th>" +
        "</tr>");
    $.each(data, function (key, value) {
        var row = $('<tr></tr>');
        var nameCell = $('<td id="td">' + value.name + '</td>');
        var consumptionCell = $('<td id="td">' + value.consumption + '</td>');
        var colorCell = $('<td id="td">' + value.color + '</td>');
        var manufacturerCell = $('<td id="td">' + value.manufacturer + '</td>');
        var availableCell = $('<td id="td">' + value.available + '</td>');
        var yearCell = $('<td id="td">' + value.year + '</td>');
        var horsepowerCell = $('<td id="td">' + value.horsepower + '</td>');
        row.append(nameCell);
        row.append(consumptionCell);
        row.append(colorCell);
        row.append(manufacturerCell);
        row.append(availableCell);
        row.append(yearCell);
        row.append(horsepowerCell);
        table.append(row);
    });
    $(".car_table").append(table);
}