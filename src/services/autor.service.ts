import { Reflexao } from './../model/reflexao';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class AutorService {
  autores: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.autores = this.af.database.list('/autores');
  }

  public recuperarAutores(): FirebaseListObservable<any> {
    return this.autores;
  }

  public recuperarNomeAutor(reflexao: Reflexao): void {
    this.autores.subscribe(
      aut => {
        aut.forEach(el => {          
          if (parseInt(el.$key) === reflexao.autor) {
            reflexao.autorNome = el.$value;
          }
        });
      }
    );
    // console.log(this.autores);
  }
}

