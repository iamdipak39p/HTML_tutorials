let image1=document.getElementById('img1');


function change(){
    if (image1.src.match("img2.jpeg")){
        image1.src="img1.jpeg";
    }
    else{
        image1.src="img2.jpeg";
    }
};




function zoomIn(){
    let image2=document.getElementById('img3')
    let currWidth = image2.clientWidth;
    let currHeight = image2.clientHeight;
    image2.style.width=(currWidth + 10) + "px";
    image2.style.height=(currHeight + 10) + "px";

};


function zoomOut(){
    let image3=document.getElementById('img4')
    let currWidth = image3.clientWidth;
    let currHeight = image3.clientHeight;
    image3.style.width=(currWidth - 10) + "px";
    image3.style.height=(currHeight - 10) + "px";

};


function remove(){
    const element = document.getElementById("para");
    element.remove();
}

function bold(){
    var e = document.getElementsByTagName('i')[0];

    var d = document.createElement('b');
    d.innerHTML = e.innerHTML;

    e.parentNode.replaceChild(d, e);
};


