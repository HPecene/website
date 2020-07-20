interface examples {
    id: string
    title: string,
    description: string,
    grammar: string
}
export class ExampleGrammars {
    get(): Array<examples> {
        return [{
            "id": "1",
            "title": "Calculadora",
            "description": "Esta gramatica reconoce expresiones aritmeticas y realiza las operaciones utilizando acciones gramaticales",
            "grammar": "\nINICIO\t\t:\t\tSUMA\tEOF\t\t{ print($1); }\n\t\t\t;\n\n SUMA\t\t:\t\tSUMA\t\"+\"\tMULT\t\t{ $$ = $1 + $3; }\n \t\t\t|\t\tSUMA\t'-'\tMULT\t\t{ $$ = $1 - $3; }\n\t\t\t|\t\tMULT\t\t\t\t{ $$ = $1;}\n\t\t\t;\n\nMULT\t\t:\t\tMULT\t'*'\tVALOR\t\t{ $$ = $1 * $3; }\n \t\t\t|\t\tMULT\t'/'\tVALOR\t\t{ $$ = $1 / $3; }\n\t\t\t|\t\tVALOR\t\t\t\t{ $$ = $1;}\n\t\t\t;\n\nVALOR\t\t:\t\t'('\tSUMA\t')'\t\t{ $$ = Number($2); }\n\t\t\t|\t\tENTERO\t\t{ $$ = Number($1); }\n\t\t\t|\t\tDECIMAL\t\t{ $$ = Number($1); }\n\t\t\t;"
        }]
    }
}