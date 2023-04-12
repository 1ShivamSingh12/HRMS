import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { COMMON_VALIDATION } from 'src/app/constants/Validations';
import { commondropDown } from 'src/app/constants/drop_down_data';

@Component({
  selector: 'app-dinner-request',
  templateUrl: './dinner-request.component.html',
  styleUrls: ['./dinner-request.component.scss']
})
export class DinnerRequestComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  dinnerForm! : FormGroup

  show = true

  dropDown = commondropDown
  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.dinnerForm = this.fb.group({
      date: ['', [COMMON_VALIDATION]],
      project: ['', [COMMON_VALIDATION]],
      reason: ['', [COMMON_VALIDATION]],
    });
  }


   editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '15vw',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
  };


  submitDinner(){
    if(this.dinnerForm.valid){
      console.log('kkk');
    }else{
      this.dinnerForm.markAllAsTouched()
    }
  }

}
