function getDayName(dayNum) {
    
    var day;

    switch (dayNum) {
        case 0:
            day = "Monday"
            break;
        case 1:
            day = "Tuesday"
            break;
        case 2:
            day = "Wednesday"
            break;
        case 3:
            day = "Thursday"
            break;
        case 4:
            day = "Friday"
            break;
        default:
            day = "The day is undefined,  " + dayNum + "  does not exist"
            break;
    }
    return day;
}
document.write(getDayName(0));