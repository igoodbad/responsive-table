# \<responsive-table\>
Table full responsive in any devices  
[![Platform](https://img.shields.io/badge/Polymer-2.x.x-blue.svg)]() [![Build Status](https://travis-ci.org/igoodbad/responsive-table.svg?branch=master)](https://travis-ci.org/igoodbad/responsive-table)
## Properties
### Public properties
Name | Type | Description | Default |
-----|------|-------------|---------|
breakResize | Number | Declare minimum value in pixels to change view between table and list, this property only accept number. | 601
columns | Array | Contains the array of value, the values are display into body of table. | Empty
editTable | Boolean | Boolean value to indicate if the component contains a edit button. | false
headers | Array | Contains the array of headers, shows in the first row in the table. | Empty
search | Boolean | Boolean value to indicate if the component contains search input. | false
searchPlaceholder | String | Word that show in placeholder of input search. | "Ingresa la palabra a buscar"
styleTable | String | Selector of table style, by default "stripped" style is selected. | "stripped"
textCancelBtn | String | Word that show in button cancel. | "Cancelar"
textEditBtn | String |  Word that show in button edit. | "Editar"
textNoSelectedRow | String | Text displayed when user don't select row and click/tap in edit button. | "Debe seleccionar una fila para poder editarla"
textSaveBtn | String | Word that show in button save. | "Guardar"

### Private properties
Name | Type | Description | Default |
-----|------|-------------|---------|
_bodyTableElement | Object | Contain the body node of table. | HTMLElement
_columnValues | Array | Contains processed data array columns. | Calculated value
_headerTableElement | Object | Contain the header node of table. | HTMLElement
_listElement | Object | Contain the list node. | HTMLElement
_modalElement | Object | Contain the node of div formated at modal. | HTMLElement
_rowSelectedElement | Array | Contain the full data of row selected, the array only contains a one Object element. | Empty
_valueSearch | String | Contain the word to filter the rows shown into table and list. | ''

### Coming soon properties
Name | Type | Description | Default
-----|------|-------------|--------
_numberPage | Number | Page indicator, modified by preview/next. | 1
_pagination | Boolean | Boolean value to indicate if the component contains pagination. | false
_rowsOption | Array | Values to shown in select max rows by page. | [10, 20, 30]
_textPaginator | String | Text to display in page indicator. | "Página"
_textRowsSelector | String | Text to display in selector of max rows by page. | "Filas por página"

## Events
Event | Type | Description | Return 
------|------|-------------|-------
edited-row | CustomEvent | Return data of row edited | Object
info-row | CustomEvent | Return original object of select row in table or list, when user don´t select any row, return a text  | Object / String

## Styling
Custom property | Description | Type | Default 
----------------|-------------|------|-------
--table-background-color | Background color of table | Variable | #fff
--stripped-table-header-custom | Styling of header table | Mixin | background-color:#a6ccff;color:#333;border-bottom: 0.15em solid #f3f3f3;
--striped-table-body-custom | Styling of body table | Mixin | background-color: #ededed;
--lineal-table-header-custom | Styling of header table | Mixin | border-bottom: 0.15em solid #b7b7b7;
--lineal-table-body-custom | Styling of body table | Mixin | border-bottom: 0.08em solid #b7b7b7;
--all-lines-table-header-custom | Styling of header table, this style affected all cells | Mixin | border: 0.1em solid black;
--all-lines-table-body-custom | Styling of body table, this style affected all cells | Mixin | border: 0.1em solid black;
--table-row-selected | Background color of selected row, also when user mouse over any row | Variable | #a6ccff
--table-header-sort-indicator-up | Indicator of sort ascending | Variable | " ▲"
--table-header-sort-indicator-down | Indicator of sort ascending | Variable | " ▼"
--list-style-custom | Styling base of list | Mixin | list-style-type: none; margin: 0px 0px; padding: 0; border: 0.07em solid #bababa;
--list-li-custom | Styling li element of list | Mixin | border-top: 0.07em solid black; background-color: #fff; padding: 3px 6px; cursor: pointer;
--list-li-hover-background-color | Background color to highlight element when mouse over | Variable | #a6ccff
--detail-open-custom | Styling to <details> element when it's opened | Mixin | background-color: #cfeaf2;
--detail-open-summary-custom | Styling to <summary> element when details it's opened | Mixin | animation: sweep .5s ease-in-out;
--input-search-custom | Styling of input search | Mixin | display: relative; width: 80%; border: none; border-bottom: 2px solid #bababa; margin-bottom: 5px; margin-top: 5px; padding: 5px 10px; font-size: 1rem; font-family: verdana;
--modal-background-color | Background color of the modal window | Variable | rgba(62, 62, 62, 0.7);
--modal-window-custom | Styling of modal window | Mixin | min-width: 200px; max-width: 450px; position: relative; margin: 10% auto; padding: 5px 20px 13px 20px; border-radius: 10px; background: #fff; background: -moz-linear-gradient(rgb(175, 202, 218), rgb(126, 160, 192)); background: -webkit-linear-gradient(rgb(175, 202, 218), rgb(126, 160, 192)); background: -o-linear-gradient(rgb(175, 202, 218), rgb(126, 160, 192));
--modal-input-custom | Style of the <paper-input> element within the modal | Mixin | - 
--footer-btn-edit | Styling for edit button, button are visible when editTable is true | Mixin | background-color:#a6ccff; padding: 8px 30px; border: 0.06em groove; border-radius: 2rem; font-family: verdana; font-size: 1rem;
--modal-btn-cancel | Styling to cancel button into modal | Mixin | border: 0.05em solid #757575; padding: 8px 15px; background-color: #ededed; color: #000; border-radius: 2em; font-family: verdana; font-size: 14px; font-weight: bolder;
--modal-btn-save | Styling to save button into modal | Mixin | border: 0.05em solid #757575; padding: 8px 15px; background-color: #51c839; color: #232323; border-radius: 2em; font-family: verdana; font-size: 14px; font-weight: bolder;

## Slots
Id slot | Description
--------|------------
slot-over-table | This element is located over the table
slot-footer-table | This element is located into footer of table
slot-bottom-table | This element is located in bottom of table
slot-top-content-modal | This element is located in top of content modal
slot-bottom-content-modal | This element is located in bottom of content modal
slot-footer-modal |  This element is located in footer of content modal

## License
Apache License 2004
