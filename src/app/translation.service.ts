import { Injectable } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private translate: TranslationService) {
    translate.switchLanguage('en');
   }

   public switchLanguage(language: string): void{
    this.translate.switchLanguage(language);
   }
}
