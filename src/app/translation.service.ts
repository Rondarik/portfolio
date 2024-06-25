import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');
   }

   germanLangAktiv = true;

   public switchLanguage(language: string): void{
    this.translate.use(language);
    this.toggleLang();
   }

   toggleLang(){
    if (this.germanLangAktiv) {
      this.germanLangAktiv = false;
    } else {
      this.germanLangAktiv = true;
    }
   }
}
