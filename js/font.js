//I. Font face
$('#fontArial').click(function () {
    $('body').css("font-family", "Arial");
    $('button').css("font-family", "Arial");
});
$('#fontTimesNewRoman').click(function () {
    $('body').css("font-family", "TimesNewRoman");
    $('button').css("font-family", "TimesNewRoman");
});
$('#fontCalibri').click(function () {
    $('body').css("font-family", "Calibri");
    $('button').css("font-family", "Calibri");
});
//II. Font Style bold
$('#styleBold').click(function () {
    if (checkBold.checked) {
        $('body').css("font-weight", "Bold");
        $('button').css("font-weight", "Bold");
        $('h1').css("font-weight", "Bold");
    }//else if
    else {
        $('body').css("font-weight", "");
        $('button').css("font-weight", "");
        $('h1').css("font-weight", "");
    }//else if
});
//IV. Italic
$('#styleItalic').click(function () {
    if (checkItalic.checked) {
        $('body').css("font-style", "Italic");
        $('button').css("font-style", "Italic");
        $('h1').css("font-style", "Italic");
    }//else if
    else {
        $('body').css("font-style", "");
        $('button').css("font-style", "");
        $('h1').css("font-style", "");
    }//else if
});
//V. Underline
$('#styleUnderLine').click(function () {
    //alert();
    if (checkUnderLine.checked) {
        $('body').css("text-decoration", "Underline");
        $('button').css("text-decoration", "Underline");
    }//close if
    else {
        $('body').css("text-decoration", "");
        $('button').css("text-decoration", "");
    }//close else
});
//VI. Font increase
$('#fontSizeIncrease').click(function () {
    var defaultSize = $('body').css('font-size');
    var intSize = parseInt(defaultSize);
    var unit = defaultSize.slice(-2);
    //alert(unit);
    intSize += 2;
    $('body').css("font-size", intSize + unit);
    $('button').css("font-size", intSize + unit);
    $('textarea').css("font-size", intSize + unit);
    $('h1').css("font-size", intSize + unit);
});
//VII. Font decrase
$('#fontSizeDecrease').click(function () {
    var defaultSize = $('body').css('font-size');
    var intSize = parseInt(defaultSize);
    var unit = defaultSize.slice(-2);
    //alert(unit);
    intSize -= 2;
    $('body').css("font-size", intSize + unit);
    $('button').css("font-size", intSize + unit);
    $('textarea').css("font-size", intSize + unit);
    $('h1').css("font-size", intSize + unit);
});