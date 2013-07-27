// Global variable object namespace
var wnt = {};



// Functions
function menuhighlight(pagename){
	$('#tab-'+pagename).addClass('active');
}


// Load Check
$('document').ready(function(){
	menuhighlight(wnt.pagename);
});



//  GA
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-4401582-6']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();