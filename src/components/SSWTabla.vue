<template>
  <div>
    <DxDataGrid 
      :dataSource="data"
      :showBorders="true"
      :editing="editingOptions"
      :selection="selectionOptions"
      :filterRow="filterRowOptions"
      :searchPanel="searchPanelOptions"
      :columnChooser="columnChooserOptions"
      :paging="pagingOptions"
      :sorting="sortingOptions"
      :grouping="groupingOptions"
      :export="exportOptions"
      :customizeColumns="customizeColumns"
    >
      <DxColumn dataField="id" caption="ID" />
      <DxColumn dataField="name" caption="Nombre" />
      <DxColumn dataField="age" caption="Edad" />
    </DxDataGrid>
  </div>
</template>

<script lang="ts">
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import {
  DxDataGrid,
  DxColumn,
  DxEditing,
  DxSelection,
  DxFilterRow,
  DxSearchPanel,
  DxColumnChooser,
  DxPaging,
  DxSorting,
  DxGrouping,
  DxExport,
} from "devextreme-vue/data-grid";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    DxDataGrid,
    DxColumn,
    DxEditing,
    DxSelection,
    DxFilterRow,
    DxSearchPanel,
    DxColumnChooser,
    DxPaging,
    DxSorting,
    DxGrouping,
    DxExport,
  },
})
export default class SSWTabla extends Vue {
  data = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Doe", age: 25 },
    // Más datos aquí...
  ];

  editingOptions = {
    mode: "batch",
    allowUpdating: true,
    allowDeleting: true,
    allowAdding: true,
  };

 customizeColumns(columns: any) {
    columns.forEach((column: any) => {
      column.cellCssClass = 'custom-cell';
      column.headerCssClass = 'custom-header';
    });
  }

  selectionOptions = {
    mode: "multiple",
    showCheckBoxesMode: "always",
  };

  filterRowOptions = {
    visible: true,
    applyFilter: "auto",
  };

  searchPanelOptions = {
    visible: true,
    width: 240,
    placeholder: "Buscar...",
  };

  columnChooserOptions = {
    enabled: true,
    mode: "select",
  };

  pagingOptions = {
    enabled: true,
    pageSize: 10,
  };

  sortingOptions = {
    mode: "multiple",
  };

  groupingOptions = {
    autoExpandAll: true,
  };

  exportOptions = {
    enabled: true,
    fileName: "Tabla",
    allowExportSelectedData: true,
  };
}
</script>

<style scoped>
.custom-cell {
  padding: 8px;
}

.custom-cell:nth-child(even) {
  background-color: red;
}

.custom-cell:hover {
  background-color: red;
}

.custom-header {
  background-color: red;
  color: #333;
  font-weight: bold;
}

.custom-header .dx-header-row {
  border-bottom: 1px solid red;
}

.custom-sort-icon {
  color: red;
}

.custom-sort-icon:hover {
  color: red;
}
</style>
