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
            },
            {
                "id": "2",
                "title": "Calculadora con gramatica descendente",
                "description": "Esta gramatica reconoce expresiones aritmeticas y genera su arbol, no opera la entrada!.",
                "div_id": "global-gist-d760bca229ab5af33482bb1810e08c33",
                "function_name":"ejemplo3"
            },
            {
                "id": "3",
                "title": "Expresiones aritmeticas a cuadruplos",
                "description": "Esta gramatica traduce expresiones aritmeticas a codigo intermedio con notación de cuadruplos.",
                "div_id": "global-gist-1c8023941716d379c3e4db5d6bdb41b7",
                "function_name":"ejemplo4"
            },
            {
                "id": "4",
                "title": "Atributos heredados en JISON",
                "description": "Se presenta el paso de atributos heredados utilizando la pila de jison.",
                "div_id": "global-gist-b9a7bfffcb0a852eae352c1b2698296c",
                "function_name":"ejemplo5"
            },
            {
                "id": "5",
                "title": "If colgante",
                "description": "Se presenta debido a ambigueda por la forma de la gramatica.",
                "div_id": "global-gist-28dcbdb2b5a5f0e06de9da3712fc7eba",
                "function_name":"ejemplo6"
            }
        ]
    }
}