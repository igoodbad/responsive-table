import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';

/**
 * `responsive-table`
 * 
 * Table full responsive in any devices  
[![Platform](https://img.shields.io/badge/Polymer-3.x.x-blue.svg)]() [![Build Status](https://travis-ci.org/igoodbad/responsive-table.svg?branch=master)](https://travis-ci.org/igoodbad/responsive-table)
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
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ResponsiveTable extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        
      .blockInfo{
        display: inline-flex;
        border-left: 0.05em solid;
        padding: 2px 7px;
      }

      /* Style container */
      .table {
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        margin-right: auto;
        margin-left: auto;
        overflow-x: auto;
        border: 0.06em solid #bdbdbd;
      }

      /* Style table */
      table {
        width: 100%;
        cursor: pointer;
        background-color: var(--table-background-color,#fff);
        border-collapse: collapse;
        border-spacing: 0px;
      }

      table td {
        min-width: 100px;
        padding: 3px 6px;
      }

      #head-table th{
        padding: 5px 0px;
      }

      #head-table .up:after{
        content: var(--table-header-sort-indicator-up," ▲");
      }

      #head-table .down:after{
        content: var(--table-header-sort-indicator-down," ▼");
      }

      #body-table tr:hover, #body-table .selected td{
        background-color: var(--table-row-selected,#a6ccff);
      }

      table.stripped thead tr {
        background-color:#a6ccff;
        color:#333;
        border-bottom: 0.15em solid #f3f3f3;
        @apply --stripped-table-header-custom;
      }

      table.stripped tbody tr:nth-child(odd) {
        background-color: #ededed;
        @apply --striped-table-body-custom;
      }

      table.lineal thead tr {
        border-bottom: 0.15em solid #b7b7b7;
        @apply --lineal-table-header-custom;
      }

      table.lineal tbody tr {
        border-bottom: 0.08em solid #b7b7b7;
        @apply --lineal-table-body-custom;
      }

      table.all-lines thead tr th {
        border: 0.1em solid black;
        @apply --all-lines-table-header-custom;
      }

      table.all-lines tbody tr td {
        border: 0.1em solid black;
        @apply --all-lines-table-body-custom;
      }

      /* List */
      .list-detail {
        list-style-type: none;
        margin: 0px 0px;
        padding: 0;
        border: 0.07em solid #bababa;
        @apply --list-style-custom;
      }

      .list-detail li {
        border-top: 0.07em solid black;
        background-color: #fff;
        padding: 3px 6px;
        cursor: pointer;
        @apply --list-li-custom;
      }

      .list-detail li:hover{
        background-color: var(--list-li-hover-background-color,#a6ccff);
      }

      .list-detail li:first-child {
        border-top: 0em
      }

      /* Styling details */
      details[open]{
        background-color: #cfeaf2;
        @apply --detail-open-custom;
      }

      details[open] summary~* {
        animation: sweep .5s ease-in-out;
        @apply --detail-open-summary-custom;
      }

      @keyframes sweep {
        0% {
          opacity: 0;
          margin-left: -10px
        }

        100% {
          opacity: 1;
          margin-left: 0px
        }
      }

      /* Search element */
      #search-input{
        width: 100%;
      }

      #search-input input{
        display: relative;
        width: 80%;
        border: none;
        border-bottom: 2px solid #bababa;
        margin-bottom: 5px;
        margin-top: 5px;
        padding: 5px 10px;
        font-size: 1rem;
        font-family: verdana;
        @apply --input-search-custom;
      }

      /* Footer table */
      .footer-table-style{
        display: none;
        border: 0.06em solid #bababa;
        padding: 5px 10px;
        justify-content: space-around;
        @apply --footer-table-style;
      }

      /* Modal element */
      .modalDialog {
        position: fixed;
        font-family: Arial, Helvetica, sans-serif;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: var(--modal-background-color,rgba(62, 62, 62, 0.7));
        z-index: 99999;
        opacity:0;
        -webkit-transition: opacity 400ms ease-in;
        -moz-transition: opacity 400ms ease-in;
        transition: opacity 400ms ease-in;
        pointer-events: none;
      }
      .modalDialog > div {
        min-width: 200px;
        max-width: 450px;
        position: relative;
        margin: 10% auto;
        padding: 5px 20px 13px 20px;
        border-radius: 10px;
        background: #fff;
        background: -moz-linear-gradient(rgb(255, 255, 255), rgb(192, 192, 192));
        background: -webkit-linear-gradient(rgb(255, 255, 255), rgb(192, 192, 192));
        background: -o-linear-gradient(rgb(255, 255, 255), rgb(192, 192, 192));
        @apply --modal-window-custom;
      }
      .modal-input {
        @apply --modal-input-custom;
      }

      /* Button style */
      .btn-edit-modal{
        background-color:#a6ccff;
        padding: 8px 30px;
        border: 0.06em groove;
        border-radius: 2rem;
        font-family: verdana;
        font-size: 1rem;
        @apply --footer-btn-edit;
      }
      .btn-cancel{
        border: 0.05em solid #757575;
        padding: 8px 15px;
        background-color: #ededed;
        color: #000;
        border-radius: 2em;
        font-family: verdana;
        font-size: 14px;
        font-weight: bolder;
        @apply --modal-btn-cancel;
      }
      .btn-save{
        border: 0.05em solid #757575;
        padding: 8px 15px;
        background-color: #51c839;
        color: #232323;
        border-radius: 2em;
        font-family: verdana;
        font-size: 14px;
        font-weight: bolder;
        @apply --modal-btn-save;
      }
      </style>
      <div class="container">
      <div id="search-input" hidden$="[[!search]]">
        <input type="text" value="" placeholder$="[[searchPlaceholder]]" on-keyup="_changeSearch" />
      </div>
      <slot id="slot-over-table"></slot>
      <div id="containerTable" class="table">
        <div id="when-large">
          <table class$="[[styleTable]]">
            <thead>
              <tr id="head-table">
                <template is="dom-repeat" items="[[headers]]" as="titleHead">
                  <th id="th_[[index]]_asc">[[titleHead]]</th>
                </template>
              </tr>
            </thead>
            <tbody id="body-table">
              <template is="dom-repeat" items="[[_columnValues]]" as="columValue" filter="{{_filterData(_valueSearch)}}">
                <tr id="tr_[[columValue.rowIndex]]">
                  <template is="dom-repeat" items="[[columValue.data]]" as="cellValue">
                    <td>[[cellValue.1]]</td>
                  </template>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <div id="when-small">
          <ul class="list-detail">
            <template is="dom-repeat" items="[[_columnValues]]" as="columValue" filter="{{_filterData(_valueSearch)}}">
              <li id="li_[[columValue.rowIndex]]">
                <details>
                  <summary>[[headers.0]]: [[columValue.data.0.1]]</summary>
                  <template is="dom-repeat" items="[[columValue.data]]" as="cellValue">
                    <div class="blockInfo">[[_getHeader(headers, index)]]: [[cellValue.1]]</div>
                  </template>
                </details>
              </li>
            </template>
          </ul>
        </div>
        <div id="footer-nav" class="footer-table-style">
          <div class="ediTable" hidden$="[[!editTable]]">
            <button type="button" class="btn-edit-modal" on-click="_openModal">[[textEditBtn]]</button>
          </div>
          <slot id="slot-footer-table"></slot>
        </div>
      </div>
      <slot id="slot-bottom-table"></slot>
      <div id="modalDialogPreview" class="modalDialog">
        <div>
          <slot id="slot-top-content-modal"></slot>
          <template is="dom-repeat" items="[[_rowSelectedElement]]" as="rowSeltd">
            <form id="form-edit-[[rowSeltd.rowIndex]]">
              <template is="dom-repeat" items="[[rowSeltd.data]]">
                <paper-input class="modal-input" label="[[_getHeader(headers, index)]]" value="[[item.1]]"></paper-input>
              </template>
            </form>
          </template>
          <slot id="slot-bottom-content-modal"></slot>
          <div class="footer-modal">
            <button type="button" class="btn-cancel" on-click="_closeModal">[[textCancelBtn]]</button>
            <button type="button" class="btn-save" on-click="_saveData">[[textSaveBtn]]</button>
            <slot id="slot-footer-modal"></slot>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  static get properties() {
    return {
      /* Properties send by user */
      /** 
      * Contains the array of headers, shows in the first row in the table.
      * @type {["value_string",...]}
      */
      headers: {
        type: Array,
        value: () => []
      },
      /** 
      * Contains the array of value, the values are display into body of table.
      * @type {[{key_value: value,...}]}
      */
      columns: {
        type: Array,
        value: () => [],
        observer: "_clearStage"
      },
      /** Boolean value to indicate if the component contains search input. */
      search: {
        type: Boolean,
        value: false
      },
      /** Word that show in placeholder of input search, by default the text is "Ingresa la palabra a buscar" */
      searchPlaceholder: {
        type: String,
        value: "Ingresa la palabra a buscar"
      },
      /** Selector of table style, by default "stripped" style is selected, some styles  predefined are [stripped, lineal, all-lines]. */
      styleTable: {
        type: String,
        value: "stripped"
      },
      /** Text displayed when user don't select row and click/tap in edit button, by default the text is "Debe seleccionar una fila para poder editarla". */
      textNoSelectedRow: {
        type: String,
        value: "Debe seleccionar una fila para poder editarla"
      },
      /** Boolean value to indicate if the component contains a edit button. */
      editTable: {
        type: Boolean,
        value: false,
        observer: "_settingFooter"
      },
      /** Word that show in button cancel, by default the text is "Cancelar". */
      textCancelBtn: {
        type: String,
        value: "Cancelar"
      },
      /** Word that show in button save, by default the text is "Guardar". */
      textSaveBtn: {
        type: String,
        value: "Guardar"
      },
      /** Word that show in button edit, by default the text is "Editar". */
      textEditBtn: {
        type: String,
        value: "Editar"
      },
      /** Declare minimum value in pixels to change view between table and list, this property only accept number. */
      breakResize: {
        type: Number,
        value: 601
      },

      /* Internal properties */
      /**
      * Contains processed data array columns.
      * @type {[{id: Number, rowIndex: Number, data: Array, headers: Array},...]}
      */
      _columnValues: {
        type: Array,
        computed: "_convertColumn(columns)"
      },
      /**
      * Contain the word to filter the rows shown into table and list.
      */
      _valueSearch: {
        type: String,
        value: ''
      },
      /**
      * Contain the full data of row selected, the array only contains a one Object element.
      * @type {[{id: Number, rowIndex: Number, data: Array, headers: Array}]}
      */
      _rowSelectedElement: {
        type: Array,
        value: () => []
      },
      /**
      * Contain the node of div formated at modal.
      * @type {{<HTMLElement>}}
      */
      _modalElement: {
        type: Object,
        value: () => { }
      },
      /**
      * Contain the header node of table.
      * @type {{<HTMLElement>}}
      */
      _headerTableElement: {
        type: Object,
        value: () => { }
      },
      /**
      * Contain the body node of table.
      * @type {{<HTMLElement>}}
      */
      _bodyTableElement: {
        type: Object,
        value: () => { }
      },
      /**
      * Contain the list node.
      * @type {{<HTMLElement>}}
      */
      _listElement: {
        type: Object,
        value: () => { }
      },

      /* Coming soon properties */
      /**
      * (Coming soon property) Text to display in page indicator.
      */
      _textPaginator: {
        type: String,
        value: "Página"
      },
      /**
      * (Coming soon property) Text to display in selector of max rows by page.
      */
      _textRowsSelector: {
        type: String,
        value: "Filas por página"
      },
      /**
      * (Coming soon property) Boolean value to indicate if the component contains pagination.
      */
      _pagination: {
        type: Boolean,
        value: false
      },
      /**
      * (Coming soon property) Values to shown in select max rows by page.
      * @type {[Number,...]}
      */
      _rowsOption: {
        type: Array,
        value: () => [10, 20, 30]
      },
      /**
      * (Coming soon property) Page indicator, modified by preview/next.
      */
      _numberPage: {
        type: Number,
        value: 1
      }
    };
  }

  /**
      * Function to set listeners and initialze table and list.
      * @return {void}
      */
  ready() {
    super.ready();
    const breakR = this.breakResize;
    const component = this.$.containerTable;
    const largeElement = component.querySelector("#when-large");
    const smallElement = component.querySelector("#when-small");
    this._listElement = smallElement.querySelector("ul");
    this._setVisibleElement(component, largeElement, smallElement, breakR);
    window.addEventListener("resize", function () {
      if (component.offsetWidth < breakR) {
        largeElement.hidden = true;
        smallElement.hidden = false;
      } else {
        largeElement.hidden = false;
        smallElement.hidden = true;
      }
    });
    this._headerTableElement = component.querySelector("#head-table");
    this._headerTableElement.addEventListener("click", (event) => {
      this._reOrderBy(event);
    });
    this._bodyTableElement = component.querySelector("#body-table");
    this._bodyTableElement.addEventListener("click", (event) => {
      this._removeClassSelected();
      this._prepareRowToEdit(this._bodyTableElement.rows[(event.target.parentElement.rowIndex) - 1]);
    });
    this._listElement.addEventListener("click", (event) => {
      this._prepareListElementSelected(event);
    })
    this._settingFooter();
    this._modalElement = this.$.modalDialogPreview;
  }

  /**
  * Function to set visible element depending size component(screen).
  * @param {<HTMLDivElement>} component The element from which the change in the size of the screen is heard
  * @param {<HTMLDivElement>} largeElement The visible node when size component is higher than breakResize
  * @param {<HTMLDivElement>} smallElement The visible node when size component is less than breakResize
  * @param {Number} breakR The parameter to compare width
  * @return {void}
  */
  _setVisibleElement(component, largeElement, smallElement, breakR) {
    if (component.offsetWidth < breakR) {
      largeElement.hidden = true;
      smallElement.hidden = false;
    } else {
      largeElement.hidden = false;
      smallElement.hidden = true;
    }
  }

  /**
  * Function to set visible footer when any attribute is required.
  * @return {void}
  */
  _settingFooter() {
    const footerTable = this.$.containerTable.querySelector("#footer-nav");
    if (this.editTable || this._pagination) {
      footerTable.style.display = "flex";
    }
  }

  /**
  * Function to clear selected row in table, verify if tbody element into table is available.
  * @return {void}
  */
  _clearStage() {
    if (this._bodyTableElement) {
      this._removeClassClickedHead();
      this._removeClassSelected();
      this._removeLiSelected();
    }
  }

  /**
  * Function to remove class selected in tr.
  * @return {void}
  */
  _removeClassSelected() {
    this.set("_rowSelectedElement", []);
    for (const toCleanRow of this._bodyTableElement.rows) {
      toCleanRow.className = "";
    }
  }

  /**
  * Function to remove class when clicked any header of column.
  * @return {void}
  */
  _removeClassClickedHead() {
    const header = this._headerTableElement.querySelectorAll("th");
    this.set("_rowSelectedElement", []);
    for (const toCleanClell of header) {
      toCleanClell.className = "";
    }
  }

  /**
  * Function to close tag <details> when is open into list.
  * @return {void}
  */
  _removeLiSelected() {
    this.set("_rowSelectedElement", []);
    const nodesList = this._listElement.querySelectorAll("li");
    for (const toCleanRow of nodesList) {
      toCleanRow.querySelector("details").open = false;
    }
  }

  /**
  * Function to prepare original array provide by user, the array provide is used in table and list views.
  * @param {Array<Object>} arrayValues The array object provide by user
  * @return {[{id: Number, rowIndex: Number, data: Array, headers: Array},...]} The array restructured
  */
  _convertColumn(arrayValues) {
    let orderValues = [];
    for (const index in arrayValues) {
      let rowObject = {};
      let separed = Object.entries(arrayValues[index]);
      rowObject["rowIndex"] = index;
      rowObject["id"] = separed[0][1];
      separed.splice(0, 1);
      rowObject["data"] = separed;
      orderValues.push(rowObject);
    }
    return orderValues;
  }

  /**
  * Funtion to get value from array headers depending of index.
  * @param {Array<String>} arrayHeaders The array of headers send by user
  * @param {Number} index The indicator of iteration
  * @return {String} The value of position required
  */
  _getHeader(arrayHeaders, index) {
    return arrayHeaders[index];
  }

  /**
  * Function to order value elements depending sort indicator.
  * @param {<MouseEvent>} event The cell clicked into header of table
  * @return {void}
  */
  _reOrderBy(event) {
    this._removeClassClickedHead();
    this._removeClassSelected();
    const directriz = event.target.id.split("_");
    if ((Number(directriz[1]) + 1) <= this._columnValues[0].data.length) {
      const columnOrder = this._columnValues[0].data[directriz[1]][0];
      let newOrder = [];
      if (directriz[2] === "asc") {
        event.target.id = directriz[0] + "_" + directriz[1] + "_desc";
        event.target.className = "up";
        newOrder = this.columns.sort(function (a, b) {
          if (a[columnOrder] > b[columnOrder]) {
            return 1;
          }
          if (a[columnOrder] < b[columnOrder]) {
            return -1;
          }
          return 0;
        });
      }
      if (directriz[2] === "desc") {
        event.target.id = directriz[0] + "_" + directriz[1] + "_asc";
        event.target.className = "down";
        newOrder = this.columns.reverse(function (a, b) {
          if (a[columnOrder] > b[columnOrder]) {
            return 1;
          }
          if (a[columnOrder] < b[columnOrder]) {
            return -1;
          }
          return 0;
        });
      }
      this.set("columns", [...newOrder]);
    }
  }

  /**
  * Function to get value of input search and set value in property search.
  * @return {void}
  */
  _changeSearch() {
    this._clearStage();
    const word = this.shadowRoot.querySelector("#search-input").querySelector("input");
    this.set("_valueSearch", word.value);
  }

  /**
  * Function to evaluate if the value of column match with search string.
  * @param {String} searchString The search string to find match into all elements of row
  * @return {Boolean} Return true when some value match, false when not
  */
  _filterData(searchString) {
    if (!searchString) {
      return null
    }
    return function (dataColumns) {
      let findMatch = [];
      for (const value of dataColumns.data) {
        findMatch.push(value.toString().toLowerCase().includes(searchString.toLowerCase()));
      }
      return findMatch.some(match => match === true);
    }
  }

  /**
  * Function to prepare listener event, set the value in property selected row. This function apply in table.
  * @param {<HTMLTableRowElement>} rowEvent The row selected by user
  * @return {void}
  */
  _prepareRowToEdit(rowEvent) {
    rowEvent.className = "selected";
    const rowIndex = Number(rowEvent.id.split("_")[1]);
    this.dispatchEvent(new CustomEvent("info-row", {
      detail: this.columns[rowIndex]
    }))
    let row = this._convertColumn([this.columns[rowIndex]])[0];
    row.rowIndex = rowIndex;
    row.headers = this.headers;
    this.set("_rowSelectedElement", [{ ...row }]);
  }

  /**
  * Function to prepare listener event, set the value in property selected row. This function apply in list.
  * @param {<MouseEvent>} event The element clicked into list
  * @return {void}
  */
  _prepareListElementSelected(event) {
    this._removeLiSelected();
    if (event.target.localName === "summary") {
      let rowId = Number(event.target.parentElement.parentElement.id.split("_")[1]);
      this.dispatchEvent(new CustomEvent("info-row", {
        detail: this.columns[rowId]
      }));
      let row = this._convertColumn([this.columns[rowId]])[0];
      row.rowIndex = rowId;
      row.headers = this.headers;
      this.set("_rowSelectedElement", [{ ...row }]);
    }

  }

  /**
  * Function to open modal, evaluate if user select row element.
  * @retund {void}
  */
  _openModal() {
    if (this._rowSelectedElement.length > 0) {
      this._modalElement.style = "opacity: 1;pointer-events: auto;";
    } else {
      this.dispatchEvent(new CustomEvent("info-row", {
        detail: this.textNoSelectedRow
      }))
    }
  }

  /**
  * Function to close modal.
  * @return {void}
  */
  _closeModal() {
    this._modalElement.style = "opacity: 0;";
  }

  /**
  * Function to prepare custom event with value row modified.
  * @return {void}
  */
  _saveData() {
    const editInputs = this._modalElement.querySelector("form").querySelectorAll("paper-input");
    const selectedRow = this._rowSelectedElement[0].data;
    let newObject = this.columns[this._rowSelectedElement[0].rowIndex];
    for (const index in selectedRow) {
      newObject[selectedRow[index][0]] = editInputs[index].value;
    }
    this.dispatchEvent(new CustomEvent("edited-row", {
      detail: newObject
    }));
    this._closeModal();
  }

  /** 
  * (Commin soon function) 
  * Function to relist values between into limits selected
  * @return {void}
  */
  _reListLimit() {
    // render new length shown rows
  }
}

window.customElements.define('responsive-table', ResponsiveTable);
