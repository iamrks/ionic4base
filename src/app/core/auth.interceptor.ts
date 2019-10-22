import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { LoaderService } from '../services/loader.service';

export class AuthInterceptor implements HttpInterceptor {
    private reqCounter = 0;

    constructor(
        private authService: AuthService,
        private loaderService: LoaderService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.url.indexOf('/auth') === -1) {
            req = req.clone({
                setHeaders: {
                    authToken: this.authService.token
                }
            });
        }

        this.showSpinner();
        return next.handle(req).pipe(
            tap(
                event => {
                    if (event instanceof HttpResponse) {
                        // do stuff with response
                        this.hideSpinner();
                    }
                },
                err => {
                    // do stuff with error 
                    this.hideSpinner();
                })
        )
    }

    private showSpinner() {
        this.reqCounter++;
        this.loaderService.showLoader();
    }

    private hideSpinner() {
        this.reqCounter--;

        if (this.reqCounter === 0) {
            this.loaderService.hideLoader();
        }
    }
}