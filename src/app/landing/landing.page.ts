import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExampleGrammars } from '../../assets/data/examples';
interface examples {
  id: string
  title: string,
  description: string,
  div_id: string
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
  constructor(exampleGrammars: ExampleGrammars) {
    this.current_index = "1";
    this.current_index_number = 1;
    this.examplesList = exampleGrammars.get();
    this.showInput = false;
    this.showOutput = true;
    this.showAst = true;
    this.salida = '';
    this.segment = 'entrada';
  }

  ngOnInit() {
    // @ts-ignore
    addChild(this.examplesList[0].div_id);
  }
  changeSelect(event) {
    this.current_index = event.detail.value;
    this.current_index_number = Number(this.current_index);
    // @ts-ignore
    addChild(this.examplesList[this.current_index_number].div_id);
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
