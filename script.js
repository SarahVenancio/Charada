const baseUrl = "https://api-charadas-seven.vercel.app";
const aleatorio = "/charadas";
let respostaCharada = "";

async function getCharada() {
    try {
        const response = await fetch(baseUrl + aleatorio);
        
        // if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const charadaJson = await response.json();
        document.getElementById("charada-pergunta").innerText = charadaJson.pergunta;
        
        respostaCharada = charadaJson.resposta;
    } catch (error) {
        console.log("Erro ao chamar a API: " + error);
    }
}

getCharada();

function verificarResposta() {
    const respostaUsuario = document.getElementById("input-charada").value.trim().toLowerCase();
    const resultado = document.getElementById("resposta-container");

    if (respostaUsuario === respostaCharada.toLowerCase()) {
        resultado.textContent = "Correto!✔";
        resultado.style.color = "green";
    } else if (respostaCharada.toLowerCase().includes(respostaUsuario) && respostaUsuario.length > 2) {
        resultado.textContent = "Quase lá! Você acertou parte da resposta.😊 A resposta completa é: " + respostaCharada;
        resultado.style.color = "orange";
    }else {
        resultado.textContent = "Errado! Tente novamente.❌ A resposta é: " + respostaCharada;
        resultado.style.color = "red";
    }
}
