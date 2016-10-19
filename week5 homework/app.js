var Xray = require('x-ray');
var x = Xray();

// 1st argument: URL you want to scrape
// 2nd argument: the selector that you want to grab
// 3rd argument: the array containing object of what you want to be passed on
x('https://www.youtube.com/results?search_query=cat', '.container', [{
	videos: x('.yt-lockup-dismissable', [{
		title: '.yt-lockup-title a@title',
		link: '.yt-lockup-title a@href',
		image:'.yt-thumb-simple img@src',
		authorLink:'.yt-lockup-byline a@href',
		author:'.yt-lockup-byline a',
		year: '.yt-lockup-meta-info li',
		information: '.yt-lockup-description b',
		// rating: '.ratings-imdb-rating strong',
		// thumbnail: '.lister-item-image img@src',
		// genre: ['.genre'],
		// people: x('.lister-item-content p a', [{
		// 	name: '',
		// 	link: '@href'
		// }]),
		// poster: x('.lister-item-header a@href', 'head meta[property="og:image"]@content')
	}])
}])
	.paginate('a.lister-page-next.next-page@href')
	.limit(20)
    .write('results.json');