import { data } from "./data.js";


$("#jQGridCapturaFichaPredial").jqGrid({
    datatype: 'local',
    data: data,
    colModel: [
        //{ name: 'Acciones', width: 80, formatter: formatterBotonesEditarCapturaFichaPredial, sortable: false, search: false, exportcol: false, frozen:true },
        { name: 'nombre_predio', index: 'nombre_predio', width: 150, searchoptions: { maxlength: '20' } },
        { name: 'numero_servidumbre', index: 'numero_servidumbre', width: 140, searchoptions: { maxlength: '20' } },
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
    rowNum: 30,
    loadonce: true,
    rowList: [30, 50, 100],
    pager: '#jQGridCapturaFichaPredialPager',
    sortname: 'nombre_predio',
    viewrecords: true,
    sortorder: "asc",
    gridview: true,
    
});


/*
$(document).ready(function () {
    $("#divLoadingCapturaFichaPredial").show();
    let idCuerpoModalCapturaFichaPredial = $("#tabContenidoCapturaFichaPredial").closest(".modal-content").attr("id");
    // Cargar combos
    consultarTramoCapturaFP();
    consultarPredioCapturaFP(0, 0);
    consultarServidumbreCapturaFP(0, 0);
    // Agrega el buscador en los select
    $('.selectSearchCapturaFichaPredial').select2();
    //---- CARGAR GRID FICHA PREDIAL ---------------------------------
    $("#jQGridCapturaFichaPredial").jqGrid({
        //url: '../CapturaFichaPredial/cargarGridCapturaFichaPredial',
        //postData: {},
        //mtype: 'POST',
        datatype: "local",
        colNames: [
            parametrosCapturaFichaPredial.acciones,
            parametrosCapturaFichaPredial.cabecera1, parametrosCapturaFichaPredial.cabecera2, parametrosCapturaFichaPredial.cabecera3, parametrosCapturaFichaPredial.cabecera4, parametrosCapturaFichaPredial.cabecera5,
            parametrosCapturaFichaPredial.cabecera6, parametrosCapturaFichaPredial.cabecera7, parametrosCapturaFichaPredial.cabecera8, parametrosCapturaFichaPredial.cabecera9, parametrosCapturaFichaPredial.cabecera10,
            parametrosCapturaFichaPredial.cabecera11, parametrosCapturaFichaPredial.cabecera12, parametrosCapturaFichaPredial.cabecera13, parametrosCapturaFichaPredial.cabecera14, parametrosCapturaFichaPredial.cabecera15,
            parametrosCapturaFichaPredial.cabecera16, parametrosCapturaFichaPredial.cabecera17, parametrosCapturaFichaPredial.cabecera18, parametrosCapturaFichaPredial.cabecera19, parametrosCapturaFichaPredial.cabecera20,
            parametrosCapturaFichaPredial.cabecera21, parametrosCapturaFichaPredial.cabecera22, "Ficha"
        ],
        colModel: [
            { name: 'Acciones', width: 80, formatter: formatterBotonesEditarCapturaFichaPredial, sortable: false, search: false, exportcol: false },
            { name: 'nombre_predio', index: 'nombre_predio', width: 150, searchoptions: { maxlength: '20' } },
            { name: 'numero_servidumbre', index: 'numero_servidumbre', width: 140, searchoptions: { maxlength: '20' } },
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
            //{
            //    name: "fecha_escritura", index: "fecha_escritura", width: 140, searchoptions: { maxlength: '20' },
            //    jsonmap: function (obj) {
            //        let d = new Date(obj.fecha_escritura);
            //        let anio = d.getFullYear();
            //        if (isNaN(anio)) {
            //            return "";
            //        } else {
            //            let mes = (d.getMonth() + 1);
            //            let dia = d.getDate();
            //            if (mes < 10) {
            //                mes = "0" + mes;
            //            }
            //            if (dia < 10) {
            //                dia = "0" + dia;
            //            }
            //            return dia + "-" + mes + "-" + anio;
            //        }
            //    }
            //},
            { name: 'cedula_catastral', index: 'cedula_catastral', width: 160, searchoptions: { maxlength: '20' } },
            { name: 'cantidad_torres', index: 'cantidad_torres', width: 110, searchoptions: { maxlength: '20' } },
            { name: 'torre_no', index: 'torre_no', width: 140, cellattr: function (rowId, tv, rawObject, cm, rdata) { return 'style="white-space: normal;"' }, searchoptions: { maxlength: '20' } },
            { name: 'descripcion_rol', index: 'descripcion_rol', width: 110, searchoptions: { maxlength: '20' } },
            { name: 'nombre_propietario_poseedor', index: 'nombre_propietario_poseedor', width: 220, cellattr: function (rowId, tv, rawObject, cm, rdata) { return 'style="white-space: normal;"' }, searchoptions: { maxlength: '50' } },
            { name: 'excluidos', index: 'excluidos', width: 200, cellattr: function (rowId, tv, rawObject, cm, rdata) { return 'style="white-space: normal;"' }, searchoptions: { maxlength: '20' } },
            { name: 'codigo_predio', index: 'codigo_predio', hidden: true },
            { name: 'codigo_unidad_grupal', index: 'codigo_unidad_grupal', hidden: true }
        ],
        rowNum: 30,
        loadonce: true,
        rowList: [30, 50, 100],
        pager: '#jQGridCapturaFichaPredialPager',
        sortname: 'nombre_predio',
        viewrecords: true,
        sortorder: "asc",
        gridview: true,
        gridComplete: function () {
            $("#divLoadingCapturaFichaPredial").hide();
            
        },
        loadError: function (xhr, status, error) {
            $("#divLoadingCapturaFichaPredial").hide();
            swal(error + " - " + xhr.status, status, "error");
        },
        beforeRequest: function () {
            $("#divLoadingCapturaFichaPredial").show();
        },
        loadComplete: function (data) {
            var gridDOM = this;
            if ($(this).jqGrid('getGridParam', 'datatype') === 'json') {
                setTimeout(function () {
                    gridDOM.triggerToolbar();
                }, 100);
            }
        },
        recordtext: parametrosCapturaFichaPredial.vista + " {0} - {1} " + parametrosCapturaFichaPredial.de + " {2} ",
        emptyrecords: parametrosCapturaFichaPredial.msNoRegistros,
        loadui: 'disable',
        pgtext: parametrosCapturaFichaPredial.pagina + " {0} " + parametrosCapturaFichaPredial.de + " {1}"
    });
    addResizeGrid("jQGridCapturaFichaPredial", idCuerpoModalCapturaFichaPredial, 80);
    //Congelar columna de acciones
    $("#jQGridCapturaFichaPredial").jqGrid("setFrozenColumns");
    // Añadir filtro para buscar
    $('#jQGridCapturaFichaPredial').jqGrid('filterToolbar',
        { stringResult: true, searchOnEnter: false, defaultSearch: 'cn' });
    // Componente de exportar
    addControlesExportar("divControlesExportarCapturaFichaPredial", "jQGridCapturaFichaPredial", "CapturaFichaPredial", "SITCO PREDIAL - Captura Ficha Predial", "Captura Ficha Predial");
});
*/