/* Your code starts here */

var app = app || {};

app.main = (function() {
	console.log('Your code starts here!');

	var attachEvents = function(){

	};

	var loadDictionary = function(){
		$.getJSON('/', function(response){
			console.log(response);
			for(var i = 0; i < response.length; i++){
				console.log('response is:' + response[i]);
			}
			// attachEvents();
		});
	};

	var loadWeather = function(){

	};


 	$(".close").click(function(){
 		$(this).parent().remove();
 		var deleteWord = $(this).siblings("h2").text();
 		console.log("delete this word"+ deleteWord);
 		$.ajax({
 			method:"POST",
 			url: "/delete",
 			data: deleteWord,
 			success: function(result){
 				console.log("result is: " + result);
 			}
 		});

 	})

 	$(".happy").click(function(){
        $(".words").hide();
    });

  $(".sub").click(function(){
        $(".words").show();
    });


	var init = function(){
		console.log('Initializing app.');
		loadDictionary();
	};

	return {
		init: init
	};

})();

window.addEventListener('DOMContentLoaded', app.main.init);