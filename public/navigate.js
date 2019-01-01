let raised = false; // Is the navbar raised?
let currentlyActive = ""; // Which content is currently active?

$("#story-link").click(function(){
    toggleActive("#our-story");
});

$("#calendar-link").click(function(){
    toggleActive("#calendar");
});

$("#about-link").click(function(){
    toggleActive("#about");
});

function toggleActive(current) {
    if(!raised && currentlyActive !== current) {
        $("#home").toggleClass("raise");
        $(current).toggleClass("hidden");
        raised = true;
        currentlyActive = current;
    } else if (raised && currentlyActive === current){
        $("#home").toggleClass("raise");
        $(current).toggleClass("hidden");
        raised = false;
        currentlyActive = "";
    } else if (raised && currentlyActive !== current){
        $(currentlyActive).toggleClass("hidden");
        $(current).toggleClass("hidden");
        currentlyActive = current;
    }
}