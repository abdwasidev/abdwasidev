function skills() {
    const skill_item = [
        "C/C++", "HTML", "CSS", 
        "BOOTSTRAP", "JAVASCRIPT", "PHP", 
        "NODE JS"
    ];

    var print = "";
    for (var i = 0; i < skill_item.length; i++) {
        print += "<button>" + skill_item[i] + "</button>";
    }
    return print;

}
document.getElementById('skills-item').innerHTML = skills();

function tools() {
    const tools_item = [
        "VISUAL STUDIO CODE", 
        "FIGMA", "ADOBE XD"
    ];

    var print = "";
    for (var i = 0; i < tools_item.length; i++) {
        print += "<button>" + tools_item[i] + "</button>";
    }
    return print;
}

document.getElementById('tools-item').innerHTML = tools();
