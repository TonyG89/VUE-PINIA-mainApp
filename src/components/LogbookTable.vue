<template>
  <button @click="deselectRows">sss</button>
  <ag-grid-vue
    class="ag-theme-alpine"
    style="height: 500px"
    :columnDefs="columnDefs"
    :rowData="logbook"
    :defaultColDef="defaultColDef"
    rowSelection="multiple"
    animateRows="true"
    @cell-clicked="cellWasClicked"
    @grid-ready="onGridReady"
  >
  </ag-grid-vue>
</template>

<script setup>
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridVue } from 'ag-grid-vue3'; // the AG Grid Vue Component
import { onMounted, ref } from 'vue';
import { fetchData } from '../methods/fetchData.js';
import CustomDate from '../helpers/customDate.js';

const gridApi = ref(null); // Optional - for accessing Grid's API

// Obtain API from grid's onGridReady event
const onGridReady = (params) => {
  gridApi.value = params.api;
};

class DatePicker {
  // gets called once before the renderer is used
  init(params) {
    // create the cell
    this.eInput = document.createElement('input');
    this.eInput.value = params.value;
    this.eInput.classList.add('ag-input');
    this.eInput.style.height = 'var(--ag-row-height)';
    this.eInput.style.fontSize = 'calc(var(--ag-font-size) + 1px)';

    // https://jqueryui.com/datepicker/
    $(this.eInput).datepicker({
      dateFormat: 'dd/mm/yy',
      onSelect: () => {
        this.eInput.focus();
      },
    });
  }

  // gets called once when grid ready to insert the element
  getGui() {
    return this.eInput;
  }

  // focus and select can be done after the gui is attached
  afterGuiAttached() {
    this.eInput.focus();
    this.eInput.select();
  }

  // returns the new value after editing
  getValue() {
    return this.eInput.value;
  }

  // any cleanup we need to be done here
  destroy() {
    // but this example is simple, no cleanup, we could
    // even leave this method out as it's optional
  }

  // if true, then this editor will appear in a popup
  isPopup() {
    // and we could leave this method out also, false is the default
    return false;
  }
}

const dataTableParams = {
  field: 'date',
  editable: true,
  cellEditor: DatePicker,
  cellEditorPopup: true,
};

const logbook = ref([]);
const columnDefs = ref([]);
const logbookList = ref({});

// if (logbook.length) {
//   logbookHeaders.value = Object.keys(logbook.value[0]);
//   console.log(logbookHeaders.value);
//   console.log(Object.keys(logbook.value[0]));
// }

// DefaultColDef sets props common to all Columns
const defaultColDef = {
  pinnedBottomRowConfig: [
    {
      field: 'name',
      title: 'Всего: ',
      type: 'int',
      aggAttrName: 'count',
    },
  ],
  sortable: true,
  filter: true,
  resizable: true,
  flex: 1,
};
console.log(columnDefs.value);

// Example load data from server

onMounted(() => {
  // TODO: проверка на наявность в локал стораже... и кнопка обновить базу.
  const key =
    'AKfycbzVwiK48W-NEXBhj2pWXMAIuaMdJ2rGjCvfmTZ_BJrDgzkM2hCFXUrMpoUcRCTGB5Xq';
  const url = `https://script.google.com/macros/s/${key}/exec`;

  fetchData(url).then((remoteRowData) => {
    logbook.value = remoteRowData.data;
    const headerArray = Object.keys(remoteRowData.data[0]);
    console.log(headerArray);

      
    columnDefs.value = Object.assign(
      headerArray.map((headTitle) => {

        if (dataTableParams.field === headTitle) {
          Object.assign(headTitle, dataTableParams);
        }

        return {
          field: headTitle,
          title: headTitle,
        };
      })
    );

   console.log(columnDefs.value);
  });
});
</script>
