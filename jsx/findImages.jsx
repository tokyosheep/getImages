
function getImages(){
    var linkNum = activeDocument.placedItems.length;
    var embedNum = activeDocument.rasterItems.length;
    var images = getInforImages(activeDocument.placedItems);
    for(var i=0;i<images.length;i++){
        $.writeln(images[i].name);
        $.writeln(images[i].ext);
    }
    return JSON.stringify(images);
    function getInforImages(img){
        var objecs = [];
        for(var i=0;i<img.length;i++){
            objecs[i] = {};
            objecs[i].name = decodeURI(img[i].file.name);
            var fstr = objecs[i].name.split(".");
            var ext = fstr[fstr.length-1];
            objecs[i].ext = ext;
        }
        return objecs;
    }
}
