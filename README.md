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