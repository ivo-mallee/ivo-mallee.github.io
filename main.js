    
    var weekNumber = moment().format('W');
    var RoosterServerAdress = "https://roosters.rocmondriaan.nl/ict/student/P2/" + weekNumber +"/c/c00056.htm";
    console.log("its week:" +weekNumber);
    $.ajax({
    url: 'https://cors-anywhere.herokuapp.com/' + RoosterServerAdress,
    headers: {"Authorization": "Basic SUNUOiExMzVtM24="},
    success: function(response){
    ScheduleSuccess(response);
                               }
    });






    function ScheduleSuccess(response) 
    {
        document.write(response);
    }
