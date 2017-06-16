import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-selectablecombo',
  templateUrl: './selectablecombo.component.html',
  styleUrls: ['./selectablecombo.component.css']
})
export class SelectablecomboComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    $('#gamesList').multiselect({ 
        nonSelectedText:'Select Games',
         includeSelectAllOption: true,
           enableFiltering:true,
           enableCaseInsensitiveFiltering:true, 
           buttonWidth:'200px'     
           
     });
 }
  
 games = [
 {id:1,name:"CandyEat"},
 {id:2,name:"OnionsPick"},
 {id:3,name:"FannyDuck"},
 {id:4,name:"Click-o-Wisp"}
  ];

}
