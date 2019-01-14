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

