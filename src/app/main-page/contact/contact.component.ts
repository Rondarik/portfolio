import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from '../../privacy-policy/privacy-policy.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, PrivacyPolicyComponent, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  http = inject(HttpClient);
  ttranslate = inject(TranslationService);

  contactData = {
    name: '',
    email: '',
    message: '',
  }

  checked:boolean = false;

  test(){
    console.log(this.checked);
    
  }


  mailTest = false;

  post = {
    endPoint: 'https://marcus-harder.de/sendMail.php',    
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            // eingene Funktionen 
            ngForm.resetForm();
            console.log("hier ist das Problem");
          },
          error: (error) => {
            console.error(error);
            console.log("beim Fehler kommt er an");
            
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      // eigene Funktion auch hier (kopie von oben)
      console.log(this.contactData);
      
      ngForm.resetForm();
      this.checked = false;
    }
  }
}
