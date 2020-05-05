import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    data: any;

    constructor(private actRoute: ActivatedRoute) {
    }



    ngOnInit() {
        this.data = this.actRoute.snapshot.data;
        console.log('Home Component - Data User', this.data);
    }

}
