interface examples {
    id: string
    title: string,
    description: string,
    div_id: string,
    function_name: string
}
export class ExampleGrammars {
    get(): Array<examples> {
        return [
            {
                "id": "0",
                "title": "Calculadora",
                "description": "Esta gramatica reconoce expresiones aritmeticas y realiza las operaciones utilizando acciones gramaticales",
                "div_id": "global-gist-5572b07db089406607f2875d9b5f5955",
                "function_name":"ejemplo1"
            },
            {
                "id": "1",
                "title": "Calculadora con ambiguedad y precedencia",
                "description": "Esta gramatica reconoce expresiones aritmeticas y realiza las operaciones utilizando acciones gramaticales, contiene ambiguedad que es resuelta utilizando precendencia.",
                "div_id": "global-gist-377c4c7adcbd0c8d2ab9d32caf0e5b7e",
                "function_name":"ejemplo2"
            }
        ]
    }
}