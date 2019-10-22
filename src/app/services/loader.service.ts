import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    private loader: any;

    constructor(private loadingController: LoadingController) {}

    public async initLoader() {
        this.loader = await this.loadingController.create({
            message: 'Please wait...'
        });
    }

    public showLoader(): void {
        if (this.loader) this.loader.present();
    }

    public hideLoader(): void {
        if (this.loader) this.loader.dismiss();
    }
}