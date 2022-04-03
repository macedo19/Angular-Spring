import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SaldoList } from './model';




@Component({
  selector: 'app-saldos',
  templateUrl: './saldos.component.html',
  styleUrls: ['./saldos.component.css']
})



export class SaldosComponent implements OnInit {

   //Pega a string e converte em objeto
   public sList: Array<SaldoList> = JSON.parse(localStorage.getItem("list") || '[]');


  public addItemSaldo: string = "";
  public addItemValue: string = "";

  public mostrarlista = false;
  
  constructor() { }

  ngOnInit(): void {
    this.setLocalStorage();
  }

  displayedColumns = ['desc', 'valor', 'delete'];



  //Metodo para enviar os dados / tratamento para não salvar string "vazia"
  public submitItemList(){
    this.addItemSaldo = this.addItemSaldo.trim();
    this.addItemValue = this.addItemValue.trim();
    this.mostrarlista = false;
    if(this.addItemSaldo && this.addItemValue ){

      this.sList.push({desc:  this.addItemSaldo, value:  this.addItemValue ,checked: false})

      this.addItemSaldo = "";
      this.addItemValue = "";
    }
  }

   //Validar se o input esta vazio
   public validationInput(event: string, index: number){
    if(!event.length){
      const confirm = window.confirm("Task está vazia, deseja deletar?")

      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }

    //Detele apenas o item selecionado (obs deleta apenas um por vez)
    public deleteItemTaskList(event: number){
      this.mostrarlista = false;
      this.sList.splice(event, 1);
    }




  //Salvando os dados no Local Storage
  public setLocalStorage(){
    if(this.sList){
      this.sList.sort( (first, last) => Number( first.checked) - Number(last.checked) );
      //Localstroage , esse json converte os dados para uma string
      localStorage.setItem("list", JSON.stringify(this.sList));
    }
  }

  public apresentarLista(){
    this.mostrarlista = true;
  }


}
