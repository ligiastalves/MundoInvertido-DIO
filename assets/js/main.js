import { subscribeToHellfireClube } from './firebase/hellfire-clube.js'

    const txtName = document.getElementById('txtName')
    const txtEmail = document.getElementById('txtEmail')
    const txtLevel = document.getElementById('txtLevel')
    const txtCharacter = document.getElementById('txtCharacter')

    const btnSubscribe = document.getElementById('btnSubscribe')

    btnSubscribe.addEventListener('click', async () => {
           const subscription = {
            name: txtName.value,
            email: txtEmail.value,
            level: txtLevel.value,
            character: txtCharacter.value
        }

        const subscriptionId = await subscribeToHellfireClube(subscription)
        alert(`Inscrição ${subscriptionId} adicionada com sucesso!`)

        txtName.value = ''
        txtEmail.value = ''
        txtLevel.value = ''
        txtCharacter.value = ''

    })