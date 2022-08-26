function openTabs(evt, ContentTabs) {
    var i, tabcontent, buttontabs;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    buttontabs = document.getElementsByClassName("buttontabs");
    for (i = 0; i < buttontabs.length; i++) {
        buttontabs[i].className = buttontabs[i].className.replace(" active", "");
    }

    document.getElementById(ContentTabs).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("default").click();


// BUTTON
function tools1() {
    const programming_item = [
        "HTML", "CSS", "JAVASCRIPT"
    ];

    var print = "";
    for (var i = 0; i < programming_item.length; i++) {
        print += "<button>" + programming_item[i] + "</button>";
    }
    return print;

}
document.getElementById('tools1').innerHTML = tools1();

function tools2() {
    const programming_item = [
        "HTML", "CSS", "JAVASCRIPT"
    ];

    var print = "";
    for (var i = 0; i < programming_item.length; i++) {
        print += "<button>" + programming_item[i] + "</button>";
    }
    return print;

}
document.getElementById('tools2').innerHTML = tools2();

function tools3() {
    const programming_item = [
        "HTML", "CSS", "JAVASCRIPT"
    ];

    var print = "";
    for (var i = 0; i < programming_item.length; i++) {
        print += "<button>" + programming_item[i] + "</button>";
    }
    return print;

}
document.getElementById('tools3').innerHTML = tools3();

