//Translate button language.
//ids: btnPush,btnPop,btnPeek,btnSize,btnIsEmpty

//spanish translation
$('#langEs').click(function(){
    //Empujar, Reventar, Mirar, Tamaño, esVacío

    document.getElementById("btnPush").innerText="Empujar";
    document.getElementById("btnPop").innerText="Reventar";
    document.getElementById("btnPeek").innerText="Mirar";
    document.getElementById("btnSize").innerText="Tamaño";
    document.getElementById("btnIsEmpty").innerText="esVacío";
});


//english
$('#langEn').click(function(){
    //Push, Pop, Peek, Size, isEmpty

    document.getElementById("btnPush").innerText="Push";
    document.getElementById("btnPop").innerText="Pop";
    document.getElementById("btnPeek").innerText="Peek";
    document.getElementById("btnSize").innerText="Size";
    document.getElementById("btnIsEmpty").innerText="isEmpty";
});

//Japanese
$('#langJa').click(function(){
    //押す, ポップ, ピーク, サイズ, 空です

    document.getElementById("btnPush").innerText="押す";
    document.getElementById("btnPop").innerText="ポップ";
    document.getElementById("btnPeek").innerText="ピーク";
    document.getElementById("btnSize").innerText="サイズ";
    document.getElementById("btnIsEmpty").innerText="空です";
});