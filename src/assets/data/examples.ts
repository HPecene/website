interface examples {
    id: string
    title: string,
    description: string,
    div_id: string
}
export class ExampleGrammars {
    get(): Array<examples> {
        return [{
            "id": "1",
            "title": "Calculadora",
            "description": "Esta gramatica reconoce expresiones aritmeticas y realiza las operaciones utilizando acciones gramaticales",
            "div_id": "global-gist-5572b07db089406607f2875d9b5f5955"
        }]
    }
}