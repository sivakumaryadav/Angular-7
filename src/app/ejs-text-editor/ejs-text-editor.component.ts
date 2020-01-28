import { Component, OnInit } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService, QuickToolbarService  } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
  selector: 'app-ejs-text-editor',
  templateUrl: './ejs-text-editor.component.html',
  styleUrls: ['./ejs-text-editor.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService, QuickToolbarService ]
})
export class EjsTextEditorComponent implements OnInit {
  public tools: object = {
    items: ['Undo', 'Redo', '|',
        'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
        'SubScript', 'SuperScript', '|',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
        'Indent', 'Outdent', '|', 'CreateLink','CreateTable',
        'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
};
public quickTools: object = {
    image: [
        'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', '-', 'Display', 'AltText', 'Dimension']
};

public maxLength: number = 1000;
  constructor() { }

  ngOnInit() {
  }

}
