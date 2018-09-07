$(document).ready(function () {
    var options = {
        url: "https://digitizedmedievalmanuscripts.org/app/js/data.json",
        getValue: function (element) {
            return $(element).prop("Library") + ", " + $(element).prop("City") + ", " + $(element).prop("Nation");
        },
        requestDelay: "250",
        template: {
            type: "links",
            fields: {
                link: "Website"
            }
        },
        list: {
            maxNumberOfElements: 250,
            match: {
                enabled: true
            },
            sort: {
                enabled: true
            }
        }
    };
    $("#data-json").easyAutocomplete(options);
    $("#helpbtn").click(function(){
        $(".info").toggle("fast");
    });
});