function TableMultiplication (number){
    let y = 1;
    results = 0 ;
    while ( y <= 10) {
        results = number * y;
        document.write (y + " x " + number + " = " + results + "<br>");
        y++;
    }
}

TableMultiplication(7);