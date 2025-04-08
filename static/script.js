function sendText() {
    var usertext = document.getElementById("userText").value;
    const updateData = document.getElementById("result");
    console.log(usertext);

    fetch("/userData" ,
        {
        method: "POST",
        headers : {'Content-Type': "application/json"},
        body: JSON.stringify({ userText: usertext }),
        }
    ).then(response => {return response.text();})
        .then(text => updateData.innerHTML=text);


};


