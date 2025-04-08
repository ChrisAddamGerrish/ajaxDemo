function isASCII(str) {
    return /^[\x00-\x7F]*$/.test(str);
}

function sendText() {
    const usertext = document.getElementById("userText").value;
    const updateData = document.getElementById("result");

    if (!usertext.length > 0) {
        alert('The textbox must not be empty.');
    } else {

        if (isASCII(usertext)) {

            console.log(usertext);

            fetch("/userData",
                {
                    method: "POST",
                    headers: {'Content-Type': "application/json"},
                    body: JSON.stringify({userText: usertext}),
                }
            ).then(response => {
                return response.text();
            })
                .then(html => updateData.innerHTML = html);
                //.then(html => console.log(html));
        } else {
            alert('The textbox value contains non-ASCII characters.');
        }
    }
}


