    
    var weekNumber = moment().format('W');
    var RoosterServerAdress = "https://roosters.rocmondriaan.nl/ict/student/P2/" + weekNumber +"/c/c00056.htm";
    console.log("its week:" +weekNumber);
    $.ajax({
    url: 'https://thingproxy.freeboard.io/fetch/' + RoosterServerAdress,
    headers: {"Authorization": "Basic SUNUOiExMzVtM24="},
    success: function(response){
    ScheduleSuccess(response);
                               }
    });






    function ScheduleSuccess(response) 
    {
        //console.log(response);
        document.write(response);
    }
