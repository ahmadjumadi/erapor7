(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"/qKq":function(a,t,e){"use strict";e("07d7"),e("FZtP"),e("FNk8");var n=e("LvDl"),r=e.n(n),o=e("oVt+"),l=e("sove"),i=e("R5cT"),s=e("KaE5"),c=e("AeMN"),d=e("JtJI"),u=e("GUe+"),b=e("mwM1"),p=e("Ed67"),m=e("giZP"),f=e("Snq/"),g=e.n(f),h={components:{BOverlay:b.a,BRow:o.a,BCol:l.a,BForm:p.a,BFormGroup:m.a,BFormInput:i.a,vSelect:g.a},props:{form:{type:Object,required:!0},data:{required:!0},ref_gelar_depan:{type:Array,required:!0},ref_gelar_belakang:{type:Array,required:!0},ref_dudi:{type:Array,required:!0},loading_modal:{type:Boolean,default:function(){return!1}},isAsesor:{type:Boolean,default:function(){return!1}}}},_=e("KHd+"),v=Object(_.a)(h,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-overlay",{attrs:{show:a.loading_modal,rounded:"",opacity:"0.6",size:"lg","spinner-variant":"danger"}},[e("b-form",{on:{submit:function(t){return t.preventDefault(),a.handleSubmit(t)}}},[a.data?e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"Nama Lengkap","label-cols-md":"3"}},[e("b-form-input",{attrs:{value:a.data.nama_lengkap,disabled:""}})],1)],1),a._v(" "),e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"Gelar Depan","label-cols-md":"3"}},[e("v-select",{attrs:{multiple:"",options:a.ref_gelar_depan,reduce:function(a){return a.gelar_akademik_id},label:"kode",placeholder:"== Pilih Gelar Depan =="},scopedSlots:a._u([{key:"no-options",fn:function(t){t.search,t.searching,t.loading;return[a._v("\n              Tidak ada data untuk ditampilkan\n            ")]}}],null,!1,1385440287),model:{value:a.form.gelar_depan,callback:function(t){a.$set(a.form,"gelar_depan",t)},expression:"form.gelar_depan"}})],1)],1),a._v(" "),e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"Gelar Belakang","label-cols-md":"3"}},[e("v-select",{attrs:{multiple:"",options:a.ref_gelar_belakang,reduce:function(a){return a.gelar_akademik_id},label:"kode",placeholder:"== Pilih Gelar Depan =="},scopedSlots:a._u([{key:"no-options",fn:function(t){t.search,t.searching,t.loading;return[a._v("\n              Tidak ada data untuk ditampilkan\n            ")]}}],null,!1,1385440287),model:{value:a.form.gelar_belakang,callback:function(t){a.$set(a.form,"gelar_belakang",t)},expression:"form.gelar_belakang"}})],1)],1),a._v(" "),e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"NUPTK","label-cols-md":"3"}},[e("b-form-input",{attrs:{value:a.data.nuptk,disabled:""}})],1)],1),a._v(" "),e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"NIP","label-cols-md":"3"}},[e("b-form-input",{attrs:{value:a.data.nip,disabled:""}})],1)],1),a._v(" "),e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"NIK","label-cols-md":"3"}},[e("b-form-input",{attrs:{value:a.data.nik,disabled:""}})],1)],1),a._v(" "),e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"Jenis Kelamin","label-cols-md":"3"}},[e("b-form-input",{attrs:{value:"L"==a.data.jenis_kelamin?"Laki-laki":"Perempuan",disabled:""}})],1)],1),a._v(" "),e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"Tempat Lahir","label-cols-md":"3"}},[e("b-form-input",{attrs:{value:a.data.tempat_lahir,disabled:""}})],1)],1),a._v(" "),e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"Tanggal Lahir","label-cols-md":"3"}},[e("b-form-input",{attrs:{value:a.data.tanggal_lahir_indo,disabled:""}})],1)],1),a._v(" "),e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"Agama","label-cols-md":"3"}},[e("b-form-input",{attrs:{value:a.data.agama_id?a.data.agama.nama:"",disabled:""}})],1)],1),a._v(" "),e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"Alamat","label-cols-md":"3"}},[e("b-form-input",{attrs:{value:a.data.alamat,disabled:""}})],1)],1),a._v(" "),e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"RT","label-cols-md":"3"}},[e("b-form-input",{attrs:{value:a.data.rt,disabled:""}})],1)],1),a._v(" "),e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"RW","label-cols-md":"3"}},[e("b-form-input",{attrs:{value:a.data.rw,disabled:""}})],1)],1),a._v(" "),e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"Desa/Kelurahan","label-cols-md":"3"}},[e("b-form-input",{attrs:{value:a.data.desa_kelurahan,disabled:""}})],1)],1),a._v(" "),e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"Kecamatan","label-cols-md":"3"}},[e("b-form-input",{attrs:{value:a.data.kecamatan,disabled:""}})],1)],1),a._v(" "),e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"Kodepos","label-cols-md":"3"}},[e("b-form-input",{attrs:{value:a.data.kode_pos,disabled:""}})],1)],1),a._v(" "),e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"Telp/HP","label-cols-md":"3"}},[e("b-form-input",{attrs:{value:a.data.no_hp,disabled:""}})],1)],1),a._v(" "),e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"Email","label-cols-md":"3"}},[e("b-form-input",{attrs:{value:a.data.email,disabled:""}})],1)],1),a._v(" "),a.isAsesor?e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"DUDI","label-cols-md":"3"}},[e("v-select",{attrs:{options:a.ref_dudi,reduce:function(a){return a.dudi_id},label:"nama",placeholder:"== Pilih DUDI =="},scopedSlots:a._u([{key:"no-options",fn:function(t){t.search,t.searching,t.loading;return[a._v("\n              Tidak ada data untuk ditampilkan\n            ")]}}],null,!1,1385440287),model:{value:a.form.dudi_id,callback:function(t){a.$set(a.form,"dudi_id",t)},expression:"form.dudi_id"}})],1)],1):a._e()],1):a._e()],1)],1)}),[],!1,null,null,null).exports,k={components:{BRow:o.a,BCol:l.a,BFormInput:i.a,BTable:s.a,BSpinner:c.a,BPagination:d.a,BButton:u.a,BOverlay:b.a,DetilPtk:v,vSelect:g.a},props:{items:{type:Array,required:!0},fields:{type:Array,required:!0},meta:{required:!0},isBusy:{type:Boolean,default:function(){return!0}},isAsesor:{type:Boolean,default:function(){return!1}}},data:function(){return{hapus:!1,loading:!1,loading_modal:!1,sortBy:null,sortDesc:!1,judul:null,guru_id:"",data:null,form:{gelar_depan:[],gelar_belakang:[],dudi_id:""},ref_gelar_depan:[],ref_gelar_belakang:[],ref_dudi:[]}},watch:{sortBy:function(a){this.$emit("sort",{sortBy:this.sortBy,sortDesc:this.sortDesc})},sortDesc:function(a){this.$emit("sort",{sortBy:this.sortBy,sortDesc:this.sortDesc})}},methods:{detil:function(a){var t=this;this.loading=!0,this.guru_id=a.guru_id,this.$http.post("/guru/detil",{guru_id:this.guru_id,sekolah_id:a.sekolah_id,asesor:this.isAsesor}).then((function(a){t.loading=!1;var e=a.data;console.log(e),t.data=e.guru;var n=[];e.guru.gelar_depan.forEach((function(a,t){n.push(a.gelar_akademik_id)}));var r=[];e.guru.gelar_belakang.forEach((function(a,t){r.push(a.gelar_akademik_id)})),t.form.gelar_depan=n,t.form.gelar_belakang=r,t.ref_gelar_depan=e.ref_gelar_depan,t.ref_gelar_belakang=e.ref_gelar_belakang,t.ref_dudi=e.ref_dudi,t.form.dudi_id=e.dudi_id,t.judul="DETIL "+e.guru.nama_lengkap,97===t.data.jenis_ptk_id||98===t.data.jenis_ptk_id?t.hapus=!0:t.hapus=!1,t.$refs["detil-modal"].show()}))},handleOk:function(a){a.preventDefault(),this.handleSubmit()},handleSubmit:function(){var a=this;this.loading_modal=!0,this.$http.post("/guru/update",{guru_id:this.guru_id,gelar_depan:this.form.gelar_depan,gelar_belakang:this.form.gelar_belakang,sekolah_id:this.user.sekolah_id,dudi_id:this.form.dudi_id,asesor:this.isAsesor}).then((function(t){a.loading_modal=!1;var e=t.data;a.$swal({icon:e.icon,title:e.title,text:e.text,customClass:{confirmButton:"btn btn-success"}}).then((function(t){a.$refs["detil-modal"].hide(),a.loadPerPage(a.meta.per_page)}))}))},loadPerPage:function(a){this.$emit("per_page",this.meta.per_page)},changePage:function(a){this.$emit("pagination",a)},search:r.a.debounce((function(a){this.$emit("search",a)}),500),hapusData:function(){var a=this;this.$swal({title:"Apakah Anda yakin?",text:"Tindakan ini tidak ada dibatalkan!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yakin!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ml-1"},buttonsStyling:!1,allowOutsideClick:function(){return!1}}).then((function(t){t.value&&(a.loading_modal=!0,a.$http.post("/guru/hapus",{data:97===a.data.jenis_ptk_id?"Instruktur":"Asesor",id:a.guru_id}).then((function(t){var e=t.data;a.$swal({icon:e.icon,title:e.title,text:e.text,customClass:{confirmButton:"btn btn-success"},allowOutsideClick:!1}).then((function(t){a.$refs["detil-modal"].hide(),a.loadPerPage(a.meta.per_page)}))})))}))}}},w=(e("NL+c"),Object(_.a)(k,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("b-row",[e("b-col",{staticClass:"mb-2",attrs:{md:"4"}},[e("v-select",{attrs:{options:[10,25,50,100],clearable:!1,searchable:!1},on:{input:a.loadPerPage},model:{value:a.meta.per_page,callback:function(t){a.$set(a.meta,"per_page",t)},expression:"meta.per_page"}})],1),a._v(" "),e("b-col",{attrs:{md:"4","offset-md":"4"}},[e("b-form-input",{attrs:{placeholder:"Cari data..."},on:{input:a.search}})],1)],1),a._v(" "),e("b-overlay",{attrs:{show:a.loading,rounded:"",opacity:"0.6",size:"lg","spinner-variant":"warning"}},[e("b-table",{attrs:{responsive:"",bordered:"",striped:"",items:a.items,fields:a.fields,"sort-by":a.sortBy,"sort-desc":a.sortDesc,"show-empty":"",busy:a.isBusy},on:{"update:sortBy":function(t){a.sortBy=t},"update:sort-by":function(t){a.sortBy=t},"update:sortDesc":function(t){a.sortDesc=t},"update:sort-desc":function(t){a.sortDesc=t}},scopedSlots:a._u([{key:"empty",fn:function(t){return[e("p",{staticClass:"text-center"},[a._v("Tidak ada data untuk ditampilkan")])]}},{key:"table-busy",fn:function(){return[e("div",{staticClass:"text-center text-danger my-2"},[e("b-spinner",{staticClass:"align-middle"}),a._v(" "),e("strong",[a._v("Loading...")])],1)]},proxy:!0},{key:"cell(ttl)",fn:function(t){return[a._v("\n        "+a._s(t.item.tempat_lahir)+", "+a._s(t.item.tanggal_lahir_indo)+"\n      ")]}},{key:"cell(actions)",fn:function(t){return[e("b-button",{attrs:{variant:"warning",size:"sm"},on:{click:function(e){return a.detil(t.item)}}},[a._v("Detil")])]}}])})],1),a._v(" "),e("b-row",{staticClass:"mt-2"},[e("b-col",{attrs:{md:"6"}},[e("p",[a._v("Menampilkan "+a._s(a.meta.from?a.meta.from:0)+" sampai "+a._s(a.meta.to)+" dari "+a._s(a.meta.total)+" entri")])]),a._v(" "),e("b-col",{attrs:{md:"6"}},[e("b-pagination",{attrs:{"total-rows":a.meta.total,"per-page":a.meta.per_page,align:"right","aria-controls":"dw-datatable"},on:{change:a.changePage},model:{value:a.meta.current_page,callback:function(t){a.$set(a.meta,"current_page",t)},expression:"meta.current_page"}})],1)],1),a._v(" "),e("b-modal",{ref:"detil-modal",attrs:{size:"lg",title:a.judul,"ok-title":"Simpan","cancel-title":"Tutup"},on:{ok:a.handleOk},scopedSlots:a._u([{key:"modal-footer",fn:function(t){var n=t.ok,r=t.cancel;return[e("b-overlay",{attrs:{show:a.loading_modal,rounded:"",opacity:"0.6",size:"sm","spinner-variant":"secondary"}},[e("b-button",{on:{click:function(a){return r()}}},[a._v("Tutup")])],1),a._v(" "),e("b-overlay",{attrs:{show:a.loading_modal,rounded:"",opacity:"0.6",size:"sm","spinner-variant":"primary"}},[e("b-button",{attrs:{variant:"primary"},on:{click:function(a){return n()}}},[a._v("Perbaharui")])],1),a._v(" "),e("b-overlay",{attrs:{show:a.loading_modal,rounded:"",opacity:"0.6",size:"sm","spinner-variant":"danger"}},[a.hapus?e("b-button",{attrs:{variant:"danger"},on:{click:function(t){return a.hapusData()}}},[a._v("Hapus")]):a._e()],1)]}}])},[e("detil-ptk",{attrs:{data:a.data,loading_modal:a.loading_modal,ref_gelar_depan:a.ref_gelar_depan,ref_gelar_belakang:a.ref_gelar_belakang,form:a.form,isAsesor:a.isAsesor,ref_dudi:a.ref_dudi}})],1)],1)}),[],!1,null,null,null));t.a=w.exports},C263:function(a,t,e){var n=e("JPst"),r=e("nm7J");(t=n(!1)).i(r),t.push([a.i,"[dir] .swal2-container .swal2-popup {\n  border-radius: 0.428rem;\n  padding-bottom: 1.5rem;\n}\n.swal2-container .swal2-popup .swal2-close:focus {\n  outline: none;\n}\n[dir] .swal2-container .swal2-popup .swal2-close:focus {\n  box-shadow: none;\n}\n.swal2-container .swal2-popup .swal2-content {\n  color: #6e6b7b;\n}\n.swal2-container .swal2-popup .swal2-title {\n  font-size: 1.35rem;\n  font-weight: inherit;\n  color: #5e5873;\n}\n[dir] .swal2-container .swal2-popup button.swal2-confirm:focus {\n  box-shadow: none;\n}\n.swal2-container .swal2-popup input.swal2-input {\n  height: 2.714rem;\n  font-size: 0.9rem;\n  color: #6e6b7b;\n  line-height: 1.45;\n}\n[dir] .swal2-container .swal2-popup input.swal2-input {\n  padding: 0.438rem 1rem;\n  border-color: #d8d6de;\n  border-radius: 0.357rem;\n}\n[dir] .swal2-container .swal2-popup input.swal2-input:focus {\n  border-color: #7367f0 !important;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n.swal2-container .swal2-popup .swal2-select {\n  width: 100%;\n}\n[dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step {\n  background-color: #7367f0;\n}\n[dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step-line, [dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step {\n  background-color: #b3adf7;\n}\n[dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step-line {\n  background-color: #7367f0;\n}\n.swal2-container .swal2-popup pre {\n  min-height: 1.35rem;\n}\n[dir] .swal2-container .swal2-popup pre {\n  margin-top: 0.5rem;\n}\n.swal2-container .swal2-popup .swal2-footer {\n  color: #6e6b7b;\n}\n[dir] .swal2-container .swal2-popup .swal2-footer {\n  border-color: #ebe9f1;\n}\n.dark-layout .swal2-container .swal2-popup .swal2-title {\n  color: #d0d2d6;\n}\n[dir] .dark-layout .swal2-container .swal2-modal {\n  background-color: #283046;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-title {\n  color: #d0d2d6;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-icon-text {\n  color: inherit;\n}\n[dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-circular-line-left, [dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-circular-line-right, [dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-fix, [dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-animate-success-icon {\n  background-color: #283046 !important;\n}\n.dark-layout .swal2-container .swal2-modal input.swal2-input {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-modal input.swal2-input {\n  border-color: #3b4253;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-content, .dark-layout .swal2-container .swal2-modal .swal2-html-container {\n  color: #b4b7bd;\n}\n.dark-layout .swal2-container .swal2-modal pre, .dark-layout .swal2-container .swal2-modal code {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-modal .swal2-input {\n  background-color: #283046;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-footer {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-modal .swal2-footer {\n  border-color: #3b4253;\n}\n.dark-layout .swal2-container .swal2-validation-message {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-validation-message {\n  background-color: #161d31;\n}\nhtml[dir=rtl] .swal2-rtl .swal2-close {\n  left: 0;\n  right: auto;\n}",""]),a.exports=t},Ed67:function(a,t,e){"use strict";e.d(t,"a",(function(){return c}));var n=e("L3ns"),r=e("tC49"),o=e("xjcK"),l=e("pyNs"),i=e("z3V6"),s=Object(i.d)({id:Object(i.c)(l.u),inline:Object(i.c)(l.g,!1),novalidate:Object(i.c)(l.g,!1),validated:Object(i.c)(l.g,!1)},o.x),c=Object(n.c)({name:o.x,functional:!0,props:s,render:function(a,t){var e=t.props,n=t.data,o=t.children;return a("form",Object(r.a)(n,{class:{"form-inline":e.inline,"was-validated":e.validated},attrs:{id:e.id,novalidate:e.novalidate}}),o)}})},Hrou:function(a,t,e){"use strict";e.d(t,"a",(function(){return h}));var n=e("L3ns"),r=e("xjcK"),o=e("2C+6"),l=e("z3V6"),i=e("STsD"),s=e("Md8H"),c=e("kO/s"),d=e("jBgq"),u=e("SPl0"),b=e("cSte");function p(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function m(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?p(Object(e),!0).forEach((function(t){f(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function f(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var g=Object(l.d)(Object(o.m)(m(m(m({},c.b),u.a),b.a)),r.rb),h=Object(n.c)({name:r.rb,mixins:[i.a,s.a,c.a,d.a,b.b,u.b],props:g,computed:{isTableSimple:function(){return!0}}})},"NL+c":function(a,t,e){"use strict";e("yqjj")},giZP:function(a,t,e){"use strict";e.d(t,"a",(function(){return I}));var n=e("xjcK"),r=e("6GPe"),o=e("pyNs"),l=e("mS7b"),i=e("m3aq"),s=e("Iyau"),c=e("Io6r"),d=e("+nMp"),u=function(a){return"\\"+a},b=e("kGy3"),p=e("bAY6"),m=e("ex6f"),f=e("OljW"),g=e("2C+6"),h=e("z3V6"),_=e("1SAT"),v=e("kO/s"),k=e("jBgq"),w=e("sove"),y=e("L3ns"),j=e("tC49"),O=Object(h.d)({tag:Object(h.c)(o.u,"div")},n.I),x=Object(y.c)({name:n.I,functional:!0,props:O,render:function(a,t){var e=t.props,n=t.data,r=t.children;return a(e.tag,Object(j.a)(n,{staticClass:"form-row"}),r)}});var P=Object(h.d)({id:Object(h.c)(o.u),inline:Object(h.c)(o.g,!1),tag:Object(h.c)(o.u,"small"),textVariant:Object(h.c)(o.u,"muted")},n.N),C=Object(y.c)({name:n.N,functional:!0,props:P,render:function(a,t){var e,n,r,o=t.props,l=t.data,i=t.children;return a(o.tag,Object(j.a)(l,{class:(e={"form-text":!o.inline},n="text-".concat(o.textVariant),r=o.textVariant,n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e),attrs:{id:o.id}}),i)}}),B=Object(h.d)({ariaLive:Object(h.c)(o.u),forceShow:Object(h.c)(o.g,!1),id:Object(h.c)(o.u),role:Object(h.c)(o.u),state:Object(h.c)(o.g,null),tag:Object(h.c)(o.u,"div"),tooltip:Object(h.c)(o.g,!1)},n.F),D=Object(y.c)({name:n.F,functional:!0,props:B,render:function(a,t){var e=t.props,n=t.data,r=t.children,o=e.tooltip,l=e.ariaLive,i=!0===e.forceShow||!1===e.state;return a(e.tag,Object(j.a)(n,{class:{"d-block":i,"invalid-feedback":!o,"invalid-tooltip":o},attrs:{id:e.id||null,role:e.role||null,"aria-live":l||null,"aria-atomic":l?"true":null}}),r)}}),S=Object(h.d)({ariaLive:Object(h.c)(o.u),forceShow:Object(h.c)(o.g,!1),id:Object(h.c)(o.u),role:Object(h.c)(o.u),state:Object(h.c)(o.g,null),tag:Object(h.c)(o.u,"div"),tooltip:Object(h.c)(o.g,!1)},n.P),$=Object(y.c)({name:n.P,functional:!0,props:S,render:function(a,t){var e=t.props,n=t.data,r=t.children,o=e.tooltip,l=e.ariaLive,i=!0===e.forceShow||!0===e.state;return a(e.tag,Object(j.a)(n,{class:{"d-block":i,"valid-feedback":!o,"valid-tooltip":o},attrs:{id:e.id||null,role:e.role||null,"aria-live":l||null,"aria-atomic":l?"true":null}}),r)}});function A(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function T(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?A(Object(e),!0).forEach((function(t){E(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):A(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function E(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var L=["input","select","textarea"],F=L.map((function(a){return"".concat(a,":not([disabled])")})).join(),q=[].concat(L,["a","button","label"]),I={name:n.D,mixins:[v.a,_.a,k.a],get props(){return delete this.props,this.props=Object(h.d)(Object(g.m)(T(T(T(T({},v.b),_.b),Object(c.b)().reduce((function(a,t){return a[Object(h.g)(t,"contentCols")]=Object(h.c)(o.i),a[Object(h.g)(t,"labelAlign")]=Object(h.c)(o.u),a[Object(h.g)(t,"labelCols")]=Object(h.c)(o.i),a}),Object(g.c)(null))),{},{description:Object(h.c)(o.u),disabled:Object(h.c)(o.g,!1),feedbackAriaLive:Object(h.c)(o.u,"assertive"),invalidFeedback:Object(h.c)(o.u),label:Object(h.c)(o.u),labelClass:Object(h.c)(o.e),labelFor:Object(h.c)(o.u),labelSize:Object(h.c)(o.u),labelSrOnly:Object(h.c)(o.g,!1),tooltip:Object(h.c)(o.g,!1),validFeedback:Object(h.c)(o.u),validated:Object(h.c)(o.g,!1)})),n.D)},data:function(){return{ariaDescribedby:null}},computed:{contentColProps:function(){return this.getColProps(this.$props,"content")},labelAlignClasses:function(){return this.getAlignClasses(this.$props,"label")},labelColProps:function(){return this.getColProps(this.$props,"label")},isHorizontal:function(){return Object(g.h)(this.contentColProps).length>0||Object(g.h)(this.labelColProps).length>0}},watch:{ariaDescribedby:function(a,t){a!==t&&this.updateAriaDescribedby(a,t)}},mounted:function(){var a=this;this.$nextTick((function(){a.updateAriaDescribedby(a.ariaDescribedby)}))},methods:{getAlignClasses:function(a,t){return Object(c.b)().reduce((function(e,n){var r=a[Object(h.g)(n,"".concat(t,"Align"))]||null;return r&&e.push(["text",n,r].filter(p.a).join("-")),e}),[])},getColProps:function(a,t){return Object(c.b)().reduce((function(e,n){var r=a[Object(h.g)(n,"".concat(t,"Cols"))];return r=""===r||(r||!1),Object(m.b)(r)||"auto"===r||(r=(r=Object(f.b)(r,0))>0&&r),r&&(e[n||(Object(m.b)(r)?"col":"cols")]=r),e}),{})},updateAriaDescribedby:function(a,t){var e,n,o,i=this.labelFor;if(r.g&&i){var c=Object(b.C)("#".concat((e=i,n=(e=Object(d.g)(e)).length,o=e.charCodeAt(0),e.split("").reduce((function(a,t,r){var l=e.charCodeAt(r);return 0===l?a+"�":127===l||l>=1&&l<=31||0===r&&l>=48&&l<=57||1===r&&l>=48&&l<=57&&45===o?a+u("".concat(l.toString(16)," ")):0===r&&45===l&&1===n?a+u(t):l>=128||45===l||95===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?a+t:a+u(t)}),""))),this.$refs.content);if(c){var m="aria-describedby",f=(a||"").split(l.s),g=(t||"").split(l.s),h=(Object(b.h)(c,m)||"").split(l.s).filter((function(a){return!Object(s.a)(g,a)})).concat(f).filter((function(a,t,e){return e.indexOf(a)===t})).filter(p.a).join(" ").trim();h?Object(b.E)(c,m,h):Object(b.x)(c,m)}}},onLegendClick:function(a){if(!this.labelFor){var t=a.target,e=t?t.tagName:"";if(-1===q.indexOf(e)){var n=Object(b.D)(F,this.$refs.content).filter(b.u);1===n.length&&Object(b.d)(n[0])}}}},render:function(a){var t=this.computedState,e=this.feedbackAriaLive,n=this.isHorizontal,r=this.labelFor,o=this.normalizeSlot,l=this.safeId,s=this.tooltip,c=l(),d=!r,u=a(),b=o(i.v)||this.label,m=b?l("_BV_label_"):null;if(b||n){var f=this.labelSize,g=this.labelColProps,h=d?"legend":"label";this.labelSrOnly?(b&&(u=a(h,{class:"sr-only",attrs:{id:m,for:r||null}},[b])),u=a(n?w.a:"div",{props:n?g:{}},[u])):u=a(n?w.a:h,{on:d?{click:this.onLegendClick}:{},props:n?T(T({},g),{},{tag:h}):{},attrs:{id:m,for:r||null,tabindex:d?"-1":null},class:[d?"bv-no-focus-ring":"",n||d?"col-form-label":"",!n&&d?"pt-0":"",n||d?"":"d-block",f?"col-form-label-".concat(f):"",this.labelAlignClasses,this.labelClass]},[b])}var _=a(),v=o(i.u)||this.invalidFeedback,k=v?l("_BV_feedback_invalid_"):null;v&&(_=a(D,{props:{ariaLive:e,id:k,state:t,tooltip:s},attrs:{tabindex:v?"-1":null}},[v]));var y=a(),j=o(i.cb)||this.validFeedback,O=j?l("_BV_feedback_valid_"):null;j&&(y=a($,{props:{ariaLive:e,id:O,state:t,tooltip:s},attrs:{tabindex:j?"-1":null}},[j]));var P=a(),B=o(i.i)||this.description,S=B?l("_BV_description_"):null;B&&(P=a(C,{attrs:{id:S,tabindex:"-1"}},[B]));var A=this.ariaDescribedby=[S,!1===t?k:null,!0===t?O:null].filter(p.a).join(" ")||null,E=a(n?w.a:"div",{props:n?this.contentColProps:{},ref:"content"},[o(i.h,{ariaDescribedby:A,descriptionId:S,id:c,labelId:m})||a(),_,y,P]);return a(d?"fieldset":n?x:"div",{staticClass:"form-group",class:[{"was-validated":this.validated},this.stateClass],attrs:{id:c,disabled:d?this.disabled:null,role:d?null:"group","aria-invalid":this.computedAriaInvalid,"aria-labelledby":d&&n?m:null}},n&&d?[a(x,[u,E])]:[u,E])}}},m10P:function(a,t,e){"use strict";var n=e("XuX8"),r=new(e.n(n).a);t.a=r},"oq+m":function(a,t,e){"use strict";e.r(t);e("rB9j"),e("hByQ");var n=e("IF94"),r=e("/qKq"),o=e("qeMX"),l=e("m10P"),i={components:{BCard:n.a,AddPtk:o.a,Datatable:r.a},data:function(){return{isAsesor:!1,isBusy:!0,fields:[{key:"nama_lengkap",label:"Nama",sortable:!0,thClass:"text-center"},{key:"jenis_kelamin",label:"L/P",sortable:!0,thClass:"text-center",tdClass:"text-center"},{key:"ttl",label:"Tempat, Tanggal Lahir",sortable:!1,thClass:"text-center"},{key:"email",label:"Email",sortable:!0,thClass:"text-center"},{key:"actions",label:"Aksi",sortable:!1,thClass:"text-center",tdClass:"text-center"}],items:[],meta:{},current_page:1,per_page:10,search:"",sortBy:"nama",sortByDesc:!1}},created:function(){this.loadPostsData(),l.a.$on("modal-instruktur",this.handleEvent)},methods:{handleEvent:function(){l.a.$emit("open-modal-ptk")},handleReload:function(){this.loadPostsData()},loadPostsData:function(){var a=this;this.isBusy=!0;var t=this.current_page;this.$http.get("/guru",{params:{jenis_gtk:"instruktur",user_id:this.user.user_id,sekolah_id:this.user.sekolah_id,semester_id:this.user.semester.semester_id,periode_aktif:this.user.semester.nama,page:t,per_page:this.per_page,q:this.search,sortby:this.sortBy,sortbydesc:this.sortByDesc?"DESC":"ASC"}}).then((function(t){var e=t.data.data;a.isBusy=!1,a.items=e.data,a.meta={total:e.total,current_page:e.current_page,per_page:e.per_page,from:e.from,to:e.to,role_id:a.role_id,roles:t.data.roles}}))},handlePerPage:function(a){this.per_page=a,this.loadPostsData()},handlePagination:function(a){this.current_page=a,this.loadPostsData()},handleSearch:function(a){this.search=a,this.loadPostsData()},handleSort:function(a){a.sortBy&&(this.sortBy=a.sortBy,this.sortByDesc=a.sortDesc,this.loadPostsData())}}},s=e("KHd+"),c=Object(s.a)(i,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-card",[e("datatable",{attrs:{isAsesor:a.isAsesor,isBusy:a.isBusy,items:a.items,fields:a.fields,meta:a.meta},on:{per_page:a.handlePerPage,pagination:a.handlePagination,search:a.handleSearch,sort:a.handleSort}}),a._v(" "),e("add-ptk",{attrs:{title:"Tambah Data Instruktur",link_excel:"/excel/format_excel_instruktur.xlsx",jenis_gtk:"instruktur"},on:{reload:a.handleReload}})],1)}),[],!1,null,null,null);t.default=c.exports},qeMX:function(a,t,e){"use strict";e("oVuX"),e("07d7"),e("FZtP");var n=e("mwM1"),r=e("Ed67"),o=e("xD+F"),l=e("R5cT"),i=e("oVt+"),s=e("sove"),c=e("giZP"),d=e("Hrou"),u=e("C9gC"),b=e("okd0"),p=e("bPaI"),m=e("Ki4g"),f=e("CAmi"),g=e("GUe+"),h=e("m10P"),_={components:{BOverlay:n.a,BForm:r.a,BFormFile:o.a,BFormInput:l.a,BRow:i.a,BCol:s.a,BFormGroup:c.a,BTableSimple:d.a,BThead:u.a,BTbody:b.a,BTh:p.a,BTr:m.a,BTd:f.a,BButton:g.a},props:{title:{required:!0},link_excel:{required:!0},jenis_gtk:{required:!0}},data:function(){return{simpan:!1,addPtk:!1,loading:!1,form:{sekolah_id:"",nama:{},nuptk:{},nip:{},nik:{},jenis_kelamin:{},tempat_lahir:{},tanggal_lahir:{},agama:{},alamat_jalan:{},rt:{},rw:{},desa_kelurahan:{},kecamatan:{},kodepos:{},telp_hp:{},email:{}},state:{nama:null,nik:null,tanggal_lahir:null,agama:null,email:null},feedback:{nama:"",nik:"",tanggal_lahir:"",agama:"",email:""},file:null,fileState:null,feedback_file:"",imported_data:[],data_status:[{value:null,text:"== Pilih Status =="},{value:"1",text:"Aktif"},{value:"0",text:"Tidak Aktif"}]}},created:function(){this.form.tahun_pelajaran=this.user.semester.nama,this.form.jenis_gtk=this.jenis_gtk,this.form.sekolah_id=this.user.sekolah_id,h.a.$on("open-modal-ptk",this.handleEvent)},methods:{handleEvent:function(){this.addPtk=!0},hideModal:function(){this.addPtk=!1,this.resetModal()},resetModal:function(){},onFileChange:function(a){var t=this;this.loading=!0,this.simpan=!1,this.file=a.target.files[0];var e=new FormData;e.append("file_excel",this.file?this.file:""),this.$http.post("/guru/upload",e).then((function(a){t.loading=!1;var e=a.data;if(t.fileState=null,t.feedback_file="",e.errors)t.fileState=!e.errors.file_excel&&null,t.feedback_file=e.errors.file_excel?e.errors.file_excel.join(", "):"";else{t.simpan=!0,t.imported_data=e.imported_data;var n={},r={},o={},l={},i={},s={},c={},d={},u={},b={},p={},m={},f={},g={},h={},_={},v={},k={},w={},y={},j={},O={},x={},P={},C={},B={};t.imported_data.forEach((function(a,t){n[a.no]=a.nama,r[a.no]=a.nuptk,o[a.no]=a.nip,l[a.no]=a.nik,i[a.no]=a.jenis_kelamin,s[a.no]=a.tempat_lahir,c[a.no]=a.tanggal_lahir,d[a.no]=a.agama,u[a.no]=a.alamat_jalan,b[a.no]=a.rt,p[a.no]=a.rw,m[a.no]=a.desa_kelurahan,f[a.no]=a.kecamatan,g[a.no]=a.kodepos,h[a.no]=a.telp_hp,_[a.no]=a.email,v[a.no]=null,k[a.no]=null,w[a.no]=null,y[a.no]=null,j[a.no]=null,O[a.no]="",x[a.no]="",P[a.no]="",C[a.no]="",B[a.no]=""})),t.form.nama=n,t.form.nuptk=r,t.form.nip=o,t.form.nik=l,t.form.jenis_kelamin=i,t.form.tempat_lahir=s,t.form.tanggal_lahir=c,t.form.agama=d,t.form.alamat_jalan=u,t.form.rt=b,t.form.rw=p,t.form.desa_kelurahan=m,t.form.kecamatan=f,t.form.kodepos=g,t.form.telp_hp=h,t.form.email=_,t.state.nama=v,t.state.nik=k,t.state.tanggal_lahir=w,t.state.agama=y,t.state.email=j,t.feedback.nama=O,t.feedback.nik=x,t.feedback.tanggal_lahir=P,t.feedback.agama=C,t.feedback.email=B}})).catch((function(a){console.log(a),t.fileState=!1,t.feedback_file="Isian salah. Silahkan periksa kembali!!!"}))},handleOk:function(a){a.preventDefault(),this.handleSubmit()},handleSubmit:function(){var a=this;this.loading=!0,this.$http.post("/guru/simpan",this.form).then((function(t){a.loading=!1;var e=t.data;if(e.errors){console.log(e.errors);var n={},r={},o={},l={},i={},s={},c={},d={},u={},b={};a.imported_data.forEach((function(a,t){n[a.no]=!e.errors["nama."+a.no]&&null,r[a.no]=!e.errors["nik."+a.no]&&null,o[a.no]=!e.errors["tanggal_lahir."+a.no]&&null,l[a.no]=!e.errors["agama."+a.no]&&null,i[a.no]=!e.errors["email."+a.no]&&null,s[a.no]=e.errors["nama."+a.no]?e.errors["nama."+a.no].join(", "):"",c[a.no]=e.errors["nik."+a.no]?e.errors["nik."+a.no].join(", "):"",d[a.no]=e.errors["tanggal_lahir."+a.no]?e.errors["tanggal_lahir."+a.no].join(", "):"",u[a.no]=e.errors["agama."+a.no]?e.errors["agama."+a.no].join(", "):"",b[a.no]=e.errors["email."+a.no]?e.errors["email."+a.no].join(", "):""})),a.state.nama=n,a.state.nik=r,a.state.tanggal_lahir=o,a.state.agama=l,a.state.email=i,a.feedback.nama=s,a.feedback.nik=c,a.feedback.tanggal_lahir=d,a.feedback.agama=u,a.feedback.email=b}else a.$swal({icon:e.icon,title:e.title,text:e.text,customClass:{confirmButton:"btn btn-success"}}).then((function(t){a.hideModal(),a.$emit("reload")}))}))}}},v=e("KHd+"),k=Object(v.a)(_,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-modal",{attrs:{size:"xl",title:a.title,"ok-title":"Simpan","cancel-title":"Batal"},on:{show:a.resetModal,hidden:a.resetModal,ok:a.handleOk},scopedSlots:a._u([{key:"modal-footer",fn:function(t){var n=t.ok,r=t.cancel;return[e("b-overlay",{attrs:{show:a.loading,rounded:"",opacity:"0.6",size:"sm","spinner-variant":"secondary"}},[e("b-button",{on:{click:function(a){return r()}}},[a._v("Tutup")])],1),a._v(" "),a.simpan?e("b-overlay",{attrs:{show:a.loading,rounded:"",opacity:"0.6",size:"sm","spinner-variant":"primary"}},[a.simpan?e("b-button",{attrs:{variant:"primary"},on:{click:function(a){return n()}}},[a._v("Simpan")]):a._e()],1):a._e()]}}]),model:{value:a.addPtk,callback:function(t){a.addPtk=t},expression:"addPtk"}},[e("b-overlay",{attrs:{show:a.loading,rounded:"",opacity:"0.6",size:"lg","spinner-variant":"danger"}},[e("b-row",[e("b-col",{attrs:{cols:"8"}},[e("b-form-file",{attrs:{placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here...",state:a.fileState},on:{change:a.onFileChange},model:{value:a.file,callback:function(t){a.file=t},expression:"file"}}),a._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:a.feedback_file,expression:"feedback_file"}],staticClass:"text-danger"},[a._v(a._s(a.feedback_file))])],1),a._v(" "),e("b-col",{attrs:{cols:"4"}},[e("b-button",{attrs:{block:"",variant:"warning",href:a.link_excel,target:"_blank"}},[a._v("UNDUH TEMPLATE")])],1)],1),a._v(" "),a.imported_data.length?e("b-row",{staticClass:"mt-2"},[e("b-col",{attrs:{cols:"12"}},[e("b-table-simple",{attrs:{hover:"",bordered:"",responsive:""}},[e("b-thead",[e("b-tr",[e("b-th",{staticClass:"text-center"},[a._v("No")]),a._v(" "),e("b-th",{staticClass:"text-center"},[a._v("Nama")]),a._v(" "),e("b-th",{staticClass:"text-center"},[a._v("NUPTK")]),a._v(" "),e("b-th",{staticClass:"text-center"},[a._v("NIP")]),a._v(" "),e("b-th",{staticClass:"text-center"},[a._v("NIK")]),a._v(" "),e("b-th",{staticClass:"text-center"},[a._v("Jenis Kelamin")]),a._v(" "),e("b-th",{staticClass:"text-center"},[a._v("Tempat Lahir")]),a._v(" "),e("b-th",{staticClass:"text-center"},[a._v("Tanggal Lahir")]),a._v(" "),e("b-th",{staticClass:"text-center"},[a._v("Agama")]),a._v(" "),e("b-th",{staticClass:"text-center"},[a._v("Alamat Jalan")]),a._v(" "),e("b-th",{staticClass:"text-center"},[a._v("RT")]),a._v(" "),e("b-th",{staticClass:"text-center"},[a._v("RW")]),a._v(" "),e("b-th",{staticClass:"text-center"},[a._v("Desa/Kelurahan")]),a._v(" "),e("b-th",{staticClass:"text-center"},[a._v("Kecamatan")]),a._v(" "),e("b-th",{staticClass:"text-center"},[a._v("Kodepos")]),a._v(" "),e("b-th",{staticClass:"text-center"},[a._v("Telp/HP")]),a._v(" "),e("b-th",{staticClass:"text-center"},[a._v("Email")])],1)],1),a._v(" "),e("b-tbody",a._l(a.imported_data,(function(t,n){return e("b-tr",{key:t.no},[e("b-td",{staticClass:"text-center"},[a._v(a._s(t.no))]),a._v(" "),e("b-td",[e("b-form-group",{attrs:{"invalid-feedback":a.feedback.nama[t.no],state:a.state.nama[t.no]}},[e("b-form-input",{model:{value:a.form.nama[t.no],callback:function(e){a.$set(a.form.nama,t.no,e)},expression:"form.nama[item.no]"}})],1)],1),a._v(" "),e("b-td",[e("b-form-group",[e("b-form-input",{model:{value:a.form.nuptk[t.no],callback:function(e){a.$set(a.form.nuptk,t.no,e)},expression:"form.nuptk[item.no]"}})],1)],1),a._v(" "),e("b-td",[e("b-form-group",[e("b-form-input",{model:{value:a.form.nip[t.no],callback:function(e){a.$set(a.form.nip,t.no,e)},expression:"form.nip[item.no]"}})],1)],1),a._v(" "),e("b-td",[e("b-form-group",{attrs:{"invalid-feedback":a.feedback.nik[t.no],state:a.state.nik[t.no]}},[e("b-form-input",{model:{value:a.form.nik[t.no],callback:function(e){a.$set(a.form.nik,t.no,e)},expression:"form.nik[item.no]"}})],1)],1),a._v(" "),e("b-td",[e("b-form-group",[e("b-form-input",{model:{value:a.form.jenis_kelamin[t.no],callback:function(e){a.$set(a.form.jenis_kelamin,t.no,e)},expression:"form.jenis_kelamin[item.no]"}})],1)],1),a._v(" "),e("b-td",[e("b-form-group",[e("b-form-input",{model:{value:a.form.tempat_lahir[t.no],callback:function(e){a.$set(a.form.tempat_lahir,t.no,e)},expression:"form.tempat_lahir[item.no]"}})],1)],1),a._v(" "),e("b-td",[e("b-form-group",{attrs:{"invalid-feedback":a.feedback.tanggal_lahir[t.no],state:a.state.tanggal_lahir[t.no]}},[e("b-form-input",{model:{value:a.form.tanggal_lahir[t.no],callback:function(e){a.$set(a.form.tanggal_lahir,t.no,e)},expression:"form.tanggal_lahir[item.no]"}})],1)],1),a._v(" "),e("b-td",[e("b-form-group",{attrs:{"invalid-feedback":a.feedback.agama[t.no],state:a.state.agama[t.no]}},[e("b-form-input",{model:{value:a.form.agama[t.no],callback:function(e){a.$set(a.form.agama,t.no,e)},expression:"form.agama[item.no]"}})],1)],1),a._v(" "),e("b-td",[e("b-form-group",[e("b-form-input",{model:{value:a.form.alamat_jalan[t.no],callback:function(e){a.$set(a.form.alamat_jalan,t.no,e)},expression:"form.alamat_jalan[item.no]"}})],1)],1),a._v(" "),e("b-td",[e("b-form-group",[e("b-form-input",{model:{value:a.form.rt[t.no],callback:function(e){a.$set(a.form.rt,t.no,e)},expression:"form.rt[item.no]"}})],1)],1),a._v(" "),e("b-td",[e("b-form-group",[e("b-form-input",{model:{value:a.form.rw[t.no],callback:function(e){a.$set(a.form.rw,t.no,e)},expression:"form.rw[item.no]"}})],1)],1),a._v(" "),e("b-td",[e("b-form-group",[e("b-form-input",{model:{value:a.form.desa_kelurahan[t.no],callback:function(e){a.$set(a.form.desa_kelurahan,t.no,e)},expression:"form.desa_kelurahan[item.no]"}})],1)],1),a._v(" "),e("b-td",[e("b-form-group",[e("b-form-input",{model:{value:a.form.kecamatan[t.no],callback:function(e){a.$set(a.form.kecamatan,t.no,e)},expression:"form.kecamatan[item.no]"}})],1)],1),a._v(" "),e("b-td",[e("b-form-group",[e("b-form-input",{model:{value:a.form.kodepos[t.no],callback:function(e){a.$set(a.form.kodepos,t.no,e)},expression:"form.kodepos[item.no]"}})],1)],1),a._v(" "),e("b-td",[e("b-form-group",[e("b-form-input",{model:{value:a.form.telp_hp[t.no],callback:function(e){a.$set(a.form.telp_hp,t.no,e)},expression:"form.telp_hp[item.no]"}})],1)],1),a._v(" "),e("b-td",[e("b-form-group",{attrs:{"invalid-feedback":a.feedback.email[t.no],state:a.state.email[t.no]}},[e("b-form-input",{model:{value:a.form.email[t.no],callback:function(e){a.$set(a.form.email,t.no,e)},expression:"form.email[item.no]"}})],1)],1)],1)})),1)],1)],1)],1):a._e()],1)],1)}),[],!1,null,null,null);t.a=k.exports},yqjj:function(a,t,e){var n=e("C263");"string"==typeof n&&(n=[[a.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,r);n.locals&&(a.exports=n.locals)}}]);