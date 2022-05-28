function display() {
    var select = document.getElementById('selectmenu');
    var value = select.options[select.selectedIndex].text;

    if (value == 'Email') {
        document.getElementById('selectInput').innerHTML = "<label>Enter your " + value + "</label><br>" +
            "<input type='email'><br>";
    }

    if (value == 'Phone') {
        document.getElementById('selectInput').innerHTML = "<label>Enter your " + value + "</label><br>" +
            "<input type='email'><br>";
    }
}