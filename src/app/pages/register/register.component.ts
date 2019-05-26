import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('classicRegister')
  public content: TemplateRef<any>;
  public isLoading = false;
  closeResult: string;

  constructor(private modalService: NgbModal, private authService: AuthService) { }

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

  onRegister(email: any, password: any) {

    this.authService.signUp(email, password).subscribe(
      resData => {
        this.isLoading = false;
        this.modalService.dismissAll();
      },
      err => {
        console.log(err);
        this.isLoading = false;
      }
    );
  }

  ngOnInit() {
  }

}
