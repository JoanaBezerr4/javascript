const pessoa = ['joana', 'bezerra', '18']
pessoa.shift()

document.getElementById('texto').innerHTML = pessoa.join(" - ");
