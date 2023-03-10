import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { COMMON_VALIDATION } from 'src/app/constants/Validations';

@Component({
  selector: 'app-add-pitch',
  templateUrl: './add-pitch.component.html',
  styleUrls: ['./add-pitch.component.scss'],
})
export class AddPitchComponent implements OnInit {
  addPitch!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.addPitch = this.fb.group({
      name: [{value : 'Shivam Singh' , disabled:true}, [,]],
      employeeId: [{value:'AI 1547', disabled:true}, [,]],
      date_of_birth: [{value:'2000-12-19', disabled:true}, []],
      pitch:['',[COMMON_VALIDATION]],
      industry:['',[COMMON_VALIDATION]],
      type:['',[COMMON_VALIDATION]],
      idea : ['',[COMMON_VALIDATION]]
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

  addPitchSubmit(){
    if(this.addPitch.valid){

    }else{
      this.addPitch.markAllAsTouched()
    }
  }


}
