
// function WriteToFile(passForm) {

//     set fso = CreateObject("Scripting.FileSystemObject");  
//     set s = fso.CreateTextFile("C:\test.txt", True);
//     s.writeline(document.text1.value);
//     s.writeline(document.text2.value);
//     s.writeline(document.text3.value);
//     s.Close();
// }


placeFileContent(document.getElementById('content'),"sandy.txt");

function getfile(event){
    const input = event.target;
    if('files' in input && input.files.length>0){
        placeFileContent(document.getElementById('content'),input.files[0]);
    }
}

function placeFileContent(target,file){
    readFileContent(file).then(content=>{
        target.value=content;
    }).catch(error=>console.log(error));
}

function readFileContent(file){
    const reader = new FileReader();
    return new Promise((resolve,reject)=>{
        reader.onload = event=>resolve(event.target.result);
        reader.onerror = error =>reject(error);
        reader.readAsText(file);
    })
}