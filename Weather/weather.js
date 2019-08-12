

        // creates a click function for submitting the city searched
$(document).ready(function() {
    $("#submitWeather").click(function(){
                    
                    // creating a variable for city
        var city = $("city").val();

        // if the city value is not blank, run ajax call to request information from the server
        if(city !=''){
        // ajax call
            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + 
                "&APPID=d4fd3719101afa0124c6ea3df4c057b5",
                type: 'GET',
                dataType: "jsonp",
                success: function(data) {
                    console.log(data)
                }
            })
        // display an error if form submitted blank
        }else{
            $("#error").html('Field cannot be empty');
        }
        
    });
});
