import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  public viewDespesas = false;
  public viewSaldos = false;

  ngOnInit(): void {
  }

  public despesasView(){
    if(!this.viewDespesas){
      this.viewDespesas = true;
      this.viewSaldos = false;
    }
  }

  public saldosView(){
    if(!this.viewSaldos){
      this.viewSaldos = true;
      this.viewDespesas = false;
    }
  }
}
