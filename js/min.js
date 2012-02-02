var jQT = $.jQTouch( {});

/*
var databaseOptions = {
	filename : 'todo_database',
	version : '1.0',
	displayName : 'todo_db',
	maxSize : 1024
};

var database = openDatabase(databaseOptions.filename, databaseOptions.version, databaseOptions.displayName, databaseOptions.maxSize);

database.transaction(function(transaction) {
	transaction.executeSql('CREATE TABLE if not exists incomplete (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, todo TEXT NOT NULL, desc TEXT, date DATE);');
});

$(function(){
	date = new Date();
	date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
	database.transaction(function(transaction) {
		transaction.executeSql('INSERT INTO incomplete (todo, desc, date) VALUES (?,?,?);',['Do something!', 'Description', date]);
	});


	localStorage.setItem('secondTime', '1');
	console.log(localStorage.getItem('firstTime'));
});
*/