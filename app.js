// Almacenamiento de los nombres 
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Dígite un nombre");
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo} ya fue registrado`);
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = "";

    console.log("Amigos actuales:", amigos); // Verificar la lista de amigos
    actualizarLista();
}

function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No has registrado ningún amigo para sortear. Por favor, agrega amigos.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    console.log("Amigo sorteado:", amigoSorteado); // Verificar si realmente se elige un nombre

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo secreto: <strong>${amigoSorteado}</strong></li>`;
}


