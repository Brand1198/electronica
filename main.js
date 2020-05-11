var cam=0;

function camera(){
    var camara = document.getElementById("camara");
    camara.onclick = function(e){
        if(cam==0){
            var video=document.querySelector("video");
            var handleSuccess = function(stream){
                video.srcObject = stream;
                cam=1;
            };
            navigator.mediaDevices.getUserMedia({video: true})
            .then(handleSuccess);
            
        }
    }
}

function mensaje(){
    var msg = document.getElementById("msg");
    msg.onclick = function(e){
        alert("bienvenido");
    }
}
    