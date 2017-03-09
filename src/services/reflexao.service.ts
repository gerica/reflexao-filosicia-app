import { Reflexao } from './../model/reflexao';
import { Injectable } from '@angular/core';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ReflexaoService {
    reflexoes: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire) {
        this.reflexoes = this.af.database.list('/reflexoes');
    }

    public getReflexao(): Reflexao {
        let index: number = Math.round(Math.random() * 5);
        return this.reflexoes[index];
    }


    public gravar(reflexao: Reflexao): void {
        reflexao.autor = parseInt(reflexao.autor + "");
        this.reflexoes.push(reflexao);
    }

    public recuperarReflexoes(): FirebaseListObservable<any> {
        return this.reflexoes;
    }

}

