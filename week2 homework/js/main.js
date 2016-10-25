var app = app || {};

app.main = (function(){

	console.log('Loading app.');

	var attachEvents = function(){

		console.log('Attaching events.');

		
		
		$('#search-button').off('click').on('click', function(){
			loadData($('#search-box').val());
			console.log("what the hell is this:" +$('#search-box').val());
		});

		$('#search-box').keypress(function(e) {
			if (e.keyCode == 13) { //when enter is pressed
				loadData($('#search-box').val()); //its going to do something. function. 
			}
		});
	};

	// 2. Let's just try to load some data from the API
	var loadData = function(query){
		console.log('Searching for ' + query + '...');

		var giphyUrl="http://api.giphy.com/v1/gifs/search?q="+query+"&api_key=dc6zaTOxFJmzC";
		// This is an AJAX function that JQuery is helping us to access Spotify Web API
		// More here: https://developer.spotify.com/web-api/search-item/
	    $.ajax({
	        url: giphyUrl,
	        data: {
	            q: query,
	        //     type: 'album',
	            limit: 32, //how many ill have
	            offset: 0, //has to do with the coordinates aligned to the page
	        },
	        success: function (response) {
	            // console.log(response);
	            // Take a look into the data structure.
				// The results are encapsulated into albums > items
				console.log("response is:"+response.data);

				// var results = response.albums.items;
				// console.log('Found ' + results.length + ' results.');

				appendData(response.data);
	        }
	    });

	};

	// 3. Let's display this data
	var appendData = function(data){
		console.log('Appending data.');
		console.log(data);

		// 5. What happens if we search for something again?
		// Let's clean up the results so we don't mess things up
		$('#view').empty();

		// 6. BONUS! Let's scroll- when you search itll be lower
		$('html, body').animate({
            scrollTop: $('#view').offset().top + 'px'
        }, 'slow');

		// 3.
		for(var i = 0; i < data.length; i++){ //limit is 100 give you 100 data- 100 gifs
			$('#view').append('<img src="' + data[i].images.downsized.url + '" class="gallery-item"/>');
		}
	};

	// 1.
	var init = function(){
		console.log('Initializing app.');
		attachEvents();
	};

	return {
		init: init
	};
})();

window.addEventListener('DOMContentLoaded', app.main.init);