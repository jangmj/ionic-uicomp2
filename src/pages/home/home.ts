import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [
    {"id":1, name:"첫번째item"},
    {"id":2, name:"두번째item"},
  ];

  disabledSwitch=false;

  userName:any;

  constructor(public navCtrl: NavController) {
    this.userName = "";
  }

  //event handler
  itemSelected(item) {
    alert(item.id + " " + item.name);
  }

  //
  myButton(event) {
    if(typeof this.userName === 'undefined') {
      alert('No name');
      return false;
    } else {
      //alert(event.target.textContent + " " + event.clientX + " " + event.clientY);
      this.navCtrl.push('bindPage',{name:this.userName});
    }
  }
}
