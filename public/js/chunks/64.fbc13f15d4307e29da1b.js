(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"9pRx":function(a,e,t){"use strict";t("dcG6")},GufH:function(a,e,t){"use strict";t.r(e);t("oVuX"),t("07d7"),t("FZtP"),t("toAj");var n=t("IF94"),l=t("mwM1"),o=t("YZfj"),i=t("Ed67"),r=t("giZP"),s=t("R5cT"),d=t("xD+F"),m=t("oVt+"),c=t("sove"),p=t("GUe+"),b=t("Hrou"),_=t("C9gC"),u=t("okd0"),h=t("bPaI"),f=t("Ki4g"),k=t("CAmi"),w=t("X9p1"),g=t("qlm0"),v=t("baxv"),j=t("Snq/"),y=t.n(j),x={components:{BCard:n.a,BOverlay:l.a,BCardBody:o.a,BForm:i.a,BFormGroup:r.a,BFormInput:s.a,BFormFile:d.a,BRow:m.a,BCol:c.a,BButton:p.a,BTableSimple:b.a,BThead:_.a,BTbody:u.a,BTh:h.a,BTr:f.a,BTd:k.a,BAlert:w.a,BLink:g.a,Formulir:v.a,vSelect:y.a},data:function(){return{show:!1,isBusy:!1,form:{tahun_pelajaran:"",tingkat:"",jenis_rombel:"",rombongan_belajar_id:"",mata_pelajaran_id:"",pembelajaran_id:"",bentuk_penilaian:"",guru_id:"",sekolah_id:"",semester_id:"",merdeka:!1,nilai:{},kompeten:{}},meta:{tingkat_feedback:"",tingkat_state:null,jenis_rombel_feedback:"",jenis_rombel_state:null,rombongan_belajar_id_state:null,pembelajaran_id_state:null,rombongan_belajar_id_feedback:"",pembelajaran_id_feedback:"",bentuk_penilaian_feedback:"",bentuk_penilaian_state:null},data_siswa:[],data_tp:[],template_excel:null,template_excel_feedback:"",template_excel_state:null,link_template_tp:"",data_capaian:[{id:"0",nama:"Tidak tercapai"},{id:"1",nama:"Tercapai"}],data_bentuk_penilaian:[{id:"asesmen",nama:"Nilai Asesmen"},{id:"akhir",nama:"Nilai Akhir"}],disabled:!1}},created:function(){this.form.guru_id=this.user.guru_id,this.form.sekolah_id=this.user.sekolah_id,this.form.semester_id=this.user.semester.semester_id,this.form.tahun_pelajaran=this.user.semester.nama},methods:{onFileChange:function(a){var e=this;this.isBusy=!0,this.template_excel=a.target.files[0];var t=new FormData;t.append("template_excel",this.template_excel?this.template_excel:""),t.append("rombongan_belajar_id",this.form.rombongan_belajar_id),t.append("pembelajaran_id",this.form.pembelajaran_id),t.append("sekolah_id",this.form.sekolah_id),t.append("merdeka",this.form.merdeka),this.$http.post("/penilaian/upload-nilai",t).then((function(a){e.isBusy=!1;var t=a.data;t.errors?(e.template_excel_state=!t.errors.template_excel&&null,e.template_excel_feedback=t.errors.template_excel?t.errors.template_excel.join(", "):""):e.$swal({icon:t.icon,title:t.title,html:t.text,customClass:{confirmButton:"btn btn-success"}}).then((function(a){e.handleHideForm(),e.onReset()}))}))},changeBentuk:function(a){var e=this;this.show=!1,this.data_tp=[],this.data_siswa=[],this.form.nilai={},this.form.kompeten={},this.link_template_tp="",a&&("akhir"===a&&(this.link_template_tp="/downloads/template-nilai-akhir/"+this.form.pembelajaran_id),this.isBusy=!0,this.$http.post("/penilaian/get-nilai-akhir",this.form).then((function(t){e.isBusy=!1,e.show=!0;var n=t.data;e.data_siswa=n.data.data_siswa,e.data_tp=n.data.data_tp,"asesmen"==e.form.bentuk_penilaian?e.disabled=!0:e.disabled=!1;var l={},o={};e.data_siswa.forEach((function(e,t){l[e.anggota_rombel_id]="akhir"===a?e.nilai_akhir:e.nilai_asesmen,e.capaian_kompeten.forEach((function(a,t){o[e.anggota_rombel_id+"#"+a.tp_id]=a.kompeten}))})),e.form.nilai=l,e.form.kompeten=o})))},handleShowForm:function(){console.log("show_form")},calculateAverage:function(a){var e=0,t=0;return a.forEach((function(a,n){e+=parseInt(a),t++})),(e/parseInt(t)).toFixed(0)},handleHideForm:function(){this.show=!1},onSubmit:function(a){var e=this;a.preventDefault(),this.isBusy=!0,this.$http.post("/penilaian/simpan-nilai-akhir",this.form).then((function(a){e.isBusy=!1;var t=a.data;e.$swal({icon:t.icon,title:t.title,text:t.text,customClass:{confirmButton:"btn btn-success"}}).then((function(a){e.handleHideForm(),e.onReset()}))}))},onReset:function(){this.handleHideForm(),this.form.tahun_pelajaran=this.user.semester.nama,this.form.tingkat="",this.form.jenis_rombel="",this.form.rombongan_belajar_id="",this.form.merdeka=!1,this.form.pembelajaran_id="",this.form.mata_pelajaran_id="",this.form.bentuk_penilaian="",this.form.nilai={},this.form.kompeten={},this.data_siswa=[],this.data_tp=[],this.meta.tingkat_feedback="",this.meta.tingkat_state=null,this.meta.jenis_rombel_feedback="",this.meta.jenis_rombel_state=null,this.meta.rombongan_belajar_id_state=null,this.meta.pembelajaran_id_state=null,this.meta.rombongan_belajar_id_feedback="",this.meta.pembelajaran_id_feedback="",this.meta.bentuk_penilaian_feedback="",this.meta.bentuk_penilaian_state=null,this.$refs.formulir.setValue()}}},B=(t("9pRx"),t("KHd+")),T=Object(B.a)(x,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("b-card",{attrs:{"no-body":""}},[t("b-overlay",{attrs:{show:a.isBusy,rounded:"",opacity:"0.6",size:"lg","spinner-variant":"danger"}},[t("b-card-body",[t("b-form",{on:{submit:a.onSubmit}},[t("formulir",{ref:"formulir",attrs:{meta:a.meta,form:a.form},on:{show_form:a.handleShowForm,hide_form:a.handleHideForm}}),a._v(" "),t("b-row",[t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{label:"Bentuk Penilaian","label-for":"bentuk_penilaian","label-cols-md":"3","invalid-feedback":a.meta.bentuk_penilaian_feedback,state:a.meta.bentuk_penilaian_state}},[t("v-select",{attrs:{id:"bentuk_penilaian",reduce:function(a){return a.id},label:"nama",options:a.data_bentuk_penilaian,placeholder:"== Pilih Bentuk Penilaian ==",state:a.meta.bentuk_penilaian_state},on:{input:a.changeBentuk},scopedSlots:a._u([{key:"no-options",fn:function(e){e.search,e.searching,e.loading;return[a._v("\n                  Tidak ada data untuk ditampilkan\n                ")]}}]),model:{value:a.form.bentuk_penilaian,callback:function(e){a.$set(a.form,"bentuk_penilaian",e)},expression:"form.bentuk_penilaian"}})],1)],1)],1),a._v(" "),a.show?t("b-row",[a.data_tp.length?[a.link_template_tp?t("b-col",{staticClass:"mb-2",attrs:{cols:"12"}},[t("b-row",[t("b-col",{attrs:{cols:"6"}},[t("b-form-group",{attrs:{"invalid-feedback":a.template_excel_feedback,state:a.template_excel_state}},[t("b-form-file",{attrs:{state:a.template_excel_state,placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},on:{change:a.onFileChange},model:{value:a.template_excel,callback:function(e){a.template_excel=e},expression:"template_excel"}})],1)],1),a._v(" "),t("b-col",{attrs:{cols:"6"}},[t("b-button",{attrs:{block:"",variant:"primary",href:a.link_template_tp,target:"_blank"}},[a._v("Unduh Template Nilai Akhir")])],1)],1)],1):a._e(),a._v(" "),t("b-col",{attrs:{cols:"12"}},[t("b-table-simple",{attrs:{bordered:"",striped:"",responsive:""}},[t("b-thead",[t("b-tr",[t("b-th",{staticClass:"text-center"},[a._v("No")]),a._v(" "),t("b-th",{staticClass:"text-center"},[a._v("Nama Peserta Didik")]),a._v(" "),t("b-th",{staticClass:"text-center"},[a._v("Nilai Akhir")]),a._v(" "),t("b-th",{staticClass:"text-center"},[a._v("Ketercapaian Kompetensi")]),a._v(" "),t("b-th",{staticClass:"text-center"},[a._v("Deskripsi Tujuan Pembelajaran")])],1)],1),a._v(" "),t("b-tbody",[a._l(a.data_siswa,(function(e,n){return[t("b-tr",[t("b-td",{staticClass:"text-center",staticStyle:{"vertical-align":"top"},attrs:{rowspan:a.data_tp.length+1}},[a._v(a._s(n+1))]),a._v(" "),t("b-td",{staticStyle:{"vertical-align":"top"},attrs:{rowspan:a.data_tp.length+1}},[a._v(a._s(e.nama))]),a._v(" "),t("b-td",{staticStyle:{"vertical-align":"top"},attrs:{rowspan:a.data_tp.length+1}},[t("b-form-input",{attrs:{disabled:a.disabled},model:{value:a.form.nilai[e.anggota_rombel_id],callback:function(t){a.$set(a.form.nilai,e.anggota_rombel_id,t)},expression:"form.nilai[siswa.anggota_rombel_id]"}})],1)],1),a._v(" "),a._l(a.data_tp,(function(n,l){return[t("b-tr",[t("b-td",[t("v-select",{attrs:{reduce:function(a){return a.id},label:"nama",options:a.data_capaian,placeholder:"== Pilih Capaian ==",searchable:!1,"append-to-body":""},model:{value:a.form.kompeten[e.anggota_rombel_id+"#"+n.tp_id],callback:function(t){a.$set(a.form.kompeten,e.anggota_rombel_id+"#"+n.tp_id,t)},expression:"form.kompeten[siswa.anggota_rombel_id+'#'+tp.tp_id]"}})],1),a._v(" "),t("b-td",[a._v("\n                          "+a._s(n.deskripsi)+"\n                        ")])],1)]}))]}))],2)],1)],1),a._v(" "),t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{"label-cols-md":"3"}},[t("b-button",{staticClass:"float-right ml-1",attrs:{type:"submit",variant:"primary"}},[a._v("Simpan")])],1)],1)]:[t("b-col",{attrs:{cols:"12"}},[t("b-alert",{attrs:{show:"",variant:"danger"}},[t("div",{staticClass:"alert-body text-center"},[t("h2",[a._v("Tidak ditemukan data Tujuan Pembelajaran")]),a._v(" "),t("p",[a._v("Silahkan tambah data Tujuan Pembelajaran terlebih dahulu "),t("b-link",{attrs:{to:"/referensi/tujuan-pembelajaran"}},[a._v("disini")])],1)])])],1)]],2):a._e()],1)],1)],1)],1)}),[],!1,null,null,null);e.default=T.exports},baxv:function(a,e,t){"use strict";var n=t("oVt+"),l=t("sove"),o=t("mwM1"),i=t("giZP"),r=t("R5cT"),s=t("Snq/"),d=t.n(s),m={components:{BRow:n.a,BCol:l.a,BOverlay:o.a,BFormGroup:i.a,BFormInput:r.a,vSelect:d.a},props:{meta:{required:!0},form:{required:!0}},data:function(){return{loading_rombel:!1,loading_mapel:!1,tahun_pelajaran:"",pembelajaran:"",data_tingkat:[{id:10,nama:"Kelas 10"},{id:11,nama:"Kelas 11"},{id:12,nama:"Kelas 12"},{id:13,nama:"Kelas 13"}],data_jenis:[{id:1,nama:"Reguler"},{id:16,nama:"Matpel Pilihan"}],data_rombel:[],data_mapel:[]}},methods:{setValue:function(){this.pembelajaran="",this.data_rombel=[],this.data_mapel=[]},changeTingkat:function(a){this.$emit("hide_form"),this.form.jenis_rombel="",this.form.rombongan_belajar_id="",this.pembelajaran="",this.form.pembelajaran_id="",this.form.mata_pelajaran_id="",this.form.merdeka=!1},changeJenis:function(a){var e=this;this.$emit("hide_form"),this.form.rombongan_belajar_id="",this.pembelajaran="",this.form.pembelajaran_id="",this.form.mata_pelajaran_id="",this.form.merdeka=!1,a&&(this.loading_rombel=!0,this.$http.post("/penilaian/get-rombel",this.form).then((function(a){e.loading_rombel=!1;var t=a.data;e.data_rombel=t.data})).catch((function(a){console.log(a)})))},changeRombel:function(a){var e=this;this.$emit("hide_form"),this.pembelajaran="",this.form.pembelajaran_id="",this.form.mata_pelajaran_id="",this.form.merdeka=!1,a&&(this.loading_mapel=!0,this.$http.post("/penilaian/get-mapel",this.form).then((function(a){e.loading_mapel=!1;var t=a.data;e.data_mapel=t.data,e.form.merdeka=t.merdeka})).catch((function(a){console.log(a)})))},changeMapel:function(a){this.$emit("hide_form"),a&&(this.form.pembelajaran_id=a.pembelajaran_id,this.form.mata_pelajaran_id=a.mata_pelajaran_id,this.$emit("show_form"))}}},c=t("KHd+"),p=Object(c.a)(m,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("b-row",[t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{label:"Tahun Pelajaran","label-for":"tahun_pelajaran","label-cols-md":"3"}},[t("b-form-input",{attrs:{id:"tahun_pelajaran",value:a.form.tahun_pelajaran,disabled:""}})],1)],1),a._v(" "),t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{label:"Tingkat Kelas","label-for":"tingkat","label-cols-md":"3","invalid-feedback":a.meta.tingkat_feedback,state:a.meta.tingkat_state}},[t("v-select",{attrs:{id:"tingkat",reduce:function(a){return a.id},label:"nama",options:a.data_tingkat,placeholder:"== Pilih Tingkat Kelas ==",searchable:!1,state:a.meta.tingkat_state},on:{input:a.changeTingkat},scopedSlots:a._u([{key:"no-options",fn:function(e){e.search,e.searching,e.loading;return[a._v("\n          Tidak ada data untuk ditampilkan\n        ")]}}]),model:{value:a.form.tingkat,callback:function(e){a.$set(a.form,"tingkat",e)},expression:"form.tingkat"}})],1)],1),a._v(" "),t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{label:"Jenis Rombongan Belajar","label-for":"jenis_rombel","label-cols-md":"3","invalid-feedback":a.meta.jenis_rombel_feedback,state:a.meta.jenis_rombel_state}},[t("v-select",{attrs:{id:"jenis_rombel",reduce:function(a){return a.id},label:"nama",options:a.data_jenis,placeholder:"== Pilih Jenis Rombongan Belajar ==",searchable:!1,state:a.meta.jenis_rombel_state},on:{input:a.changeJenis},scopedSlots:a._u([{key:"no-options",fn:function(e){e.search,e.searching,e.loading;return[a._v("\n          Tidak ada data untuk ditampilkan\n        ")]}}]),model:{value:a.form.jenis_rombel,callback:function(e){a.$set(a.form,"jenis_rombel",e)},expression:"form.jenis_rombel"}})],1)],1),a._v(" "),t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{label:"Rombongan Belajar","label-for":"rombongan_belajar_id","label-cols-md":"3","invalid-feedback":a.meta.rombongan_belajar_id_feedback,state:a.meta.rombongan_belajar_id_state}},[t("b-overlay",{attrs:{show:a.loading_rombel,opacity:"0.6",size:"md","spinner-variant":"secondary"}},[t("v-select",{attrs:{id:"rombongan_belajar_id",reduce:function(a){return a.rombongan_belajar_id},label:"nama",options:a.data_rombel,placeholder:"== Pilih Rombongan Belajar ==",state:a.meta.rombongan_belajar_id_state},on:{input:a.changeRombel},scopedSlots:a._u([{key:"no-options",fn:function(e){e.search,e.searching,e.loading;return[a._v("\n            Tidak ada data untuk ditampilkan\n          ")]}}]),model:{value:a.form.rombongan_belajar_id,callback:function(e){a.$set(a.form,"rombongan_belajar_id",e)},expression:"form.rombongan_belajar_id"}})],1)],1)],1),a._v(" "),t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{label:"Mata Pelajaran","label-for":"pembelajaran_id","label-cols-md":"3","invalid-feedback":a.meta.pembelajaran_id_feedback,state:a.meta.pembelajaran_id_state}},[t("b-overlay",{attrs:{show:a.loading_mapel,opacity:"0.6",size:"md","spinner-variant":"secondary"}},[t("v-select",{attrs:{id:"pembelajaran_id",label:"nama_mata_pelajaran",options:a.data_mapel,placeholder:"== Pilih Mata Pelajaran ==",state:a.meta.pembelajaran_id_state},on:{input:a.changeMapel},scopedSlots:a._u([{key:"no-options",fn:function(e){e.search,e.searching,e.loading;return[a._v("\n            Tidak ada data untuk ditampilkan\n          ")]}}]),model:{value:a.pembelajaran,callback:function(e){a.pembelajaran=e},expression:"pembelajaran"}})],1)],1)],1)],1)}),[],!1,null,null,null);e.a=p.exports},dcG6:function(a,e,t){var n=t("eYGO");"string"==typeof n&&(n=[[a.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(n,l);n.locals&&(a.exports=n.locals)},eYGO:function(a,e,t){var n=t("JPst"),l=t("nm7J");(e=n(!1)).i(l),e.push([a.i,"[dir] .swal2-container .swal2-popup {\n  border-radius: 0.428rem;\n  padding-bottom: 1.5rem;\n}\n.swal2-container .swal2-popup .swal2-close:focus {\n  outline: none;\n}\n[dir] .swal2-container .swal2-popup .swal2-close:focus {\n  box-shadow: none;\n}\n.swal2-container .swal2-popup .swal2-content {\n  color: #6e6b7b;\n}\n.swal2-container .swal2-popup .swal2-title {\n  font-size: 1.35rem;\n  font-weight: inherit;\n  color: #5e5873;\n}\n[dir] .swal2-container .swal2-popup button.swal2-confirm:focus {\n  box-shadow: none;\n}\n.swal2-container .swal2-popup input.swal2-input {\n  height: 2.714rem;\n  font-size: 0.9rem;\n  color: #6e6b7b;\n  line-height: 1.45;\n}\n[dir] .swal2-container .swal2-popup input.swal2-input {\n  padding: 0.438rem 1rem;\n  border-color: #d8d6de;\n  border-radius: 0.357rem;\n}\n[dir] .swal2-container .swal2-popup input.swal2-input:focus {\n  border-color: #7367f0 !important;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n.swal2-container .swal2-popup .swal2-select {\n  width: 100%;\n}\n[dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step {\n  background-color: #7367f0;\n}\n[dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step-line, [dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step {\n  background-color: #b3adf7;\n}\n[dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step-line {\n  background-color: #7367f0;\n}\n.swal2-container .swal2-popup pre {\n  min-height: 1.35rem;\n}\n[dir] .swal2-container .swal2-popup pre {\n  margin-top: 0.5rem;\n}\n.swal2-container .swal2-popup .swal2-footer {\n  color: #6e6b7b;\n}\n[dir] .swal2-container .swal2-popup .swal2-footer {\n  border-color: #ebe9f1;\n}\n.dark-layout .swal2-container .swal2-popup .swal2-title {\n  color: #d0d2d6;\n}\n[dir] .dark-layout .swal2-container .swal2-modal {\n  background-color: #283046;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-title {\n  color: #d0d2d6;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-icon-text {\n  color: inherit;\n}\n[dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-circular-line-left, [dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-circular-line-right, [dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-fix, [dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-animate-success-icon {\n  background-color: #283046 !important;\n}\n.dark-layout .swal2-container .swal2-modal input.swal2-input {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-modal input.swal2-input {\n  border-color: #3b4253;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-content, .dark-layout .swal2-container .swal2-modal .swal2-html-container {\n  color: #b4b7bd;\n}\n.dark-layout .swal2-container .swal2-modal pre, .dark-layout .swal2-container .swal2-modal code {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-modal .swal2-input {\n  background-color: #283046;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-footer {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-modal .swal2-footer {\n  border-color: #3b4253;\n}\n.dark-layout .swal2-container .swal2-validation-message {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-validation-message {\n  background-color: #161d31;\n}\nhtml[dir=rtl] .swal2-rtl .swal2-close {\n  left: 0;\n  right: auto;\n}",""]),a.exports=e}}]);