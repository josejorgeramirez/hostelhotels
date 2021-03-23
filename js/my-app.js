// Initialize your app
var myApp = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	panel:{
		swipe:true
	},
	toolbar: {
		hideOnPageScroll: true,
	  },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Hostel hotels',
	dialog: {
		title: 'hostel hotels',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		
	]
});

// Export selectors engine
var $$ = Dom7;


var notificationFull = myApp.notification.create({
        icon: '<i class="material-icons">book_online</i>',
        title: 'Hostel hotels',
        subtitle: 'Reservar',
        text: 'Your confirmation number for the hotel is',
        closeTimeout: 5000,
      });


$$(document).on('click','#book_online', function () {
	console.log('add');
	notificationFull.open();
});


























 

