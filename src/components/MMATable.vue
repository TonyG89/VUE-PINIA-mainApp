<template>
  <button @click="deselectRows">deselect rows</button>
  <ag-grid-vue
    class="ag-theme-alpine"
    style="height: 500px"
    :columnDefs="columnDefs.value"
    :rowData="rowData.value"
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
import { reactive, onMounted, ref } from 'vue';

const gridApi = ref(null); // Optional - for accessing Grid's API

// Obtain API from grid's onGridReady event
const onGridReady = (params) => {
  gridApi.value = params.api;
};

const rowData = reactive({}); // Set rowData to Array of Objects, one Object per Row

// Each Column Definition results in one Column.
const columnDefs = reactive({
  value: [
    {
      headerName: 'Name',
      field: 'FirstName',
    },
    {
      headerName: 'Surname',
      field: 'LastName',
    },
    {
      headerName: 'WeightClass',
      field: 'WeightClass',
    },
    {
      headerName: 'Weight',
      field: 'Weight',
    },
    {
      headerName: 'Birth',
      field: 'BirthDate',
    },
    {
      field: 'Wins',
    },
    {
      field: 'Losses',
    },
    {
      field: 'Draws',
    },
    {
      headerName: 'ID',
      field: 'FighterId',
      fieldType: 'system',
      aggrid: {
        hide: true,
      },
    },
  ],
});

// DefaultColDef sets props common to all Columns
const defaultColDef = {
  sortable: true,
  filter: true,
  flex: 1,
};

// localStorage.clear()
// Example load data from server
onMounted(() => {
  if (localStorage.mmaData) {
    return (rowData.value = JSON.parse(localStorage.mmaData));
  } else
    fetch(
      'https://api.sportsdata.io/v3/mma/scores/json/Fighters?key=73824bfac59d4d00a29352d427377c99'
    )
      .then((result) => result.json())
      .then((remoteRowData) => {
        localStorage.setItem('mmaData', JSON.stringify(remoteRowData));
        console.log('NO CACHE');
        return (rowData.value = remoteRowData);
      });
});
</script>
