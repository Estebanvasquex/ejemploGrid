import { data } from "./data.js";




$("#grid").jqGrid({
    datatype: 'local',
    data: data,
    colModel: [
      //{ name: 'Acciones', width: 80, formatter: formatterBotonesEditarCapturaFichaPredial, sortable: false, search: false, exportcol: false },
      { name: 'nombre_predio', index: 'nombre_predio', width: 50, frozen: true },
      { name: 'numero_servidumbre', index: 'numero_servidumbre', width: 140, searchoptions: { maxlength: '20' },frozen: true },
      { name: 'tramo', index: 'tramo', width: 140, searchoptions: { maxlength: '20' } },
      { name: 'nombre_estado_actual', index: 'nombre_estado_actual', width: 110, searchoptions: { maxlength: '20' } },
      { name: 'longitud', index: 'longitud', width: 160, searchoptions: { maxlength: '20' } },
      { name: 'area_total', index: 'area_total', width: 150, searchoptions: { maxlength: '20' } },
      { name: 'area_construida', index: 'area_construida', width: 140, searchoptions: { maxlength: '20' } },
      { name: 'unidad_medida_construida', index: 'unidad_medida_construida', width: 110, searchoptions: { maxlength: '20' } },
      { name: 'area_reserva', index: 'area_reserva', width: 140, searchoptions: { maxlength: '20' } },
      { name: 'unidad_medida_reserva', index: 'unidad_medida_reserva', width: 110, searchoptions: { maxlength: '20' } },
      { name: 'NOMBRE_PREDIADOR', index: 'NOMBRE_PREDIADOR', width: 160, cellattr: function (rowId, tv, rawObject, cm, rdata) { return 'style="white-space: normal;"' }, searchoptions: { maxlength: '100' } },
      { name: 'matricula_inmobiliaria', index: 'matricula_inmobiliaria', width: 120, searchoptions: { maxlength: '20' } },
      { name: 'documento_privado', index: 'documento_privado', width: 140, cellattr: function (rowId, tv, rawObject, cm, rdata) { return 'style="white-space: normal;"' }, searchoptions: { maxlength: '20' } },
      { name: 'numero_escritura', index: 'numero_escritura', width: 160, cellattr: function (rowId, tv, rawObject, cm, rdata) { return 'style="white-space: normal;"' }, searchoptions: { maxlength: '20' } },
      { name: 'fecha_escritura', index: 'fecha_escritura', width: 160, searchoptions: { maxlength: '20' }, formatter: 'date', formatoptions: { srcformat: 'Y-m-d', newformat: 'd-m-Y' } },
      { name: 'cedula_catastral', index: 'cedula_catastral', width: 160, searchoptions: { maxlength: '20' } },
      { name: 'cantidad_torres', index: 'cantidad_torres', width: 110, searchoptions: { maxlength: '20' } },
      { name: 'torre_no', index: 'torre_no', width: 140, cellattr: function (rowId, tv, rawObject, cm, rdata) { return 'style="white-space: normal;"' }, searchoptions: { maxlength: '20' } },
      { name: 'descripcion_rol', index: 'descripcion_rol', width: 110, searchoptions: { maxlength: '20' } },
      { name: 'nombre_propietario_poseedor', index: 'nombre_propietario_poseedor', width: 220, cellattr: function (rowId, tv, rawObject, cm, rdata) { return 'style="white-space: normal;"' }, searchoptions: { maxlength: '50' } },
      { name: 'excluidos', index: 'excluidos', width: 200, cellattr: function (rowId, tv, rawObject, cm, rdata) { return 'style="white-space: normal;"' }, searchoptions: { maxlength: '20' } },
      { name: 'codigo_predio', index: 'codigo_predio', hidden: true },
      { name: 'codigo_unidad_grupal', index: 'codigo_unidad_grupal', hidden: true }
     ],
    shrinkToFit: false,//ajusta el ancho de las columnas al ancho del grid
    rowNum: 30,
        loadui: 'disable',
        loadonce: true,
        multiselect: true,
        rowList: [30, 50, 100],
        viewrecords: true,
        sortorder: "asc",
        gridview: true,
    caption: 'Users Grid',
    rowNum: 10,
    pager: '#pager',
    autoheight: false,
    autowidth: true,
   /* gridComplete: function()
    {
     $('#grid').jqGrid('setGridWidth', '1000'); // max width for grid
    },*/
 });


 jQuery("#grid").jqGrid('setFrozenColumns');
