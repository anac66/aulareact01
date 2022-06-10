import { useState } from "react"



const TerceiroComponente = () => {
    const [resultado, setResultado] = useState(0)
    const [numero1, setNumero1] = useState(0)
    const [numero2, setNumero2] = useState(0)


    function gerarResultado() {
        let soma = parseInt(numero1) + parseInt(numero2); // parsetInt converter uma String para Inteiro;
        
        let aoQuadrado = soma * soma;
        console.log("O resultado é :" + aoQuadrado);

    }

    return (
        <div>
            <input onChange={e => setNumero1(e.target.value)} />
            <input onChange={e => setNumero2(e.target.value)} />
            <button onClick={gerarResultado}>Somar</button>

        </div>
    )

}

export default TerceiroComponente;