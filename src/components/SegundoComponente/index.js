import "./styles.css"

const SegundoComponente = () => {

    const handleLogin = (e) => {
        console.log("login")
    }

    return (
        <form>
            <label className="e-mail">
                Email:
                <input className="input-form" type="text" placeholder='digite seu email' />
            </label>
            <label className="e-mail" style={{ display: 'block' }}>
                Senha:
                <input className="input-form" type="password" placeholder='digite sua senha' />
            </label>
            <input className="button-Click" type="button" value="Entrar" />



        </form>
    )
}

export default SegundoComponente




/*
    Criar um Componente Novo
    Criar 2 variáveis com números
    criar uma função para somar os 2 número e elevar ao quadrado
    Clicar no botão, disparar a função
    mostrar o resultado no console
*/