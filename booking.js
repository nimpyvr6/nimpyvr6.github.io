<script>
// A $( document ).ready() block.
$( document ).ready(function() {
	//you can access the console and stuff by turning on dev tools, or right click in page and press inspect
    console.log( "ready!" );//leaves messages in console. handy for debug to check shit
    //use the dollar sign to target stuff, all jquery stuff tends to start wit a dollar sign when targeting things
    //$('#day').val(); this targets th select with id of day and gets its value
    console.log($('#day').val());
    console.log($('#day').prop('name'));
    console.log($('#day').prop('id'));
    //i gave it different id and name as exmaple to show you
    //you can use a target to trigger a function you wrote, like when you submit the form or click on a button
    /*
	$( "#target" ).click(function() {
	  alert( "Handler for .click() called." );
	});
	https://api.jquery.com/click/

	$( "#target" ).submit(function( event ) {
	  alert( "Handler for .submit() called." );
	  event.preventDefault();
	});
	https://api.jquery.com/submit/

	can read up on them in the links andthing thats .something() after a target is a jquery function usually
    */
    //this form triggers when you submit the form with id of myform
    $( "#myform" ).submit(function( event ) {
	  
		
		//lets get the values and put in console
		console.log($('#day').val());
	    console.log($('#month').val());
	    console.log($('#year').val());
	    //lets create a variable which is all the values put together
	    var inputtedDate = $('#day').val() + $('#month').val() + $('#year').val();
	    console.log(inputtedDate);
    	//here is an array of dates you cant have
    	var takenDates = [
    	'2018-01-07',
    	'2018-01-14',
    	'2018-01-21',
    	'2018-01-28',
    	'2018-01-30',
    	'2018-02-04',
    	'2018-02-11',
    	'2018-02-15',
    	'2018-02-18',
    	'2018-02-25',
    	'2018-02-22',
    	'2018-02-23',
    	'2018-02-24',
    	'2018-02-26',
    	'2018-03-01',
    	];
    	//lets use special jquery function that looks for an array index matching whay you tell it
    	//native javascript has functions too, but this is a jquery one
    	console.log(jQuery.inArray(inputtedDate, takenDates));
    	//it returns the index in the array where it finds the value that matches
    	//so if you did it with 01012018 it returns 0 (the first index but arrays start at zero)
    	//if it doesnt find one that matches it returns -1
    	//if we get -1 we can let them book
    	if (jQuery.inArray(inputtedDate, takenDates) == -1) {
    		//lets give a message, let them submit
    		$('#messages').html('this day is free');
    		event.preventDefault();//delete this line to let the form submit when your checking is ok i left it in for now 
		
    	} else {
    		$('#messages').html('this day has been booked');
    		event.preventDefault();//this is a special command that stops the event that normally happens i.e. the form actually submits
		
    	}

	});

});
</script>