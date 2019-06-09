
window.onload = () =>{
    'use strict';
    const csInterface = new CSInterface();
    themeManager.init();
    const extensionId = csInterface.getExtensionID(); 
    const extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) +`/jsx/`;
    csInterface.evalScript(`$.evalFile("${extensionRoot}json2.js")`);//json2読み込み
    const images = document.getElementById("images");
    const getInfor = document.getElementById("getInfor");
    
    const persistence_off = new CSEvent("com.adobe.PhotoshopUnPersistent", "APPLICATION");
    persistence_off.extensionId = extensionId;
    csInterface.dispatchEvent(persistence_off);
    
    getInfor.addEventListener("click",()=>{
        csInterface.evalScript(`getImages()`,(o)=>{
            const objects = JSON.parse(o);
            console.log(objects);
            while(images.firstChild){
                images.removeChild(images.firstChild);
            }
            objects.forEach(v=>{
                const li = document.createElement("li");
                li.textContent = v.name;
                images.appendChild(li);
            });
        }); 
    });
    
}
    
