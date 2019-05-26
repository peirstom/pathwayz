import { Component, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild('classic1')
  public content: TemplateRef<any>;
  closeResult: string;
  public loading = false;

  constructor(private modalService: NgbModal, private authService: AuthService) {}

  open() {
    const content = this.content;
      this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
        this.closeResult = 'Closed with: $result';
      }, (reason) => {
        this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  'with: $reason';
    }
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  onSignIn(email: any, password: any) {
    this.authService.login(email, password).subscribe(
      resData => {
        this.loading = false;
        this.modalService.dismissAll();
      },
      err => {
        console.log(err);
        this.loading = false;
      }
    );
  }
}
