import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface examples {
  id: string
  title: string,
  description: string,
  grammar: string
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  examplesList: Array<examples>;
  current_index: string;
  current_index_number: number;
  showInput: boolean;
  showOutput: boolean;
  showAst: boolean;
  salida: string;
  segment: string;
  constructor() {
    this.current_index = "1";
    this.current_index_number = 1;
    this.examplesList = [];
    this.createExamples();
    this.showInput = false;
    this.showOutput = true;
    this.showAst = true;
    this.salida = '';
    this.segment = 'entrada';
  }

  ngOnInit() { }

  createExamples() {
    // Calculadora
    this.examplesList.push({
      id: "1",
      title: 'Calculadora',
      description: 'Esta gramatica reconoce expresiones aritmeticas y realiza las operaciones utilizando acciones gramaticales',
      grammar: `\nINICIO\t\t:\t\tSUMA\tEOF\t\t{ print($1); }\n\t\t\t;\n\n
SUMA\t\t:\t\tSUMA\t'+'\tMULT\t\t{ $$ = $1 + $3; }\n 
\t\t\t|\t\tSUMA\t'-'\tMULT\t\t{ $$ = $1 - $3; }\n
\t\t\t|\t\tMULT\t\t\t\t{ $$ = $1;}\n
\t\t\t;\n\n
     
MULT\t\t:\t\tMULT\t'*'\tVALOR\t\t{ $$ = $1 * $3; }\n 
\t\t\t|\t\tMULT\t'/'\tVALOR\t\t{ $$ = $1 / $3; }\n
\t\t\t|\t\tVALOR\t\t\t\t{ $$ = $1;}\n
\t\t\t;\n\n

VALOR\t\t:\t\t'('\tSUMA\t')'\t\t{ $$ = Number($2); }\n
\t\t\t|\t\tENTERO\t\t{ $$ = Number($1); }\n
\t\t\t|\t\tDECIMAL\t\t{ $$ = Number($1); }\n
\t\t\t;
      
`
    });
  }

  changeSelect(event) {
    this.current_index = event.detail.value;
    this.current_index_number = Number(this.current_index);
  }
  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }

  analizar(form: NgForm) {
    // @ts-ignore
    const result = ejemplo1.parse(form.value.entrada);
    // @ts-ignore
    generateTree([result.node]);
    this.salida = result.val;
    this.segment = 'salida';
  }

}
