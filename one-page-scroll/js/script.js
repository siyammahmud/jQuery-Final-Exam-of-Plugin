$(document).ready(function(){
	$('#rippleria').rippleria({
        // aniamtion speed
        duration: 750,
        // custom easing effect
        easing: 'ease-in'
    });

    $('#rippleria').click(function(e) {
        e.preventDefault();

        var randInt = function (min, max) {
        var rand = min + Math.random() * (max - min)
        rand = Math.round(rand);
        return rand;
    };

    $(this).rippleria('changeColor',
            'rgba('+randInt(0,200)+','+randInt(0,200)+','+randInt(0,200)+',0.'+randInt(3,5));
    });
});



$(document).ready(function(){
 $(".main").tiltedpage_scroll({
    sectionContainer: "> section",     
    angle: 50,                         
    opacity: true,                     
    scale: true,                       
    outAnimation: true  
  });
});

