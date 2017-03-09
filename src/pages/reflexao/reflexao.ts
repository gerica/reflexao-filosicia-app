import { Reflexao } from './../../model/reflexao';
import { ReflexaoService } from './../../services/reflexao.service';
import { Component } from '@angular/core';
import { AutorService } from "../../services/autor.service";

@Component({
  selector: 'page-reflexao',
  templateUrl: 'reflexao.html'
})
export class ReflexaoPage {
  reflexao: Reflexao;
  reflexoes: Reflexao[] = [];

  constructor(private reflexaoSrv: ReflexaoService,
    private autorSrv: AutorService) { }

  ionViewWillEnter() {
    console.log('ionViewDidLoad ReflexaoPage');
    this.onGetNext();
  }

  onGetNext(): void {
    this.reflexaoSrv.recuperarReflexoes().subscribe(
      (data: Reflexao[]) => {
        this.reflexoes = data;
        this.getReflexao();
      },
      error => {
        console.log(error);
      }
    );
  }

  public getReflexao(): void {

    if (this.reflexoes.length > 0) {
      let index: number = Math.round(Math.random() * (this.reflexoes.length - 1));
      this.reflexao = this.reflexoes[index];
      this.autorSrv.recuperarNomeAutor(this.reflexao);
      // console.log(this.reflexao);
    } else {
      this.reflexao = null;
    }

    // console.log(this.reflexao);
  }

}
