import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  id : string;
  nb : number = 0;
  constructor(public angFireDb: AngularFireDatabase,
    private activatedRoute : ActivatedRoute,
    private angAuth : AngularFireAuth) {
    
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (p) => {
        this.id = p.get('id');
      }
    );
    this.getTasks();
  }

  getTasks() {
    //this.tasks = [];
    this.angFireDb.list('Tasks/').snapshotChanges(['child_added', 'child_moved']).subscribe(
      (reponse) => {
        reponse.forEach(element => {
          //console.log('** ' + element.payload.exportVal().text);
          if(element.payload.exportVal().userId == this.id && element.payload.exportVal().checked == false)
            this.nb = this.nb + 1;
        })
      }
    );
    
    
  }


 
}
