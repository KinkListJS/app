/* ~SaVa~ */

function selectColouringHelperUpdate(first){
    updateSelectColour(first.srcElement);
    updateCookie();
}

function updateSelectColour(elmnt){switch(elmnt.selectedIndex){
    case 0:elmnt.style.backgroundColor="#c5c5ce";elmnt.style.color="#010104";break;
    case 1:elmnt.style.backgroundColor="#4d0a0a";elmnt.style.color="#c5c5ce";break;
    case 2:elmnt.style.backgroundColor="#b06a23";elmnt.style.color="#010104";break;
    case 3:elmnt.style.backgroundColor="#c1c94f";elmnt.style.color="#010104";break;
    case 4:elmnt.style.backgroundColor="#40b538";elmnt.style.color="#010104";break;
    case 5:elmnt.style.backgroundColor="#84a6c2";elmnt.style.color="#010104";break;
}}

function loadListData(dat){
    let decodedDat = decodeDat(dat);
    var binStr = "";
    for (var i = 0; i < dat.length; i++) binStr+=decodedDat[i].charCodeAt(0).toString(2).substring(1);
    Array.from(document.getElementsByClassName("KinkSelectMenu")).forEach(elmnt => {
        switch(binStr.substring(0,3)) {
            case "001":elmnt.value=0;break;
            case "010":elmnt.value=1;break;
            case "011":elmnt.value=2;break;
            case "100":elmnt.value=3;break;
            case "101":elmnt.value=4;break;
            case "110":elmnt.value=5;break;
        }binStr=binStr.substring(3);
        updateSelectColour(elmnt);
    });
}

function collectListData(){
    var binStr = "";
    var listData = "";
    Array.from(document.getElementsByClassName("KinkSelectMenu")).forEach(elmnt => {
        if(binStr.length==6){listData+=encodeBin(binStr);binStr = "";}
        switch(elmnt.selectedIndex) {
            case 0:binStr+="001";break;
            case 1:binStr+="010";break;
            case 2:binStr+="011";break;
            case 3:binStr+="100";break;
            case 4:binStr+="101";break;
            case 5:binStr+="110";break;
        }
    }); if(binStr.length==3)binStr+="000";
    return listData+encodeBin(binStr);
}

function encodeBin(binStr){
    var byteStr = "01"+binStr;
    return String.fromCharCode(parseInt(byteStr, 2))
        .replaceAll("@","0")
        .replaceAll("[","1")
        .replaceAll("\\","2")
        .replaceAll("]","3")
        .replaceAll("^","4")
        .replaceAll("`","6");
}

function decodeDat(dat){
    return dat
        .replaceAll("0","@")
        .replaceAll("1","[")
        .replaceAll("2","\\")
        .replaceAll("3","]")
        .replaceAll("4","^")
        .replaceAll("6","`");
}

function updateCookie(){document.cookie = "d="+collectListData();}

function getSaveDataCookie() {
  let matches = document.cookie.match(new RegExp("(?:^|; )d=([^;]*)"));
  return matches?decodeURIComponent(matches[1]):undefined;
}

function getDataURLParam() {
    let params = new URLSearchParams(window.location.search);
    return params.has("d")?params.get("d"):undefined;
}

function alertSharableID(){
    navigator.clipboard.writeText(window.location.href.split('?')[0]+"?d="+collectListData());
    alert("Coppied to Clipboard!");
}