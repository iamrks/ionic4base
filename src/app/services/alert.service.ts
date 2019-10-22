import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    constructor(private alertController: AlertController) {
    }

    public async alert(message = 'Server Error', title = '', subTitle = '') {
        const alert = await this.alertController.create({
            header: title,
            subHeader: subTitle,
            message: message,
            buttons: ['OK']
        });

        await alert.present();
    }
}