import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExampleGrammars } from '../../assets/data/examples';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
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
  url:any;
  constructor(exampleGrammars: ExampleGrammars, private domSanitizer: DomSanitizer) {
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
    this.url = this.domSanitizer.bypassSecurityTrustResourceUrl('https://gist.github.com/PvasquezF/5572b07db089406607f2875d9b5f5955');

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
