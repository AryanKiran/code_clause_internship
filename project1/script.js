let imageURL ;
function handleUpload(){
   
    const fileInput = document.getElementById('filePicker');
    const image = fileInput.files[0];

    const formData = new FormData();

    formData.append('image_file',image);
    formData.append('size','auto');
    const Apikey = "put your api key here";
    fetch('https://api.remove.bg/v1.0/removebg',{
        method:'POST',
        headers:{
            'X-Api-key':Apikey
        },
        body:formData
    })
    .then(function(response){
        return response.blob();
    })
    .then(function(Blob){
        console.log(Blob);
        const url = URL.createObjectURL(Blob);
        imageURL = url;
        const img = document.createElement('img');
       
        img.src = url;
        document.body.appendChild(img);
    })
    .catch();
    console.log('clicked');
}

    function Downloadfile(){
    var anchorELement = document.createElement('a');
    anchorELement.href = imageURL;
    anchorELement.download = 'no-bg-png';
    document.body.append(anchorELement);

    anchorELement.click();

    document.body.removeChild(a);

    
    }
