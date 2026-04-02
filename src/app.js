let url = 'https://68fa2550ef8b2e621e7ef179.mockapi.io/listaTarefas'

async function get() {

    const req = await fetch(url)
    const data = await req.json()

    let lista = document.querySelector('ul')

    lista.innerHTML = ''

    for (let i = 0; i < data.length; i++) {

        let item = data[i]

        if (item.conluido) {
            let row = `
            <li>
                <input type="checkbox" checked onclick="checkTarefa(${item.id})" id="item_${item.id}"> 
                <span id="desc_${item.id}">${item.tarefa}</span>
                <button onclick="delTarefa(${item.id})">X</button>
            </li>
            `
            lista.innerHTML += row
            checkTarefa(item.id)
        } else {
            let row = `
            <li>
                <input type="checkbox" onclick="checkTarefa(${item.id})" id="item_${item.id}"> 
                <span id="desc_${item.id}">${item.tarefa}</span> 
                <button onclick="delTarefa(${item.id}, false)">X</button>
            </li>
        `

            lista.innerHTML += row
            checkTarefa(item.id)
        }

    }
}

async function checkTarefa(linha) {
    let check = document.querySelector('#item_' + linha)

    if (check.checked) {
        document.querySelector('#desc_' + linha).style.textDecoration = 'line-through'
        altCheckTabela(linha, true)
    } else {
        document.querySelector('#desc_' + linha).style.textDecoration = 'none'
        altCheckTabela(linha, false)
    }
 
}

async function altCheckTabela(linha, concluido) {

     const req = await fetch(url + '/' + linha, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ conluido: concluido })
    })
}

async function post() {

    let campo = document.querySelector('#tarefa_add').value

    let obj = {
        tarefa: campo
    }

    const req = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    }).then(() => {
        document.querySelector('#tarefa_add').value = ''
         get()
    })

}

async function delTarefa(linha) {

     const req = await fetch(url + '/' + linha, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }).then(() => {
        get()
    })
}

get()