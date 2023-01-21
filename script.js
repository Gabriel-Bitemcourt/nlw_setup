const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')
//Eventos
button.addEventListener('click', add)
form.addEventListener('change', save)

// Vai adicionar um dia nos Habitos
function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, 5)
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists){
        alert('Dia Já Existente!')
        return 
    }
    alert('Dia Adicionado com Sucesso')
    nlwSetup.addDay(today)
}
// vai salvar os dados em um array
function save() {
    localStorage.setItem('NLWsetup@habits', JSON.stringify(nlwSetup.data)) 
}

const data = JSON.parse(localStorage.getItem('NLWsetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()