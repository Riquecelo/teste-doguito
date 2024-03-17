export function Details(){
    const url = localStorage.getItem('imgUrl')
    const dados = localStorage.getItem('dados')

    console.log(dados)
    console.log(typeof(dados))
    return(
        <>
            <img src={url} alt="" />
            <ul>
                {/* dados.map(dado => <li key={dado}>{dado}</li> ) */}
            </ul>
        </>
    )
}