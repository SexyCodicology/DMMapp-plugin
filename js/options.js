//Google Analytics - Replace **** with your GA id! 
/*
var _gaq = _gaq || [];
_gaq.push(['_setAccount', '****']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();
*/

//SEARCHBOX STUFF
/*
window.addEventListener('DOMContentLoaded', function () {
    var link = document.getElementById('btnOpenNewTab');
    var searchstring = $('input[id=searchInput]');
    link.addEventListener('click', function () {
        var newURL = 'http://someurlhere.com' + searchstring.val();
        chrome.tabs.create({
            url: newURL
        });
    });
}); */
$(document).ready(function () {

    var options = {
        url: "js/data.json",

        getValue: "Library",

        template: {
            type: "links",
            fields: {
                link: "Website"
            }

        },
        list: {
            maxNumberOfElements: 4,
            match: {
                enabled: true
            },
            sort: {
                enabled: true
            }
        },
    };
    $("#data-json").easyAutocomplete(options);

    console.log("ready!");
});