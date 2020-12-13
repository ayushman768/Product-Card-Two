function mycheck(evt, MySelect) {
    var tag = document.querySelectorAll('.my_optinal');
    for (var o = 0; o < tag.length; o++) {
        tag[o].style.display = "none";

    }
    var btn = document.getElementsByClassName('check');
    for (var v = 0; v < btn.length; v++) {
        btn[v].className = btn[v].className.replace("active", "");
    }
    document.getElementById(MySelect).style.display = "block";

    evt.currentTarget.className += "active";

}

function closeMy() {
    var tag = document.querySelectorAll('.my_optinal');
    for (var k = 0; k < tag.length; k++) {
        if (tag[k].style.display === "block") {
            tag[k].style.display = "none";
        } else {
            tag[k].style.display = "none";
        }


    }

}

function mySlider(evt, productgallery) {
    var img = document.querySelectorAll('.product_gallery>img');
    var pr = document.querySelector('.presnt');


    for (var i = 0; i < img.length; i++) {
        img[i].style.display = "none";

    }
    var box = document.getElementsByClassName('i_g_f');
    for (var i = 0; i < box.length; i++) {
        box[i].className = box[i].className.replace(" active", "");

    }

    document.getElementById(productgallery).style.display = "block";

    evt.currentTarget.className += "active";
}

function myimg() {
    var img0 = document.querySelectorAll('.product_gallery>img');
    var pr = document.querySelector('.presnt');
    for (var s = 0; s < img0.length; s++) {
        for (var j = 0; j < pr.length; j++) {
            if (img[s].style.display === "block") {
                pr[j].style.display = "none";
            } else {
                pr[j].style.display = "block";
            }
        }
    }

}
myimg();