import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BindPage} from "../bind/bind";
import {ComponentPage} from "../component/component";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [
    {"id":1, name:"Component"},
    {"id":2, name:"두번째item"},
  ];

  disabledSwitch=false;

  userName:any;

  constructor(public navCtrl: NavController) {
    this.userName = "";
  }

  //event handler
  itemSelected(item) {
    //alert(item.id + " " + item.name);
    if(item.id === 1) {
      this.navCtrl.push("ComponentPage");
    }
  }

  //
  myButton(event) {
    if(typeof this.userName === 'undefined') {
      alert('No name');
      return false;
    } else {
      //alert(event.target.textContent + " " + event.clientX + " " + event.clientY);
      this.navCtrl.push('BindPage',{name:this.userName});
    }
  }
}
