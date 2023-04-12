import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { COMMON_VALIDATION } from 'src/app/constants/Validations';
import { DSR_TABLEDATA } from 'src/app/constants/const_data';

@Component({
  selector: 'app-dsr-edit',
  templateUrl: './dsr-edit.component.html',
  styleUrls: ['./dsr-edit.component.scss']
})
export class DsrEditComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute , private fb : FormBuilder) { }
  value: any;
  value1: any
  query_param: any;
  ngOnInit(): void {
    this.createForm()
    this.activatedRoute.params.subscribe((res: any) => {
      this.query_param = res.id;
      console.log(res.id);
      this.value = DSR_TABLEDATA.filter((item) => item.date == res.id);
      this.value1 = this.value[0].DSR[0]
      console.log(this.value1);
    });
    this.dsrEdit.patchValue({
      date: this.query_param
    })
    this.dsrEdit.patchValue(this.value1)
  }

  dsrEdit! : FormGroup

  createForm() {
    this.dsrEdit = this.fb.group({
      project_name:['',[COMMON_VALIDATION]],
      date:['',[COMMON_VALIDATION]],
      dsr:['',[COMMON_VALIDATION]],
      // idea : ['',[COMMON_VALIDATION]]
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

}
