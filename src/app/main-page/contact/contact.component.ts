import { CommonModule } from '@angular/common';
import { Component, Renderer2, inject } from '@angular/core';
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

  constructor(private renderer: Renderer2) { }

  contactData = {
    name: '',
    email: '',
    message: '',
  }

  checked: boolean = false;
  showMessage = false;
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
            this.confirmationMessage();
            ngForm.resetForm();
            this.checked = false;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      // eigene Funktion auch hier (kopie von oben)
      console.log(this.contactData);
      this.confirmationMessage();
      ngForm.resetForm();
      this.checked = false;
    }
  }

  confirmationMessage(){
    this.showMessage = true;
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
    setTimeout(() => {
      this.closeMessage();
    }, 2000);
  }

  closeMessage() {
    if (this.showMessage) {
      this.showMessage = false;
      this.renderer.removeStyle(document.body, 'overflow');
    }
  }
}
