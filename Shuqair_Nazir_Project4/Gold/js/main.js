// JavaScript Document
// Nazir Shuqair
//	MiU 1310
//	24 OCT 2013
//	Project 4

$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#additem').on('pageinit', function(){

		var myForm = $('#vtc');
		myForm.validate({
		invalidHandler: function(form, validator) {
		},
		submitHandler: function() {
			var data = myForm.serializeArray();
			storeData(data);
			//reloads page to clear fields
			window.location.reload(true);
		}
});
	
	//any other code needed for addItem page goes here
	var storeData = function(data){
		
		//assigns id to the item
		var id 				= Math.floor(Math.random() * 100001);
		
		localStorage.setItem(id, JSON.stringify(data));
		console.log(data);
		alert("Meeting Saved!");
	}
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};


