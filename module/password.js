function verifyPassword(event, element) {
    event.preventDefault(); // デフォルトのリンク動作を防ぐ
    
    var password = prompt("パスワードを入れないと見れないよ！");
    var correctPassword = "hari12081729"; // 設定するパスワード
    var pdfPath = element.getAttribute("data-pdf"); // data-pdf 属性からPDFのパスを取得

    if (password === correctPassword) {
        window.open(pdfPath, "_blank"); // 正しい場合、PDF を開く
    } else {
        alert("パスワードが違います");
    }
}
