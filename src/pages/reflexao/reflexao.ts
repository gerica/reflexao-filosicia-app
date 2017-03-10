import { Reflexao } from './../../model/reflexao';
import { ReflexaoService } from './../../services/reflexao.service';
import { Component } from '@angular/core';
import { AutorService } from "../../services/autor.service";
import { LoadingController, Loading, ToastController, Toast } from "ionic-angular";

@Component({
  selector: 'page-reflexao',
  templateUrl: 'reflexao.html'
})
export class ReflexaoPage {
  reflexao: Reflexao;
  reflexoes: Reflexao[] = [];
  loading: Loading;
  toast: Toast;

  constructor(private reflexaoSrv: ReflexaoService,
    private autorSrv: AutorService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController) { }

  ionViewWillEnter() {
    console.log('ionViewDidLoad ReflexaoPage');
    this.onGetNext();
  }

  onGetNext(): void {
    this.createLoading('Carregando...');
    try {
      this.reflexaoSrv.recuperarReflexoes().subscribe(
        (data: Reflexao[]) => {
          this.reflexoes = data;
          this.getReflexao();
        },
        error => {
          console.log(error);
          this.loading.dismiss();
          this.createToast(error.message);
        }
      );
    } catch (err) {
      this.loading.dismiss();
      this.createToast(err.message);
    }
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
    this.loading.dismiss();
    // console.log(this.reflexao);
  }

  private createLoading(content: string): void {
    this.loading = this.loadingCtrl.create({
      content: content
    });
    this.loading.present();
  }

  private createToast(message: string) {
    this.toast = this.toastCtrl.create({
      message: message,
      position: 'middle',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    this.toast.present();
  }

}
