/ Buscando e referenciando o botão 'request-button'
const requestButton = document.getElementById('request-button');

requestButton.addEventListener('click', function () {
    const method = document.getElementById('methods').value;
    const apiUrl = 'http://localhost:8001/api/';
    const call = async (method, apiUrl) => {
        fetch(
            apiUrl,
            {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(response => {
                if (response.ok) {
                    response.json().then(data => {
                        const responses = document.querySelector('.responses');
                        const responseElement = document.createElement('div');
                        responseElement.innerHTML = JSON.stringify(data.message);
                        responses.appendChild(responseElement);
                    });
                };
            })
            .catch(error => console.log(error));
    };

    call(method, apiUrl);
});