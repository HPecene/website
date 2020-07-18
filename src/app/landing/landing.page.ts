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
  constructor() {
    this.current_index = "1";
    this.current_index_number = 1;
    this.examplesList = [];
    this.createExamples();
    this.showInput = false;
    this.showOutput = true;
    this.showAst = true;
  }

  ngOnInit() {
    // @ts-ignore
    let a = ejemplo1.parse('1+1');
    // @ts-ignore
    generateTree([a.node]);
  }

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

  changeSelect(event){
    this.current_index = event.detail.value;
    this.current_index_number = Number(this.current_index);
  }
  segmentChanged(ev: any) {
    this.showAst = ev.detail.value !== 'ast';
    this.showInput = ev.detail.value !== 'entrada';
    this.showOutput = ev.detail.value !== 'salida';
  }
  
  analizar(form: NgForm){
    console.log(form.value.entrada);
  }

}
