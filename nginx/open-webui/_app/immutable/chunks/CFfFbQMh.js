import{S as Lr,i as qr,s as Hr,H as Gr,I as Fr,C as Se,D as Ee,E as Te,K as jr,q as Q,r as J,F as Ie,v as Kr,k as ur,m as ir,g as de,y as Ke,u as Qe,d as I,e as M,t as be,l as ce,c as P,a as V,b as $e,p as fe,f as O,h as z,G as ft,j as ze,P as Qr,$ as Ga,n as pt,X as pp,w as cp,L as po,a3 as Fa,T as pg,x as cg,z as fg,A as hg,B as mg}from"./BCvnKofF.js";import"./IHki7fMi.js";import{g as co}from"./xuwbn1vA.js";import{p as gg}from"./BmJE08SH.js";import{g as _g}from"./D0QH3NT1.js";import{e as yr,u as fp,d as yg,o as bg}from"./CSm0urZa.js";import{_ as $g,a as vg,b as wg}from"./mwDbUFdv.js";import{d as xg,g as ja,c as kg}from"./__JRYNd1.js";import{M as hp}from"./CAH0SlZd.js";import{X as mp}from"./BKFELi7o.js";import{S as gp}from"./CVAJiM1o.js";import{T as Zr}from"./APGfqsGw.js";import{S as Sg}from"./xhfJ-qLd.js";import{C as yt}from"./Re39ekWt.js";import{C as dr}from"./C11Xkt-C.js";import{t as yi}from"./DZnh-gzO.js";import{A as Eg,f as Tg}from"./BGshmsd7.js";import{d as _n,r as Ig}from"./I1CDPYOB.js";import{g as Cg,d as zg,e as Ag,a as Og}from"./sduOQFBO.js";import{B as On}from"./C4dRBApd.js";import{C as Dg}from"./Mn_qTepd.js";import{P as Rg}from"./DEp1L9Ql.js";import"./BPHf6JLV.js";import{b as Ng,c as Bg}from"./DON4Monn.js";import{f as Mg}from"./CBc5jlPY.js";import{D as Pg}from"./BaykB1nf.js";import{G as Ug}from"./C7cYg_99.js";import{E as Vg}from"./Cf1cxNje.js";/*!
 * ONNX Runtime Web v1.21.0-dev.20250206-d981b153d3
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Dn=Object.defineProperty,Wg=Object.getOwnPropertyDescriptor,Lg=Object.getOwnPropertyNames,qg=Object.prototype.hasOwnProperty,Hg=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),ue=(e,t)=>()=>(e&&(t=e(e=0)),t),_a=(e,t)=>{for(var r in t)Dn(e,r,{get:t[r],enumerable:!0})},Gg=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Lg(t))!qg.call(e,i)&&i!==r&&Dn(e,i,{get:()=>t[i],enumerable:!(a=Wg(t,i))||a.enumerable});return e},Ka=e=>Gg(Dn({},"__esModule",{value:!0}),e),ta,mr,Mr,fo,_p,yp=ue(()=>{ta=new Map,mr=[],Mr=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let a=ta.get(e);if(a===void 0)ta.set(e,{backend:t,priority:r});else{if(a.priority>r)return;if(a.priority===r&&a.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let i=mr.indexOf(e);i!==-1&&mr.splice(i,1);for(let s=0;s<mr.length;s++)if(ta.get(mr[s]).priority<=r){mr.splice(s,0,e);return}mr.push(e)}return}throw new TypeError("not a valid backend")},fo=async e=>{let t=ta.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(a){return r||(t.error=`${a}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},_p=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),a=r.length===0?mr:r,i,s=[],n=new Set;for(let l of a){let d=await fo(l);typeof d=="string"?s.push({name:l,err:d}):(i||(i=d),i===d&&n.add(l))}if(!i)throw new Error(`no available backend found. ERR: ${s.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of s)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let o=t.filter(l=>n.has(typeof l=="string"?l:l.name));return[i,new Proxy(e,{get:(l,d)=>d==="executionProviders"?o:Reflect.get(l,d)})]}}),Fg=ue(()=>{yp()}),bp,jg=ue(()=>{bp="1.21.0-dev.20250206-d981b153d3"}),bi,qt,$p=ue(()=>{jg(),bi="warning",qt={wasm:{},webgl:{},webgpu:{},versions:{common:bp},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);bi=e}},get logLevel(){return bi}},Object.defineProperty(qt,"logLevel",{enumerable:!0})}),nt,Kg=ue(()=>{$p(),nt=qt}),vp,wp,Qg=ue(()=>{vp=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let a=r.getContext("2d");if(a!=null){let i,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[3]):(i=e.dims[3],s=e.dims[2]);let n=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,l,d;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let c=s*i,f=0,u=c,m=c*2,_=-1;n==="RGBA"?(f=0,u=c,m=c*2,_=c*3):n==="RGB"?(f=0,u=c,m=c*2):n==="RBG"&&(f=0,m=c,u=c*2);for(let y=0;y<s;y++)for(let w=0;w<i;w++){let $=(e.data[f++]-d[0])*l[0],b=(e.data[u++]-d[1])*l[1],k=(e.data[m++]-d[2])*l[2],S=_===-1?255:(e.data[_++]-d[3])*l[3];a.fillStyle="rgba("+$+","+b+","+k+","+S+")",a.fillRect(w,y,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},wp=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),a;if(r!=null){let i,s,n;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[1],n=e.dims[3]):(i=e.dims[3],s=e.dims[2],n=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,d,c;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let f=s*i;if(t!==void 0&&(t.format!==void 0&&n===4&&t.format!=="RGBA"||n===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let u=4,m=0,_=1,y=2,w=3,$=0,b=f,k=f*2,S=-1;o==="RGBA"?($=0,b=f,k=f*2,S=f*3):o==="RGB"?($=0,b=f,k=f*2):o==="RBG"&&($=0,k=f,b=f*2),a=r.createImageData(i,s);for(let E=0;E<s*i;m+=u,_+=u,y+=u,w+=u,E++)a.data[m]=(e.data[$++]-c[0])*d[0],a.data[_]=(e.data[b++]-c[1])*d[1],a.data[y]=(e.data[k++]-c[2])*d[2],a.data[w]=S===-1?255:(e.data[S++]-c[3])*d[3]}else throw new Error("Can not access image data");return a}}),za,xp,kp,Sp,Ep,Tp,Zg=ue(()=>{Rn(),za=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:a}=t,i=t.norm??{mean:255,bias:0},s,n;typeof i.mean=="number"?s=[i.mean,i.mean,i.mean,i.mean]:s=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?n=[i.bias,i.bias,i.bias,i.bias]:n=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*a,c=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),f=4,u=0,m=1,_=2,y=3,w=0,$=d,b=d*2,k=-1;o==="RGB"&&(f=3,u=0,m=1,_=2,y=-1),l==="RGBA"?k=d*3:l==="RBG"?(w=0,b=d,$=d*2):l==="BGR"&&(b=0,$=d,w=d*2);for(let S=0;S<d;S++,u+=f,_+=f,m+=f,y+=f)c[w++]=(e[u]+n[0])/s[0],c[$++]=(e[m]+n[1])/s[1],c[b++]=(e[_]+n[2])/s[2],k!==-1&&y!==-1&&(c[k++]=(e[y]+n[3])/s[3]);return l==="RGBA"?new Bt("float32",c,[1,4,r,a]):new Bt("float32",c,[1,3,r,a])},xp=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,a=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",n,o=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=l();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let u=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(u=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=u,o.width=m}else o.tensorFormat="RGBA",o.height=u,o.width=m;f.drawImage(e,0,0),n=f.getImageData(0,0,m,u).data}else throw new Error("Can not access image data")}else if(a){let c,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,f=t.resizedWidth):(c=e.height,f=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=c,o.width=f,t!==void 0){let u=l();u.width=f,u.height=c;let m=d(u);if(m!=null)m.putImageData(e,0,0),n=m.getImageData(0,0,f,c).data;else throw new Error("Can not access image data")}else n=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let u=e.height,m=e.width;return f.drawImage(e,0,0,m,u),n=f.getImageData(0,0,m,u).data,o.height=u,o.width=m,za(n,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((c,f)=>{let u=l(),m=d(u);if(!e||!m)return f();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{u.width=_.width,u.height=_.height,m.drawImage(_,0,0,u.width,u.height);let y=m.getImageData(0,0,u.width,u.height);o.height=u.height,o.width=u.width,c(za(y.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(n!==void 0)return za(n,o);throw new Error("Input data provided is not supported - aborted tensor creation")},kp=(e,t)=>{let{width:r,height:a,download:i,dispose:s}=t,n=[1,a,r,4];return new Bt({location:"texture",type:"float32",texture:e,dims:n,download:i,dispose:s})},Sp=(e,t)=>{let{dataType:r,dims:a,download:i,dispose:s}=t;return new Bt({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:a,download:i,dispose:s})},Ep=(e,t)=>{let{dataType:r,dims:a,download:i,dispose:s}=t;return new Bt({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:a,download:i,dispose:s})},Tp=(e,t,r)=>new Bt({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Er,da,$i,Ip,Yg=ue(()=>{Er=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),da=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),$i=!1,Ip=()=>{if(!$i){$i=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=typeof Float16Array<"u"&&Float16Array.from;e&&(Er.set("int64",BigInt64Array),da.set(BigInt64Array,"int64")),t&&(Er.set("uint64",BigUint64Array),da.set(BigUint64Array,"uint64")),r?(Er.set("float16",Float16Array),da.set(Float16Array,"float16")):Er.set("float16",Uint16Array)}}}),Cp,zp,Xg=ue(()=>{Rn(),Cp=e=>{let t=1;for(let r=0;r<e.length;r++){let a=e[r];if(typeof a!="number"||!Number.isSafeInteger(a))throw new TypeError(`dims[${r}] must be an integer, got: ${a}`);if(a<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${a}`);t*=a}return t},zp=(e,t)=>{switch(e.location){case"cpu":return new Bt(e.type,e.data,t);case"cpu-pinned":return new Bt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Bt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Bt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Bt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Bt,Rn=ue(()=>{Qg(),Zg(),Yg(),Xg(),Bt=class{constructor(e,t,r){Ip();let a,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,a=e.type,i=e.dims,e.location){case"cpu-pinned":{let n=Er.get(a);if(!n)throw new TypeError(`unsupported type "${a}" to create tensor from pinned buffer`);if(!(e.data instanceof n))throw new TypeError(`buffer should be of type ${n.name}`);this.cpuData=e.data;break}case"texture":{if(a!=="float32")throw new TypeError(`unsupported type "${a}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint64"&&a!=="int8"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let n,o;if(typeof e=="string")if(a=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");n=t}else{let l=Er.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?n=l.from(t,BigInt):n=l.from(t)}else if(t instanceof l)n=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")n=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else throw new TypeError(`A ${a} tensor's data must be type of ${l}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")a="string",n=e;else if(l==="boolean")a="bool",n=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)a="uint8",n=Uint8Array.from(e);else{let l=da.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);a=l,n=e}if(o===void 0)o=[n.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=n,this.dataLocation="cpu"}let s=Cp(i);if(this.cpuData&&s!==this.cpuData.length&&!((a==="uint4"||a==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=a,this.dims=i,this.size=s}static async fromImage(e,t){return xp(e,t)}static fromTexture(e,t){return kp(e,t)}static fromGpuBuffer(e,t){return Sp(e,t)}static fromMLTensor(e,t){return Ep(e,t)}static fromPinnedBuffer(e,t,r){return Tp(e,t,r)}toDataURL(e){return vp(this,e)}toImageData(e){return wp(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return zp(this,e)}}}),ar,Ap=ue(()=>{Rn(),ar=Bt}),Qa,vi,nr,Zt,Op=ue(()=>{$p(),Qa=(e,t)=>{(typeof qt.trace>"u"?!qt.wasm.trace:!qt.trace)||console.timeStamp(`${e}::ORT::${t}`)},vi=(e,t)=>{var i;let r=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],a=!1;for(let s=0;s<r.length;s++){if(a&&!r[s].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[s].trim().split(" ")[1]}`;t&&(n+=`::${t}`),Qa("CPU",n);return}r[s].includes("TRACE_FUNC")&&(a=!0)}},nr=e=>{(typeof qt.trace>"u"?!qt.wasm.trace:!qt.trace)||vi("BEGIN",e)},Zt=e=>{(typeof qt.trace>"u"?!qt.wasm.trace:!qt.trace)||vi("END",e)}}),Dp,Jg=ue(()=>{yp(),Ap(),Op(),Dp=class Rp{constructor(t){this.handler=t}async run(t,r,a){nr();let i={},s={};if(typeof t!="object"||t===null||t instanceof ar||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let n=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof ar)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");n=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);i[d]=null}if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(c.indexOf(f)!==-1){let u=r[f];(u===null||u instanceof ar)&&(d=!0,n=!1,i[f]=u)}if(d){if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else s=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(n)for(let d of this.outputNames)i[d]=null;let o=await this.handler.run(t,i,s),l={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let c=o[d];c instanceof ar?l[d]=c:l[d]=new ar(c.type,c.data,c.dims)}return Zt(),l}async release(){return this.handler.dispose()}static async create(t,r,a,i){nr();let s,n={};if(typeof t=="string"){if(s=t,typeof r=="object"&&r!==null)n=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof r=="object"&&r!==null)n=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,f=0,u=t.byteLength;if(typeof r=="object"&&r!==null)n=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(u=t.byteLength-f,typeof a=="number"){if(u=a,!Number.isSafeInteger(u))throw new RangeError("'byteLength' must be an integer.");if(u<=0||f+u>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-f}].`);if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof a<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(c,f,u)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await _p(n),d=await o.createInferenceSessionHandler(s,l);return Zt(),new Rp(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),Np,e_=ue(()=>{Jg(),Np=Dp}),t_=ue(()=>{}),r_=ue(()=>{}),a_=ue(()=>{}),i_=ue(()=>{}),n_={};_a(n_,{InferenceSession:()=>Np,TRACE:()=>Qa,TRACE_FUNC_BEGIN:()=>nr,TRACE_FUNC_END:()=>Zt,Tensor:()=>ar,env:()=>nt,registerBackend:()=>Mr});var Yt=ue(()=>{Fg(),Kg(),e_(),Ap(),t_(),r_(),Op(),a_(),i_()}),Nn=ue(()=>{}),Bp={};_a(Bp,{default:()=>Mp});var wi,xi,Mp,s_=ue(()=>{var e;Wh(),Ar(),Bn(),wi="ort-wasm-proxy-worker",xi=((e=globalThis.self)==null?void 0:e.name)===wi,xi&&(self.onmessage=t=>{let{type:r,in:a}=t.data;try{switch(r){case"init-wasm":Mn(a.wasm).then(()=>{ts(a).then(()=>{postMessage({type:r})},i=>{postMessage({type:r,err:i})})},i=>{postMessage({type:r,err:i})});break;case"init-ep":{let{epName:i,env:s}=a;rs(s,i).then(()=>{postMessage({type:r})},n=>{postMessage({type:r,err:n})});break}case"copy-from":{let{buffer:i}=a,s=ti(i);postMessage({type:r,out:s});break}case"create":{let{model:i,options:s}=a;as(i,s).then(n=>{postMessage({type:r,out:n})},n=>{postMessage({type:r,err:n})});break}case"release":is(a),postMessage({type:r});break;case"run":{let{sessionId:i,inputIndices:s,inputs:n,outputIndices:o,options:l}=a;ns(i,s,n,o,new Array(o.length).fill(null),l).then(d=>{d.some(c=>c[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},os([...n,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":ss(a),postMessage({type:r});break;default:}}catch(i){postMessage({type:r,err:i})}}),Mp=xi?null:t=>new Worker(t??Nt,{type:"module",name:wi})}),Pp={};_a(Pp,{default:()=>Up});var ki,Si,Up,o_=ue(()=>{var e;Si=(ki=import.meta.url,async function(t={}){function r(){return B.buffer!=U.buffer&&we(),U}function a(){return B.buffer!=U.buffer&&we(),Z}function i(){return B.buffer!=U.buffer&&we(),te}function s(){return B.buffer!=U.buffer&&we(),L}function n(){return B.buffer!=U.buffer&&we(),ie}function o(){return B.buffer!=U.buffer&&we(),X}function l(){return B.buffer!=U.buffer&&we(),W}function d(){return B.buffer!=U.buffer&&we(),Ae}var c,f,u=Object.assign({},t),m=new Promise((p,h)=>{c=p,f=h}),_=typeof window=="object",y=typeof importScripts=="function",w=y&&self.name=="em-pthread";u.mountExternalData=(p,h)=>{p.startsWith("./")&&(p=p.substring(2)),(u.Fb||(u.Fb=new Map)).set(p,h)},u.unmountExternalData=()=>{delete u.Fb};var $=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let b=()=>{let p=(g,v,x)=>(...A)=>{let K=er,ne=v==null?void 0:v();A=g(...A);let pe=v==null?void 0:v();return ne!==pe&&(g=pe,x(ne),v=x=null),er!=K?new Promise((he,ke)=>{di={resolve:he,reject:ke}}):A},h=g=>async(...v)=>{var x;try{if(u.Gb)throw Error("Session already started");let A=u.Gb={hc:v[0],errors:[]},K=await g(...v);if(u.Gb!==A)throw Error("Session mismatch");(x=u.Hb)==null||x.flush();let ne=A.errors;if(0<ne.length){let pe=await Promise.all(ne);if(pe=pe.filter(he=>he),0<pe.length)throw Error(pe.join(`
`))}return K}finally{u.Gb=null}};u._OrtCreateSession=p(u._OrtCreateSession,()=>u._OrtCreateSession,g=>u._OrtCreateSession=g),u._OrtRun=h(p(u._OrtRun,()=>u._OrtRun,g=>u._OrtRun=g)),u._OrtRunWithBinding=h(p(u._OrtRunWithBinding,()=>u._OrtRunWithBinding,g=>u._OrtRunWithBinding=g)),u._OrtBindInput=p(u._OrtBindInput,()=>u._OrtBindInput,g=>u._OrtBindInput=g),b=void 0};u.jsepInit=(p,h)=>{if(b==null||b(),p==="webgpu"){[u.Hb,u.Vb,u.Zb,u.Ob,u.Yb,u.kb,u.$b,u.cc,u.Wb,u.Xb,u.ac]=h;let g=u.Hb;u.jsepRegisterBuffer=(v,x,A,K)=>g.registerBuffer(v,x,A,K),u.jsepGetBuffer=v=>g.getBuffer(v),u.jsepCreateDownloader=(v,x,A)=>g.createDownloader(v,x,A),u.jsepOnCreateSession=v=>{g.onCreateSession(v)},u.jsepOnReleaseSession=v=>{g.onReleaseSession(v)},u.jsepOnRunStart=v=>g.onRunStart(v),u.dc=(v,x)=>{g.upload(v,x)}}else if(p==="webnn"){[u.Hb,u.bc,u.Pb,u.jsepEnsureTensor,u.ec,u.jsepDownloadTensor]=h,u.jsepReleaseTensorId=u.Pb;let g=u.Hb;u.jsepOnRunStart=v=>g.onRunStart(v),u.jsepRegisterMLContext=(v,x)=>{g.registerMLContext(v,x)},u.jsepOnReleaseSession=v=>{g.onReleaseSession(v)},u.jsepCreateMLTensorDownloader=(v,x)=>g.createMLTensorDownloader(v,x),u.jsepRegisterMLTensor=(v,x,A)=>g.registerMLTensor(v,x,A),u.jsepCreateMLContext=v=>g.createMLContext(v),u.jsepRegisterMLConstant=(v,x,A,K,ne)=>g.registerMLConstant(v,x,A,K,ne,u.Fb)}};var k,S,E=Object.assign({},u),T=(p,h)=>{throw h},C="";(_||y)&&(y?C=self.location.href:typeof document<"u"&&document.currentScript&&(C=document.currentScript.src),ki&&(C=ki),C=C.startsWith("blob:")?"":C.substr(0,C.replace(/[?#].*/,"").lastIndexOf("/")+1),y&&(S=p=>{var h=new XMLHttpRequest;return h.open("GET",p,!1),h.responseType="arraybuffer",h.send(null),new Uint8Array(h.response)}),k=(p,h,g)=>{var v=new XMLHttpRequest;v.open("GET",p,!0),v.responseType="arraybuffer",v.onload=()=>{v.status==200||v.status==0&&v.response?h(v.response):g()},v.onerror=g,v.send(null)});var R,D=console.log.bind(console),H=console.error.bind(console),re=D,ae=H;if(Object.assign(u,E),E=null,w){let p=function(h){try{var g=h.data,v=g.cmd;if(v==="load"){let x=[];self.onmessage=A=>x.push(A),self.startWorker=()=>{postMessage({cmd:"loaded"});for(let A of x)p(A);self.onmessage=p};for(let A of g.handlers)u[A]&&!u[A].proxy||(u[A]=(...K)=>{postMessage({Nb:"callHandler",pc:A,args:K})},A=="print"&&(re=u[A]),A=="printErr"&&(ae=u[A]));B=g.wasmMemory,we(),j(g.wasmModule)}else if(v==="run"){hi(g.pthread_ptr,0,0,1,0,0),li(g.pthread_ptr),Pt(),Ot(),ee||(Xs(),ee=!0);try{Xt(g.start_routine,g.arg)}catch(x){if(x!="unwind")throw x}}else v==="cancel"?Nr()&&Ia(-1):g.target!=="setimmediate"&&(v==="checkMailbox"?ee&&ya():v&&(ae(`worker: received unknown command ${v}`),ae(g)))}catch(x){throw Js(),x}};var j,ee=!1;ae=function(...h){h=h.join(" "),console.error(h)},self.alert=function(...h){postMessage({Nb:"alert",text:h.join(" "),rc:Nr()})},u.instantiateWasm=(h,g)=>new Promise(v=>{j=x=>{x=new WebAssembly.Instance(x,bt()),g(x),v()}}),self.onunhandledrejection=h=>{throw h.reason||h},self.onmessage=p}u.wasmBinary&&(R=u.wasmBinary);var B,oe,N,U,Z,te,L,ie,X,W,G,se,Ae,Ce=!1;function we(){var p=B.buffer;u.HEAP8=U=new Int8Array(p),u.HEAP16=te=new Int16Array(p),u.HEAPU8=Z=new Uint8Array(p),u.HEAPU16=L=new Uint16Array(p),u.HEAP32=ie=new Int32Array(p),u.HEAPU32=X=new Uint32Array(p),u.HEAPF32=W=new Float32Array(p),u.HEAPF64=Ae=new Float64Array(p),u.HEAP64=G=new BigInt64Array(p),u.HEAPU64=se=new BigUint64Array(p)}if(!w){if(!((B=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0})).buffer instanceof $))throw ae("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),Error("bad memory");we()}var me=[],Ue=[],Ve=[],Be=0,lt=null;function Et(){if(--Be==0&&lt){var p=lt;lt=null,p()}}function Me(p){throw ae(p="Aborted("+p+")"),Ce=!0,N=1,p=new WebAssembly.RuntimeError(p+". Build with -sASSERTIONS for more info."),f(p),p}var et,Ct=p=>p.startsWith("data:application/octet-stream;base64,"),rt=p=>p.startsWith("file://");function At(p){if(p==et&&R)return new Uint8Array(R);if(S)return S(p);throw"both async and sync fetching of the wasm failed"}function wt(p,h,g){return function(v){if(!R&&(_||y)){if(typeof fetch=="function"&&!rt(v))return fetch(v,{credentials:"same-origin"}).then(x=>{if(!x.ok)throw`failed to load wasm binary file at '${v}'`;return x.arrayBuffer()}).catch(()=>At(v));if(k)return new Promise((x,A)=>{k(v,K=>x(new Uint8Array(K)),A)})}return Promise.resolve().then(()=>At(v))}(p).then(v=>WebAssembly.instantiate(v,h)).then(g,v=>{ae(`failed to asynchronously prepare wasm: ${v}`),Me(v)})}function bt(){return{a:{O:tt,Aa:Re,b:Vt,aa:Yr,B:ls,qa:us,Y:ps,_:cs,ra:fs,oa:hs,ha:ms,na:gs,L:_s,Z:ys,W:bs,pa:$s,X:vs,va:Jh,F:em,Q:tm,P:am,E:nm,u:sm,q:om,G:lm,A:mm,R:gm,ua:_m,ka:ym,U:bm,ba:$m,H:vm,ja:li,ta:wm,t:xm,Ba:km,x:Tm,o:Im,m:zm,c:si,n:Am,k:Rm,w:Nm,p:Bm,f:Mm,s:Pm,l:Um,e:Vm,j:Wm,i:Lm,g:qm,d:Hm,ea:Gm,fa:Fm,ga:jm,ca:Ns,da:Bs,T:Km,h:Qm,D:Zm,I:Ym,M:Xm,y:Jm,sa:eg,V:tg,v:Ps,z:rg,N:ag,S:ig,za:ng,ya:sg,la:Ws,ma:Ls,$:Oe,C:qs,K:Hs,ia:Gs,J:Fs,a:B,xa:He,wa:Qs,r:ug}}}var ve={916868:(p,h,g,v,x)=>{if(u===void 0||!u.Fb)return 1;if((p=it(Number(p>>>0))).startsWith("./")&&(p=p.substring(2)),!(p=u.Fb.get(p)))return 2;if(h=Number(h>>>0),g=Number(g>>>0),v=Number(v>>>0),h+g>p.byteLength)return 3;try{let A=p.subarray(h,h+g);switch(x){case 0:a().set(A,v>>>0);break;case 1:u.dc(v,A);break;default:return 4}return 0}catch{return 4}},917583:(p,h,g)=>{u.ec(p,a().subarray(h>>>0,h+g>>>0))},917646:()=>u.bc(),917687:p=>{u.Pb(p)},917723:()=>{u.Wb()},917754:()=>{u.Xb()},917783:()=>{u.ac()},917808:p=>u.Vb(p),917841:p=>u.Zb(p),917873:(p,h,g)=>{u.Ob(Number(p),Number(h),Number(g),!0)},917936:(p,h,g)=>{u.Ob(Number(p),Number(h),Number(g))},917993:()=>typeof wasmOffsetConverter<"u",918050:p=>{u.kb("Abs",p,void 0)},918101:p=>{u.kb("Neg",p,void 0)},918152:p=>{u.kb("Floor",p,void 0)},918205:p=>{u.kb("Ceil",p,void 0)},918257:p=>{u.kb("Reciprocal",p,void 0)},918315:p=>{u.kb("Sqrt",p,void 0)},918367:p=>{u.kb("Exp",p,void 0)},918418:p=>{u.kb("Erf",p,void 0)},918469:p=>{u.kb("Sigmoid",p,void 0)},918524:(p,h,g)=>{u.kb("HardSigmoid",p,{alpha:h,beta:g})},918603:p=>{u.kb("Log",p,void 0)},918654:p=>{u.kb("Sin",p,void 0)},918705:p=>{u.kb("Cos",p,void 0)},918756:p=>{u.kb("Tan",p,void 0)},918807:p=>{u.kb("Asin",p,void 0)},918859:p=>{u.kb("Acos",p,void 0)},918911:p=>{u.kb("Atan",p,void 0)},918963:p=>{u.kb("Sinh",p,void 0)},919015:p=>{u.kb("Cosh",p,void 0)},919067:p=>{u.kb("Asinh",p,void 0)},919120:p=>{u.kb("Acosh",p,void 0)},919173:p=>{u.kb("Atanh",p,void 0)},919226:p=>{u.kb("Tanh",p,void 0)},919278:p=>{u.kb("Not",p,void 0)},919329:(p,h,g)=>{u.kb("Clip",p,{min:h,max:g})},919398:p=>{u.kb("Clip",p,void 0)},919450:(p,h)=>{u.kb("Elu",p,{alpha:h})},919508:p=>{u.kb("Gelu",p,void 0)},919560:p=>{u.kb("Relu",p,void 0)},919612:(p,h)=>{u.kb("LeakyRelu",p,{alpha:h})},919676:(p,h)=>{u.kb("ThresholdedRelu",p,{alpha:h})},919746:(p,h)=>{u.kb("Cast",p,{to:h})},919804:p=>{u.kb("Add",p,void 0)},919855:p=>{u.kb("Sub",p,void 0)},919906:p=>{u.kb("Mul",p,void 0)},919957:p=>{u.kb("Div",p,void 0)},920008:p=>{u.kb("Pow",p,void 0)},920059:p=>{u.kb("Equal",p,void 0)},920112:p=>{u.kb("Greater",p,void 0)},920167:p=>{u.kb("GreaterOrEqual",p,void 0)},920229:p=>{u.kb("Less",p,void 0)},920281:p=>{u.kb("LessOrEqual",p,void 0)},920340:(p,h,g,v,x)=>{u.kb("ReduceMean",p,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:v?Array.from(n().subarray(Number(v)>>>0,Number(x)>>>0)):[]})},920515:(p,h,g,v,x)=>{u.kb("ReduceMax",p,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:v?Array.from(n().subarray(Number(v)>>>0,Number(x)>>>0)):[]})},920689:(p,h,g,v,x)=>{u.kb("ReduceMin",p,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:v?Array.from(n().subarray(Number(v)>>>0,Number(x)>>>0)):[]})},920863:(p,h,g,v,x)=>{u.kb("ReduceProd",p,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:v?Array.from(n().subarray(Number(v)>>>0,Number(x)>>>0)):[]})},921038:(p,h,g,v,x)=>{u.kb("ReduceSum",p,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:v?Array.from(n().subarray(Number(v)>>>0,Number(x)>>>0)):[]})},921212:(p,h,g,v,x)=>{u.kb("ReduceL1",p,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:v?Array.from(n().subarray(Number(v)>>>0,Number(x)>>>0)):[]})},921385:(p,h,g,v,x)=>{u.kb("ReduceL2",p,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:v?Array.from(n().subarray(Number(v)>>>0,Number(x)>>>0)):[]})},921558:(p,h,g,v,x)=>{u.kb("ReduceLogSum",p,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:v?Array.from(n().subarray(Number(v)>>>0,Number(x)>>>0)):[]})},921735:(p,h,g,v,x)=>{u.kb("ReduceSumSquare",p,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:v?Array.from(n().subarray(Number(v)>>>0,Number(x)>>>0)):[]})},921915:(p,h,g,v,x)=>{u.kb("ReduceLogSumExp",p,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:v?Array.from(n().subarray(Number(v)>>>0,Number(x)>>>0)):[]})},922095:p=>{u.kb("Where",p,void 0)},922148:(p,h,g)=>{u.kb("Transpose",p,{perm:h?Array.from(n().subarray(Number(h)>>>0,Number(g)>>>0)):[]})},922272:(p,h,g,v)=>{u.kb("DepthToSpace",p,{blocksize:h,mode:it(g),format:v?"NHWC":"NCHW"})},922405:(p,h,g,v)=>{u.kb("DepthToSpace",p,{blocksize:h,mode:it(g),format:v?"NHWC":"NCHW"})},922538:(p,h,g,v,x,A,K,ne,pe,he,ke,qe,Ze,F,We)=>{u.kb("ConvTranspose",p,{format:pe?"NHWC":"NCHW",autoPad:h,dilations:[g],group:v,kernelShape:[x],pads:[A,K],strides:[ne],wIsConst:()=>!!r()[he>>>0],outputPadding:ke?Array.from(n().subarray(Number(ke)>>>0,Number(qe)>>>0)):[],outputShape:Ze?Array.from(n().subarray(Number(Ze)>>>0,Number(F)>>>0)):[],activation:it(We)})},922971:(p,h,g,v,x,A,K,ne,pe,he,ke,qe,Ze,F)=>{u.kb("ConvTranspose",p,{format:ne?"NHWC":"NCHW",autoPad:h,dilations:Array.from(n().subarray(Number(g)>>>0,2+(Number(g)>>>0)>>>0)),group:v,kernelShape:Array.from(n().subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),pads:Array.from(n().subarray(Number(A)>>>0,4+(Number(A)>>>0)>>>0)),strides:Array.from(n().subarray(Number(K)>>>0,2+(Number(K)>>>0)>>>0)),wIsConst:()=>!!r()[pe>>>0],outputPadding:he?Array.from(n().subarray(Number(he)>>>0,Number(ke)>>>0)):[],outputShape:qe?Array.from(n().subarray(Number(qe)>>>0,Number(Ze)>>>0)):[],activation:it(F)})},923632:(p,h,g,v,x,A,K,ne,pe,he,ke,qe,Ze,F,We)=>{u.kb("ConvTranspose",p,{format:pe?"NHWC":"NCHW",autoPad:h,dilations:[g],group:v,kernelShape:[x],pads:[A,K],strides:[ne],wIsConst:()=>!!r()[he>>>0],outputPadding:ke?Array.from(n().subarray(Number(ke)>>>0,Number(qe)>>>0)):[],outputShape:Ze?Array.from(n().subarray(Number(Ze)>>>0,Number(F)>>>0)):[],activation:it(We)})},924065:(p,h,g,v,x,A,K,ne,pe,he,ke,qe,Ze,F)=>{u.kb("ConvTranspose",p,{format:ne?"NHWC":"NCHW",autoPad:h,dilations:Array.from(n().subarray(Number(g)>>>0,2+(Number(g)>>>0)>>>0)),group:v,kernelShape:Array.from(n().subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),pads:Array.from(n().subarray(Number(A)>>>0,4+(Number(A)>>>0)>>>0)),strides:Array.from(n().subarray(Number(K)>>>0,2+(Number(K)>>>0)>>>0)),wIsConst:()=>!!r()[pe>>>0],outputPadding:he?Array.from(n().subarray(Number(he)>>>0,Number(ke)>>>0)):[],outputShape:qe?Array.from(n().subarray(Number(qe)>>>0,Number(Ze)>>>0)):[],activation:it(F)})},924726:(p,h)=>{u.kb("GlobalAveragePool",p,{format:h?"NHWC":"NCHW"})},924817:(p,h,g,v,x,A,K,ne,pe,he,ke,qe,Ze,F)=>{u.kb("AveragePool",p,{format:F?"NHWC":"NCHW",auto_pad:h,ceil_mode:g,count_include_pad:v,storage_order:x,dilations:A?Array.from(n().subarray(Number(A)>>>0,Number(K)>>>0)):[],kernel_shape:ne?Array.from(n().subarray(Number(ne)>>>0,Number(pe)>>>0)):[],pads:he?Array.from(n().subarray(Number(he)>>>0,Number(ke)>>>0)):[],strides:qe?Array.from(n().subarray(Number(qe)>>>0,Number(Ze)>>>0)):[]})},925296:(p,h)=>{u.kb("GlobalAveragePool",p,{format:h?"NHWC":"NCHW"})},925387:(p,h,g,v,x,A,K,ne,pe,he,ke,qe,Ze,F)=>{u.kb("AveragePool",p,{format:F?"NHWC":"NCHW",auto_pad:h,ceil_mode:g,count_include_pad:v,storage_order:x,dilations:A?Array.from(n().subarray(Number(A)>>>0,Number(K)>>>0)):[],kernel_shape:ne?Array.from(n().subarray(Number(ne)>>>0,Number(pe)>>>0)):[],pads:he?Array.from(n().subarray(Number(he)>>>0,Number(ke)>>>0)):[],strides:qe?Array.from(n().subarray(Number(qe)>>>0,Number(Ze)>>>0)):[]})},925866:(p,h)=>{u.kb("GlobalMaxPool",p,{format:h?"NHWC":"NCHW"})},925953:(p,h,g,v,x,A,K,ne,pe,he,ke,qe,Ze,F)=>{u.kb("MaxPool",p,{format:F?"NHWC":"NCHW",auto_pad:h,ceil_mode:g,count_include_pad:v,storage_order:x,dilations:A?Array.from(n().subarray(Number(A)>>>0,Number(K)>>>0)):[],kernel_shape:ne?Array.from(n().subarray(Number(ne)>>>0,Number(pe)>>>0)):[],pads:he?Array.from(n().subarray(Number(he)>>>0,Number(ke)>>>0)):[],strides:qe?Array.from(n().subarray(Number(qe)>>>0,Number(Ze)>>>0)):[]})},926428:(p,h)=>{u.kb("GlobalMaxPool",p,{format:h?"NHWC":"NCHW"})},926515:(p,h,g,v,x,A,K,ne,pe,he,ke,qe,Ze,F)=>{u.kb("MaxPool",p,{format:F?"NHWC":"NCHW",auto_pad:h,ceil_mode:g,count_include_pad:v,storage_order:x,dilations:A?Array.from(n().subarray(Number(A)>>>0,Number(K)>>>0)):[],kernel_shape:ne?Array.from(n().subarray(Number(ne)>>>0,Number(pe)>>>0)):[],pads:he?Array.from(n().subarray(Number(he)>>>0,Number(ke)>>>0)):[],strides:qe?Array.from(n().subarray(Number(qe)>>>0,Number(Ze)>>>0)):[]})},926990:(p,h,g,v,x)=>{u.kb("Gemm",p,{alpha:h,beta:g,transA:v,transB:x})},927094:p=>{u.kb("MatMul",p,void 0)},927148:(p,h,g,v)=>{u.kb("ArgMax",p,{keepDims:!!h,selectLastIndex:!!g,axis:v})},927256:(p,h,g,v)=>{u.kb("ArgMin",p,{keepDims:!!h,selectLastIndex:!!g,axis:v})},927364:(p,h)=>{u.kb("Softmax",p,{axis:h})},927427:(p,h)=>{u.kb("Concat",p,{axis:h})},927487:(p,h,g,v,x)=>{u.kb("Split",p,{axis:h,numOutputs:g,splitSizes:v?Array.from(n().subarray(Number(v)>>>0,Number(x)>>>0)):[]})},927643:p=>{u.kb("Expand",p,void 0)},927697:(p,h)=>{u.kb("Gather",p,{axis:Number(h)})},927768:(p,h)=>{u.kb("GatherElements",p,{axis:Number(h)})},927847:(p,h)=>{u.kb("GatherND",p,{batch_dims:Number(h)})},927926:(p,h,g,v,x,A,K,ne,pe,he,ke)=>{u.kb("Resize",p,{antialias:h,axes:g?Array.from(n().subarray(Number(g)>>>0,Number(v)>>>0)):[],coordinateTransformMode:it(x),cubicCoeffA:A,excludeOutside:K,extrapolationValue:ne,keepAspectRatioPolicy:it(pe),mode:it(he),nearestMode:it(ke)})},928288:(p,h,g,v,x,A,K)=>{u.kb("Slice",p,{starts:h?Array.from(n().subarray(Number(h)>>>0,Number(g)>>>0)):[],ends:v?Array.from(n().subarray(Number(v)>>>0,Number(x)>>>0)):[],axes:A?Array.from(n().subarray(Number(A)>>>0,Number(K)>>>0)):[]})},928552:p=>{u.kb("Tile",p,void 0)},928604:(p,h,g)=>{u.kb("InstanceNormalization",p,{epsilon:h,format:g?"NHWC":"NCHW"})},928718:(p,h,g)=>{u.kb("InstanceNormalization",p,{epsilon:h,format:g?"NHWC":"NCHW"})},928832:p=>{u.kb("Range",p,void 0)},928885:(p,h)=>{u.kb("Einsum",p,{equation:it(h)})},928966:(p,h,g,v,x)=>{u.kb("Pad",p,{mode:h,value:g,pads:v?Array.from(n().subarray(Number(v)>>>0,Number(x)>>>0)):[]})},929109:(p,h,g,v,x,A)=>{u.kb("BatchNormalization",p,{epsilon:h,momentum:g,spatial:!!x,trainingMode:!!v,format:A?"NHWC":"NCHW"})},929278:(p,h,g,v,x,A)=>{u.kb("BatchNormalization",p,{epsilon:h,momentum:g,spatial:!!x,trainingMode:!!v,format:A?"NHWC":"NCHW"})},929447:(p,h,g)=>{u.kb("CumSum",p,{exclusive:Number(h),reverse:Number(g)})},929544:(p,h,g)=>{u.kb("DequantizeLinear",p,{axis:h,blockSize:g})},929634:(p,h,g,v,x)=>{u.kb("GridSample",p,{align_corners:h,mode:it(g),padding_mode:it(v),format:x?"NHWC":"NCHW"})},929804:(p,h,g,v,x)=>{u.kb("GridSample",p,{align_corners:h,mode:it(g),padding_mode:it(v),format:x?"NHWC":"NCHW"})},929974:(p,h,g,v,x,A,K,ne,pe)=>{u.kb("Attention",p,{numHeads:h,isUnidirectional:g,maskFilterValue:v,scale:x,doRotary:A,qkvHiddenSizes:K?Array.from(n().subarray(Number(ne)>>>0,Number(ne)+K>>>0)):[],pastPresentShareBuffer:!!pe})},930246:p=>{u.kb("BiasAdd",p,void 0)},930301:p=>{u.kb("BiasSplitGelu",p,void 0)},930362:p=>{u.kb("FastGelu",p,void 0)},930418:(p,h,g,v,x,A,K,ne,pe,he,ke,qe,Ze,F,We,dt)=>{u.kb("Conv",p,{format:qe?"NHWC":"NCHW",auto_pad:h,dilations:g?Array.from(n().subarray(Number(g)>>>0,Number(v)>>>0)):[],group:x,kernel_shape:A?Array.from(n().subarray(Number(A)>>>0,Number(K)>>>0)):[],pads:ne?Array.from(n().subarray(Number(ne)>>>0,Number(pe)>>>0)):[],strides:he?Array.from(n().subarray(Number(he)>>>0,Number(ke)>>>0)):[],w_is_const:()=>!!r()[Number(Ze)>>>0],activation:it(F),activation_params:We?Array.from(l().subarray(Number(We)>>>0,Number(dt)>>>0)):[]})},931002:p=>{u.kb("Gelu",p,void 0)},931054:(p,h,g,v,x,A,K,ne,pe)=>{u.kb("GroupQueryAttention",p,{numHeads:h,kvNumHeads:g,scale:v,softcap:x,doRotary:A,rotaryInterleaved:K,smoothSoftmax:ne,localWindowSize:pe})},931271:(p,h,g,v)=>{u.kb("LayerNormalization",p,{axis:h,epsilon:g,simplified:!!v})},931382:(p,h,g,v)=>{u.kb("LayerNormalization",p,{axis:h,epsilon:g,simplified:!!v})},931493:(p,h,g,v,x,A)=>{u.kb("MatMulNBits",p,{k:h,n:g,accuracyLevel:v,bits:x,blockSize:A})},931620:(p,h,g,v,x,A)=>{u.kb("MultiHeadAttention",p,{numHeads:h,isUnidirectional:g,maskFilterValue:v,scale:x,doRotary:A})},931779:(p,h)=>{u.kb("QuickGelu",p,{alpha:h})},931843:(p,h,g,v,x)=>{u.kb("RotaryEmbedding",p,{interleaved:!!h,numHeads:g,rotaryEmbeddingDim:v,scale:x})},931982:(p,h,g)=>{u.kb("SkipLayerNormalization",p,{epsilon:h,simplified:!!g})},932084:(p,h,g)=>{u.kb("SkipLayerNormalization",p,{epsilon:h,simplified:!!g})},932186:(p,h,g,v)=>{u.kb("GatherBlockQuantized",p,{gatherAxis:h,quantizeAxis:g,blockSize:v})},932307:p=>{u.$b(p)},932341:(p,h)=>u.cc(Number(p),Number(h),u.Gb.hc,u.Gb.errors)};function Re(p,h,g){return zs(async()=>{await u.Yb(Number(p),Number(h),Number(g))})}function tt(){return typeof wasmOffsetConverter<"u"}function st(p){this.name="ExitStatus",this.message=`Program terminated with exit(${p})`,this.status=p}var xt=p=>{p.terminate(),p.onmessage=()=>{}},ut=p=>{Ge.length==0&&(Dt(),Ht(Ge[0]));var h=Ge.pop();if(!h)return 6;Xe.push(h),at[p.Bb]=h,h.Bb=p.Bb;var g={cmd:"run",start_routine:p.ic,arg:p.Rb,pthread_ptr:p.Bb};return h.postMessage(g,p.nc),0},kt=0,Le=(p,h,...g)=>{for(var v=2*g.length,x=_i(),A=gi(8*v),K=A>>>3,ne=0;ne<g.length;ne++){var pe=g[ne];typeof pe=="bigint"?(G[K+2*ne]=1n,G[K+2*ne+1]=pe):(G[K+2*ne]=0n,d()[K+2*ne+1>>>0]=pe)}return p=eo(p,0,v,A,h),Ca(x),p};function He(p){if(w)return Le(0,1,p);if(N=p,!(0<kt)){for(var h of Xe)xt(h);for(h of Ge)xt(h);Ge=[],Xe=[],at=[],Ce=!0}T(0,new st(p))}function le(p){if(w)return Le(1,0,p);Oe(p)}var Oe=p=>{if(N=p,w)throw le(p),"unwind";He(p)},Ge=[],Xe=[],ht=[],at={},$t=p=>{var h=p.Bb;delete at[h],Ge.push(p),Xe.splice(Xe.indexOf(p),1),p.Bb=0,mi(h)};function Ot(){ht.forEach(p=>p())}var Ht=p=>new Promise(h=>{p.onmessage=x=>{var A=(x=x.data).cmd;if(x.targetThread&&x.targetThread!=Nr()){var K=at[x.targetThread];K?K.postMessage(x,x.transferList):ae(`Internal error! Worker sent a message "${A}" to target pthread ${x.targetThread}, but that thread no longer exists!`)}else A==="checkMailbox"?ya():A==="spawnThread"?ut(x):A==="cleanupThread"?$t(at[x.thread]):A==="killThread"?(x=x.thread,A=at[x],delete at[x],xt(A),mi(x),Xe.splice(Xe.indexOf(A),1),A.Bb=0):A==="cancelThread"?at[x.thread].postMessage({cmd:"cancel"}):A==="loaded"?(p.loaded=!0,h(p)):A==="alert"?alert(`Thread ${x.threadId}: ${x.text}`):x.target==="setimmediate"?p.postMessage(x):A==="callHandler"?u[x.handler](...x.args):A&&ae(`worker sent an unknown command ${A}`)},p.onerror=x=>{throw ae(`worker sent an error! ${x.filename}:${x.lineno}: ${x.message}`),x};var g,v=[];for(g of[])u.hasOwnProperty(g)&&v.push(g);p.postMessage({cmd:"load",handlers:v,wasmMemory:B,wasmModule:oe})});function Dt(){var p=new Worker(import.meta.url.startsWith("file:")?new URL(""+new URL("../assets/ort.bundle.min.D2-GKZ-g.mjs",import.meta.url).href,import.meta.url):new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});Ge.push(p)}var Tt=p=>{for(;0<p.length;)p.shift()(u)},Pt=()=>{var p=Nr(),h=o()[p+52>>>2>>>0];p=o()[p+56>>>2>>>0],ro(h,h-p),Ca(h)},Xt=(p,h)=>{kt=0,p=ao(p,h),0<kt?N=p:Ia(p)};class Ut{constructor(h){this.Kb=h-24}}function Vt(p,h,g){var v=new Ut(p>>>=0);throw h>>>=0,g>>>=0,o()[v.Kb+16>>>2>>>0]=0,o()[v.Kb+4>>>2>>>0]=h,o()[v.Kb+8>>>2>>>0]=g,p}function Wt(p,h,g,v){return w?Le(2,1,p,h,g,v):Yr(p,h,g,v)}function Yr(p,h,g,v){if(p>>>=0,h>>>=0,g>>>=0,v>>>=0,$===void 0)return ae("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var x=[];return w&&x.length===0?Wt(p,h,g,v):(p={ic:g,Bb:p,Rb:v,nc:x},w?(p.Nb="spawnThread",postMessage(p,x),0):ut(p))}var Xr=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,Jr=(p,h,g)=>{var v=(h>>>=0)+g;for(g=h;p[g]&&!(g>=v);)++g;if(16<g-h&&p.buffer&&Xr)return Xr.decode(p.buffer instanceof $?p.slice(h,g):p.subarray(h,g));for(v="";h<g;){var x=p[h++];if(128&x){var A=63&p[h++];if((224&x)==192)v+=String.fromCharCode((31&x)<<6|A);else{var K=63&p[h++];65536>(x=(240&x)==224?(15&x)<<12|A<<6|K:(7&x)<<18|A<<12|K<<6|63&p[h++])?v+=String.fromCharCode(x):(x-=65536,v+=String.fromCharCode(55296|x>>10,56320|1023&x))}}else v+=String.fromCharCode(x)}return v},it=(p,h)=>(p>>>=0)?Jr(a(),p,h):"";function ls(p,h,g){return w?Le(3,1,p,h,g):0}function us(p,h){if(w)return Le(4,1,p,h)}var ri=p=>{for(var h=0,g=0;g<p.length;++g){var v=p.charCodeAt(g);127>=v?h++:2047>=v?h+=2:55296<=v&&57343>=v?(h+=4,++g):h+=3}return h},ds=(p,h,g,v)=>{if(!(0<v))return 0;var x=g>>>=0;v=g+v-1;for(var A=0;A<p.length;++A){var K=p.charCodeAt(A);if(55296<=K&&57343>=K&&(K=65536+((1023&K)<<10)|1023&p.charCodeAt(++A)),127>=K){if(g>=v)break;h[g++>>>0]=K}else{if(2047>=K){if(g+1>=v)break;h[g++>>>0]=192|K>>6}else{if(65535>=K){if(g+2>=v)break;h[g++>>>0]=224|K>>12}else{if(g+3>=v)break;h[g++>>>0]=240|K>>18,h[g++>>>0]=128|K>>12&63}h[g++>>>0]=128|K>>6&63}h[g++>>>0]=128|63&K}}return h[g>>>0]=0,g-x},Dr=(p,h,g)=>ds(p,a(),h,g);function ps(p,h){if(w)return Le(5,1,p,h)}function cs(p,h,g){if(w)return Le(6,1,p,h,g)}function fs(p,h,g){return w?Le(7,1,p,h,g):0}function hs(p,h){if(w)return Le(8,1,p,h)}function ms(p,h,g){if(w)return Le(9,1,p,h,g)}function gs(p,h,g,v){if(w)return Le(10,1,p,h,g,v)}function _s(p,h,g,v){if(w)return Le(11,1,p,h,g,v)}function ys(p,h,g,v){if(w)return Le(12,1,p,h,g,v)}function bs(p){if(w)return Le(13,1,p)}function $s(p,h){if(w)return Le(14,1,p,h)}function vs(p,h,g){if(w)return Le(15,1,p,h,g)}var ws,cr,Jh=()=>{Me("")},Jt=p=>{for(var h="";a()[p>>>0];)h+=ws[a()[p++>>>0]];return h},ai={},ii={};function sr(p,h,g={}){if(!("argPackAdvance"in h))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function(v,x,A={}){var K=x.name;if(!v)throw new cr(`type "${K}" must have a positive integer typeid pointer`);if(ii.hasOwnProperty(v)){if(A.Tb)return;throw new cr(`Cannot register type '${K}' twice`)}ii[v]=x,ai.hasOwnProperty(v)&&(x=ai[v],delete ai[v],x.forEach(ne=>ne()))}(p,h,g)}var xs=(p,h,g)=>{switch(h){case 1:return g?v=>r()[v>>>0]:v=>a()[v>>>0];case 2:return g?v=>i()[v>>>1>>>0]:v=>s()[v>>>1>>>0];case 4:return g?v=>n()[v>>>2>>>0]:v=>o()[v>>>2>>>0];case 8:return g?v=>G[v>>>3]:v=>se[v>>>3];default:throw new TypeError(`invalid integer width (${h}): ${p}`)}};function em(p,h,g){g>>>=0,sr(p>>>=0,{name:h=Jt(h>>>0),fromWireType:v=>v,toWireType:function(v,x){if(typeof x!="bigint"&&typeof x!="number")throw x=x===null?"null":(v=typeof x)=="object"||v==="array"||v==="function"?x.toString():""+x,new TypeError(`Cannot convert "${x}" to ${this.name}`);return typeof x=="number"&&(x=BigInt(x)),x},argPackAdvance:fr,readValueFromPointer:xs(h,g,h.indexOf("u")==-1),Eb:null})}var fr=8;function tm(p,h,g,v){sr(p>>>=0,{name:h=Jt(h>>>0),fromWireType:function(x){return!!x},toWireType:function(x,A){return A?g:v},argPackAdvance:fr,readValueFromPointer:function(x){return this.fromWireType(a()[x>>>0])},Eb:null})}var ni=[],or=[];function si(p){9<(p>>>=0)&&--or[p+1]==0&&(or[p]=void 0,ni.push(p))}var Rt=p=>{if(!p)throw new cr("Cannot use deleted val. handle = "+p);return or[p]},Lt=p=>{switch(p){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let h=ni.pop()||or.length;return or[h]=p,or[h+1]=1,h}};function oi(p){return this.fromWireType(o()[p>>>2>>>0])}var rm={name:"emscripten::val",fromWireType:p=>{var h=Rt(p);return si(p),h},toWireType:(p,h)=>Lt(h),argPackAdvance:fr,readValueFromPointer:oi,Eb:null};function am(p){return sr(p>>>0,rm)}var im=(p,h)=>{switch(h){case 4:return function(g){return this.fromWireType(l()[g>>>2>>>0])};case 8:return function(g){return this.fromWireType(d()[g>>>3>>>0])};default:throw new TypeError(`invalid float width (${h}): ${p}`)}};function nm(p,h,g){g>>>=0,sr(p>>>=0,{name:h=Jt(h>>>0),fromWireType:v=>v,toWireType:(v,x)=>x,argPackAdvance:fr,readValueFromPointer:im(h,g),Eb:null})}function sm(p,h,g,v,x){if(p>>>=0,g>>>=0,h=Jt(h>>>0),x===-1&&(x=4294967295),x=ne=>ne,v===0){var A=32-8*g;x=ne=>ne<<A>>>A}var K=h.includes("unsigned")?function(ne,pe){return pe>>>0}:function(ne,pe){return pe};sr(p,{name:h,fromWireType:x,toWireType:K,argPackAdvance:fr,readValueFromPointer:xs(h,g,v!==0),Eb:null})}function om(p,h,g){function v(A){var K=o()[A>>>2>>>0];return A=o()[A+4>>>2>>>0],new x(r().buffer,A,K)}var x=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][h];sr(p>>>=0,{name:g=Jt(g>>>0),fromWireType:v,argPackAdvance:fr,readValueFromPointer:v},{Tb:!0})}function lm(p,h){p>>>=0;var g=(h=Jt(h>>>0))==="std::string";sr(p,{name:h,fromWireType:function(v){var x=o()[v>>>2>>>0],A=v+4;if(g)for(var K=A,ne=0;ne<=x;++ne){var pe=A+ne;if(ne==x||a()[pe>>>0]==0){if(K=it(K,pe-K),he===void 0)var he=K;else he+="\0",he+=K;K=pe+1}}else{for(he=Array(x),ne=0;ne<x;++ne)he[ne]=String.fromCharCode(a()[A+ne>>>0]);he=he.join("")}return tr(v),he},toWireType:function(v,x){x instanceof ArrayBuffer&&(x=new Uint8Array(x));var A=typeof x=="string";if(!(A||x instanceof Uint8Array||x instanceof Uint8ClampedArray||x instanceof Int8Array))throw new cr("Cannot pass non-string to std::string");var K=g&&A?ri(x):x.length,ne=Ta(4+K+1),pe=ne+4;if(o()[ne>>>2>>>0]=K,g&&A)Dr(x,pe,K+1);else if(A)for(A=0;A<K;++A){var he=x.charCodeAt(A);if(255<he)throw tr(pe),new cr("String has UTF-16 code units that do not fit in 8 bits");a()[pe+A>>>0]=he}else for(A=0;A<K;++A)a()[pe+A>>>0]=x[A];return v!==null&&v.push(tr,ne),ne},argPackAdvance:fr,readValueFromPointer:oi,Eb(v){tr(v)}})}var ks=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,um=(p,h)=>{for(var g=p>>1,v=g+h/2;!(g>=v)&&s()[g>>>0];)++g;if(32<(g<<=1)-p&&ks)return ks.decode(a().slice(p,g));for(g="",v=0;!(v>=h/2);++v){var x=i()[p+2*v>>>1>>>0];if(x==0)break;g+=String.fromCharCode(x)}return g},dm=(p,h,g)=>{if(g??(g=2147483647),2>g)return 0;var v=h;g=(g-=2)<2*p.length?g/2:p.length;for(var x=0;x<g;++x){var A=p.charCodeAt(x);i()[h>>>1>>>0]=A,h+=2}return i()[h>>>1>>>0]=0,h-v},pm=p=>2*p.length,cm=(p,h)=>{for(var g=0,v="";!(g>=h/4);){var x=n()[p+4*g>>>2>>>0];if(x==0)break;++g,65536<=x?(x-=65536,v+=String.fromCharCode(55296|x>>10,56320|1023&x)):v+=String.fromCharCode(x)}return v},fm=(p,h,g)=>{if(h>>>=0,g??(g=2147483647),4>g)return 0;var v=h;g=v+g-4;for(var x=0;x<p.length;++x){var A=p.charCodeAt(x);if(55296<=A&&57343>=A&&(A=65536+((1023&A)<<10)|1023&p.charCodeAt(++x)),n()[h>>>2>>>0]=A,(h+=4)+4>g)break}return n()[h>>>2>>>0]=0,h-v},hm=p=>{for(var h=0,g=0;g<p.length;++g){var v=p.charCodeAt(g);55296<=v&&57343>=v&&++g,h+=4}return h};function mm(p,h,g){if(p>>>=0,h>>>=0,g=Jt(g>>>=0),h===2)var v=um,x=dm,A=pm,K=ne=>s()[ne>>>1>>>0];else h===4&&(v=cm,x=fm,A=hm,K=ne=>o()[ne>>>2>>>0]);sr(p,{name:g,fromWireType:ne=>{for(var pe,he=o()[ne>>>2>>>0],ke=ne+4,qe=0;qe<=he;++qe){var Ze=ne+4+qe*h;qe!=he&&K(Ze)!=0||(ke=v(ke,Ze-ke),pe===void 0?pe=ke:(pe+="\0",pe+=ke),ke=Ze+h)}return tr(ne),pe},toWireType:(ne,pe)=>{if(typeof pe!="string")throw new cr(`Cannot pass non-string to C++ string type ${g}`);var he=A(pe),ke=Ta(4+he+h);return o()[ke>>>2>>>0]=he/h,x(pe,ke+4,he+h),ne!==null&&ne.push(tr,ke),ke},argPackAdvance:fr,readValueFromPointer:oi,Eb(ne){tr(ne)}})}function gm(p,h){sr(p>>>=0,{Ub:!0,name:h=Jt(h>>>0),argPackAdvance:0,fromWireType:()=>{},toWireType:()=>{}})}var _m=()=>1;function ym(p){hi(p>>>0,!y,1,!_,131072,!1),Ot()}var Ss=p=>{if(!Ce)try{if(p(),!(0<kt))try{w?Ia(N):Oe(N)}catch(h){h instanceof st||h=="unwind"||T(0,h)}}catch(h){h instanceof st||h=="unwind"||T(0,h)}};function li(p){p>>>=0,typeof Atomics.oc=="function"&&(Atomics.oc(n(),p>>>2,p).value.then(ya),p+=128,Atomics.store(n(),p>>>2,1))}var ya=()=>{var p=Nr();p&&(li(p),Ss(to))};function bm(p,h){(p>>>=0)==h>>>0?setTimeout(ya):w?postMessage({targetThread:p,cmd:"checkMailbox"}):(p=at[p])&&p.postMessage({cmd:"checkMailbox"})}var ui=[];function $m(p,h,g,v,x){for(h>>>=0,v/=2,ui.length=v,g=x>>>0>>>3,x=0;x<v;x++)ui[x]=G[g+2*x]?G[g+2*x+1]:d()[g+2*x+1>>>0];return(h?ve[h]:dg[p])(...ui)}function vm(p){p>>>=0,w?postMessage({cmd:"cleanupThread",thread:p}):$t(at[p])}function wm(p){}var ba=(p,h)=>{var g=ii[p];if(g===void 0)throw p=Ys(p),g=Jt(p),tr(p),new cr(`${h} has unknown type ${g}`);return g},Es=(p,h,g)=>{var v=[];return p=p.toWireType(v,g),v.length&&(o()[h>>>2>>>0]=Lt(v)),p};function xm(p,h,g){return h>>>=0,g>>>=0,p=Rt(p>>>0),h=ba(h,"emval::as"),Es(h,g,p)}function km(p,h){return h>>>=0,p=Rt(p>>>0),(h=ba(h,"emval::as")).toWireType(null,p)}var $a=p=>{try{p()}catch(h){Me(h)}},hr=0,er=null,Ts=0,va=[],Is={},Cs={},Sm=0,di=null,Em=[];function zs(p){return function(h){if(!Ce){if(hr===0){var g=!1,v=!1;h((x=0)=>{if(!Ce&&(Ts=x,g=!0,v)){hr=2,$a(()=>so(er)),typeof Browser<"u"&&Browser.Lb.Sb&&Browser.Lb.resume(),x=!1;try{var A=function(){var pe=n()[er+8>>>2>>>0];return pe=xe[Cs[pe]],--kt,pe()}()}catch(pe){A=pe,x=!0}var K=!1;if(!er){var ne=di;ne&&(di=null,(x?ne.reject:ne.resolve)(A),K=!0)}if(x&&!K)throw A}}),v=!0,g||(hr=1,er=function(){var x=Ta(65548),A=x+12;o()[x>>>2>>>0]=A,o()[x+4>>>2>>>0]=A+65536,A=va[0];var K=Is[A];return K===void 0&&(K=Sm++,Is[A]=K,Cs[K]=A),A=K,n()[x+8>>>2>>>0]=A,x}(),typeof Browser<"u"&&Browser.Lb.Sb&&Browser.Lb.pause(),$a(()=>io(er)))}else hr===2?(hr=0,$a(oo),tr(er),er=null,Em.forEach(Ss)):Me(`invalid state: ${hr}`);return Ts}}(h=>{p().then(h)})}function Tm(p){return p>>>=0,zs(()=>(p=Rt(p)).then(Lt))}var wa=[];function Im(p,h,g,v){return g>>>=0,v>>>=0,(p=wa[p>>>0])(null,h=Rt(h>>>0),g,v)}var Cm={},xa=p=>{var h=Cm[p];return h===void 0?Jt(p):h};function zm(p,h,g,v,x){return g>>>=0,v>>>=0,x>>>=0,(p=wa[p>>>0])(h=Rt(h>>>0),h[g=xa(g)],v,x)}var As=()=>typeof globalThis=="object"?globalThis:Function("return this")();function Am(p){return(p>>>=0)==0?Lt(As()):(p=xa(p),Lt(As()[p]))}var Om=p=>{var h=wa.length;return wa.push(p),h},Dm=(p,h)=>{for(var g=Array(p),v=0;v<p;++v)g[v]=ba(o()[h+4*v>>>2>>>0],"parameter "+v);return g},Os=(p,h)=>Object.defineProperty(h,"name",{value:p});function Rm(p,h,g){var v=(h=Dm(p,h>>>0)).shift();p--;var x=`return function (obj, func, destructorsRef, args) {
`,A=0,K=[];g===0&&K.push("obj");for(var ne=["retType"],pe=[v],he=0;he<p;++he)K.push("arg"+he),ne.push("argType"+he),pe.push(h[he]),x+=`  var arg${he} = argType${he}.readValueFromPointer(args${A?"+"+A:""});
`,A+=h[he].argPackAdvance;return x+=`  var rv = ${g===1?"new func":"func.call"}(${K.join(", ")});
`,v.Ub||(ne.push("emval_returnValue"),pe.push(Es),x+=`  return emval_returnValue(retType, destructorsRef, rv);
`),ne.push(x+`};
`),p=function(ke){var qe=Function;if(!(qe instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof qe} which is not a function`);var Ze=Os(qe.name||"unknownFunctionName",function(){});return Ze.prototype=qe.prototype,Ze=new Ze,(ke=qe.apply(Ze,ke))instanceof Object?ke:Ze}(ne)(...pe),g=`methodCaller<(${h.map(ke=>ke.name).join(", ")}) => ${v.name}>`,Om(Os(g,p))}function Nm(p){return p=xa(p>>>0),Lt(u[p])}function Bm(p,h){return h>>>=0,p=Rt(p>>>0),h=Rt(h),Lt(p[h])}function Mm(p){9<(p>>>=0)&&(or[p+1]+=1)}function Pm(){return Lt([])}function Um(p){p=Rt(p>>>0);for(var h=Array(p.length),g=0;g<p.length;g++)h[g]=p[g];return Lt(h)}function Vm(p){return Lt(xa(p>>>0))}function Wm(){return Lt({})}function Lm(p){for(var h=Rt(p>>>=0);h.length;){var g=h.pop();h.pop()(g)}si(p)}function qm(p,h,g){h>>>=0,g>>>=0,p=Rt(p>>>0),h=Rt(h),g=Rt(g),p[h]=g}function Hm(p,h){return h>>>=0,p=(p=ba(p>>>0,"_emval_take_value")).readValueFromPointer(h),Lt(p)}function Gm(p,h){p=-9007199254740992>p||9007199254740992<p?NaN:Number(p),h>>>=0,p=new Date(1e3*p),n()[h>>>2>>>0]=p.getUTCSeconds(),n()[h+4>>>2>>>0]=p.getUTCMinutes(),n()[h+8>>>2>>>0]=p.getUTCHours(),n()[h+12>>>2>>>0]=p.getUTCDate(),n()[h+16>>>2>>>0]=p.getUTCMonth(),n()[h+20>>>2>>>0]=p.getUTCFullYear()-1900,n()[h+24>>>2>>>0]=p.getUTCDay(),p=(p.getTime()-Date.UTC(p.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,n()[h+28>>>2>>>0]=p}var Rr=p=>p%4==0&&(p%100!=0||p%400==0),Ds=[0,31,60,91,121,152,182,213,244,274,305,335],Rs=[0,31,59,90,120,151,181,212,243,273,304,334];function Fm(p,h){p=-9007199254740992>p||9007199254740992<p?NaN:Number(p),h>>>=0,p=new Date(1e3*p),n()[h>>>2>>>0]=p.getSeconds(),n()[h+4>>>2>>>0]=p.getMinutes(),n()[h+8>>>2>>>0]=p.getHours(),n()[h+12>>>2>>>0]=p.getDate(),n()[h+16>>>2>>>0]=p.getMonth(),n()[h+20>>>2>>>0]=p.getFullYear()-1900,n()[h+24>>>2>>>0]=p.getDay();var g=(Rr(p.getFullYear())?Ds:Rs)[p.getMonth()]+p.getDate()-1|0;n()[h+28>>>2>>>0]=g,n()[h+36>>>2>>>0]=-60*p.getTimezoneOffset(),g=new Date(p.getFullYear(),6,1).getTimezoneOffset();var v=new Date(p.getFullYear(),0,1).getTimezoneOffset();p=0|(g!=v&&p.getTimezoneOffset()==Math.min(v,g)),n()[h+32>>>2>>>0]=p}function jm(p){p>>>=0;var h=new Date(n()[p+20>>>2>>>0]+1900,n()[p+16>>>2>>>0],n()[p+12>>>2>>>0],n()[p+8>>>2>>>0],n()[p+4>>>2>>>0],n()[p>>>2>>>0],0),g=n()[p+32>>>2>>>0],v=h.getTimezoneOffset(),x=new Date(h.getFullYear(),6,1).getTimezoneOffset(),A=new Date(h.getFullYear(),0,1).getTimezoneOffset(),K=Math.min(A,x);return 0>g?n()[p+32>>>2>>>0]=+(x!=A&&K==v):0<g!=(K==v)&&(x=Math.max(A,x),h.setTime(h.getTime()+6e4*((0<g?K:x)-v))),n()[p+24>>>2>>>0]=h.getDay(),g=(Rr(h.getFullYear())?Ds:Rs)[h.getMonth()]+h.getDate()-1|0,n()[p+28>>>2>>>0]=g,n()[p>>>2>>>0]=h.getSeconds(),n()[p+4>>>2>>>0]=h.getMinutes(),n()[p+8>>>2>>>0]=h.getHours(),n()[p+12>>>2>>>0]=h.getDate(),n()[p+16>>>2>>>0]=h.getMonth(),n()[p+20>>>2>>>0]=h.getYear(),p=h.getTime(),BigInt(isNaN(p)?-1:p/1e3)}function Ns(p,h,g,v,x,A,K){return w?Le(16,1,p,h,g,v,x,A,K):-52}function Bs(p,h,g,v,x,A){if(w)return Le(17,1,p,h,g,v,x,A)}function Km(p,h,g,v){p>>>=0,h>>>=0,g>>>=0,v>>>=0;var x=new Date().getFullYear(),A=new Date(x,0,1),K=new Date(x,6,1);x=A.getTimezoneOffset();var ne=K.getTimezoneOffset(),pe=Math.max(x,ne);o()[p>>>2>>>0]=60*pe,n()[h>>>2>>>0]=+(x!=ne),A=(p=he=>he.toLocaleTimeString(void 0,{hour12:!1,timeZoneName:"short"}).split(" ")[1])(A),K=p(K),ne<x?(Dr(A,g,17),Dr(K,v,17)):(Dr(A,v,17),Dr(K,g,17))}var pi=[],Ms=(p,h)=>{pi.length=0;for(var g;g=a()[p++>>>0];){var v=g!=105;h+=(v&=g!=112)&&h%8?4:0,pi.push(g==112?o()[h>>>2>>>0]:g==106?G[h>>>3]:g==105?n()[h>>>2>>>0]:d()[h>>>3>>>0]),h+=v?8:4}return pi};function Qm(p,h,g){return p>>>=0,h=Ms(h>>>0,g>>>0),ve[p](...h)}function Zm(p,h,g){return p>>>=0,h=Ms(h>>>0,g>>>0),ve[p](...h)}var Ym=()=>{},Xm=()=>Date.now();function Jm(p,h){return ae(it(p>>>0,h>>>0))}var Ps,eg=()=>{throw kt+=1,"unwind"};function tg(){return 4294901760}Ps=()=>performance.timeOrigin+performance.now();var rg=()=>navigator.hardwareConcurrency;function ag(){return Me("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function ig(p){p>>>=0;var h=a().length;if(p<=h||4294901760<p)return!1;for(var g=1;4>=g;g*=2){var v=h*(1+.2/g);v=Math.min(v,p+100663296);var x=Math;v=Math.max(p,v);e:{x=(x.min.call(x,4294901760,v+(65536-v%65536)%65536)-B.buffer.byteLength+65535)/65536;try{B.grow(x),we();var A=1;break e}catch{}A=void 0}if(A)return!0}return!1}var ka=()=>(Me("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),ea={},Us=p=>{p.forEach(h=>{ka()})};function ng(){var p=Error().stack.toString().split(`
`);return p[0]=="Error"&&p.shift(),Us(p),ea.Qb=ka(),ea.fc=p,ea.Qb}function sg(p,h,g){if(p>>>=0,h>>>=0,ea.Qb==p)var v=ea.fc;else(v=Error().stack.toString().split(`
`))[0]=="Error"&&v.shift(),Us(v);for(var x=3;v[x]&&ka()!=p;)++x;for(p=0;p<g&&v[p+x];++p)n()[h+4*p>>>2>>>0]=ka();return p}var ci,fi={},Vs=()=>{if(!ci){var p,h={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(p in fi)fi[p]===void 0?delete h[p]:h[p]=fi[p];var g=[];for(p in h)g.push(`${p}=${h[p]}`);ci=g}return ci};function Ws(p,h){if(w)return Le(18,1,p,h);p>>>=0,h>>>=0;var g=0;return Vs().forEach((v,x)=>{var A=h+g;for(x=o()[p+4*x>>>2>>>0]=A,A=0;A<v.length;++A)r()[x++>>>0]=v.charCodeAt(A);r()[x>>>0]=0,g+=v.length+1}),0}function Ls(p,h){if(w)return Le(19,1,p,h);p>>>=0,h>>>=0;var g=Vs();o()[p>>>2>>>0]=g.length;var v=0;return g.forEach(x=>v+=x.length+1),o()[h>>>2>>>0]=v,0}function qs(p){return w?Le(20,1,p):52}function Hs(p,h,g,v){return w?Le(21,1,p,h,g,v):52}function Gs(p,h,g,v){return w?Le(22,1,p,h,g,v):70}var og=[null,[],[]];function Fs(p,h,g,v){if(w)return Le(23,1,p,h,g,v);h>>>=0,g>>>=0,v>>>=0;for(var x=0,A=0;A<g;A++){var K=o()[h>>>2>>>0],ne=o()[h+4>>>2>>>0];h+=8;for(var pe=0;pe<ne;pe++){var he=a()[K+pe>>>0],ke=og[p];he===0||he===10?((p===1?re:ae)(Jr(ke,0)),ke.length=0):ke.push(he)}x+=ne}return o()[v>>>2>>>0]=x,0}var js=[31,29,31,30,31,30,31,31,30,31,30,31],Ks=[31,28,31,30,31,30,31,31,30,31,30,31],lg=(p,h)=>{r().set(p,h>>>0)};function Qs(p,h,g,v){function x(F,We,dt){for(F=typeof F=="number"?F.toString():F||"";F.length<We;)F=dt[0]+F;return F}function A(F,We){return x(F,We,"0")}function K(F,We){function dt(uo){return 0>uo?-1:0<uo?1:0}var vr;return(vr=dt(F.getFullYear()-We.getFullYear()))===0&&(vr=dt(F.getMonth()-We.getMonth()))===0&&(vr=dt(F.getDate()-We.getDate())),vr}function ne(F){switch(F.getDay()){case 0:return new Date(F.getFullYear()-1,11,29);case 1:return F;case 2:return new Date(F.getFullYear(),0,3);case 3:return new Date(F.getFullYear(),0,2);case 4:return new Date(F.getFullYear(),0,1);case 5:return new Date(F.getFullYear()-1,11,31);case 6:return new Date(F.getFullYear()-1,11,30)}}function pe(F){var We=F.Cb;for(F=new Date(new Date(F.Db+1900,0,1).getTime());0<We;){var dt=F.getMonth(),vr=(Rr(F.getFullYear())?js:Ks)[dt];if(!(We>vr-F.getDate())){F.setDate(F.getDate()+We);break}We-=vr-F.getDate()+1,F.setDate(1),11>dt?F.setMonth(dt+1):(F.setMonth(0),F.setFullYear(F.getFullYear()+1))}return dt=new Date(F.getFullYear()+1,0,4),We=ne(new Date(F.getFullYear(),0,4)),dt=ne(dt),0>=K(We,F)?0>=K(dt,F)?F.getFullYear()+1:F.getFullYear():F.getFullYear()-1}p>>>=0,h>>>=0,g>>>=0,v>>>=0;var he=o()[v+40>>>2>>>0];for(var ke in v={lc:n()[v>>>2>>>0],kc:n()[v+4>>>2>>>0],Ib:n()[v+8>>>2>>>0],Mb:n()[v+12>>>2>>>0],Jb:n()[v+16>>>2>>>0],Db:n()[v+20>>>2>>>0],vb:n()[v+24>>>2>>>0],Cb:n()[v+28>>>2>>>0],sc:n()[v+32>>>2>>>0],jc:n()[v+36>>>2>>>0],mc:he?it(he):""},g=it(g),he={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})g=g.replace(new RegExp(ke,"g"),he[ke]);var qe="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Ze="January February March April May June July August September October November December".split(" ");for(ke in he={"%a":F=>qe[F.vb].substring(0,3),"%A":F=>qe[F.vb],"%b":F=>Ze[F.Jb].substring(0,3),"%B":F=>Ze[F.Jb],"%C":F=>A((F.Db+1900)/100|0,2),"%d":F=>A(F.Mb,2),"%e":F=>x(F.Mb,2," "),"%g":F=>pe(F).toString().substring(2),"%G":pe,"%H":F=>A(F.Ib,2),"%I":F=>((F=F.Ib)==0?F=12:12<F&&(F-=12),A(F,2)),"%j":F=>{for(var We=0,dt=0;dt<=F.Jb-1;We+=(Rr(F.Db+1900)?js:Ks)[dt++]);return A(F.Mb+We,3)},"%m":F=>A(F.Jb+1,2),"%M":F=>A(F.kc,2),"%n":()=>`
`,"%p":F=>0<=F.Ib&&12>F.Ib?"AM":"PM","%S":F=>A(F.lc,2),"%t":()=>"	","%u":F=>F.vb||7,"%U":F=>A(Math.floor((F.Cb+7-F.vb)/7),2),"%V":F=>{var We=Math.floor((F.Cb+7-(F.vb+6)%7)/7);if(2>=(F.vb+371-F.Cb-2)%7&&We++,We)We==53&&((dt=(F.vb+371-F.Cb)%7)==4||dt==3&&Rr(F.Db)||(We=1));else{We=52;var dt=(F.vb+7-F.Cb-1)%7;(dt==4||dt==5&&Rr(F.Db%400-1))&&We++}return A(We,2)},"%w":F=>F.vb,"%W":F=>A(Math.floor((F.Cb+7-(F.vb+6)%7)/7),2),"%y":F=>(F.Db+1900).toString().substring(2),"%Y":F=>F.Db+1900,"%z":F=>{var We=0<=(F=F.jc);return F=Math.abs(F)/60,(We?"+":"-")+("0000"+(F/60*100+F%60)).slice(-4)},"%Z":F=>F.mc,"%%":()=>"%"},g=g.replace(/%%/g,"\0\0"),he)g.includes(ke)&&(g=g.replace(new RegExp(ke,"g"),he[ke](v)));return ke=function(F){var We=Array(ri(F)+1);return ds(F,We,0,We.length),We}(g=g.replace(/\0\0/g,"%")),ke.length>h?0:(lg(ke,p),ke.length-1)}function ug(p,h,g,v){return Qs(p>>>0,h>>>0,g>>>0,v>>>0)}w||function(){for(var p=u.numThreads-1;p--;)Dt();me.unshift(()=>{Be++,function(h){w?h():Promise.all(Ge.map(Ht)).then(h)}(()=>Et())})}();for(var Zs=Array(256),Sa=0;256>Sa;++Sa)Zs[Sa]=String.fromCharCode(Sa);ws=Zs,cr=u.BindingError=class extends Error{constructor(p){super(p),this.name="BindingError"}},u.InternalError=class extends Error{constructor(p){super(p),this.name="InternalError"}},or.push(0,1,void 0,1,null,1,!0,1,!1,1),u.count_emval_handles=()=>or.length/2-5-ni.length;var dg=[He,le,Wt,ls,us,ps,cs,fs,hs,ms,gs,_s,ys,bs,$s,vs,Ns,Bs,Ws,Ls,qs,Hs,Gs,Fs],xe=function(){function p(g,v){return xe=g.exports,xe=function(){var x=xe,A={};for(let[K,ne]of Object.entries(x))A[K]=typeof ne=="function"?(...pe)=>{va.push(K);try{return ne(...pe)}finally{Ce||(va.pop(),er&&hr===1&&va.length===0&&(hr=0,kt+=1,$a(no),typeof Fibers<"u"&&Fibers.tc()))}}:ne;return A}(),xe=function(){var x=xe,A=ne=>pe=>ne(pe)>>>0,K=ne=>()=>ne()>>>0;return(x=Object.assign({},x)).Da=A(x.Da),x.gb=K(x.gb),x.ib=A(x.ib),x.emscripten_main_runtime_thread_id=K(x.emscripten_main_runtime_thread_id),x.tb=A(x.tb),x.ub=K(x.ub),x}(),ht.push(xe.jb),Ue.unshift(xe.Ca),oe=v,Et(),xe}var h=bt();if(Be++,u.instantiateWasm)try{return u.instantiateWasm(h,p)}catch(g){ae(`Module.instantiateWasm callback failed with error: ${g}`),f(g)}return et||(et=u.locateFile?Ct("ort-wasm-simd-threaded.jsep.wasm")?"ort-wasm-simd-threaded.jsep.wasm":u.locateFile?u.locateFile("ort-wasm-simd-threaded.jsep.wasm",C):C+"ort-wasm-simd-threaded.jsep.wasm":new URL(""+new URL("../assets/ort-wasm-simd-threaded.jsep.Y7jqkEt_.wasm",import.meta.url).href,import.meta.url).href),function(g,v){var x=et;return R||typeof WebAssembly.instantiateStreaming!="function"||Ct(x)||rt(x)||typeof fetch!="function"?wt(x,g,v):fetch(x,{credentials:"same-origin"}).then(A=>WebAssembly.instantiateStreaming(A,g).then(v,function(K){return ae(`wasm streaming compile failed: ${K}`),ae("falling back to ArrayBuffer instantiation"),wt(x,g,v)}))}(h,function(g){p(g.instance,g.module)}).catch(f),{}}(),Ys=p=>(Ys=xe.Da)(p),Xs=()=>(Xs=xe.Ea)();u._OrtInit=(p,h)=>(u._OrtInit=xe.Fa)(p,h),u._OrtGetLastError=(p,h)=>(u._OrtGetLastError=xe.Ga)(p,h),u._OrtCreateSessionOptions=(p,h,g,v,x,A,K,ne,pe,he)=>(u._OrtCreateSessionOptions=xe.Ha)(p,h,g,v,x,A,K,ne,pe,he),u._OrtAppendExecutionProvider=(p,h)=>(u._OrtAppendExecutionProvider=xe.Ia)(p,h),u._OrtAddFreeDimensionOverride=(p,h,g)=>(u._OrtAddFreeDimensionOverride=xe.Ja)(p,h,g),u._OrtAddSessionConfigEntry=(p,h,g)=>(u._OrtAddSessionConfigEntry=xe.Ka)(p,h,g),u._OrtReleaseSessionOptions=p=>(u._OrtReleaseSessionOptions=xe.La)(p),u._OrtCreateSession=(p,h,g)=>(u._OrtCreateSession=xe.Ma)(p,h,g),u._OrtReleaseSession=p=>(u._OrtReleaseSession=xe.Na)(p),u._OrtGetInputOutputCount=(p,h,g)=>(u._OrtGetInputOutputCount=xe.Oa)(p,h,g),u._OrtGetInputName=(p,h)=>(u._OrtGetInputName=xe.Pa)(p,h),u._OrtGetOutputName=(p,h)=>(u._OrtGetOutputName=xe.Qa)(p,h),u._OrtFree=p=>(u._OrtFree=xe.Ra)(p),u._OrtCreateTensor=(p,h,g,v,x,A)=>(u._OrtCreateTensor=xe.Sa)(p,h,g,v,x,A),u._OrtGetTensorData=(p,h,g,v,x)=>(u._OrtGetTensorData=xe.Ta)(p,h,g,v,x),u._OrtReleaseTensor=p=>(u._OrtReleaseTensor=xe.Ua)(p),u._OrtCreateRunOptions=(p,h,g,v)=>(u._OrtCreateRunOptions=xe.Va)(p,h,g,v),u._OrtAddRunConfigEntry=(p,h,g)=>(u._OrtAddRunConfigEntry=xe.Wa)(p,h,g),u._OrtReleaseRunOptions=p=>(u._OrtReleaseRunOptions=xe.Xa)(p),u._OrtCreateBinding=p=>(u._OrtCreateBinding=xe.Ya)(p),u._OrtBindInput=(p,h,g)=>(u._OrtBindInput=xe.Za)(p,h,g),u._OrtBindOutput=(p,h,g,v)=>(u._OrtBindOutput=xe._a)(p,h,g,v),u._OrtClearBoundOutputs=p=>(u._OrtClearBoundOutputs=xe.$a)(p),u._OrtReleaseBinding=p=>(u._OrtReleaseBinding=xe.ab)(p),u._OrtRunWithBinding=(p,h,g,v,x)=>(u._OrtRunWithBinding=xe.bb)(p,h,g,v,x),u._OrtRun=(p,h,g,v,x,A,K,ne)=>(u._OrtRun=xe.cb)(p,h,g,v,x,A,K,ne),u._OrtEndProfiling=p=>(u._OrtEndProfiling=xe.db)(p),u._JsepOutput=(p,h,g)=>(u._JsepOutput=xe.eb)(p,h,g),u._JsepGetNodeName=p=>(u._JsepGetNodeName=xe.fb)(p);var Ea,Nr=()=>(Nr=xe.gb)(),tr=u._free=p=>(tr=u._free=xe.hb)(p),Ta=u._malloc=p=>(Ta=u._malloc=xe.ib)(p),hi=(p,h,g,v,x,A)=>(hi=xe.lb)(p,h,g,v,x,A),Js=()=>(Js=xe.mb)(),eo=(p,h,g,v,x)=>(eo=xe.nb)(p,h,g,v,x),mi=p=>(mi=xe.ob)(p),Ia=p=>(Ia=xe.pb)(p),to=()=>(to=xe.qb)(),ro=(p,h)=>(ro=xe.rb)(p,h),Ca=p=>(Ca=xe.sb)(p),gi=p=>(gi=xe.tb)(p),_i=()=>(_i=xe.ub)(),ao=u.dynCall_ii=(p,h)=>(ao=u.dynCall_ii=xe.wb)(p,h),io=p=>(io=xe.xb)(p),no=()=>(no=xe.yb)(),so=p=>(so=xe.zb)(p),oo=()=>(oo=xe.Ab)();function lo(){0<Be||(w?(c(u),w||Tt(Ue),startWorker(u)):(Tt(me),0<Be||Ea||(Ea=!0,u.calledRun=!0,Ce||(w||Tt(Ue),c(u),w||Tt(Ve)))))}return u.___start_em_js=932469,u.___stop_em_js=932715,u.stackSave=()=>_i(),u.stackRestore=p=>Ca(p),u.stackAlloc=p=>gi(p),u.setValue=function(p,h,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":r()[p>>>0]=h;break;case"i16":i()[p>>>1>>>0]=h;break;case"i32":n()[p>>>2>>>0]=h;break;case"i64":G[p>>>3]=BigInt(h);break;case"float":l()[p>>>2>>>0]=h;break;case"double":d()[p>>>3>>>0]=h;break;case"*":o()[p>>>2>>>0]=h;break;default:Me(`invalid type for setValue: ${g}`)}},u.getValue=function(p,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":return r()[p>>>0];case"i16":return i()[p>>>1>>>0];case"i32":return n()[p>>>2>>>0];case"i64":return G[p>>>3];case"float":return l()[p>>>2>>>0];case"double":return d()[p>>>3>>>0];case"*":return o()[p>>>2>>>0];default:Me(`invalid type for getValue: ${h}`)}},u.UTF8ToString=it,u.stringToUTF8=Dr,u.lengthBytesUTF8=ri,lt=function p(){Ea||lo(),Ea||(lt=p)},lo(),u.PTR_SIZE=4,m}),Up=Si,((e=globalThis.self)==null?void 0:e.name)==="em-pthread"&&Si()}),Ei,ho,Nt,Vp,Aa,mo,go,Ti,_o,Ii,Wp,Ci,Lp,Bn=ue(()=>{Nn(),Ei=typeof location>"u"?void 0:location.origin,ho=()=>{var e;return(e=import.meta.url)!=null&&e.startsWith("file:")?new URL(new URL(""+new URL("../assets/ort.bundle.min.D2-GKZ-g.mjs",import.meta.url).href,import.meta.url).href,Ei).href:import.meta.url},Nt=ho(),Vp=()=>{if(Nt&&!Nt.startsWith("blob:"))return Nt.substring(0,Nt.lastIndexOf("/")+1)},Aa=(e,t)=>{try{let r=t??Nt;return(r?new URL(e,r):new URL(e)).origin===Ei}catch{return!1}},mo=(e,t)=>{let r=t??Nt;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},go=(e,t)=>`${t??"./"}${e}`,Ti=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},_o=async e=>(await import(e)).default,Ii=(s_(),Ka(Bp)).default,Wp=async()=>{if(!Nt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Aa(Nt))return[void 0,Ii()];let e=await Ti(Nt);return[e,Ii(e)]},Ci=(o_(),Ka(Pp)).default,Lp=async(e,t,r)=>{if(!e&&!t&&Ci&&Nt&&Aa(Nt))return[void 0,Ci];{let a="ort-wasm-simd-threaded.jsep.mjs",i=e??mo(a,t),s=r&&i&&!Aa(i,t),n=s?await Ti(i):i??go(a,t);return[s?n:void 0,await _o(n)]}}}),zi,Oa,ra,Ai,yo,bo,Mn,mt,Ar=ue(()=>{Bn(),Oa=!1,ra=!1,Ai=!1,yo=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},bo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Mn=async e=>{if(Oa)return Promise.resolve();if(ra)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Ai)throw new Error("previous call to 'initializeWebAssembly()' failed.");ra=!0;let t=e.initTimeout,r=e.numThreads;if(!bo())throw new Error("WebAssembly SIMD is not supported in the current environment.");let a=yo();r>1&&!a&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let i=e.wasmPaths,s=typeof i=="string"?i:void 0,n=i==null?void 0:i.mjs,o=(n==null?void 0:n.href)??n,l=i==null?void 0:i.wasm,d=(l==null?void 0:l.href)??l,c=e.wasmBinary,[f,u]=await Lp(o,s,r>1),m=!1,_=[];if(t>0&&_.push(new Promise(y=>{setTimeout(()=>{m=!0,y()},t)})),_.push(new Promise((y,w)=>{let $={numThreads:r};if(c)$.wasmBinary=c;else if(d||s)$.locateFile=b=>d??s+b;else if(o&&o.indexOf("blob:")!==0)$.locateFile=b=>new URL(b,o).href;else if(f){let b=Vp();b&&($.locateFile=k=>b+k)}u($).then(b=>{ra=!1,Oa=!0,zi=b,y(),f&&URL.revokeObjectURL(f)},b=>{ra=!1,Ai=!0,w(b)})})),await Promise.race(_),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},mt=()=>{if(Oa&&zi)return zi;throw new Error("WebAssembly is not initialized yet.")}}),vt,Za,je,Pn=ue(()=>{Ar(),vt=(e,t)=>{let r=mt(),a=r.lengthBytesUTF8(e)+1,i=r._malloc(a);return r.stringToUTF8(e,i,a),t.push(i),i},Za=(e,t,r,a)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([i,s])=>{let n=t?t+i:i;if(typeof s=="object")Za(s,n+".",r,a);else if(typeof s=="string"||typeof s=="number")a(n,s.toString());else if(typeof s=="boolean")a(n,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},je=e=>{let t=mt(),r=t.stackSave();try{let a=t.PTR_SIZE,i=t.stackAlloc(2*a);t._OrtGetLastError(i,i+a);let s=Number(t.getValue(i,a===4?"i32":"i64")),n=t.getValue(i+a,"*"),o=n?t.UTF8ToString(n):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),qp,l_=ue(()=>{Ar(),Pn(),qp=e=>{let t=mt(),r=0,a=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let s=0;return(e==null?void 0:e.tag)!==void 0&&(s=vt(e.tag,a)),r=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,s),r===0&&je("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Za(e.extra,"",new WeakSet,(n,o)=>{let l=vt(n,a),d=vt(o,a);t._OrtAddRunConfigEntry(r,l,d)!==0&&je(`Can't set a run config entry: ${n} - ${o}.`)}),[r,a]}catch(s){throw r!==0&&t._OrtReleaseRunOptions(r),a.forEach(n=>t._free(n)),s}}}),$o,vo,wo,xo,Hp,u_=ue(()=>{Ar(),Pn(),$o=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},vo=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},wo=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},xo=(e,t,r)=>{for(let a of t){let i=typeof a=="string"?a:a.name;switch(i){case"webnn":if(i="WEBNN",typeof a!="string"){let n=a==null?void 0:a.deviceType;if(n){let o=vt("deviceType",r),l=vt(n,r);mt()._OrtAddSessionConfigEntry(e,o,l)!==0&&je(`Can't set a session config entry: 'deviceType' - ${n}.`)}}break;case"webgpu":if(i="JS",typeof a!="string"){let n=a;if(n!=null&&n.preferredLayout){if(n.preferredLayout!=="NCHW"&&n.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${n.preferredLayout}`);let o=vt("preferredLayout",r),l=vt(n.preferredLayout,r);mt()._OrtAddSessionConfigEntry(e,o,l)!==0&&je(`Can't set a session config entry: 'preferredLayout' - ${n.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${i}`)}let s=vt(i,r);mt()._OrtAppendExecutionProvider(e,s)!==0&&je(`Can't append execution provider: ${i}.`)}},Hp=e=>{let t=mt(),r=0,a=[],i=e||{};wo(i);try{let s=$o(i.graphOptimizationLevel??"all"),n=vo(i.executionMode??"sequential"),o=typeof i.logId=="string"?vt(i.logId,a):0,l=i.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log serverity level is not valid: ${l}`);let d=i.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof i.optimizedModelFilePath=="string"?vt(i.optimizedModelFilePath,a):0;if(r=t._OrtCreateSessionOptions(s,!!i.enableCpuMemArena,!!i.enableMemPattern,n,!!i.enableProfiling,0,o,l,d,c),r===0&&je("Can't create session options."),i.executionProviders&&xo(r,i.executionProviders,a),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);let f=vt("enableGraphCapture",a),u=vt(i.enableGraphCapture.toString(),a);t._OrtAddSessionConfigEntry(r,f,u)!==0&&je(`Can't set a session config entry: 'enableGraphCapture' - ${i.enableGraphCapture}.`)}if(i.freeDimensionOverrides)for(let[f,u]of Object.entries(i.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof u!="number"||!Number.isInteger(u)||u<0)throw new Error(`free dimension override value must be a non-negative integer: ${u}`);let m=vt(f,a);t._OrtAddFreeDimensionOverride(r,m,u)!==0&&je(`Can't set a free dimension override: ${f} - ${u}.`)}return i.extra!==void 0&&Za(i.extra,"",new WeakSet,(f,u)=>{let m=vt(f,a),_=vt(u,a);t._OrtAddSessionConfigEntry(r,m,_)!==0&&je(`Can't set a session config entry: ${f} - ${u}.`)}),[r,a]}catch(s){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&je("Can't release session options."),a.forEach(n=>t._free(n)),s}}}),pa,Tr,Pr,Un,Ya,Vn,Wn,yn,De=ue(()=>{pa=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Tr=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Pr=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],a=typeof t=="number"?t:t.reduce((i,s)=>i*s,1);return r>0?Math.ceil(a*r):void 0},Un=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Ya=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Vn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Wn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",yn=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Ln,Gp=ue(()=>{Nn(),Ln=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),a=r?parseInt(r,10):0;if(a<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),s;try{s=new ArrayBuffer(a)}catch(o){if(o instanceof RangeError){let l=Math.ceil(a/65536);s=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let n=0;for(;;){let{done:o,value:l}=await i.read();if(o)break;let d=l.byteLength;new Uint8Array(s,n,d).set(l),n+=d}return new Uint8Array(s,0,a)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),ko,So,Eo,To,qn,Io,Ye,pr=ue(()=>{De(),ko=["V","I","W","E","F"],So=(e,t)=>{`${ko[e]}${new Date().toISOString()}${t}`},qn=(e,t)=>{Eo=e,To=t},Io=(e,t)=>{let r=Ya(e),a=Ya(Eo);r>=a&&So(r,typeof t=="function"?t():t)},Ye=(...e)=>{To&&Io(...e)}}),Hn,Fp=ue(()=>{De(),Hn=(e,t)=>new(Un(t))(e)}),Gn=ue(()=>{}),Oi,Da,Ra,Co,zo,Di,bn,Ao,jp,d_=ue(()=>{pr(),Gn(),Oi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Da=[],Ra=e=>Math.ceil(Number(e)/16)*16,Co=e=>{for(let t=0;t<Da.length;t++){let r=Da[t];if(e<=r)return r}return Math.ceil(e/16)*16},zo=1,Di=()=>zo++,bn=async(e,t,r,a)=>{let i=Ra(r),s=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let n=e.getCommandEncoder();e.endComputePass(),n.copyBufferToBuffer(t,0,s,0,i),e.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(a){let l=a();return l.set(new Uint8Array(o,0,r)),l}else return new Uint8Array(o.slice(0,r))}finally{s.destroy()}},Ao=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Oi)Da.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,a=t.byteOffset,i=t.byteLength,s=Ra(i),n=this.storageCache.get(e);if(!n)throw new Error("gpu data for uploading does not exist");if(Number(n.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${n.originalSize}, data size=${i}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=o.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,a,i)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,n.gpuData.buffer,0,s),this.backend.device.queue.submit([d.finish()]),o.destroy(),Ye("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let a=this.storageCache.get(t);if(!a)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==a.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Ra(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,a.gpuData.buffer,0,i)}registerExternalBuffer(e,t,r){let a;if(r){if(a=r[0],e===r[1])return Ye("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, buffer is the same, skip.`),a;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else a=Di();return this.storageCache.set(a,{gpuData:{id:a,type:0,buffer:e},originalSize:t}),Ye("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, registered.`),a}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ye("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Co(e),a,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||s){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?a=o.pop():a=this.backend.device.createBuffer({size:r,usage:t}):a=this.backend.device.createBuffer({size:r,usage:t})}else a=this.backend.device.createBuffer({size:r,usage:t});let n={id:Di(),type:0,buffer:a};return this.storageCache.set(n.id,{gpuData:n,originalSize:Number(e)}),Ye("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${n.id}`),n}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ye("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await bn(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Oi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Ye("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},jp=(...e)=>new Ao(...e)}),Oo,Je,ct=ue(()=>{Oo=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Je=e=>new Oo(e)}),Do,Vr,q,Xa,Kp,Qp,Zp,Ne=ue(()=>{Do=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Vr=class{static calcShape(e,t,r=!1){let a=e.length,i=t.length;if(a===0)return t;if(i===0)return e;let s=Math.max(e.length,t.length),n=new Array(s);if(r){if(a<2||i<2)return;let o=Do.calcMatMulShape([e[a-2],e[a-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[n[s-2],n[s-1]]=o}for(let o=r?3:1;o<=s;o++){let l=a-o<0?1:e[a-o],d=i-o<0?1:t[i-o];if(l!==d&&l>1&&d>1)return;let c=Math.max(l,d);if(l&&d)n[s-o]=Math.max(l,d);else{if(c>1)return;n[s-o]=0}}return n}static isValidBroadcast(e,t){let r=e.length,a=t.length;if(r>a)return!1;for(let i=1;i<=r;i++)if(e[r-i]!==1&&e[r-i]!==t[a-i])return!1;return!0}},q=class qa{static size(t){return qa.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let a=t.length;if(a===0)return[];let i=new Array(a),s=a-1;for(;s>=0;){if(t[s]%r===0){i[s]=t[s]/r;break}if(r%t[s]!==0)throw new Error("cannot convert shape");i[s]=1,r/=t[s],s--}for(s--;s>=0;s--)i[s]=t[s];return i}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return qa.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return qa.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,a){let i=1;for(let s=r;s<a;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[s])}return i}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let a=new Array(r);a[r-1]=1,a[r-2]=t[r-1];for(let i=r-3;i>=0;--i)a[i]=a[i+1]*t[i+1];return a}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(a=>this.normalizeAxis(a,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(a=>t[a]):t.slice().reverse()}static padShape(t,r){let a=t.length;return t.map((i,s)=>i+r[s]+r[s+a])}static areEqual(t,r){return t.length!==r.length?!1:t.every((a,i)=>a===r[i])}},Xa=class ca{static adjustPoolAttributes(t,r,a,i,s,n){if(!t&&a.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=a.length?a.push(r[o+2]):a[o]=r[o+2];for(let o=0;o<a.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<a.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<a.length*2;o++)if(o<n.length){if(n[o]<0)throw new Error("pad should be greater than or equal to 1")}else n.push(0);for(let o=0;o<a.length;o++){if(a[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(n[o]>=a[o]||n[o+a.length]>=a[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,a,i,s,n,o){if(o){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)ca.adjustPadAndReturnShape(t[l+(n?1:2)],r[l],a[l],i[l],s,l,l+t.length-2,o)}}static computePoolOutputShape(t,r,a,i,s,n,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return ca.computeShapeHelper(t,r,l,a,i,s,n,o),l}static computeConvOutputShape(t,r,a,i,s,n,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return ca.computeShapeHelper(!1,t,l,a,i,s,n,o),l}static computeShapeHelper(t,r,a,i,s,n,o,l){if(t)for(let d=0;d<r.length-2;d++)a.push(1);else for(let d=0;d<r.length-2;d++)a.push(ca.adjustPadAndReturnShape(r[d+2],i[d],s[d],n[d],o,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,a,i,s,n,o,l){let d=a*(i-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return s[n]=0,s[o]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(a!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+i-t;return s[n]=Math.floor(l==="SAME_LOWER"?(c+1)/2:c/2),s[o]=c-s[n],Math.floor((t+c-i)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+s[n]+s[o]-d)/r+1)}},Kp=class{static getShapeOfGemmResult(e,t,r,a,i){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let s,n,o;t?(s=e[1],n=e[0]):(s=e[0],n=e[1]);let l=-1;if(a?(o=r[0],l=1):(o=r[1],l=0),r[l]!==n)throw new Error("dimension mismatch");if(s<=0||o<=0||n<=0)throw new Error("invalid shape specified");if(i&&!Vr.isValidBroadcast(i,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,n]}},Qp=-34028234663852886e22,Zp=34028234663852886e22}),Wr,Na,gt,St,ye,ot,$n,Ur,br,_e,aa,Y,ge,Yp,Fn,Ro,Xp,Pe=ue(()=>{De(),Ne(),Wr=64,Na=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},gt=(e,t=1)=>{let r=Na(e,t);return typeof r=="string"?r:r[0]},St=(e,t=1)=>{let r=Na(e,t);return typeof r=="string"?r:r[1]},ye=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:q.computeStrides(r)})}),t},ot=e=>e%4===0?4:e%2===0?2:1,$n=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Ur=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,br=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,_e=(e,t,r,a)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?a==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:a==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,aa=(e,t,r,a,i)=>{let s=typeof r=="number",n=s?r:r.length,o=[...new Array(n).keys()],l=n<2?"u32":n<=4?`vec${n}<u32>`:`array<u32, ${n}>`,d=Na(t,i),c=typeof d=="string"?d:d[1],f=typeof d=="string"?d:d[0],u={indices:l,value:c,storage:f,tensor:t},m=L=>typeof L=="string"?L:`${L}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=s?"uniforms.":"",w=`${y}${e}_shape`,$=`${y}${e}_strides`,b="";for(let L=0;L<n-1;L++)b+=`
    let dim${L} = current / ${_e($,L,n)};
    let rest${L} = current % ${_e($,L,n)};
    indices[${L}] = dim${L};
    current = rest${L};
    `;b+=`indices[${n-1}] = current;`;let k=n<2?"":`
  fn o2i_${e}(offset: u32) -> ${u.indices} {
    var indices: ${u.indices};
    var current = offset;
    ${b}
    return indices;
  }`,S=L=>(_.offsetToIndices=!0,n<2?L:`o2i_${e}(${L})`),E=[];if(n>=2)for(let L=n-1;L>=0;L--)E.push(`${_e($,L,n)} * (indices[${L}])`);let T=n<2?"":`
  fn i2o_${e}(indices: ${u.indices}) -> u32 {
    return ${E.join("+")};
  }`,C=L=>(_.indicesToOffset=!0,n<2?L:`i2o_${e}(${L})`),R=(...L)=>n===0?"0u":`${u.indices}(${L.map(m).join(",")})`,D=(L,ie)=>n<2?`${L}`:`${_e(L,ie,n)}`,H=(L,ie,X)=>n<2?`${L}=${X};`:`${_e(L,ie,n)}=${X};`,re={},ae=(L,ie)=>{_.broadcastedIndicesToOffset=!0;let X=`${ie.name}broadcastedIndicesTo${e}Offset`;if(X in re)return`${X}(${L})`;let W=[];for(let G=n-1;G>=0;G--){let se=ie.indicesGet("outputIndices",G+ie.rank-n);W.push(`${D($,G)} * (${se} % ${D(w,G)})`)}return re[X]=`fn ${X}(outputIndices: ${ie.type.indices}) -> u32 {
             return ${W.length>0?W.join("+"):"0u"};
           }`,`${X}(${L})`},j=(L,ie)=>(()=>{if(u.storage===u.value)return`${e}[${L}]=${ie};`;if(u.storage==="vec2<u32>"&&u.value==="i32")return`${e}[${L}]=vec2<u32>(u32(${ie}), select(0u, 0xFFFFFFFFu, ${ie} < 0));`;if(u.storage==="vec2<u32>"&&u.value==="u32")return`${e}[${L}]=vec2<u32>(u32(${ie}), 0u);`;if(u.storage==="u32"&&u.value==="vec4<bool>")return`${e}[${L}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${ie}));`;throw new Error(`not supported combination of storage type ${u.storage} and value type ${u.value} yet`)})(),ee=L=>(()=>{if(u.storage===u.value)return`${e}[${L}]`;if(u.storage==="vec2<u32>"&&u.value==="i32")return`i32(${e}[${L}].x)`;if(u.storage==="vec2<u32>"&&u.value==="u32")return`u32(${e}[${L}].x)`;if(u.storage==="u32"&&u.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${L}] & 0xFFu), bool(${e}[${L}] & 0xFF00u), bool(${e}[${L}] & 0xFF0000u), bool(${e}[${L}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${u.storage} and value type ${u.value} yet`)})(),B=n<2?"":`
  fn get_${e}ByIndices(indices: ${u.indices}) -> ${c} {
    return ${ee(`i2o_${e}(indices)`)};
  }`,oe=n<2?"":(()=>{let L=o.map(X=>`d${X}: u32`).join(", "),ie=o.map(X=>`d${X}`).join(", ");return`
  fn get_${e}(${L}) -> ${c} {
    return get_${e}ByIndices(${R(ie)});
  }`})(),N=(...L)=>{if(L.length!==n)throw new Error(`indices length must be ${n}`);let ie=L.map(m).join(",");return n===0?ee("0u"):n===1?ee(ie[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${ie})`)},U=L=>n<2?ee(L):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${L})`),Z=n<2?"":`
  fn set_${e}ByIndices(indices: ${u.indices}, value: ${c}) {
    ${j(`i2o_${e}(indices)`,"value")}
  }`,te=n<2?"":(()=>{let L=o.map(X=>`d${X}: u32`).join(", "),ie=o.map(X=>`d${X}`).join(", ");return`
  fn set_${e}(${L}, value: ${c}) {
    set_${e}ByIndices(${R(ie)}, value);
  }`})();return{impl:()=>{let L=[],ie=!1;return _.offsetToIndices&&(L.push(k),ie=!0),_.indicesToOffset&&(L.push(T),ie=!0),_.broadcastedIndicesToOffset&&(Object.values(re).forEach(X=>L.push(X)),ie=!0),_.set&&(L.push(te),ie=!0),_.setByIndices&&(L.push(Z),ie=!0),_.get&&(L.push(oe),ie=!0),_.getByIndices&&(L.push(B),ie=!0),!s&&ie&&L.unshift(`const ${w} = ${u.indices}(${r.join(",")});`,`const ${$} = ${u.indices}(${q.computeStrides(r).join(",")});`),L.join(`
`)},type:u,offsetToIndices:S,indicesToOffset:C,broadcastedIndicesToOffset:ae,indices:R,indicesGet:D,indicesSet:H,set:(...L)=>{if(L.length!==n+1)throw new Error(`indices length must be ${n}`);let ie=L[n];if(typeof ie!="string")throw new Error("value must be string");let X=L.slice(0,n).map(m).join(",");return n===0?j("0u",ie):n===1?j(X[0],ie):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${X}, ${ie})`)},setByOffset:j,setByIndices:(L,ie)=>n<2?j(L,ie):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${L}, ${ie});`),get:N,getByOffset:ee,getByIndices:U,usage:a,name:e,strides:$,shape:w,rank:n}},Y=(e,t,r,a=1)=>aa(e,t,r,"input",a),ge=(e,t,r,a=1)=>aa(e,t,r,"output",a),Yp=(e,t,r)=>aa(e,t,r,"atomicOutput",1),Fn=(e,t,r,a=1)=>aa(e,t,r,"internal",a),Ro=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Wr){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],a=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||a>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*a>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,n=i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*a}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${a})
  fn main(${s}) {
    ${n}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",a=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${a}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:a}of this.uniforms)if(a&&a>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(a/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(a/4)}>`);else{let i=a==null||a===1?r:`vec${a}<${r}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Xp=(e,t)=>new Ro(e,t)}),No,Ri,Bo,Mo,Po,Uo,Mt,Jp,ec,$r=ue(()=>{De(),Ne(),ct(),Pe(),No=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Ri=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Bo=(e,t)=>q.sortBasedOnPerm(e,Ri(e.length,t)),Mo=(e,t,r,a)=>{let i=`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let s=0;s<t;++s)i+=`a[${e[s]}]=i[${s}];`;return i+="return a;}"},Po=(e,t)=>{let r=[],a=[];for(let i=0;i<e.length;++i)e[i]!==1&&r.push(e[i]),e[t[i]]!==1&&a.push(t[i]);return{newShape:r,newPerm:a}},Uo=(e,t)=>{let r=0;for(let a=0;a<e.length;++a)if(t[e[a]]!==1){if(e[a]<r)return!1;r=e[a]}return!0},Mt=(e,t)=>{let r=e.dataType,a=e.dims.length,i=Ri(a,t),s=Bo(e.dims,i),n=e.dims,o=s,l=a<2||Uo(i,e.dims),d;if(l)return d=_=>{let y=Y("input",r,n,4),w=ge("output",r,o,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(y,w)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=q.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:d};let{newShape:c,newPerm:f}=Po(e.dims,i),u=q.areEqual(f,[2,3,1]),m=q.areEqual(f,[3,1,2]);if(c.length===2||u||m){n=u?[c[0],c[1]*c[2]]:m?[c[0]*c[1],c[2]]:c,o=[n[1],n[0]];let _=16;return d=y=>{let w=Y("a",r,n.length),$=ge("output",r,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(w,$)}
  var<workgroup> tile : array<array<${$.type.value}, ${_+1}>, ${_}>;
  ${y.mainStart([_,_,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${_} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${_}u + local_id.x;
    let input_row = workgroup_id_x * ${_}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${w.getByIndices(`${w.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${_}u + local_id.x;
    let output_row = workgroup_id_y * ${_}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${$.setByIndices(`${$.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=q.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/_),y:Math.ceil(o[0]/_)},programUniforms:[{type:12,data:y},...ye(n,o)]}},getShaderSource:d}}return d=_=>{let y=Y("a",r,n.length),w=ge("output",r,o.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(y,w)}

  ${Mo(i,a,y,w)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=q.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...ye(n,o)]}},getShaderSource:d}},Jp=(e,t)=>{No(e.inputs,t.perm),e.compute(Mt(e.inputs[0],t.perm))},ec=e=>Je({perm:e.perm})}),Vo,Wo,Lo,qo,Ho,Go,Fo,jo,Ko,Qo,Gt,tc,rc,ac,ic,nc,sc,oc,lc,uc,dc,p_=ue(()=>{De(),Ne(),Pe(),jn(),$r(),Vo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Wo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Lo={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},qo={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Ho=(e,t)=>{let r=[];for(let a=t-e;a<t;++a)r.push(a);return r},Go=(e,t)=>{let r=[],a=e.length;for(let s=0;s<a;s++)t.indexOf(s)===-1&&r.push(e[s]);let i=t.map(s=>e[s]);return[r,i]},Fo=(e,t)=>{let r=e.length+t.length,a=[],i=0;for(let s=0;s<r;s++)t.indexOf(s)===-1?a.push(e[i++]):a.push(1);return a},jo=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Ko=(e,t)=>{let r=[];if(!jo(e,t)){for(let a=0;a<t;++a)e.indexOf(a)===-1&&r.push(a);e.forEach(a=>r.push(a))}return r},Qo=(e,t,r,a,i,s,n)=>{let o=r[0].dims,l=q.size(s),d=q.size(n),c=Y("_A",r[0].dataType,o),f=ge("output",i,s),u=64;l===1&&(u=256);let m=`
          var<workgroup> aBestValues : array<f32, ${u}>;
       `,_=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(c,f)}
        ${m}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(u)}

          let outputIndex = global_idx / ${u};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Lo[a]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${u}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${Vo[a]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${u}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Wo[a]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${a==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${qo[a]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${u}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},Gt=(e,t,r,a)=>{let i=e.inputs.length===1?r:vn(e.inputs,r),s=i.axes;s.length===0&&!i.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((m,_)=>_));let n=q.normalizeAxes(s,e.inputs[0].dims.length),o=n,l=e.inputs[0],d=Ko(o,e.inputs[0].dims.length);d.length>0&&(l=e.compute(Mt(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=Ho(o.length,l.dims.length));let[c,f]=Go(l.dims,o),u=c;i.keepDims&&(u=Fo(c,n)),e.compute(Qo(t,i.cacheKey,[l],a,e.inputs[0].dataType,u,f),{inputs:[l]})},tc=(e,t)=>{Gt(e,"ReduceMeanShared",t,"mean")},rc=(e,t)=>{Gt(e,"ReduceL1Shared",t,"l1")},ac=(e,t)=>{Gt(e,"ReduceL2Shared",t,"l2")},ic=(e,t)=>{Gt(e,"ReduceLogSumExpShared",t,"logSumExp")},nc=(e,t)=>{Gt(e,"ReduceMaxShared",t,"max")},sc=(e,t)=>{Gt(e,"ReduceMinShared",t,"min")},oc=(e,t)=>{Gt(e,"ReduceProdShared",t,"prod")},lc=(e,t)=>{Gt(e,"ReduceSumShared",t,"sum")},uc=(e,t)=>{Gt(e,"ReduceSumSquareShared",t,"sumSquare")},dc=(e,t)=>{Gt(e,"ReduceLogSumShared",t,"logSum")}}),Ft,Zo,Ja,vn,jt,Yo,Xo,Jo,el,tl,rl,al,il,nl,sl,Kt,pc,cc,fc,hc,mc,gc,_c,yc,bc,$c,jn=ue(()=>{De(),Ne(),ct(),Pe(),p_(),Ft=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Zo=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Ja=(e,t,r,a,i,s,n=!1,o=!1)=>{let l=[],d=r[0].dims,c=d.length,f=q.normalizeAxes(i,c),u=!o&&f.length===0;d.forEach((y,w)=>{u||f.indexOf(w)>=0?n&&l.push(1):l.push(y)});let m=l.length,_=q.size(l);return{name:e,shaderCache:t,getShaderSource:y=>{let w=[],$=Y("_A",r[0].dataType,c),b=ge("output",s,m),k=a($,b,f),S=k[2];for(let E=0,T=0;E<c;E++)u||f.indexOf(E)>=0?(n&&T++,S=`for(var j${E}: u32 = 0; j${E} < ${d[E]}; j${E}++) {
                  ${k[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${$.indicesSet("input_indices",E,`j${E}`)}
                  ${S}
                }`):(w.push(`${$.indicesSet("input_indices",E,b.indicesGet("output_indices",T))};`),T++);return`

        ${y.registerUniform("output_size","u32").declareVariables($,b)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${$.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${w.join(`
`)}
          ${k[0]}       // init ops for reduce max/min
          ${k[1]}
          ${S}
          ${k[3]}
          ${k.length===4?b.setByOffset("global_idx","value"):k.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...ye(d,l)]})}},vn=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),Je({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},jt=(e,t,r,a)=>{let i=e.inputs,s=i.length===1?r:vn(i,r);e.compute(Ja(t,{hint:s.cacheKey,inputDependencies:["rank"]},[i[0]],s.noopWithEmptyAxes&&s.axes.length===0?Zo:a,s.axes,i[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},Yo=(e,t)=>{Ft(e.inputs),jt(e,"ReduceLogSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Xo=(e,t)=>{Ft(e.inputs),jt(e,"ReduceL1",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Jo=(e,t)=>{Ft(e.inputs),jt(e,"ReduceL2",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},el=(e,t)=>{Ft(e.inputs),jt(e,"ReduceLogSumExp",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},tl=(e,t)=>{Ft(e.inputs),jt(e,"ReduceMax",t,(r,a,i)=>{let s=[];for(let n=0;n<r.rank;n++)(i.indexOf(n)>=0||i.length===0)&&s.push(r.indicesSet("input_indices",n,0));return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},rl=(e,t)=>{Ft(e.inputs),jt(e,"ReduceMean",t,(r,a,i)=>{let s=1;for(let n=0;n<r.rank;n++)(i.indexOf(n)>=0||i.length===0)&&(s*=e.inputs[0].dims[n]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${a.type.value}(sum / ${s});`]})},al=(e,t)=>{Ft(e.inputs),jt(e,"ReduceMin",t,(r,a,i)=>{let s=[];for(let n=0;n<r.rank;n++)(i.indexOf(n)>=0||i.length===0)&&s.push(`input_indices[${n}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},il=(e,t)=>{Ft(e.inputs),jt(e,"ReduceProd",t,(r,a)=>[`var value = ${a.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},nl=(e,t)=>{Ft(e.inputs),jt(e,"ReduceSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},sl=(e,t)=>{Ft(e.inputs),jt(e,"ReduceSumSquare",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Kt=(e,t,r)=>{if(t.length===0)return r;let a=1,i=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?a*=e[s]:i*=e[s];return i<32&&a>1024},pc=(e,t)=>{Kt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?rl(e,t):tc(e,t)},cc=(e,t)=>{Kt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Xo(e,t):rc(e,t)},fc=(e,t)=>{Kt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Jo(e,t):ac(e,t)},hc=(e,t)=>{Kt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?el(e,t):ic(e,t)},mc=(e,t)=>{Kt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?tl(e,t):nc(e,t)},gc=(e,t)=>{Kt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?al(e,t):sc(e,t)},_c=(e,t)=>{Kt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?il(e,t):oc(e,t)},yc=(e,t)=>{Kt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?nl(e,t):lc(e,t)},bc=(e,t)=>{Kt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?sl(e,t):uc(e,t)},$c=(e,t)=>{Kt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Yo(e,t):dc(e,t)}}),Ni,vc,wc,wn,c_=ue(()=>{De(),ct(),jn(),Ni=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},vc=(e,t)=>{Ni(e.inputs);let r=(a,i,s)=>{let n=[];for(let o=0;o<a.rank;o++)(s.indexOf(o)>=0||s.length===0)&&n.push(`input_indices[${o}] = 0;`);return[`${n.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Ja("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},wc=(e,t)=>{Ni(e.inputs);let r=(a,i,s)=>{let n=[];for(let o=0;o<a.rank;o++)(s.indexOf(o)>=0||s.length===0)&&n.push(`input_indices[${o}] = 0;`);return[`${n.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Ja("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},wn=e=>Je(e)}),ol,Ba,ll,ul,dl,ga,pl,xc,Kn=ue(()=>{De(),Ne(),Gn(),Pe(),ol=(e,t)=>{let r=e[0],a=e[1],i=e[2],s=e[3],n=e[4],o=e[5];if(n&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],c=r.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(a.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(a.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==a.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=i.dims[0]/3,u=f,m=u;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let k of t.qkvHiddenSizes)if(k%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],u=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let _=d;if(f!==u)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==f+u+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(n){if(u!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(n.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(n.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(n.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(n.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(n.dims[4]!==u/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=n.dims[3])}let w=_+y,$=-1,b=0;if(s)throw new Error("Mask not supported");if(n)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:y,kvSequenceLength:_,totalSequenceLength:w,maxSequenceLength:$,inputHiddenSize:c,hiddenSize:f,vHiddenSize:m,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Ba=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,ll=(e,t,r,a,i,s,n,o)=>{let l=ot(n?1:s),d=64,c=s/l;c<d&&(d=32);let f=Math.ceil(s/l/d),u=[{type:12,data:t},{type:12,data:r},{type:12,data:a},{type:12,data:i},{type:12,data:c},{type:12,data:f}],m=gt(e.dataType,l),_=St(1,l),y=["type"];n&&y.push("type"),o&&y.push("type");let w=$=>{let b=ge("x",e.dataType,e.dims,l),k=[b],S=n?Y("seq_lens",n.dataType,n.dims):void 0;S&&k.push(S);let E=o?Y("total_sequence_length_input",o.dataType,o.dims):void 0;E&&k.push(E);let T=St(e.dataType),C=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${$.registerUniforms(C).declareVariables(...k)}
  ${$.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Ba(S,E,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${n?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${b.type.value}(${T}(1.0) / ${T}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${n?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${b.type.value}(${T}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${m};${l}`,inputDependencies:y},getShaderSource:w,getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(s/d),y:i,z:t*r},programUniforms:u})}},ul=(e,t,r,a,i,s,n,o,l)=>{let d=n+s.kvSequenceLength,c=[s.batchSize,s.numHeads,s.sequenceLength,d],f=e>1&&a,u=s.kvNumHeads?s.kvNumHeads:s.numHeads,m=f?[s.batchSize,u,d,s.headSize]:void 0,_=s.nReps?s.nReps:1,y=s.scale===0?1/Math.sqrt(s.headSize):s.scale,w=ot(s.headSize),$=s.headSize/w,b=12,k={x:Math.ceil(d/b),y:Math.ceil(s.sequenceLength/b),z:s.batchSize*s.numHeads},S=[{type:12,data:s.sequenceLength},{type:12,data:$},{type:12,data:d},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:y},{type:12,data:n},{type:12,data:s.kvSequenceLength},{type:12,data:_}],E=f&&a&&q.size(a.dims)>0,T=["type","type"];E&&T.push("type"),i&&T.push("type"),o&&T.push("type"),l&&T.push("type");let C=[{dims:c,dataType:t.dataType,gpuDataType:0}];f&&C.push({dims:m,dataType:t.dataType,gpuDataType:0});let R=D=>{let H=Y("q",t.dataType,t.dims,w),re=Y("key",r.dataType,r.dims,w),ae=[H,re];if(E){let Z=Y("past_key",a.dataType,a.dims,w);ae.push(Z)}i&&ae.push(Y("attention_bias",i.dataType,i.dims));let j=o?Y("seq_lens",o.dataType,o.dims):void 0;j&&ae.push(j);let ee=l?Y("total_sequence_length_input",l.dataType,l.dims):void 0;ee&&ae.push(ee);let B=ge("output",t.dataType,c),oe=[B];f&&oe.push(ge("present_key",t.dataType,m,w));let N=St(1,w),U=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${H.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${H.type.storage}, ${b*b}>;
  ${D.registerUniforms(U).declareVariables(...ae,...oe)}
  ${D.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Ba(j,ee,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${N}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${E&&f?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${f?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${N}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(w){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${w}`)}})()};
        output[outputIdx] = ${B.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${w};${i!==void 0};${a!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:C,dispatchGroup:k,programUniforms:S}),getShaderSource:R}},dl=(e,t,r,a,i,s,n=void 0,o=void 0)=>{let l=s+i.kvSequenceLength,d=i.nReps?i.nReps:1,c=i.vHiddenSize*d,f=e>1&&a,u=i.kvNumHeads?i.kvNumHeads:i.numHeads,m=f?[i.batchSize,u,l,i.headSize]:void 0,_=[i.batchSize,i.sequenceLength,c],y=12,w={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},$=[{type:12,data:i.sequenceLength},{type:12,data:l},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:c},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:d}],b=f&&a&&q.size(a.dims)>0,k=["type","type"];b&&k.push("type"),n&&k.push("type"),o&&k.push("type");let S=[{dims:_,dataType:t.dataType,gpuDataType:0}];f&&S.push({dims:m,dataType:t.dataType,gpuDataType:0});let E=T=>{let C=Y("probs",t.dataType,t.dims),R=Y("v",r.dataType,r.dims),D=[C,R];b&&D.push(Y("past_value",a.dataType,a.dims));let H=n?Y("seq_lens",n.dataType,n.dims):void 0;n&&D.push(H);let re=o?Y("total_sequence_length_input",o.dataType,o.dims):void 0;o&&D.push(re);let ae=[ge("output",t.dataType,_)];f&&ae.push(ge("present_value",t.dataType,m));let j=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${C.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${C.type.value}, ${y*y}>;
  ${T.registerUniforms(j).declareVariables(...D,...ae)}
  ${T.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Ba(H,re,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${b&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${C.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${b&&f?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${f?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${a!==void 0};${e}`,inputDependencies:k},getRunData:()=>({outputs:S,dispatchGroup:w,programUniforms:$}),getShaderSource:E}},ga=(e,t,r,a,i,s,n,o,l,d,c=void 0,f=void 0)=>{let u=Math.min(e.outputCount,1+(n?1:0)+(o?1:0)),m=u>1?d.pastSequenceLength:0,_=m+d.kvSequenceLength,y=l&&q.size(l.dims)>0?l:void 0,w=[t,r];u>1&&n&&q.size(n.dims)>0&&w.push(n),y&&w.push(y),c&&w.push(c),f&&w.push(f);let $=e.compute(ul(u,t,r,n,y,d,m,c,f),{inputs:w,outputs:u>1?[-1,1]:[-1]})[0];e.compute(ll($,d.batchSize,d.numHeads,m,d.sequenceLength,_,c,f),{inputs:c&&f?[$,c,f]:[$],outputs:[]});let b=[$,a];u>1&&o&&q.size(o.dims)>0&&b.push(o),c&&b.push(c),f&&b.push(f),e.compute(dl(u,$,a,o,d,m,c,f),{inputs:b,outputs:u>1?[0,2]:[0]})},pl=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],a=t.sequenceLength,i=t.inputHiddenSize,s=t.headSize,n=12,o={x:Math.ceil(t.headSize/n),y:Math.ceil(t.sequenceLength/n),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:a},{type:12,data:i},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=f=>{let u=ge("output_q",l[0].dataType,r),m=ge("output_k",l[0].dataType,r),_=ge("output_v",l[0].dataType,r),y=Y("input",l[0].dataType,l[0].dims),w=Y("weight",l[1].dataType,l[1].dims),$=Y("bias",l[2].dataType,l[2].dims),b=y.type.storage,k=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${n}u;
  var<workgroup> tileInput: array<${b}, ${n*n}>;
  var<workgroup> tileWeightQ: array<${b}, ${n*n}>;
  var<workgroup> tileWeightK: array<${b}, ${n*n}>;
  var<workgroup> tileWeightV: array<${b}, ${n*n}>;
  ${f.registerUniforms(k).declareVariables(y,w,$,u,m,_)}
  ${f.mainStart([n,n,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${b}(0);
    var valueK = ${b}(0);
    var valueV = ${b}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},xc=(e,t)=>{let r=ol(e.inputs,t),[a,i,s]=pl(e,r);return ga(e,a,i,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),cl,fl,hl,kc,f_=ue(()=>{Yt(),De(),Ne(),ct(),Pe(),cl=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(a,i,s)=>{let n=i.length;if(n!==a.length)throw new Error(`${s}: num dimensions != ${n}`);i.forEach((o,l)=>{if(o!==a[l])throw new Error(`${s}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let a=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,a,"Invalid input scale"),r(e[2].dims,a,"Invalid input B"),r(e[3].dims,a,"Invalid input mean"),r(e[4].dims,a,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},fl=(e,t)=>{let{epsilon:r,spatial:a,format:i}=t,s=e[0].dims,n=a?ot(s[s.length-1]):1,o=i==="NHWC"&&s.length>1?n:1,l=q.size(s)/n,d=a,c=d?s.length:s,f=Y("x",e[0].dataType,e[0].dims,n),u=Y("scale",e[1].dataType,e[1].dims,o),m=Y("bias",e[2].dataType,e[2].dims,o),_=Y("inputMean",e[3].dataType,e[3].dims,o),y=Y("inputVar",e[4].dataType,e[4].dims,o),w=ge("y",e[0].dataType,c,n),$=()=>{let k="";if(a)k=`let cOffset = ${s.length===1?"0u":i==="NHWC"?`outputIndices[${s.length-1}] / ${n}`:"outputIndices[1]"};`;else if(i==="NCHW")k=`
            ${w.indicesSet("outputIndices","0","0")}
            let cOffset = ${w.indicesToOffset("outputIndices")};`;else{k=`var cIndices = ${u.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let S=1;S<u.rank;S++)k+=`cIndices[${S}] = outputIndices[${S}];`;k+=`let cOffset = ${u.indicesToOffset("cIndices")};`}return k},b=k=>`
  const epsilon = ${r};
  ${k.registerUniform("outputSize","u32").declareVariables(f,u,m,_,y,w)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${w.offsetToIndices(`global_idx * ${n}`)};
    ${$()}
    let scale = ${u.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${w.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${a}_${n}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...ye(s)]:[{type:12,data:l}]})}},hl=e=>Je(e),kc=(e,t)=>{let{inputs:r,outputCount:a}=e,i=hl({...t,outputCount:a});if(nt.webgpu.validateInputContent&&cl(r,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(fl(r,i))}}),ml,gl,Sc,h_=ue(()=>{Ne(),Pe(),ml=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},gl=e=>{let t=e[0].dims,r=e[0].dims[2],a=q.size(t)/4,i=e[0].dataType,s=Y("input",i,t,4),n=Y("bias",i,[r],4),o=Y("residual",i,t,4),l=ge("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(s,n,o,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let value = ${s.getByOffset("global_idx")}
      + ${n.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},Sc=e=>{ml(e.inputs),e.compute(gl(e.inputs))}}),_l,Fe,Ec,Tc,Ic,Cc,zc,Ac,Oc,Dc,Rc,yl,Nc,Bc,Mc,Pc,fa,Uc,Ha,Vc,Wc,Lc,qc,Hc,Gc,Fc,jc,Kc,Qc,Zc,Yc,Xc,Jc,ef,tf,Bi,rf,xn,kn,af,nf,sf,bl,$l,of,Qn=ue(()=>{De(),Ne(),ct(),Pe(),_l=(e,t,r,a,i,s,n)=>{let o=Math.ceil(t/4),l="";typeof i=="string"?l=`${i}(a)`:l=i("a");let d=Y("inputData",r,[o],4),c=ge("outputData",a,[o],4),f=[{name:"vec_size",type:"u32"}];return n&&f.push(...n),`
      ${e.registerUniforms(f).declareVariables(d,c)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},Fe=(e,t,r,a,i,s=e.dataType,n,o)=>{let l=[{type:12,data:Math.ceil(q.size(e.dims)/4)}];return n&&l.push(...n),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:d=>_l(d,q.size(e.dims),e.dataType,s,r,a,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(q.size(d[0].dims)/64/4)},programUniforms:l})}},Ec=e=>{e.compute(Fe(e.inputs[0],"Abs","abs"))},Tc=e=>{e.compute(Fe(e.inputs[0],"Acos","acos"))},Ic=e=>{e.compute(Fe(e.inputs[0],"Acosh","acosh"))},Cc=e=>{e.compute(Fe(e.inputs[0],"Asin","asin"))},zc=e=>{e.compute(Fe(e.inputs[0],"Asinh","asinh"))},Ac=e=>{e.compute(Fe(e.inputs[0],"Atan","atan"))},Oc=e=>{e.compute(Fe(e.inputs[0],"Atanh","atanh"))},Dc=e=>Je(e),Rc=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Fe(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},yl=e=>{let t,r,a=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=a?e[1].getFloat32Array()[0]:-34028234663852886e22,r=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=a?e[1].getUint16Array()[0]:64511,r=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Je({min:t,max:r})},Nc=(e,t)=>{let r=t||yl(e.inputs),a=St(e.inputs[0].dataType);e.compute(Fe(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${a}>(uniforms.min), vec4<${a}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:a},{name:"max",type:a}]),{inputs:[0]})},Bc=e=>{e.compute(Fe(e.inputs[0],"Ceil","ceil"))},Mc=e=>{e.compute(Fe(e.inputs[0],"Cos","cos"))},Pc=e=>{e.compute(Fe(e.inputs[0],"Cosh","cosh"))},fa=e=>Je(e),Uc=(e,t)=>{let r=St(e.inputs[0].dataType);e.compute(Fe(e.inputs[0],"Elu",a=>`elu_vf32(${a})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Ha=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Vc=e=>{let t=St(e.inputs[0].dataType);e.compute(Fe(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Ha(t)))},Wc=e=>{e.compute(Fe(e.inputs[0],"Exp","exp"))},Lc=e=>{e.compute(Fe(e.inputs[0],"Floor","floor"))},qc=e=>{let t=St(e.inputs[0].dataType);e.compute(Fe(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Ha(t)))},Hc=(e,t)=>{let r=St(e.inputs[0].dataType);e.compute(Fe(e.inputs[0],"LeakyRelu",a=>`select(leaky_relu_alpha_ * ${a}, ${a}, ${a} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Gc=e=>{e.compute(Fe(e.inputs[0],"Not",t=>`!${t}`))},Fc=e=>{e.compute(Fe(e.inputs[0],"Neg",t=>`-${t}`))},jc=e=>{e.compute(Fe(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Kc=e=>{let t=St(e.inputs[0].dataType);e.compute(Fe(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Qc=e=>{e.compute(Fe(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Zc=e=>Je(e),Yc=(e,t)=>{let r=St(e.inputs[0].dataType);e.compute(Fe(e.inputs[0],"HardSigmoid",a=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${a} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Xc=e=>{e.compute(Fe(e.inputs[0],"Sin","sin"))},Jc=e=>{e.compute(Fe(e.inputs[0],"Sinh","sinh"))},ef=e=>{e.compute(Fe(e.inputs[0],"Sqrt","sqrt"))},tf=e=>{e.compute(Fe(e.inputs[0],"Tan","tan"))},Bi=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,rf=e=>{e.compute(Fe(e.inputs[0],"Tanh",Bi))},xn=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Bi("v")};
}
`,kn=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,af=e=>{let t=St(e.inputs[0].dataType);e.compute(Fe(e.inputs[0],"FastGelu",kn,xn(t),void 0,e.inputs[0].dataType))},nf=(e,t)=>{let r=St(e.inputs[0].dataType);return e.compute(Fe(e.inputs[0],"ThresholdedRelu",a=>`select(vec4<${r}>(0.0), ${a}, ${a} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},sf=e=>{e.compute(Fe(e.inputs[0],"Log","log"))},bl=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,$l=e=>`quick_gelu_impl(${e})`,of=(e,t)=>{let r=St(e.inputs[0].dataType);e.compute(Fe(e.inputs[0],"QuickGelu",$l,bl(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),vl,wl,lf,m_=ue(()=>{Ne(),Pe(),Qn(),vl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},wl=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=Y("input",e[0].dataType,e[0].dims,4),a=Y("bias",e[0].dataType,[e[0].dims[2]],4),i=ge("output",e[0].dataType,t,4),s=q.size(t)/4,n=gt(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,a,i)}

  ${Ha(n)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},lf=e=>{vl(e.inputs),e.compute(wl(e.inputs))}}),xl,kl,Qt,uf,df,pf,cf,ff,hf,mf,gf,_f,yf,g_=ue(()=>{De(),Ne(),Pe(),xl=(e,t,r,a,i,s,n,o,l,d,c,f)=>{let u,m;typeof o=="string"?u=m=(b,k)=>`${o}((${b}),(${k}))`:typeof o=="function"?u=m=o:(u=o.scalar,m=o.vector);let _=ge("outputData",c,a.length,4),y=Y("aData",l,t.length,4),w=Y("bData",d,r.length,4),$;if(i)if(s){let b=q.size(t)===1,k=q.size(r)===1,S=t.length>0&&t[t.length-1]%4===0,E=r.length>0&&r[r.length-1]%4===0;b||k?$=_.setByOffset("global_idx",m(b?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),k?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"))):$=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${w.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",m(n||S?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,n||E?w.getByOffset("offsetB / 4u"):`${w.type.value}(${w.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else $=_.setByOffset("global_idx",m(y.getByOffset("global_idx"),w.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(k,S,E="")=>{let T=`aData[indexA${S}][componentA${S}]`,C=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${_.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${y.broadcastedIndicesToOffset(`outputIndices${S}`,_)};
            let offsetB${S} = ${w.broadcastedIndicesToOffset(`outputIndices${S}`,_)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${k}[${S}] = ${E}(${u(T,C)});
          `};c===9?$=`
            var data = vec4<u32>(0);
            ${b("data",0,"u32")}
            ${b("data",1,"u32")}
            ${b("data",2,"u32")}
            ${b("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:$=`
            ${b("outputData[global_idx]",0)}
            ${b("outputData[global_idx]",1)}
            ${b("outputData[global_idx]",2)}
            ${b("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(y,w,_)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${$}
      }`},kl=(e,t,r,a,i,s,n=r.dataType)=>{let o=r.dims.map(y=>Number(y)??1),l=a.dims.map(y=>Number(y)??1),d=!q.areEqual(o,l),c=o,f=q.size(o),u=!1,m=!1,_=[d];if(d){let y=Vr.calcShape(o,l,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");c=y.slice(),f=q.size(c);let w=q.size(o)===1,$=q.size(l)===1,b=o.length>0&&o[o.length-1]%4===0,k=l.length>0&&l[l.length-1]%4===0;_.push(w),_.push($),_.push(b),_.push(k);let S=1;for(let E=1;E<c.length;E++){let T=o[o.length-E],C=l[l.length-E];if(T===C)S*=T;else break}S%4===0?(m=!0,u=!0):(w||$||b||k)&&(u=!0)}else u=!0;return _.push(u),{name:e,shaderCache:{hint:t+_.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>xl(y,o,l,c,u,d,m,i,r.dataType,a.dataType,n,s),getRunData:()=>({outputs:[{dims:c,dataType:n}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(q.size(c)/4)},...ye(o,l,c)]})}},Qt=(e,t,r,a,i,s)=>{e.compute(kl(t,i??"",e.inputs[0],e.inputs[1],r,a,s))},uf=e=>{Qt(e,"Add",(t,r)=>`${t}+${r}`)},df=e=>{Qt(e,"Div",(t,r)=>`${t}/${r}`)},pf=e=>{Qt(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},cf=e=>{Qt(e,"Mul",(t,r)=>`${t}*${r}`)},ff=e=>{let t=Y("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Qt(e,"Pow",{scalar:(r,a)=>`pow_custom(${r},${a})`,vector:(r,a)=>`pow_vector_custom(${r},${a})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},hf=e=>{Qt(e,"Sub",(t,r)=>`${t}-${r}`)},mf=e=>{Qt(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},gf=e=>{Qt(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},_f=e=>{Qt(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},yf=e=>{Qt(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Sl,El,Tl,Il,bf,$f,__=ue(()=>{De(),Ne(),ct(),Pe(),Sl=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,a=e[r],i=a.dataType,s=a.dims.length;e.forEach((n,o)=>{if(o!==r){if(n.dataType!==i)throw new Error("input tensors should be one type");if(n.dims.length!==s)throw new Error("input tensors should have the same shape");n.dims.forEach((l,d)=>{if(d!==t&&l!==a.dims[d])throw new Error("non concat dimensions must match")})}})},El=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Tl=(e,t)=>{let r=e.length,a=[];for(let i=0;i<r;++i){let s=t.setByOffset("global_idx",e[i].getByIndices("indices"));r===1?a.push(s):i===0?a.push(`if (inputIndex == ${i}u) { ${s} }`):i===r-1?a.push(`else { ${s} }`):a.push(`else if (inputIndex == ${i}) { ${s} }`)}return a.join(`
`)},Il=(e,t,r,a)=>{let i=q.size(r),s=new Array(e.length),n=new Array(e.length),o=0,l=[],d=[],c=[{type:12,data:i}];for(let y=0;y<e.length;++y)o+=e[y].dims[t],s[y]=o,d.push(e[y].dims.length),n[y]=Y(`input${y}`,a,d[y]),l.push("rank"),c.push({type:12,data:s[y]});for(let y=0;y<e.length;++y)c.push(...ye(e[y].dims));c.push(...ye(r));let f=ge("output",a,r.length),u=f.indicesGet("indices",t),m=Array.from(Array(s.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),_=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let w=0;w<e.length;w++)y.registerUniform(`sizeInConcatAxis${w}`,"u32");return y.declareVariables(...n,f)})()}

  ${El(s.length,m)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${u});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${m});
      ${u} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Tl(n,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:a}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:c}),getShaderSource:_}},bf=(e,t)=>{let r=e.inputs,a=r[0].dims,i=q.normalizeAxis(t.axis,a.length);Sl(r,i);let s=a.slice();s[i]=r.reduce((o,l)=>o+(l.dims.length>i?l.dims[i]:0),0);let n=r.filter(o=>q.size(o.dims)>0);e.compute(Il(n,i,s,r[0].dataType),{inputs:n})},$f=e=>Je({axis:e.axis})}),Ir,Cr,zr,Zn,Or=ue(()=>{De(),Ne(),Ir=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Cr=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},zr=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Zn=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,a]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:a}}else if(t==="Clip"){let[r,a]=(e==null?void 0:e.activation_params)||[Qp,Zp];return{activation:t,clipMax:a,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),_t,vf,Yn=ue(()=>{_t=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},vf=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),wf,y_=ue(()=>{wf=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),ma,Xn,Jn=ue(()=>{De(),Ne(),Pe(),Or(),ma=(e,t,r,a,i)=>{let s=a-r;return`
      ${Array.from({length:r}).map((n,o)=>`
      if (${_e(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,_e(i,o+s,a))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},Xn=(e,t,r,a,i=!1,s)=>{let n=e[0].dims,o=e[1].dims,l=n[n.length-2],d=o[o.length-1],c=n[n.length-1],f=ot(d),u=ot(c),m=ot(l),_=q.size(r)/f/m,y=e.length>2,w=a?a.slice(0,-2):r.slice(0,-2),$=[q.size(w),l,d],b=[{type:12,data:_},{type:12,data:l},{type:12,data:d},{type:12,data:c}];Cr(t,b),b.push(...ye(w,n,o)),y&&b.push(...ye(e[2].dims)),b.push(...ye($));let k=S=>{let E=Fn("batch_dims",e[0].dataType,w.length),T=Y("a",e[0].dataType,n.length,u),C=Y("b",e[1].dataType,o.length,f),R=ge("output",e[0].dataType,$.length,f),D=gt(R.type.tensor),H=Ir(t,R.type.value,D),re=[T,C],ae="";if(y){let B=i?f:1;re.push(Y("bias",e[2].dataType,e[2].dims.length,B)),ae=`${i?`value += bias[col / ${B}];`:`value += ${R.type.value}(bias[row + i]);`}`}let j=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];zr(t,j);let ee=()=>{let B=`var a_data: ${T.type.value};`;for(let oe=0;oe<u;oe++)B+=`
              let b_data${oe} = b[(b_offset + (k + ${oe}) * uniforms.N + col) / ${f}];`;for(let oe=0;oe<m;oe++){B+=`a_data = a[(a_offset + (row + ${oe}) * uniforms.K + k) / ${u}];`;for(let N=0;N<u;N++)B+=`
            values[${oe}] = fma(${C.type.value}(a_data${u===1?"":`[${N}]`}), b_data${N}, values[${oe}]);
`}return B};return`
  ${S.registerUniforms(j).registerInternalVariables(E).declareVariables(...re,R)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${T.type.indices};
    ${ma("a_indices",T,T.rank-2,E.rank,"batch_indices")}
    ${T.indicesSet("a_indices",T.rank-2,0)}
    ${T.indicesSet("a_indices",T.rank-1,0)}
    let a_offset = ${T.indicesToOffset("a_indices")};

    var b_indices: ${C.type.indices};
    ${ma("b_indices",C,C.rank-2,E.rank,"batch_indices")}
    ${C.indicesSet("b_indices",C.rank-2,0)}
    ${C.indicesSet("b_indices",C.rank-1,0)}
    let b_offset = ${C.indicesToOffset("b_indices")};
    var values: array<${R.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${u}) {
      ${ee()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${ae}
      ${H}
      let cur_indices = ${R.type.indices}(batch, row + i, col);
      let offset = ${R.indicesToOffset("cur_indices")};
      ${R.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${u};${m};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:b}),getShaderSource:k}}}),Cl,zl,Sn,Mi,Al,En,Ol,ei,es=ue(()=>{De(),Ne(),Pe(),Or(),Jn(),Yn(),Cl=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,zl=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Sn=(e,t,r="f32",a,i=!1,s=32,n=!1,o=32)=>{let l=t[1]*e[1],d=t[0]*e[0],c=i?l:s,f=i?s:l,u=c/t[0],m=s/t[1];if(!((i&&u===4&&e[1]===4||!i&&(u===3||u===4))&&c%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${u} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${u} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${u}<${r}>, ${c/u}>, ${f}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${s}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${u};
const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${n?"0":"i32(globalId.z)"};
  ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${n?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${n?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${m};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Cl(i,a)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${a?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${u===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${zl(i,u)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Mi=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Al=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",En=(e,t,r="f32",a,i=!1,s=32,n=!1,o=32,l=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],f=i?d:s,u=i?s:d;if(!(u%t[1]===0&&f%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${u} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let m=u/t[1],_=f/t[0],y=s/t[1],w=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${u}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${Mi(i,a)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${a?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${m};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${y};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Mi(i,a)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${a?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Al(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${f}>, ${u}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${s}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${n?"0":"i32(globalId.z)"};
    ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${n?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${n?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${w}
  }
`},Ol=(e,t,r,a,i=!1)=>{let[s,n,o,l]=a,d=gt(a[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${_t(e,d)} {
      var value = ${_t(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${n.type.indices};
        ${ma("aIndices",n,n.rank-2,s.rank,"batchIndices")}
        ${n.indicesSet("aIndices",n.rank-2,"u32(row)")}
        ${n.indicesSet("aIndices",n.rank-1,"u32(colIn)")}
        value = ${n.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${_t(e,d)} {
      var value = ${_t(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${ma("bIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${_t(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${_t(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},ei=(e,t,r,a,i=!1,s)=>{let n=e[0].dims,o=e[1].dims,l=n.slice(0,-2),d=o.slice(0,-2),c=a?a.slice(0,-2):r.slice(0,-2),f=q.size(c),u=n[n.length-2],m=n[n.length-1],_=o[o.length-1],y=m%4===0&&_%4===0,w=u<=8?[4,1,1]:[4,4,1],$=[8,8,1],b=[Math.ceil(_/$[0]/w[0]),Math.ceil(u/$[1]/w[1]),Math.ceil(f/$[2]/w[2])],k=y?4:1,S=[...l,u,m/k],E=S.length,T=[...d,m,_/k],C=T.length,R=[f,u,_/k],D=[{type:6,data:u},{type:6,data:_},{type:6,data:m}];Cr(t,D),D.push(...ye(c,S,T));let H=["rank","rank"],re=e.length>2;re&&(D.push(...ye(e[2].dims)),H.push("rank")),D.push(...ye(R));let ae=j=>{let ee=c.length,B=Fn("batchDims",e[0].dataType,ee,1),oe=gt(e[0].dataType),N=Y("a",e[0].dataType,E,k),U=Y("b",e[1].dataType,C,k),Z=ge("result",e[0].dataType,R.length,k),te=[N,U];if(re){let G=i?k:1;te.push(Y("bias",e[2].dataType,e[2].dims.length,G))}let L=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];zr(t,L);let ie=gt(Z.type.tensor),X=Ir(t,Z.type.value,ie),W=Ol(k,re,X,[B,N,U,Z],i);return`
  ${j.registerUniforms(L).registerInternalVariables(B).declareVariables(...te,Z)}
  ${W}
  ${y?Sn(w,$,oe,B):En(w,$,oe,B)}
                   `};return{name:"MatMul",shaderCache:{hint:`${w};${t.activation};${y};${i}`,inputDependencies:H},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:D}),getShaderSource:ae}}}),Dl,xf,b_=ue(()=>{De(),pr(),Pe(),Or(),Yn(),y_(),es(),Dl=(e,t,r,a,i=!1,s,n=4,o=4,l=4,d="f32")=>{let c=D=>{switch(D){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${D} is not supported.`)}},f=D=>{switch(D){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${D} is not supported.`)}},u=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,m=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",w=e?"row":"col",$=e?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${w} / outWidth;
    let outCol = ${w} % outWidth;

    let WRow = ${$} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${$} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${$} % inChannels;
    var resData = ${_t(n,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${y}) {
      ${u}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(n)}
    }
    return resData;`,k=e?t&&a?`
    let col = colIn * ${n};
    ${b}`:`
    let col = colIn * ${n};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${_t(n,d)}(0.0);`:a&&r?`
    let col = colIn * ${n};
    ${b}`:`
    let col = colIn * ${n};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${_t(n,d)}(0.0);`,S=e?a&&r?f(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(o)}
    }
    return ${_t(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(o)}
    }
    return ${_t(o,d)}(0.0);`,E=_t(l,d),T=_t(e?n:o,d),C=_t(e?o:n,d),R=Ir(s,E,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${T} {
      ${e?k:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?S:k}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${m}
      ${vf(i)}
      ${R}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},xf=(e,t,r,a,i,s,n,o,l)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],f=r[0],u=d?r[2]:r[3],m=d?r[1]:r[2],_=d?r[3]:r[1],y=d&&(c%4===0||c%3===0)&&_%4===0,w=d?_:u*m,$=d?u*m:_,b=[8,8,1],k=a<=8?[4,1,1]:[4,4,1],S=[Math.ceil(w/b[0]/k[0]),Math.ceil($/b[1]/k[1]),Math.ceil(f/b[2]/k[2])];Ye("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let E=y?d&&c%4!==0?3:4:1,T=b[1]*k[1],C=b[0]*k[0],R=Math.max(b[0]*E,b[1]),D=a%T===0,H=i%C===0,re=s%R===0,ae=y?[E,4,4]:[1,1,1],j=[{type:6,data:a},{type:6,data:i},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Cr(t,j),j.push(...ye(e[0].dims,e[1].dims));let ee=["rank","rank"];n&&(j.push(...ye(e[2].dims)),ee.push("rank")),j.push(...ye(r));let B=oe=>{let N=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];zr(t,N);let U=y?4:1,Z=gt(e[0].dataType),te=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${Z}>`:Z}) {
        result[flatIndex] = ${y?`vec4<${Z}>`:Z}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${Z}>`:Z}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,L=Y("x",e[0].dataType,e[0].dims.length,E===3?1:E),ie=Y("w",e[1].dataType,e[1].dims.length,U),X=[L,ie],W=ge("result",e[0].dataType,r.length,U);if(n){let G=Y("bias",e[2].dataType,e[2].dims.length,U);X.push(G),te+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${Z}>`:Z} {
          return bias[coords.${d?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${wf("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${oe.registerUniforms(N).declareVariables(...X,W)}
        ${te}
        ${Dl(d,D,H,re,n,t,ae[0],ae[1],ae[2],Z)}
        ${y?Sn(k,b,Z,void 0,!d,R):En(k,b,Z,void 0,!d,R,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${y};${D};${H};${re};${T};${C};${R}`,inputDependencies:ee},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:j}),getShaderSource:B}}}),Rl,Pi,ia,Nl,Ui,Bl,kf,Sf,$_=ue(()=>{De(),pr(),Ne(),Pe(),Or(),Yn(),Rl=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Pi=e=>typeof e=="number"?[e,e,e]:e,ia=(e,t)=>t<=1?e:e+(e-1)*(t-1),Nl=(e,t,r,a=1)=>{let i=ia(t,a);return Math.floor((e[0]*(r-1)-r+i)/2)},Ui=(e,t,r,a,i)=>{i==null&&(i=Nl(e,t[0],a[0]));let s=[0,0,0,r];for(let n=0;n<3;n++)e[n]+2*i>=t[n]&&(s[n]=Math.trunc((e[n]-t[n]+2*i)/a[n]+1));return s},Bl=(e,t,r,a,i,s,n,o,l,d)=>{let c,f,u,m;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=Ui([t,r,a,1],[o,l,d],1,[i,s,n],e);f=_[0],u=_[1],m=_[2]}else if(Array.isArray(e)){if(!e.every((y,w,$)=>y===$[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=Ui([t,r,a,1],[o,l,d],1,[i,s,n],e[0]);f=_[0],u=_[1],m=_[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/i),u=Math.ceil(r/s),m=Math.ceil(a/n);let _=(f-1)*i+o-t,y=(u-1)*s+l-r,w=(m-1)*n+d-a,$=Math.floor(_/2),b=_-$,k=Math.floor(y/2),S=y-k,E=Math.floor(w/2),T=w-E;c={top:k,bottom:S,left:E,right:T,front:$,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:f,outHeight:u,outWidth:m}},kf=(e,t,r,a,i,s=!1,n="channelsLast")=>{let o,l,d,c,f;if(n==="channelsLast")[o,l,d,c,f]=e;else if(n==="channelsFirst")[o,f,l,d,c]=e;else throw new Error(`Unknown dataFormat ${n}`);let[u,,m,_,y]=t,[w,$,b]=Pi(r),[k,S,E]=Pi(a),T=ia(m,k),C=ia(_,S),R=ia(y,E),{padInfo:D,outDepth:H,outHeight:re,outWidth:ae}=Bl(i,l,d,c,w,$,b,T,C,R),j=s?u*f:u,ee=[0,0,0,0,0];return n==="channelsFirst"?ee=[o,j,H,re,ae]:n==="channelsLast"&&(ee=[o,H,re,ae,j]),{batchSize:o,dataFormat:n,inDepth:l,inHeight:d,inWidth:c,inChannels:f,outDepth:H,outHeight:re,outWidth:ae,outChannels:j,padInfo:D,strideDepth:w,strideHeight:$,strideWidth:b,filterDepth:m,filterHeight:_,filterWidth:y,effectiveFilterDepth:T,effectiveFilterHeight:C,effectiveFilterWidth:R,dilationDepth:k,dilationHeight:S,dilationWidth:E,inShape:e,outShape:ee,filterShape:t}},Sf=(e,t,r,a,i,s)=>{let n=s==="channelsLast";n?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],l={x:r.map((w,$)=>$)},d=[Math.ceil(Rl(l.x.map(w=>r[w]))/o[0]),1,1];Ye("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let c=1,f=q.size(r),u=[{type:12,data:f},{type:12,data:a},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Cr(t,u),u.push(...ye(e[0].dims,e[1].dims));let m=["rank","rank"],_=e.length===3;_&&(u.push(...ye(e[2].dims)),m.push("rank")),u.push(...ye(r));let y=w=>{let $=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:a.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];zr(t,$);let b=1,k=gt(e[0].dataType),S=Y("x",e[0].dataType,e[0].dims.length,c),E=Y("W",e[1].dataType,e[1].dims.length,b),T=[S,E],C=ge("result",e[0].dataType,r.length,b),R="";if(_){let re=Y("bias",e[2].dataType,e[2].dims.length,b);T.push(re),R+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${k} {
          return bias[${n?_e("coords",4,5):_e("coords",1,5)}];
        }`}let D=_t(c,k),H=Ir(t,D,k);return`
            ${R}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${w.registerUniforms($).declareVariables(...T,C)}
          ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${C.offsetToIndices("global_idx")};
              let batch = ${_e("coords",0,S.rank)};
              let d2 = ${n?_e("coords",S.rank-1,S.rank):_e("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${n?_e("coords",1,S.rank):_e("coords",2,S.rank)},
              ${n?_e("coords",2,S.rank):_e("coords",3,S.rank)},
              ${n?_e("coords",3,S.rank):_e("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${n?_e("uniforms.x_shape",1,S.rank):_e("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${n?_e("uniforms.x_shape",2,S.rank):_e("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${n?_e("uniforms.x_shape",3,S.rank):_e("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${n?_e("uniforms.x_shape",4,S.rank):_e("uniforms.x_shape",1,S.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${n?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${n?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${n?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${n?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${_?"value = value + getBiasByOutputCoords(coords)":""};
              ${H}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${n};${c};${_}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:u}),getShaderSource:y}}}),Ef,Tf,v_=ue(()=>{De(),Ne(),Pe(),Or(),Ef=(e,t,r,a)=>{let i=e.length>2,s=i?"value += b[output_channel];":"",n=e[0].dims,o=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],c=d/t.group,f=l&&c>=4?ot(d):1,u=q.size(r)/f,m=[{type:12,data:u},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];Cr(t,m),m.push(...ye(n,[o[0],o[1],o[2],o[3]/f]));let _=i?["rank","rank","rank"]:["rank","rank"];m.push(...ye([r[0],r[1],r[2],r[3]/f]));let y=w=>{let $=ge("output",e[0].dataType,r.length,f),b=gt($.type.tensor),k=Ir(t,$.type.value,b),S=Y("x",e[0].dataType,n.length),E=Y("w",e[1].dataType,o.length,f),T=[S,E];i&&T.push(Y("b",e[2].dataType,e[2].dims,f));let C=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];zr(t,C);let R=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${S.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${E.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${S.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${w.registerUniforms(C).declareVariables(...T,$)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${$.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${$.type.value} = ${$.type.value}(0);
    ${R}
    ${s}
    ${k}
    ${$.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:y}},Tf=(e,t,r,a)=>{let i=e.length>2,s=ot(r[3]),n=ot(r[2]),o=q.size(r)/s/n,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],c=[r[0],r[1],r[2],r[3]/s],f=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Cr(t,f),f.push(...ye(l,d,c));let u=(n-1)*t.strides[1]+d[1],m=_=>{let y=ge("output",e[0].dataType,c.length,s),w=gt(y.type.tensor),$=Ir(t,y.type.value,w),b=Y("x",e[0].dataType,l.length,s),k=Y("w",e[1].dataType,d.length,s),S=[b,k];i&&S.push(Y("b",e[2].dataType,e[2].dims,s));let E=i?"value += b[output_channel];":"",T=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return zr(t,T),`
  ${_.registerUniforms(T).declareVariables(...S,y)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${n}u;
    let col = (index1 % width1) * ${n}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${b.type.value}, ${u}>;
    var values: array<${y.type.value}, ${n}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${u}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${b.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${b.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${k.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${n}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${n}u; i++) {
      var value = values[i];
      ${E}
      ${$}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${n};${u};${d[0]};${d[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:f}),getShaderSource:m}}}),Ml,Ma,Pl,Pa,Tn,Vi,Ul,Vl,In,w_=ue(()=>{Ne(),b_(),$_(),es(),v_(),Or(),Jn(),$r(),Ml=(e,t,r,a,i,s)=>{let n=e[0],o=e.slice(s?1:2,s?3:4),l=o.length,d=t[0],c=t.slice(2).map((u,m)=>u+(u-1)*(r[m]-1)),f=o.map((u,m)=>u+a[m]+a[m+l]).map((u,m)=>Math.floor((u-c[m]+i[m])/i[m]));return f.splice(0,0,n),f.splice(s?3:1,0,d),f},Ma=[2,3,1,0],Pl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[1]*t.group;if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Pa=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let s=2;s<t[1].dims.length;++s)r[s-2]===0&&(r[s-2]=t[1].dims[s]);let a=e.pads.slice();Xa.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,a,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:r,pads:a}),i},Tn=e=>{let t=Zn(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,s=e.group,n=e.kernel_shape,o=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:a,format:r,dilations:i,group:s,kernelShape:n,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Vi=(e,t,r,a)=>{let i=r.format==="NHWC",s=Ml(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,i);if(r.group!==1){let T=[t[0]];if(i){let C=e.kernelCustomData.wT??e.compute(Mt(t[1],Ma),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C),T.push(C)}else T.push(t[1]);t.length===3&&T.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(Tf(T,r,s,a),{inputs:T}):e.compute(Ef(T,r,s,a),{inputs:T});return}let n=t.length===3,o=t[0].dims[i?1:2],l=t[0].dims[i?2:3],d=t[0].dims[i?3:1],c=t[1].dims[2],f=t[1].dims[3],u=s[i?1:2],m=s[i?2:3],_=s[i?3:1],y=i&&c===o&&f===l&&r.pads[0]===0&&r.pads[1]===0;if(y||c===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let T=s[0],C,R,D,H=[];if(i){let j=e.kernelCustomData.wT??e.compute(Mt(t[1],Ma),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=j),y){let ee=o*l*d;C=t[0].reshape([1,T,ee]),R=j.reshape([1,ee,_]),D=[1,T,_]}else C=t[0].reshape([T,o*l,d]),R=j.reshape([1,d,_]),D=[T,u*m,_];H.push(C),H.push(R)}else C=t[0].reshape([T,d,o*l]),R=t[1].reshape([1,_,d]),D=[T,_,u*m],H.push(R),H.push(C);n&&H.push(t[2]);let re=D[2],ae=H[0].dims[H[0].dims.length-1];re<8&&ae<8?e.compute(Xn(H,r,s,D,i,a),{inputs:H}):e.compute(ei(H,r,s,D,i,a),{inputs:H});return}let w=!0,$=e.kernelCustomData.wT??e.compute(Mt(t[1],Ma),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=$);let b=[t[0],$];n&&b.push(t[2]);let k=i?u*m:_,S=i?_:u*m,E=c*f*d;e.compute(xf(b,r,s,k,S,E,n,w,a),{inputs:b})},Ul=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),n=[1].concat(t.dilations),o=[1].concat(t.kernelShape),l=Pa({...t,pads:i,strides:s,dilations:n,kernelShape:o},a);Vi(e,a,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Vl=(e,t,r)=>{let a=r.format==="NHWC"?"channelsLast":"channelsFirst",i=Pa(r,t),s=r.autoPad==="NOTSET"?r.pads:r.autoPad,n=kf(t[0].dims,t[1].dims,r.strides,r.dilations,s,!1,a);e.compute(Sf(t,i,n.outShape,[n.filterDepth,n.filterHeight,n.filterWidth],[n.padInfo.front,n.padInfo.top,n.padInfo.left],a))},In=(e,t)=>{if(Pl(e.inputs,t),e.inputs[0].dims.length===3)Ul(e,t);else if(e.inputs[0].dims.length===5)Vl(e,e.inputs,t);else{let r=Pa(t,e.inputs);Vi(e,e.inputs,r)}}}),If,x_=ue(()=>{De(),pr(),Ne(),Pe(),If=(e,t,r)=>{let a=e.length>2,i=t.outputShape,s=t.format==="NHWC",n=t.group,o=e[1].dims,l=o[2]/n,d=o[3],c=s?ot(l):1,f=s?ot(d):1,u=s?d===1?c:f:1,m=q.size(i)/f,_=[Math.ceil(m/64),1,1];Ye("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${_}`);let y=["rank","rank"],w=[t.strides[0],t.strides[1]],$=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],b=[t.dilations[0],t.dilations[1]],k=[$[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),$[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],S=[k[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),k[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],E=[{type:12,data:m},{type:12,data:w},{type:12,data:$},{type:12,data:b},{type:12,data:k},{type:6,data:S},{type:12,data:l},{type:12,data:d},...ye(e[0].dims,e[1].dims)];a&&(E.push(...ye(e[2].dims)),y.push("rank")),E.push(...ye(i));let T=C=>{let R=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:w.length},{name:"filter_dims",type:"u32",length:$.length},{name:"dilations",type:"u32",length:$.length},{name:"effective_filter_dims",type:"u32",length:k.length},{name:"pads",type:"i32",length:S.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],D=gt(e[0].dataType),H=s?1:2,re=s?2:3,ae=s?3:1,j=Y("W",e[1].dataType,e[1].dims.length,u),ee=Y("Dy",e[0].dataType,e[0].dims.length,c),B=[ee,j];a&&B.push(Y("bias",e[2].dataType,[i[ae]].length,f));let oe=ge("result",e[0].dataType,i.length,f),N=()=>{let Z="";if(c===1)Z+=`
        let w_offset = ${j.indicesToOffset(`${j.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${j.getByOffset(`w_offset / ${u}`)};
        dotProd = dotProd + xValue * wValue;`;else if(d===1)Z+=`
          let wValue = ${j.getByOffset(`${j.indicesToOffset(`${j.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${u}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let te=0;te<c;te++)Z+=`
            let wValue${te} = ${j.getByOffset(`${j.indicesToOffset(`${j.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${te}, wOutChannel)`)} / ${u}`)};
            dotProd = dotProd + xValue[${te}] * wValue${te};`;return Z},U=`
            let outputIndices = ${oe.offsetToIndices(`global_idx * ${f}`)};
            let batch = ${oe.indicesGet("outputIndices",0)};
            let d1 = ${oe.indicesGet("outputIndices",ae)};
            let r = ${oe.indicesGet("outputIndices",H)};
            let c = ${oe.indicesGet("outputIndices",re)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${oe.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${D}(dyRCorner) + ${D}(wR)) / ${D}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${D}(uniforms.Dy_shape[${H}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }

              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${D}(dyCCorner) + ${D}(wC)) / ${D}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${D}(uniforms.Dy_shape[${re}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${c}) {
                  let xValue = ${s?ee.getByOffset(`${ee.indicesToOffset(`${ee.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):ee.get("batch","inputChannel","idyR","idyC")};
                  ${N()}
                  inputChannel = inputChannel + ${c};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${a?` + bias[d1 / ${f}]`:""};
            ${oe.setByOffset("global_idx","value")};
          `;return`
    ${C.registerUniforms(R).declareVariables(...B,oe)}
      ${C.mainStart()}
      ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${U}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${u}${f}${d===1}`,inputDependencies:y},getRunData:()=>({dispatchGroup:{x:_[0],y:_[1],z:_[2]},outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],programUniforms:E}),getShaderSource:T}}}),Wl,Ll,ql,Wi,Cf,Hl,Li,Gl,zf,k_=ue(()=>{x_(),Or(),$r(),Wl=(e,t,r,a,i,s)=>(e-1)*t+r+(a-1)*i+1-s,Ll=(e,t,r,a,i)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(r[a]=s,r[i]=e-s):t==="SAME_LOWER"&&(r[a]=e-s,r[i]=s)},ql=(e,t,r,a,i,s,n,o,l,d)=>{let c=e.length-2,f=d.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let u=e[0],m=t[o?3:1]*i;for(let _=0,y=e.length-c-(o?1:0);_<c;++_,++y){let w=e[y],$=f?w*n[_]:d[_],b=Wl(w,n[_],s[_],t[y],r[_],$);Ll(b,a,s,_,_+c),f&&d.push(n[_]*(w-1)+l[_]+(t[y]-1)*r[_]+1-s[_]-s[_+c])}d.splice(0,0,u),d.splice(o?3:1,0,m)},Wi=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,u)=>f*u,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let a=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(a?3:1,0,t[1].dims[1]);let i=e.pads.slice(),s=e.outputShape.slice(),n=e.outputPadding.slice(),o=t[0].dims,l=e.dilations.slice();if(l.reduce((f,u)=>f+u,0)===0){let f=t[0].dims.length-2;l=new Array(f).fill(1)}let d=e.strides.slice();if(d.reduce((f,u)=>f+u,0)===0){let f=t[0].dims.length-2;d=new Array(f).fill(1)}ql(o,r,l,e.autoPad,e.group,i,d,a,n,s);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:i,outputPadding:n,outputShape:s,dilations:l,strides:d}),c},Cf=e=>{let t=Zn(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,s=e.group,n=e.kernelShape,o=e.pads,l=e.strides,d=e.wIsConst(),c=e.outputPadding,f=e.outputShape;return{autoPad:a,format:r,dilations:i,group:s,kernelShape:n,outputPadding:c,outputShape:f,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Hl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[0];if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((n,o)=>n+o,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((n,o)=>n+o,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((n,o)=>n+o,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((n,o)=>n+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Li=(e,t,r,a)=>{let i=e.kernelCustomData.wT??e.compute(Mt(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let s=[t[0],i];t.length===3&&s.push(t[2]),e.compute(If(s,r,a),{inputs:s})},Gl=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let n=t.strides;(n.length===0||n[0]===0)&&(n=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],n=[1].concat(n),s=[1].concat(s),i=[1].concat(i);let l=t.outputPadding;l=[0].concat(l);let d=Wi({...t,pads:o,strides:n,dilations:s,kernelShape:i,outputPadding:l},a);Li(e,a,d,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},zf=(e,t)=>{if(Hl(e.inputs,t),e.inputs[0].dims.length===3)Gl(e,t);else{let r=Wi(t,e.inputs);Li(e,e.inputs,r)}}}),Fl,Af,Of,S_=ue(()=>{De(),Ne(),ct(),Pe(),Fl=(e,t,r,a)=>{let i=q.size(t),s=t.length,n=Y("input",e,s),o=ge("output",e,s),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=q.normalizeAxis(l,s),c=f=>{let u=` i32(${n.indicesGet("inputIndices","uniforms.axis")}) `,m=_e("uniforms.input_shape","uniforms.axis",s),_=a.reverse?u+(a.exclusive?" + 1":""):"0",y=a.reverse?m:u+(a.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(n,o)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${n.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${n.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:a.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:d},...ye(t,t)]}),getShaderSource:c}},Af=(e,t)=>{let r=e.inputs[0].dims,a=e.inputs[0].dataType,i=e.inputs[1];e.compute(Fl(a,r,i,t),{inputs:[0]})},Of=e=>{let t=e.exclusive===1,r=e.reverse===1;return Je({exclusive:t,reverse:r})}}),jl,Kl,Ql,Df,Rf,E_=ue(()=>{De(),Ne(),ct(),Pe(),jl=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Kl=(e,t,r,a)=>{let i=[];i.push(`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)i.push(r.indicesSet("a",e[s],`i[${s}]`));return i.push("return a;}"),i.join(`
`)},Ql=(e,t)=>{let r,a,i,s,n,o,l=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";l?([r,a,i,s]=e.dims,n=c?[r,a,i,d,d,s/d**2]:[r,a,i,s/d**2,d,d],o=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,a,i,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],n=c?[r,d,d,s/d**2,a,i]:[r,s/d**2,d,d,a,i],o=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(n),u=f.dims.length,m=e.dataType,_=Y("a",m,u),y=ge("output",m,u),w=$=>`
  ${$.registerUniform("output_size","u32").declareVariables(_,y)}

  ${Kl(o,u,_,y)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:$=>{let b=l?[r,a*d,i*d,s/d**2]:[r,s/d**2,a*d,i*d],k=q.size(b),S=f.dims,E=q.sortBasedOnPerm(S,o);return{outputs:[{dims:b,dataType:$[0].dataType}],dispatchGroup:{x:Math.ceil(k/64)},programUniforms:[{type:12,data:k},...ye(S,E)]}},getShaderSource:w}},Df=(e,t)=>{jl(e.inputs),e.compute(Ql(e.inputs[0],t))},Rf=e=>Je({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Ua,na,qi,Zl,Yl,Xl,Jl,Hi,eu,Nf,Bf,T_=ue(()=>{De(),Ne(),ct(),Pe(),Ua="[a-zA-Z]|\\.\\.\\.",na="("+Ua+")+",qi="^"+na+"$",Zl="("+na+",)*"+na,Yl="^"+Zl+"$",Xl=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Jl=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,a]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Yl)))throw new Error("Invalid LHS term");if(r.split(",").forEach((s,n)=>{let o=e[n].dims.slice();if(!s.match(RegExp(qi)))throw new Error("Invalid LHS term");let l=this.processTerm(s,!0,o,n);this.lhs.push(l)}),a==="")a+=[...this.symbolToInfo.entries()].filter(([s,n])=>n.count===1||s==="...").map(([s])=>s).join("");else if(!a.match(RegExp(na)))throw new Error("Invalid RHS");(i=a.match(RegExp(Ua,"g")))==null||i.forEach(s=>{if(s==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(s);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(a,!1,this.outputDims)}addSymbol(e,t,r){let a=this.symbolToInfo.get(e);if(a!==void 0){if(a.dimValue!==t&&a.count!==1)throw new Error("Dimension mismatch");a.count++,a.inputIndices.push(r)}else a={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,a)}processTerm(e,t,r,a=-1){let i=r.length,s=!1,n=[],o=0;if(!e.match(RegExp(qi))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Ua,"g")),d=new Xl(a);return l==null||l.forEach((c,f)=>{if(c==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let u=i-l.length+1;if(u<0)throw new Error("Ellipsis out of bounds");if(n=r.slice(o,o+u),this.hasEllipsis){if(this.ellipsisDims.length!==n.length||this.ellipsisDims.toString()!==n.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=n;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<n.length;m++){let _=String.fromCharCode(48+m);d.addSymbol(_,f+m),this.addSymbol(_,r[o++],a)}}else d.addSymbol(c,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[o++],a)}),d}},Hi=e=>e+"_max",eu=(e,t,r,a)=>{let i=e.map(d=>d.length).map((d,c)=>Y(`input${c}`,t,d)),s=q.size(a),n=ge("output",t,a.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let c=[],f="var prod = 1.0;",u="var sum = 0.0;",m="sum += prod;",_=[],y=[],w=[],$=[],b=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((S,E)=>{var T;if(r.rhs.symbolToIndices.has(E)){let C=(T=r.rhs.symbolToIndices.get(E))==null?void 0:T[0];C!==void 0&&r.lhs.forEach((R,D)=>{if(S.inputIndices.includes(D)){let H=R.symbolToIndices.get(E);if(H===void 0)throw new Error("Invalid symbol error");H.forEach(re=>{c.push(`${i[D].indicesSet(`input${D}Indices`,re,n.indicesGet("outputIndices",C))}`)})}})}else r.lhs.forEach((C,R)=>{if(S.inputIndices.includes(R)){let D=C.symbolToIndices.get(E);if(D===void 0)throw new Error("Invalid symbol error");D.forEach(H=>{_.push(`${i[R].indicesSet(`input${R}Indices`,H,`${E}`)}`)}),$.push(`prod *= ${i[R].getByIndices(`input${R}Indices`)};`)}}),y.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${Hi(E)}; ${E}++) {`),w.push("}")});let k=b?[...c,`let sum = ${i.map((S,E)=>S.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...c,u,...y,..._,f,...$,m,...w];return`
            ${d.registerUniforms(o.map(S=>({name:`${Hi(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,n)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${n.offsetToIndices("global_idx")};
            ${i.map((S,E)=>`var input${E}Indices: ${i[E].type.indices};`).join(`
`)}
            ${k.join(`
`)};
            ${n.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(f=>r.symbolToInfo.has(f)).map(f=>{var u;return{type:12,data:((u=r.symbolToInfo.get(f))==null?void 0:u.dimValue)||0}});d.push({type:12,data:s});let c=e.map((f,u)=>[...ye(f)]).reduce((f,u)=>f.concat(u),d);return c.push(...ye(a)),{outputs:[{dims:a,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}},getShaderSource:l}},Nf=(e,t)=>{let r=new Jl(e.inputs,t.equation),a=r.outputDims,i=e.inputs.map((s,n)=>s.dims);e.compute(eu(i,e.inputs[0].dataType,r,a))},Bf=e=>{let t=e.equation.replace(/\s+/g,"");return Je({equation:t})}}),tu,Gi,ru,au,Mf,I_=ue(()=>{De(),Ne(),Pe(),tu=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=r.length<t.length?0:r.length-t.length,i=t.length<r.length?0:t.length-r.length;for(;a<r.length&&i<t.length;++a,++i)if(r[a]!==t[i]&&r[a]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Gi=(e,t)=>{let r=e.length-t.length,a=[];for(let i=0;i<r;++i)a.push(e[i]);for(let i=0;i<t.length;++i)a.push(t[i]===1?e[i+r]:t[i]);return a},ru=(e,t)=>e.length>t.length?Gi(e,t):Gi(t,e),au=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=ru(t,r),i=e[0].dataType,s=i===9||q.size(t)===1,n=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=s||a.length>0&&a[a.length-1]%4===0?4:1,l=Math.ceil(q.size(a)/o),d=f=>{let u=Y("input",i,t.length,n),m=ge("output",i,a.length,o),_;if(i===9){let y=(w,$,b="")=>`
          let outputIndices${$} = ${m.offsetToIndices(`outputOffset + ${$}u`)};
          let offset${$} = ${u.broadcastedIndicesToOffset(`outputIndices${$}`,m)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${w}[${$}] = ${b}(${u.getByOffset(`index${$}`)}[component${$}]);
        `;_=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${y("data",0,"u32")}
        ${y("data",1,"u32")}
        ${y("data",2,"u32")}
        ${y("data",3,"u32")}
        ${m.setByOffset("global_idx","data")}
      }`}else _=`
        let outputIndices = ${m.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${u.broadcastedIndicesToOffset("outputIndices",m)};
        let data = ${m.type.value}(${u.getByOffset(`inputOffset / ${n}`)});
        ${m.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(u,m)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},c=[{type:12,data:l},...ye(t,a)];return{name:"Expand",shaderCache:{hint:`${a.length};${n}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},Mf=e=>{tu(e.inputs),e.compute(au(e.inputs),{inputs:[0]})}}),iu,Pf,C_=ue(()=>{De(),Ne(),Pe(),Qn(),iu=e=>{let t=e[0].dataType,r=q.size(e[0].dims),a=q.size(e[1].dims),i=a%4===0,s=n=>{let o=Y("x",t,[1],4),l=Y("bias",t,[1],4),d=ge("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${l.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,u=i?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${n.registerUniforms(c).declareVariables(o,l,d)}

    ${xn(St(t))}

    ${n.mainStart(Wr)}
      ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${u}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",kn("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:n=>({outputs:[{dims:n[0].dims,dataType:n[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:a}],dispatchGroup:{x:Math.ceil(r/Wr/4)}})}},Pf=e=>{e.inputs.length<2||q.size(e.inputs[1].dims)===0?af(e):e.compute(iu(e.inputs))}}),nu,su,Uf,Vf,z_=ue(()=>{De(),Ne(),ct(),Pe(),nu=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},su=(e,t)=>{let r=e[0].dims,a=e[1].dims,i=r.length,s=q.normalizeAxis(t.axis,i),n=r.slice(0);n.splice(s,1,...a);let o=r[s],l=e[0].dataType===9?4:1,d=Math.ceil(q.size(n)/l),c=[{type:12,data:d},{type:6,data:o},{type:12,data:s},...ye(e[0].dims,e[1].dims,n)],f=u=>{let m=Y("data",e[0].dataType,e[0].dims.length,l),_=Y("inputIndices",e[1].dataType,e[1].dims.length),y=ge("output",e[0].dataType,n.length,l),w=b=>{let k=a.length,S=`var indicesIndices${b}  = ${_.type.indices}(0);`;for(let E=0;E<k;E++)S+=`${k>1?`indicesIndices${b}[${E}]`:`indicesIndices${b}`} = ${n.length>1?`outputIndices${b}[uniforms.axis + ${E}]`:`outputIndices${b}`};`;S+=`
          var idx${b} = ${_.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${m.type.indices};
        `;for(let E=0,T=0;E<i;E++)E===s?(S+=`${i>1?`dataIndices${b}[${E}]`:`dataIndices${b}`} = u32(idx${b});`,T+=k):(S+=`${i>1?`dataIndices${b}[${E}]`:`dataIndices${b}`} = ${n.length>1?`outputIndices${b}[${T}]`:`outputIndices${b}`};`,T++);return S},$;if(e[0].dataType===9){let b=(k,S,E="")=>`
          let outputIndices${S} = ${y.offsetToIndices(`outputOffset + ${S}u`)};
          ${w(S)};
          let offset${S} = ${m.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${k}[${S}] = ${E}(${m.getByOffset(`index${S}`)}[component${S}]);
        `;$=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${b("value",0,"u32")}
        ${b("value",1,"u32")}
        ${b("value",2,"u32")}
        ${b("value",3,"u32")}
        ${y.setByOffset("global_idx","value")}
      `}else $=`
      let outputIndices = ${y.offsetToIndices("global_idx")};
      ${w("")};
      let value = ${m.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${u.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,_,y)}
      ${u.mainStart()}
        ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${$}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:f}},Uf=e=>Je({axis:e.axis}),Vf=(e,t)=>{let r=e.inputs;nu(r),e.compute(su(e.inputs,t))}}),ou,Wf,Lf,A_=ue(()=>{De(),Ne(),Pe(),ou=(e,t,r,a,i,s,n,o,l)=>{let d=[{type:12,data:s},{type:12,data:a},{type:12,data:i},{type:12,data:r},{type:12,data:n},{type:12,data:o},{type:12,data:l}],c=[s];d.push(...ye(t.dims,c));let f=u=>{let m=Y("indices_data",t.dataType,t.dims.length),_=ge("input_slice_offsets_data",12,1,1),y=[m,_],w=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${u.registerUniforms(w).declareVariables(...y)}
  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},Wf=(e,t)=>{let r=e.inputs,a=r[0].dims,i=r[0].dataType,s=r[1].dims,n=s[s.length-1],o=q.sizeToDimension(s,s.length-1),l=q.sizeFromDimension(a,t.batchDims+n),d=q.sizeToDimension(a,t.batchDims),c=q.sizeFromDimension(a,t.batchDims),f=o/d,u=new Array(n),m=l;for(let S=0;S<n;++S)u[n-1-S]=m,m*=a[t.batchDims+n-1-S];let _=ou(e,r[1],u,t.batchDims,a,o,f,c,n),y=t.batchDims+n;if(y>a.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let w=s.slice(0,-1).concat(a.slice(y)),$=q.size(w),b=[{type:12,data:$},{type:12,data:l},...ye(r[0].dims,_.dims,w)],k=S=>{let E=Y("data",r[0].dataType,r[0].dims.length),T=Y("slice_offsets",12,_.dims.length),C=ge("output",r[0].dataType,w.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,T,C)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:w,dataType:i}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:b}),getShaderSource:k},{inputs:[r[0],_]})},Lf=e=>({batchDims:e.batch_dims,cacheKey:""})}),lu,uu,qf,Hf,O_=ue(()=>{De(),Ne(),ct(),Pe(),lu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=q.normalizeAxis(t.quantizeAxis,e[0].dims.length),a=t.blockSize,i=e[0],s=e[2],n=e.length===4?e[3]:void 0;if(s.dims.length!==i.dims.length||!i.dims.map((o,l)=>l===r?Math.ceil(o/a)===s.dims[l]:o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(n){if(n.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(n.dims.length!==s.dims.length||!n.dims.map((o,l)=>o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},uu=(e,t)=>{let r=e[0].dims,a=e[1].dims,i=r.length,s=q.normalizeAxis(t.gatherAxis,i),n=q.normalizeAxis(t.quantizeAxis,i),o=r.slice(0);o.splice(s,1,...a);let l=q.size(o),d=e[2].dataType,c=e[0].dataType===22,f=[{type:12,data:l},{type:12,data:n},{type:12,data:s},{type:12,data:t.blockSize},...ye(...e.map((m,_)=>m.dims),o)],u=m=>{let _=Y("data",e[0].dataType,e[0].dims.length),y=Y("inputIndices",e[1].dataType,e[1].dims.length),w=Y("scales",e[2].dataType,e[2].dims.length),$=e.length>3?Y("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=ge("output",d,o.length),k=[_,y,w];$&&k.push($);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${m.registerUniforms(S).declareVariables(...k,b)}
        ${m.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${y.type.indices}(0);
        ${a.length>1?`
          for (var i: u32 = 0; i < ${a.length}; i++) {
            let index = ${b.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${y.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${b.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${b.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${y.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[s]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${a.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${w.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${w.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${w.getByIndices("scale_indices")};
        ${$?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${$.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${$.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${St(d)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,_)=>_!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,_)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:u}},qf=(e,t)=>{let r=e.inputs;lu(r,t),e.compute(uu(e.inputs,t))},Hf=e=>Je({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),du,pu,Gf,Ff,D_=ue(()=>{De(),Ne(),ct(),Pe(),du=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},pu=(e,t)=>{let r=e[0].dims,a=e[0].dataType,i=r.length,s=e[1].dims,n=e[1].dataType,o=q.normalizeAxis(t.axis,i),l=r[o],d=s.slice(0),c=q.size(d),f=Y("input",a,i),u=Y("indicesInput",n,s.length),m=ge("output",a,d.length),_=[{type:12,data:c},{type:6,data:l},{type:12,data:o}];return _.push(...ye(r,s,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:_}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,u,m)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${m.offsetToIndices("global_idx")};

      var idx = ${u.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${m.setByOffset("global_idx","value")};
  }`}},Gf=e=>Je({axis:e.axis}),Ff=(e,t)=>{let r=e.inputs;du(r),e.compute(pu(e.inputs,t))}}),cu,fu,jf,Kf,R_=ue(()=>{De(),Ne(),Pe(),cu=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},fu=(e,t)=>{let r=e[0].dims.slice(),a=e[1].dims.slice(),[i,s,n]=Kp.getShapeOfGemmResult(r,t.transA,a,t.transB,e.length===3?e[2].dims:void 0),o=[i,s];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(s/l),c=Math.ceil(i/l),f=!0,u=q.size(o),m=[{type:12,data:f?d:u},{type:12,data:i},{type:12,data:s},{type:12,data:n},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(m.push(...ye(e[2].dims)),_.push("rank")),m.push(...ye(o));let y=$=>{let b="";t.transA&&t.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let k=t.alpha===1?"":"value *= uniforms.alpha;",S=Y("a",e[0].dataType,e[0].dims),E=Y("b",e[1].dataType,e[1].dims),T=S.type.value,C=null,R=[S,E];e.length===3&&(C=Y("c",e[2].dataType,e[2].dims.length),R.push(C));let D=ge("output",e[0].dataType,o.length);R.push(D);let H=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${$.registerUniforms(H).declareVariables(...R)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${T}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${k}
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",D)}; value += ${T}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},w=$=>{let b=Y("a",e[0].dataType,e[0].dims),k=Y("b",e[1].dataType,e[1].dims),S=null,E=[b,k];e.length===3&&(S=Y("c",e[2].dataType,e[2].dims.length),E.push(S));let T=ge("output",e[0].dataType,o.length);E.push(T);let C=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],R="",D="";t.transA&&t.transB?(D=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,R="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(D=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,R="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(D=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,R="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(D=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,R="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let H=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${$.registerUniforms(C).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${b.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${k.type.storage}, ${l}>, ${l}>;
  ${$.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${T.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${D}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${R}
      }
      workgroupBarrier();
    }

    ${H}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",T)}; value += ${T.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:m}),getShaderSource:w}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:y}},jf=e=>{let t=e.transA,r=e.transB,a=e.alpha,i=e.beta;return{transA:t,transB:r,alpha:a,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Kf=(e,t)=>{cu(e.inputs),e.compute(fu(e.inputs,t))}}),rr,lr,wr,xr,hu,mu,gu,_u,yu,bu,$u,vu,Qf,Zf,N_=ue(()=>{De(),Ne(),ct(),Pe(),[rr,lr,wr,xr]=[0,1,2,3],hu=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},mu=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,gu=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,_u=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,yu=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,bu=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${rr}] = batch;
     indices[${lr}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${wr}] = u32(r);
            indices[${xr}] = u32(c);
          }
        `;case"border":return`
          indices[${wr}] = u32(clamp(r, 0, H - 1));
          indices[${xr}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${wr}] = gs_reflect(r, border[1], border[3]);
          indices[${xr}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,$u=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${rr}], indices[${lr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${rr}], indices[${lr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${rr}], indices[${lr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${rr}], indices[${lr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${rr}], indices[${lr}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${rr}], indices[${lr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,vu=(e,t)=>{let r=Y("x",e[0].dataType,e[0].dims.length),a=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=Y("grid",e[1].dataType,a.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[rr,lr,wr,xr]=[0,3,1,2]);let n=ge("output",e[0].dataType,s.length),o=r.type.value,l=q.size(s),d=[{type:12,data:l},...ye(e[0].dims,a,s)],c=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,i,n)}
  ${mu}
  ${gu(o)}
  ${_u(t)}
  ${yu(t)}
  ${bu(r,o,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${wr}]);
      let W_in = i32(uniforms.x_shape[${xr}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${n.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${rr}], indices[${wr}], indices[${xr}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${$u(n,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let u=q.size(s);return{outputs:[{dims:s,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}},getShaderSource:c}},Qf=(e,t)=>{hu(e.inputs),e.compute(vu(e.inputs,t))},Zf=e=>Je({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),It,wu,Yf,Fi,xu,ha,Xf,Jf=ue(()=>{De(),Ne(),ct(),Gn(),Kn(),Pe(),$r(),It=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,wu=(e,t)=>{let r=e[0],a=It(e,1),i=It(e,2),s=It(e,3),n=It(e,4),o=It(e,5),l=It(e,6),d=It(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],f=r.dims[1],u=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],m=f,_=0,y=0,w=Math.floor(u/t.numHeads);if(l&&d&&q.size(l.dims)&&q.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==w)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==w)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=l.dims[2],y=l.dims[2]}else if(l&&q.size(l.dims)||d&&q.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $;if(a&&q.size(a.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(a.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');$=2,m=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');$=5,m=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');$=0,m=a.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}if(s&&q.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(a&&a.dims.length===5&&a.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=_+m,k=0;if(n&&q.size(n.dims)>0){k=8;let C=n.dims;throw C.length===1?C[0]===c?k=1:C[0]===3*c+2&&(k=3):C.length===2&&C[0]===c&&C[1]===b&&(k=5),k===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,E=u;if(i&&q.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(m!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=i.dims[2]}else{if(m!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=i.dims[1]*i.dims[3],S=!0}}let T=!1;if(n&&q.size(n.dims)>0)throw new Error("Key padding mask is not supported");if(o&&q.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==c||o.dims[1]!==t.numHeads||o.dims[2]!==f||o.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:f,pastSequenceLength:_,kvSequenceLength:m,totalSequenceLength:b,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:u,vHiddenSize:E,headSize:w,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:k,scale:t.scale,broadcastResPosBias:T,passPastInKv:S,qkvFormat:$}},Yf=e=>Je({...e}),Fi=Je({perm:[0,2,1,3]}),xu=(e,t,r,a,i,s,n)=>{let o=[a,i,s],l=q.size(o),d=[{type:12,data:l},{type:12,data:n},{type:12,data:s}],c=f=>{let u=ge("qkv_with_bias",t.dataType,o),m=Y("qkv",t.dataType,o),_=Y("bias",r.dataType,o),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms(y).declareVariables(m,_,u)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},ha=(e,t,r,a,i,s,n,o)=>{let l=s;if(n&&q.size(n.dims)>0){if(a===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=xu(e,s,n,t,a,r*i,o),l=l.reshape([t,a,r,i]),r===1||a===1?l:e.compute(Mt(l,Fi.perm),{inputs:[l],outputs:[-1]})[0]}else return s.dims.length===3&&(l=s.reshape([t,a,r,i])),r===1||a===1?l:e.compute(Mt(l,Fi.perm),{inputs:[l],outputs:[-1]})[0]},Xf=(e,t)=>{let r=wu(e.inputs,t),a=e.inputs[0],i=It(e.inputs,1),s=It(e.inputs,2),n=It(e.inputs,3),o=It(e.inputs,4),l=It(e.inputs,5),d=It(e.inputs,6),c=It(e.inputs,7);if(a.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let f=i&&s&&i.dims.length===4&&s.dims.length===4,u=ha(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,a,n,0);if(f)return ga(e,u,i,s,o,void 0,d,c,l,r);if(!i||!s)throw new Error("key and value must be provided");let m=ha(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,i,n,r.hiddenSize),_=ha(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,n,2*r.hiddenSize);ga(e,u,m,_,o,void 0,d,c,l,r)}}),ku,Su,Eu,Tu,Cn,eh,th,rh=ue(()=>{De(),Ne(),ct(),Pe(),ku=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Su=(e,t)=>{let r=[],a=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),a=r.length),Je({numOutputs:a,axis:t.axis,splitSizes:r})},Eu=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${_e("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Tu=e=>{let t=e.length,r=[];for(let a=0;a<t;++a){let i=e[a].setByIndices("indices","input[global_idx]");t===1?r.push(i):a===0?r.push(`if (output_number == ${a}u) { ${i} }`):a===t-1?r.push(`else { ${i} }`):r.push(`else if (output_number == ${a}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Cn=(e,t)=>{let r=e[0].dims,a=q.size(r),i=e[0].dataType,s=q.normalizeAxis(t.axis,r.length),n=new Array(t.numOutputs),o=Y("input",i,r.length),l=new Array(t.numOutputs),d=[],c=[],f=0,u=[{type:12,data:a}];for(let _=0;_<t.numOutputs;_++){f+=t.splitSizes[_],l[_]=f;let y=r.slice();y[s]=t.splitSizes[_],c.push(y),n[_]=ge(`output${_}`,i,y.length),d.push({dims:c[_],dataType:e[0].dataType})}u.push({type:12,data:l},...ye(r,...c));let m=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...n)}
  ${Eu(l.length)}
  ${Tu(n)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${_e("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(a/64)},programUniforms:u})}},eh=(e,t)=>{ku(e.inputs);let r=e.inputs.length===1?t:Su(e.inputs,t);e.compute(Cn(e.inputs,r),{inputs:[0]})},th=e=>{let t=e.axis,r=e.splitSizes,a=e.numOutputs<0?r.length:e.numOutputs;if(a!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return Je({axis:t,numOutputs:a,splitSizes:r})}}),Iu,Cu,ji,ah,B_=ue(()=>{ct(),Kn(),Jf(),rh(),$r(),Iu=(e,t)=>{if(t.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],a=e[1],i=e[2],s=e[3],n=e[4];if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=r.dims[0],d=r.dims[1],c=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=d,u=0,m=!a||a.dims.length===0,_=Math.floor(m?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);m&&(c=_*t.numHeads);let y=s&&s.dims.length!==0,w=n&&n.dims.length!==0;if(y&&s.dims.length===4&&s.dims[0]===l&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&w){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(n.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');u=s.dims[2]}else if(y||w)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $=1;if(a&&a.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(r.dims[2]%a.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');f=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=a.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}let b=0,k=!1,S=t.kvNumHeads?_*t.kvNumHeads:c;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(f!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=i.dims[2]}else{if(f!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=i.dims[1]*i.dims[3],k=!0}}let E=e.length>4?e[5]:void 0;if(E&&E.dims.length!==1&&E.dims[0]!==l)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:l,sequenceLength:d,pastSequenceLength:u,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:S,headSize:_,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:k,qkvFormat:$}},Cu=Je({perm:[0,2,1,3]}),ji=(e,t,r)=>{let a=t,i=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(a=t.reshape([r.batchSize,r.kvSequenceLength,i,r.headSize]),a=e.compute(Mt(a,Cu.perm),{inputs:[a],outputs:[-1]})[0]),a},ah=(e,t)=>{var w;let r=Iu(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((w=e.inputs[1])==null?void 0:w.dims.length)===5)throw new Error("Packed KV is not implemented");let a=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,n=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=Je({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[u,m,_]=!i&&!s?e.compute(Cn([a],f),{inputs:[a],outputs:[-1,-1,-1]}):[a,i,s],y=ha(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,u,void 0,0);ga(e,y,ji(e,m,r),ji(e,_,r),void 0,void 0,n,o,void 0,r,l,d)}}),Ki,zu,Au,ih,M_=ue(()=>{De(),Ne(),$r(),Pe(),Ki=(e,t,r,a,i,s,n,o)=>{let l=ot(s),d=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,f=i*n,u=64;f===1&&(u=256);let m=[i,n,s/l],_=[i,n,2],y=["rank","type","type"],w=[];w.push(...ye(m,_));let $=b=>{let k=Y("x",t.dataType,3,l),S=Y("scale",r.dataType,r.dims),E=Y("bias",a.dataType,a.dims),T=ge("output",1,3,2),C=[k,S,E,T];return`
  var<workgroup> workgroup_shared : array<${c}, ${u}>;
  const workgroup_size = ${u}u;
  ${b.declareVariables(...C)}
  ${b.mainStart(u)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${k.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${br("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${br("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${u}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:f},programUniforms:w}),getShaderSource:$},{inputs:[t,r,a],outputs:[-1]})[0]},zu=(e,t,r)=>{let a=t[0].dims,i=a,s=2,n=a[0],o=a[1],l=q.sizeFromDimension(a,s),d=ot(l),c=q.size(i)/d,f=Ki(e,t[0],t[1],t[2],n,l,o,r.epsilon),u=[n,o,l/d],m=[n,o],_=["type","none"],y=w=>{let $=Y("x",t[0].dataType,u.length,d),b=Y("scale_shift",1,m.length,2),k=ge("output",t[0].dataType,u.length,d),S=[$,b,k];return`
  ${w.registerUniform("output_size","u32").declareVariables(...S)}
  ${w.mainStart()}
  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${k.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${$.getByOffset("global_idx")} * ${k.type.value}(scale_shift.x) + ${k.type.value}(scale_shift.y);
      ${k.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...ye(u,m,u)]}),getShaderSource:y},{inputs:[t[0],f]})},Au=(e,t,r)=>{let a=t[0].dims,i=a,s=a[0],n=a[a.length-1],o=q.sizeFromDimension(a,1)/n,l=ot(n),d=q.size(i)/l,c=[{type:12,data:o},{type:12,data:Math.floor(n/l)}],f=["type","type"],u=!1,m=[0,a.length-1];for(let $=0;$<a.length-2;$++)u=u||a[$+1]!==1,m.push($+1);u=u&&a[a.length-1]!==1;let _=u?e.compute(Mt(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:a.length},($,b)=>a[m[b]])),y=Ki(e,_,t[1],t[2],s,o,n,r.epsilon),w=$=>{let b=gt(t[0].dataType),k=l===1?"vec2f":`mat${l}x2f`,S=C=>{let R=C===0?"x":"y",D=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${b}(${D}(scale.${R}))`;case 2:return`vec2<${b}>(${D}(scale[0].${R}, scale[1].${R}))`;case 4:return`vec4<${b}>(${D}(scale[0].${R}, scale[1].${R}, scale[2].${R}, scale[3].${R}))`;default:throw new Error(`Not supported compoents ${l}`)}},E=Y("input",t[0].dataType,t[0].dims,l),T=ge("output",t[0].dataType,i,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${k}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${T.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${$.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:w},{inputs:[t[0],y]})},ih=(e,t)=>{t.format==="NHWC"?Au(e,e.inputs,t):zu(e,e.inputs,t)}}),Ou,Du,nh,P_=ue(()=>{De(),Ne(),Pe(),Ou=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Du=(e,t,r)=>{let a=t.simplified,i=e[0].dims,s=e[1],n=!a&&e[2],o=i,l=q.normalizeAxis(t.axis,i.length),d=q.sizeToDimension(i,l),c=q.sizeFromDimension(i,l),f=q.size(s.dims),u=n?q.size(n.dims):0;if(f!==c||n&&u!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${u}`);let m=[];for(let E=0;E<i.length;++E)E<l?m.push(i[E]):m.push(1);let _=ot(c),y=["type","type"],w=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/_)},{type:1,data:t.epsilon}];n&&y.push("type");let $=r>1,b=r>2,k=E=>{let T=gt(e[0].dataType),C=[Y("x",e[0].dataType,e[0].dims,_),Y("scale",s.dataType,s.dims,_)];n&&C.push(Y("bias",n.dataType,n.dims,_)),C.push(ge("output",e[0].dataType,o,_)),$&&C.push(ge("mean_data_output",1,m)),b&&C.push(ge("inv_std_output",1,m));let R=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(R).declareVariables(...C)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${$n("f32",_)};
    var mean_square_vector = ${$n("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Ur(T,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${br("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${br("mean_square_vector",_)} / uniforms.norm_size ${a?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Ur(T,_,"x[j + offset]")};
      let f32scale = ${Ur(T,_,"scale[j]")};
      output[j + offset] = ${C[0].type.value}((f32input ${a?"":"- mean"}) * inv_std_dev * f32scale
        ${n?`+ ${Ur(T,_,"bias[j]")}`:""}
      );
    }

    ${$?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:o,dataType:e[0].dataType}];return $&&S.push({dims:m,dataType:1}),b&&S.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${a}`,inputDependencies:y},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:w}),getShaderSource:k}},nh=(e,t)=>{Ou(e.inputs),e.compute(Du(e.inputs,t,e.outputCount))}}),Ru,sh,U_=ue(()=>{Ne(),Jn(),es(),Ru=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},sh=e=>{Ru(e.inputs);let t=Vr.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],a=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&a<8)e.compute(Xn(e.inputs,{activation:""},t));else{let i=t[t.length-2],s=q.size(e.inputs[0].dims.slice(0,-2)),n=q.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&i===1&&n===1){let o=e.inputs[0].reshape([1,s,a]),l=e.inputs[1].reshape([1,a,r]),d=[1,s,r],c=[o,l];e.compute(ei(c,{activation:""},t,d),{inputs:c})}else e.compute(ei(e.inputs,{activation:""},t))}}}),Nu,Bu,Mu,oh,lh,V_=ue(()=>{De(),Ne(),ct(),Pe(),Nu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],a=r.dims.length;if(r.dims[a-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,n=e[1];if(!q.areEqual(n.dims,[t.n,i,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(q.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.bits>4?t.n*i:t.n*Math.floor((i+1)/2);if(q.size(l)!==d)throw new Error("zeroPoints input size error.")}},Bu=(e,t)=>{let r=e[0].dims,a=r.length,i=r[a-2],s=t.k,n=t.n,o=r.slice(0,a-2),l=q.size(o),d=e[1].dims[2]/4,c=e[0].dataType,f=ot(t.k),u=ot(d),m=ot(n),_=o.concat([i,n]),y=i>1&&n/m%2===0?2:1,w=q.size(_)/m/y,$=64,b=[],k=[l,i,s/f],S=q.convertShape(e[1].dims).slice();S.splice(-1,1,d/u),b.push(...ye(k)),b.push(...ye(S)),b.push(...ye(e[2].dims)),e.length===4&&b.push(...ye(q.convertShape(e[3].dims)));let E=[l,i,n/m];b.push(...ye(E));let T=C=>{let R=k.length,D=Y("a",e[0].dataType,R,f),H=Y("b",12,S.length,u),re=Y("scales",e[2].dataType,e[2].dims.length),ae=[D,H,re],j=e.length===4?Y("zero_points",12,e[3].dims.length):void 0;j&&ae.push(j);let ee=E.length,B=ge("output",e[0].dataType,ee,m),oe=gt(e[0].dataType),N=(()=>{switch(f){case 1:return`array<${oe}, 8>`;case 2:return`mat4x2<${oe}>`;case 4:return`mat2x4<${oe}>`;default:throw new Error(`${f}-component is not supported.`)}})(),U=()=>{let L=`
          // reuse a data
            var input_offset = ${D.indicesToOffset(`${D.type.indices}(batch, row, word_offset)`)};
            var a_data: ${N};
            for (var j: u32 = 0; j < ${8/f}; j++) {
              a_data[j] = ${D.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let ie=0;ie<m*y;ie++)L+=`
            b_value = ${u===1?`b${ie}_data`:`b${ie}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${N}(${Array.from({length:4},(X,W)=>`${oe}(b_value_lower[${W}]), ${oe}(b_value_upper[${W}])`).join(", ")});
            b_dequantized_values = ${f===1?`${N}(${Array.from({length:8},(X,W)=>`(b_quantized_values[${W}] - ${j?`zero_point${ie}`:"zero_point"}) * scale${ie}`).join(", ")});`:`(b_quantized_values - ${N}(${Array(8).fill(`${j?`zero_point${ie}`:"zero_point"}`).join(",")})) * scale${ie};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(ie/m)}]${m>1?`[${ie%m}]`:""} += ${Array.from({length:8/f},(X,W)=>`${f===1?`a_data[${W}] * b_dequantized_values[${W}]`:`dot(a_data[${W}], b_dequantized_values[${W}])`}`).join(" + ")};
          `;return L},Z=()=>{let L=`
            var col_index = col * ${m};
            ${j?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${oe}(8);`}
            `;for(let ie=0;ie<m*y;ie++)L+=`
            let scale${ie} = ${re.getByOffset("col_index * nBlocksPerCol + block")};
            ${j?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${j.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${ie} = ${oe}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return L},te=()=>{let L=`col_index = col * ${m};`;for(let ie=0;ie<m*y;ie++)L+=`
            let b${ie}_data = ${H.getByIndices(`${H.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return L+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${N};
            var b_dequantized_values: ${N};`,L};return`
        var<workgroup> workgroup_shared: array<${B.type.value}, ${y*$}>;
        ${C.declareVariables(...ae,B)}
        ${C.mainStart([$,1,1])}
          let output_indices = ${B.offsetToIndices(`(global_idx / ${$}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${$}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${Z()}
            for (var word: u32 = 0; word < ${d}; word += ${u}) {
              ${te()}
              for (var i: u32 = 0; i < ${u}; i++) {
                ${U()}
                word_offset += ${8/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${B.type.value} = ${B.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${$}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${B.setByIndices(`${B.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${u};${m};${y};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:c}],dispatchGroup:{x:w},programUniforms:b}),getShaderSource:T}},Mu=(e,t)=>{let r=e[0].dims,a=r.length,i=r[a-2],s=t.k,n=t.n,o=r.slice(0,a-2),l=q.size(o),d=e[1].dims[2]/4,c=e[0].dataType,f=ot(t.k),u=ot(d),m=o.concat([i,n]),_=128,y=n%8===0?8:n%4===0?4:1,w=_/y,$=w*u*8,b=$/f,k=$/t.blockSize,S=q.size(m)/y,E=[],T=[l,i,s/f],C=q.convertShape(e[1].dims).slice();C.splice(-1,1,d/u),E.push(...ye(T)),E.push(...ye(C)),E.push(...ye(e[2].dims)),e.length===4&&E.push(...ye(q.convertShape(e[3].dims)));let R=[l,i,n];E.push(...ye(R));let D=H=>{let re=T.length,ae=Y("a",e[0].dataType,re,f),j=Y("b",12,C.length,u),ee=Y("scales",e[2].dataType,e[2].dims.length),B=[ae,j,ee],oe=e.length===4?Y("zero_points",12,e[3].dims.length):void 0;oe&&B.push(oe);let N=R.length,U=ge("output",e[0].dataType,N),Z=gt(e[0].dataType),te=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${Z}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Z}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Z}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Z}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ae.type.value}, ${b}>;
        var<workgroup> inter_results: array<array<${U.type.value}, ${w}>, ${y}>;
        ${H.declareVariables(...B,U)}
        ${H.mainStart([w,y,1])}
          let output_indices = ${U.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${k} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${b};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${b}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${ae.getByIndices(`${ae.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ae.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${k} + local_id.x;
            ${oe?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${oe.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${Z}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${Z}(8);`}
            let scale = ${ee.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${j.getByIndices(`${j.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${u}; i++) {
              ${te()}
              let b_value = ${u===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${Z}>(${Array.from({length:4},(L,ie)=>`${Z}(b_value_lower[${ie}]), ${Z}(b_value_upper[${ie}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${Z}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(L,ie)=>`${`dot(a_data${ie}, b_dequantized_values[${ie}])`}`).join(" + ")};
              word_offset += ${8/f};
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${U.type.value} = ${U.type.value}(0);
            for (var b = 0u; b < ${w}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${U.setByIndices(`${U.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${u};${w};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:c}],dispatchGroup:{x:S},programUniforms:E}),getShaderSource:D}},oh=(e,t)=>{Nu(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Mu(e.inputs,t)):e.compute(Bu(e.inputs,t))},lh=e=>Je(e)}),Pu,Uu,Vu,Wu,Lu,qu,Hu,Gu,uh,W_=ue(()=>{De(),Ne(),Pe(),Pu=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Uu=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
            k = i32(${e.indicesGet("indices",i)}) - ${_e("uniforms.pads",i,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${_e("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${_e("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${a}
            value = x[offset];
          }
      `},Vu=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
                k = i32(${e.indicesGet("indices",i)}) - ${_e("uniforms.pads",i,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${_e("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${_e("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${_e("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Wu=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
                k = i32(${e.indicesGet("indices",i)}) - ${_e("uniforms.pads",i,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${_e("uniforms.x_shape",i,t)})) {
                  k = i32(${_e("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${_e("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Lu=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
                k = i32(${e.indicesGet("indices",i)}) - ${_e("uniforms.pads",i,r)};
                if (k < 0)  {
                  k += i32(${_e("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${_e("uniforms.x_shape",i,t)})) {
                  k -= i32(${_e("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${_e("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},qu=(e,t,r)=>{switch(r.mode){case 0:return Uu(e,t,r.pads.length);case 1:return Vu(e,t,r.pads.length);case 2:return Wu(e,t,r.pads.length);case 3:return Lu(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Hu=(e,t)=>{let r=q.padShape(e[0].dims.slice(),t.pads),a=e[0].dims,i=q.size(r),s=[{type:12,data:i},{type:6,data:t.pads}],n=e.length>=3&&e[2].data;t.mode===0&&s.push({type:n?e[2].dataType:1,data:t.value}),s.push(...ye(e[0].dims,r));let o=["rank"],l=d=>{let c=ge("output",e[0].dataType,r.length),f=Y("x",e[0].dataType,a.length),u=f.type.value,m=qu(c,a.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:n?u:"f32"}),`
            ${d.registerUniforms(_).declareVariables(f,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${u}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${n}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(r)/64)},programUniforms:s}),getShaderSource:l}},Gu=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),a=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,s=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let l=0;l<o.length;l++)s[Number(o[l])]=Number(r[l]),s[Number(o[l])+i]=Number(r[l+o.length])}else r.forEach((o,l)=>s[Number(l)]=Number(o));let n=[];return s.forEach(o=>n.push(o)),{mode:t.mode,value:a,pads:n}}else return t},uh=(e,t)=>{Pu(e.inputs);let r=Gu(e.inputs,t);e.compute(Hu(e.inputs,r),{inputs:[0]})}}),sa,Qi,Zi,Yi,Xi,Fu,ju,Ji,en,dh,ph,tn,ch,fh,rn,hh,mh,gh,_h,L_=ue(()=>{Yt(),De(),Ne(),Pe(),sa=e=>{if(nt.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Qi=(e,t,r)=>{let a=t.format==="NHWC",i=e.dims.slice();a&&i.splice(1,0,i.pop());let s=Object.hasOwnProperty.call(t,"dilations"),n=t.kernelShape.slice(),o=t.strides.slice(),l=s?t.dilations.slice():[],d=t.pads.slice();Xa.adjustPoolAttributes(r,i,n,o,l,d);let c=Xa.computePoolOutputShape(r,i,o,l,n,d,t.autoPad),f=Object.assign({},t);s?Object.assign(f,{kernelShape:n,strides:o,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:n,strides:o,pads:d,cacheKey:t.cacheKey});let u=c.slice();return u.push(u.splice(1,1)[0]),[f,a?u:c]},Zi=(e,t)=>{let r=t.format==="NHWC",a=q.size(e),i=q.size(t.kernelShape),s=[{type:12,data:a},{type:12,data:i}],n=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],f=!!(d+c);s.push({type:12,data:o},{type:12,data:l},{type:12,data:d},{type:12,data:c}),n.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let u=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],w=t.pads[t.pads.length-2];u=!!(y+w),s.push({type:12,data:m},{type:12,data:_},{type:12,data:y},{type:12,data:w}),n.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,n,!0,f,u]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=q.computeStrides(t.kernelShape);s.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),n.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,c)=>d+c);return[s,n,!!l,!1,!1]}},Yi=(e,t,r,a,i,s,n,o,l,d,c,f)=>{let u=i.format==="NHWC",m=t.type.value,_=ge("output",t.type.tensor,a);if(i.kernelShape.length<=2){let y="",w="",$="",b=r-(u?2:1);if(c?y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${b}] < 0 || xIndices[${b}]
                      >= uniforms.x_shape[${b}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`,i.kernelShape.length===2){let k=r-(u?3:2);f?w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${k}] < 0 || xIndices[${k}] >= uniforms.x_shape[${k}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                `,$=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var value = ${m}(${o});
              var pad = 0;
              ${w}
              ${y}
              ${$}
              ${n}

              output[global_idx] = value;
            }`}else{if(u)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=i.kernelShape.length,w=i.pads.length,$="";return d?$=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${s}
              }`:$=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var offsets: array<u32, ${y}>;

              var value = ${m}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${y-1}u; j++) {
                  offsets[j] = offset / ${_e("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${_e("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${r-y}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${_e("uniforms.strides",`j - ${r-y}u`,y)}
                    + offsets[j - ${r-y}u] - ${_e("uniforms.pads","j - 2u",w)};
                  ${$}
              }
              ${n}

              output[global_idx] = value;
            }`}},Xi=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Fu=e=>`${Xi(e)};${e.countIncludePad}`,ju=e=>`${Xi(e)};${e.storageOrder};${e.dilations}`,Ji=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),en=(e,t,r,a)=>{let[i,s]=Qi(t,a,r),n=Y("x",t.dataType,t.dims.length),o=n.type.value,l="value += x_val;",d="";i.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[c,f,u,m,_]=Zi(s,i);c.push(...ye(t.dims,s));let y=["rank"];return{name:e,shaderCache:{hint:`${a.cacheKey};${u};${m};${_}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(q.size(s)/64)},programUniforms:c}),getShaderSource:w=>Yi(w,n,t.dims.length,s.length,i,l,d,0,f,u,m,_)}},dh=e=>{let t=e.count_include_pad!==0,r=Ji(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let a={countIncludePad:t,...r,cacheKey:""};return{...a,cacheKey:Fu(a)}},ph=(e,t)=>{sa(e.inputs),e.compute(en("AveragePool",e.inputs[0],!1,t))},tn={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},ch=e=>{let t=e.format;return{format:t,...tn,cacheKey:t}},fh=(e,t)=>{sa(e.inputs),e.compute(en("GlobalAveragePool",e.inputs[0],!0,t))},rn=(e,t,r,a)=>{let[i,s]=Qi(t,a,r),n=`
      value = max(x_val, value);
    `,o="",l=Y("x",t.dataType,t.dims.length),d=["rank"],[c,f,u,m,_]=Zi(s,i);return c.push(...ye(t.dims,s)),{name:e,shaderCache:{hint:`${a.cacheKey};${u};${m};${_}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(q.size(s)/64)},programUniforms:c}),getShaderSource:y=>Yi(y,l,t.dims.length,s.length,i,n,o,t.dataType===10?-65504:-1e5,f,u,m,_)}},hh=(e,t)=>{sa(e.inputs),e.compute(rn("MaxPool",e.inputs[0],!1,t))},mh=e=>{let t=e.storage_order,r=e.dilations,a=Ji(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(a.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:r,...a,cacheKey:""};return{...i,cacheKey:ju(i)}},gh=e=>{let t=e.format;return{format:t,...tn,cacheKey:t}},_h=(e,t)=>{sa(e.inputs),e.compute(rn("GlobalMaxPool",e.inputs[0],!0,t))}}),Ku,Qu,yh,bh,q_=ue(()=>{De(),Ne(),ct(),Pe(),Ku=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,a)=>r===e[2].dims[a]).reduce((r,a)=>r&&a,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,s)=>s===t.axis||i===e[0].dims[s]).reduce((i,s)=>i&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],a=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/a)||t.blockSize>Math.ceil(r/(a-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Qu=(e,t)=>{let r=q.normalizeAxis(t.axis,e[0].dims.length),a=e[0].dataType,i=a===3,s=e[0].dims,n=e[1].dataType,o=q.size(s),l=a===3||a===2,d=l?[Math.ceil(q.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,f=e.length>2?e[2]:void 0,u=f?l?[Math.ceil(q.size(f.dims)/4)]:f.dims:void 0,m=c.length===0||c.length===1&&c[0]===1,_=m===!1&&c.length===1,y=ot(o),w=m&&(!l||y===4),$=w?y:1,b=w&&!l?y:1,k=Y("input",l?12:a,d.length,b),S=Y("scale",n,c.length),E=f?Y("zero_point",l?12:a,u.length):void 0,T=ge("output",n,s.length,$),C=[k,S];E&&C.push(E);let R=[d,c];f&&R.push(u);let D=[{type:12,data:o/$},{type:12,data:r},{type:12,data:t.blockSize},...ye(...R,s)],H=re=>{let ae=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${re.registerUniforms(ae).declareVariables(...C,T)}
      ${re.mainStart()}
          ${re.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${T.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${k.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${$===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${k.getByOffset("global_idx")};`};

          // Set scale input
          ${m?`let scale_value= ${S.getByOffset("0")}`:_?`
            let scale_index = ${T.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?m?l?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:_?l?`
                let zero_point_index = ${T.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${T.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${l?i?"i32":"u32":k.type.value}(0);`};
      // Compute and write output
      ${T.setByOffset("global_idx",`${T.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:H,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/$/64),y:1,z:1},programUniforms:D})}},yh=(e,t)=>{Ku(e.inputs,t),e.compute(Qu(e.inputs,t))},bh=e=>Je({axis:e.axis,blockSize:e.blockSize})}),Zu,Yu,$h,H_=ue(()=>{Yt(),De(),Pe(),Zu=(e,t,r)=>{let a=e===t,i=e<t&&r<0,s=e>t&&r>0;if(a||i||s)throw new Error("Range these inputs' contents are invalid.")},Yu=(e,t,r,a)=>{let i=Math.abs(Math.ceil((t-e)/r)),s=[i],n=i,o=[{type:12,data:n},{type:a,data:e},{type:a,data:r},...ye(s)],l=d=>{let c=ge("output",a,s.length),f=c.type.value,u=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${d.registerUniforms(u).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${a}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:o})}},$h=e=>{let t=0,r=0,a=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],a=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],a=e.inputs[2].getFloat32Array()[0]),nt.webgpu.validateInputContent&&Zu(t,r,a),e.compute(Yu(t,r,a,e.inputs[0].dataType),{inputs:[]})}}),Xu,Ju,vh,wh,G_=ue(()=>{De(),Ne(),ct(),Pe(),Xu=(e,t,r,a)=>{if(e!=="none"&&a!=="i32"&&a!=="u32"&&a!=="f32")throw new Error(`Input ${a} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,s=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return a==="i32"||a==="u32"?`atomicAdd(&${t}, bitcast<${a}>(${r}));`:`
              ${i}bitcast<${a}>(oldValue) + (${r})${s}`;case"max":return a==="i32"||a==="u32"?`atomicMax(&${t}, bitcast<${a}>(${r}));`:`
                ${i}max(bitcast<f32>(oldValue), (${r}))${s}`;case"min":return a==="i32"||a==="u32"?`atomicMin(&${t}, bitcast<${a}>(${r}));`:`${i}min(bitcast<${a}>(oldValue), (${r}))${s}`;case"mul":return`${i}(bitcast<${a}>(oldValue) * (${r}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Ju=(e,t)=>{let r=e[0].dims,a=e[1].dims,i=r,s=1,n=Math.ceil(q.size(a)/s),o=a[a.length-1],l=q.sizeFromDimension(r,o),d=[{type:12,data:n},{type:12,data:o},{type:12,data:l},...ye(e[1].dims,e[2].dims,i)],c=f=>{let u=Y("indices",e[1].dataType,e[1].dims.length),m=Y("updates",e[2].dataType,e[2].dims.length,s),_=t.reduction!=="none"&&t.reduction!==""?Yp("output",e[0].dataType,i.length):ge("output",e[0].dataType,i.length,s);return`
      ${f.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(u,m,_)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Xu(t.reduction,"output[data_offset + i]","value",_.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:d}),getShaderSource:c}},vh=e=>Je({reduction:e.reduction}),wh=(e,t)=>{e.compute(Ju(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),ed,td,rd,an,ad,id,nd,sd,od,ld,ud,dd,nn,pd,cd,fd,hd,md,xh,kh,F_=ue(()=>{De(),Ne(),ct(),Pe(),ed=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},td=(e,t,r)=>{t.every(i=>i>=0&&i<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let a=new Array(r).fill(1);return t.forEach((i,s)=>a[i]=e[s]),a},rd=(e,t,r,a,i,s)=>{let[n,o,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(n>0&&e.length>n&&e[n].dims.length>0)e[n].getFloat32Array().forEach(c=>s.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(c=>a.push(c)),a.length!==0&&a.length!==d&&r>=18&&a.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");ed(a,t),t.axes.length>0&&td(a,t.axes,d).forEach((c,f)=>a[f]=c)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(c=>i.push(Number(c))),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof a<"u"&&typeof i<"u"&&a.length>0&&i.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},an=(e,t,r,a)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${a}(big / (${r}));
  let fract = ${a}(big % (${r})) / ${a}(${r});
  return whole + fract;
`,ad=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${an("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${an("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",id=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",nd=(e,t,r)=>{let a=new Array(r).fill(0).concat(new Array(r).fill(1)),i=e.length===0?a:e.slice();return t.length>0?(t.forEach((s,n)=>{a[s]=i[n],a[n+r]=i[t.length+n]}),a):i},sd=(e,t,r,a)=>{let i=[];if(r.length>0)if(a.length>0){if(e.forEach(s=>i.push(s)),Math.max(...a)>e.length)throw new Error("axes is out of bound");a.forEach((s,n)=>i[s]=r[n])}else r.forEach(s=>i.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((s,n)=>Math.round(s*t[n]))}return i},od=(e,t,r)=>{let a=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return r.axes.length>0?(r.axes.forEach(s=>t[s]=a),r.axes.forEach(s=>i[s]=Math.round(e[s]*t[s]))):(t.fill(a,0,t.length),i.forEach((s,n)=>i[n]=Math.round(s*t[n]))),i},ld=(e,t,r,a,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${_e("uniforms.scales","i",a)};
        var roi_low = ${_e("uniforms.roi","i",i)};
        var roi_hi = ${_e("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${_e("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${_e("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,ud=(e,t,r,a,i,s,n)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${a.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${_e("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${_e("uniforms.roi","i",s)};
          var roi_hi = ${_e("uniforms.roi",`i + ${r.length}`,s)};
          var input_shape_i = ${_e("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${_e("uniforms.output_shape","i",a.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${n} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,dd=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${_e("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,nn=(e,t,r,a)=>e.rank>a?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",pd=(e,t,r,a,i)=>{let[s,n,o,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",n,`max(0, min(row, ${r[n]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${nn(e,l,s,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${n}];
      var col:${d} = originalIndices[${o}];
      ${a?`if (row < 0 || row > (${r[n]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${r[n]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${s}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},cd=(e,t,r,a,i,s,n,o,l,d)=>{let c=r.length===2,[f,u]=c?[0,1]:[2,3],m=e.type.value,_=y=>{let w=y===f?"row":"col";return`
      fn ${w}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${m} {
        var output_index = ${t.indicesGet("output_indices",y)};
        var originalIdx: ${m} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[y]},
        ${a[y]}, ${r[y]}, ${s[y]}, ${s[y]} + ${r.length});
        var fractOriginalIdx: ${m} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[y]} - 1))) {
          return ${l};
        }
        var data: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${w}: ${m} = originalIdx + ${m}(i);
          if (${w} < 0 || ${w} >= ${r[y]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${l};`:`${w} = max(0, min(${w}, ${r[y]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",y,`u32(${w})`)};
          data[i + 1] = ${y===f?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(f)};
    ${_(u)};
  fn getCubicInterpolationCoefs(s: ${m}) -> array<${m}, 4> {
    var absS = abs(s);
    var coeffs: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${m} = 1.0 - absS;
    var twoMinusAbsS: ${m} = 2.0 - absS;
    var onePlusAbsS: ${m} = 1.0 + absS;
    coeffs[0] = ((${n} * onePlusAbsS - 5 * ${n}) * onePlusAbsS + 8 * ${n}) * onePlusAbsS - 4 * ${n};
    coeffs[1] = ((${n} + 2) * absS - (${n} + 3)) * absS * absS + 1;
    coeffs[2] = ((${n} + 2) * oneMinusAbsS - (${n} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${n} * twoMinusAbsS - 5 * ${n}) * twoMinusAbsS + 8 * ${n}) * twoMinusAbsS - 4 * ${n};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${m}, 4>, coefs: array<${m}, 4>) -> ${m} {
    var coefsSum: ${m} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${m} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},fd=(e,t,r,a,i)=>{let[s,n,o,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",n,`max(0, min(depth, ${r[n]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${nn(e,d,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${n}];
      var height:${c} = originalIndices[${o}];
      var width:${c} = originalIndices[${l}];
      ${a?`if (depth < 0 || depth > (${r[n]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${r[n]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},hd=(e,t,r,a,i,s)=>{let n=e.dims,o=nd(s,t.axes,n.length),l=sd(n,a,i,t.axes),d=a.slice();a.length===0&&(d=n.map((b,k)=>b===0?1:l[k]/b),t.keepAspectRatioPolicy!=="stretch"&&(l=od(n,d,t)));let c=ge("output",e.dataType,l.length),f=Y("input",e.dataType,n.length),u=q.size(l),m=n.length===l.length&&n.every((b,k)=>b===l[k]),_=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,w=f.type.value,$=b=>`
      ${m?"":`
      ${ad(t.coordinateTransformMode,w)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${dd(f,n)};
              ${id(t.nearestMode,r,w)};
              ${ud(f,c,n,l,d.length,o.length,_)};
              `;case"linear":return`
              ${ld(c,n,l,d.length,o.length)};
              ${(()=>{if(n.length===2||n.length===4)return`${pd(f,c,n,_,y)}`;if(n.length===3||n.length===5)return`${fd(f,c,n,_,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(n.length===2||n.length===4)return`${cd(f,c,n,l,d,o,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${b.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(f,c)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${m?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${n.length===2||n.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${m}|${t.mode==="nearest"?n.length:n}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:[{type:12,data:u},{type:1,data:d},{type:1,data:o},...ye(n,l)]})}},md=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},xh=(e,t)=>{let r=[],a=[],i=[],s=md(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");rd(e.inputs,t,s,r,a,i),e.compute(hd(e.inputs[0],t,s,r,a,i),{inputs:[0]})},kh=e=>{let t=e.antialias,r=e.axes,a=e.coordinateTransformMode,i=e.cubicCoeffA,s=e.excludeOutside!==0,n=e.extrapolationValue,o=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return Je({antialias:t,axes:r,coordinateTransformMode:a,cubicCoeffA:i,excludeOutside:s,extrapolationValue:n,keepAspectRatioPolicy:o,mode:l,nearestMode:d})}}),gd,_d,Sh,j_=ue(()=>{De(),Ne(),ct(),Pe(),gd=(e,t)=>{let[r,a,i,s]=e,{numHeads:n,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!q.areEqual(a.dims,[])&&!q.areEqual(a.dims,[1])&&a.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${a.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!q.areEqual(i.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&n===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],c=i.dims[0],f=q.sizeFromDimension(r.dims,1)/d,u=o===0?i.dims[1]*2:f/n;if(o>u)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(a.dims.length===2){if(l!==a.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${a.dims[0]}`);if(d!==a.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${a.dims[1]}`)}if(u/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`);if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},_d=(e,t)=>{let{interleaved:r,numHeads:a,rotaryEmbeddingDim:i,scale:s}=t,n=e[0].dims[0],o=q.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=o/l,c=e[2].dims[1],f=i===0?c*2:d/a,u=new Array(n,l,d/f,f-c),m=q.computeStrides(u),_=[{type:1,data:s},{type:12,data:u},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[o,d,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,f,l*f,1]}):[],...ye(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=w=>{let $=Y("input",e[0].dataType,e[0].dims.length),b=Y("position_ids",e[1].dataType,e[1].dims.length),k=Y("cos_cache",e[2].dataType,e[2].dims.length),S=Y("sin_cache",e[3].dataType,e[3].dims.length),E=ge("output",e[0].dataType,e[0].dims.length);return w.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:u.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${w.declareVariables($,b,k,S,E)}

        ${w.mainStart(Wr)}
          let half_rotary_emb_dim = uniforms.${k.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",ge("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${$.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} -
                ${$.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${$.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${$.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",$.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Je({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(u)/Wr)},programUniforms:_})}},Sh=(e,t)=>{gd(e.inputs,t),e.compute(_d(e.inputs,t))}}),yd,bd,Eh,K_=ue(()=>{De(),Ne(),Pe(),yd=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],a=e[2];if(t.dataType!==r.dataType||t.dataType!==a.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(a.dims.length!==1)throw new Error("Gamma must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let n=e[3];if(n.dims.length!==1)throw new Error("Beta must be 1D");if(n.dims[n.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let n=e[4];if(n.dims.length!==1)throw new Error("Bias must be 1D");if(n.dims[n.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},bd=(e,t,r,a)=>{let i=t.simplified,s=e[0].dims,n=q.size(s),o=s,l=n,d=s.slice(-1)[0],c=a?s.slice(0,-1).concat(1):[],f=!i&&e.length>3,u=e.length>4,m=a&&r>1,_=a&&r>2,y=r>3,w=64,$=ot(d),b=[{type:12,data:l},{type:12,data:$},{type:12,data:d},{type:1,data:t.epsilon}],k=E=>{let T=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],C=[Y("x",e[0].dataType,e[0].dims,$),Y("skip",e[1].dataType,e[1].dims,$),Y("gamma",e[2].dataType,e[2].dims,$)];f&&C.push(Y("beta",e[3].dataType,e[3].dims,$)),u&&C.push(Y("bias",e[4].dataType,e[4].dims,$)),C.push(ge("output",e[0].dataType,o,$)),m&&C.push(ge("mean_output",1,c)),_&&C.push(ge("inv_std_output",1,c)),y&&C.push(ge("input_skip_bias_sum",e[0].dataType,o,$));let R=gt(e[0].dataType),D=gt(1,$);return`

      ${E.registerUniforms(T).declareVariables(...C)}
      var<workgroup> sum_shared : array<${D}, ${w}>;
      var<workgroup> sum_squared_shared : array<${D}, ${w}>;

      ${E.mainStart([w,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${w};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${w};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${w-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${u?"bias[offset1d + i]":R+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Ur(R,$,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${w};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${br("sum",$)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${br("square_sum",$)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${R}(mean)`}) *
            ${R}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:o,dataType:e[0].dataType}];return r>1&&S.push({dims:c,dataType:1}),r>2&&S.push({dims:c,dataType:1}),r>3&&S.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${$};${m};${_};${y}`,inputDependencies:e.map((E,T)=>"type")},getShaderSource:k,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:b})}},Eh=(e,t)=>{yd(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(bd(e.inputs,t,e.outputCount,!1),{outputs:r})}}),$d,oa,vd,sn,wd,xd,Th,Ih,Q_=ue(()=>{De(),Ne(),ct(),Pe(),$d=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,a)=>{if(e[a+1].dataType!==6&&e[a+1].dataType!==7)throw new Error(`Input ${a} must be an array of int32 or int64`)})},oa=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(a=>r.push(Number(a)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(a=>r.push(Number(a)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},vd=(e,t)=>{if(e.length>1){let r=oa(e,1),a=oa(e,2),i=oa(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Je({starts:r,ends:a,axes:i})}else return t},sn=(e,t,r,a,i)=>{let s=e;return e<0&&(s+=r[a[t]]),i[t]<0?Math.max(0,Math.min(s,r[a[t]]-1)):Math.max(0,Math.min(s,r[a[t]]))},wd=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${_e("uniforms.input_shape","i",r.length)};
            let steps_i = ${_e("uniforms.steps","i",r.length)};
            let signs_i = ${_e("uniforms.signs","i",r.length)};
            let starts_i = ${_e("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,xd=(e,t)=>{let r=e[0].dims,a=q.size(r),i=t.axes.length>0?q.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],s=oa(e,4);s.forEach($=>$!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(i.length).fill(1));let n=t.starts.map(($,b)=>sn($,b,r,i,s)),o=t.ends.map(($,b)=>sn($,b,r,i,s));if(i.length!==n.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==r.length)for(let $=0;$<r.length;++$)i.includes($)||(n.splice($,0,0),o.splice($,0,r[$]),s.splice($,0,1));let l=s.map($=>Math.sign($));s.forEach(($,b,k)=>{if($<0){let S=(o[b]-n[b])/$,E=n[b],T=E+S*s[b];n[b]=T,o[b]=E,k[b]=-$}});let d=r.slice(0);i.forEach(($,b)=>{d[$]=Math.ceil((o[$]-n[$])/s[$])});let c={dims:d,dataType:e[0].dataType},f=ge("output",e[0].dataType,d.length),u=Y("input",e[0].dataType,e[0].dims.length),m=q.size(d),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:n.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:s.length}],y=[{type:12,data:m},{type:12,data:n},{type:6,data:l},{type:12,data:s},...ye(e[0].dims,d)],w=$=>`
      ${$.registerUniforms(_).declareVariables(u,f)}
        ${wd(u,f,r)}
        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",u.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${n.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:y})}},Th=(e,t)=>{$d(e.inputs,t);let r=vd(e.inputs,t);e.compute(xd(e.inputs,r),{inputs:[0]})},Ih=e=>{let t=e.starts,r=e.ends,a=e.axes;return Je({starts:t,ends:r,axes:a})}}),kd,Sd,Ch,zh,Z_=ue(()=>{De(),Ne(),ct(),$r(),Pe(),kd=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Sd=(e,t)=>{let r=e.inputs[0],a=r.dims,i=q.size(a),s=a.length,n=q.normalizeAxis(t.axis,s),o=n<a.length-1,l,d=[];o?(d=Array.from({length:s},(C,R)=>R),d[n]=s-1,d[s-1]=n,l=e.compute(Mt(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let c=l.dims,f=c[s-1],u=i/f,m=ot(f),_=f/m,y=64;u===1&&(y=256);let w=(C,R)=>R===4?`max(max(${C}.x, ${C}.y), max(${C}.z, ${C}.w))`:R===2?`max(${C}.x, ${C}.y)`:R===3?`max(max(${C}.x, ${C}.y), ${C}.z)`:C,$=Y("x",l.dataType,l.dims,m),b=ge("result",l.dataType,l.dims,m),k=$.type.value,S=gt(l.dataType)==="f32"?`var threadMax = ${k}(-3.402823e+38f);`:`var threadMax = ${k}(-65504.0h);`,E=C=>`
      var<workgroup> rowMaxShared : ${k};
      var<workgroup> rowSumShared : ${k};
      var<workgroup> threadShared : array<${k}, ${y}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${k} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${k}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${C.registerUniform("packedCols","i32").declareVariables($,b)}
      ${C.mainStart(y)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${y};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${S}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${k}(${w("threadShared[0]",m)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${k}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${k}(${br("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,T=e.compute({name:"Softmax",shaderCache:{hint:`${m};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:u},programUniforms:[{type:6,data:_}]}),getShaderSource:E},{inputs:[l],outputs:[o?-1:0]})[0];o&&e.compute(Mt(T,d),{inputs:[T]})},Ch=(e,t)=>{kd(e.inputs),Sd(e,t)},zh=e=>Je({axis:e.axis})}),on,Ed,Td,Id,Ah,Y_=ue(()=>{De(),Ne(),Pe(),on=e=>Array.from(e.getBigInt64Array(),Number),Ed=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(on(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Td=(e,t)=>{let r=[];for(let a=0;a<e.length;++a)r.push(e[a]*t[a]);return r},Id=(e,t)=>{let r=e[0].dims,a=t??on(e[1]),i=Td(r,a),s=q.size(i),n=e[0].dataType,o=Y("input",n,r.length),l=ge("output",n,i.length),d=c=>`
      const inputShape = ${o.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(o,l)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${a}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...ye(e[0].dims,i)]}),getShaderSource:d}},Ah=e=>{Ed(e.inputs),e.compute(Id(e.inputs),{inputs:[0]})}}),Cd,zd,Oh,X_=ue(()=>{De(),Ne(),Pe(),Cd=(e,t,r,a,i)=>{let s=ge("output_data",i,r.length,4),n=Y("a_data",t[1].dataType,t[1].dims.length,4),o=Y("b_data",t[2].dataType,t[2].dims.length,4),l=Y("c_data",t[0].dataType,t[0].dims.length,4),d,c=(f,u,m)=>`select(${u}, ${f}, ${m})`;if(!a)d=s.setByOffset("global_idx",c(n.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let f=(u,m,_="")=>{let y=`a_data[index_a${m}][component_a${m}]`,w=`b_data[index_b${m}][component_b${m}]`,$=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
            let output_indices${m} = ${s.offsetToIndices(`global_idx * 4u + ${m}u`)};
            let offset_a${m} = ${n.broadcastedIndicesToOffset(`output_indices${m}`,s)};
            let offset_b${m} = ${o.broadcastedIndicesToOffset(`output_indices${m}`,s)};
            let offset_c${m} = ${l.broadcastedIndicesToOffset(`output_indices${m}`,s)};
            let index_a${m} = offset_a${m} / 4u;
            let index_b${m} = offset_b${m} / 4u;
            let index_c${m} = offset_c${m} / 4u;
            let component_a${m} = offset_a${m} % 4u;
            let component_b${m} = offset_b${m} % 4u;
            let component_c${m} = offset_c${m} % 4u;
            ${u}[${m}] = ${_}(${c(y,w,$)});
          `};i===9?d=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,n,o,s)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},zd=e=>{let t=e[1].dims,r=e[2].dims,a=e[0].dims,i=e[1].dataType,s=!(q.areEqual(t,r)&&q.areEqual(r,a)),n=t,o=q.size(t);if(s){let d=Vr.calcShape(Vr.calcShape(t,r,!1),a,!1);if(!d)throw new Error("Can't perform where op on the given tensors");n=d,o=q.size(n)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>Cd(d,e,n,s,i),getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...ye(a,t,r,n)]})}},Oh=e=>{e.compute(zd(e.inputs))}}),Dh,J_=ue(()=>{c_(),Kn(),f_(),h_(),m_(),g_(),__(),w_(),k_(),S_(),E_(),T_(),I_(),C_(),z_(),A_(),O_(),D_(),R_(),N_(),B_(),M_(),P_(),U_(),V_(),Jf(),W_(),L_(),q_(),H_(),G_(),jn(),F_(),j_(),K_(),Q_(),Z_(),rh(),Y_(),$r(),Qn(),X_(),Dh=new Map([["Abs",[Ec]],["Acos",[Tc]],["Acosh",[Ic]],["Add",[uf]],["ArgMax",[wc,wn]],["ArgMin",[vc,wn]],["Asin",[Cc]],["Asinh",[zc]],["Atan",[Ac]],["Atanh",[Oc]],["Attention",[xc]],["AveragePool",[ph,dh]],["BatchNormalization",[kc]],["BiasAdd",[Sc]],["BiasSplitGelu",[lf]],["Cast",[Rc,Dc]],["Ceil",[Bc]],["Clip",[Nc]],["Concat",[bf,$f]],["Conv",[In,Tn]],["ConvTranspose",[zf,Cf]],["Cos",[Mc]],["Cosh",[Pc]],["CumSum",[Af,Of]],["DepthToSpace",[Df,Rf]],["DequantizeLinear",[yh,bh]],["Div",[df]],["Einsum",[Nf,Bf]],["Elu",[Uc,fa]],["Equal",[pf]],["Erf",[Vc]],["Exp",[Wc]],["Expand",[Mf]],["FastGelu",[Pf]],["Floor",[Lc]],["FusedConv",[In,Tn]],["Gather",[Vf,Uf]],["GatherElements",[Ff,Gf]],["GatherBlockQuantized",[qf,Hf]],["GatherND",[Wf,Lf]],["Gelu",[qc]],["Gemm",[Kf,jf]],["GlobalAveragePool",[fh,ch]],["GlobalMaxPool",[_h,gh]],["Greater",[mf]],["GreaterOrEqual",[_f]],["GridSample",[Qf,Zf]],["GroupQueryAttention",[ah]],["HardSigmoid",[Yc,Zc]],["InstanceNormalization",[ih]],["LayerNormalization",[nh]],["LeakyRelu",[Hc,fa]],["Less",[gf]],["LessOrEqual",[yf]],["Log",[sf]],["MatMul",[sh]],["MatMulNBits",[oh,lh]],["MaxPool",[hh,mh]],["Mul",[cf]],["MultiHeadAttention",[Xf,Yf]],["Neg",[Fc]],["Not",[Gc]],["Pad",[uh]],["Pow",[ff]],["QuickGelu",[of,fa]],["Range",[$h]],["Reciprocal",[jc]],["ReduceMin",[gc]],["ReduceMean",[pc]],["ReduceMax",[mc]],["ReduceSum",[yc]],["ReduceProd",[_c]],["ReduceL1",[cc]],["ReduceL2",[fc]],["ReduceLogSum",[$c]],["ReduceLogSumExp",[hc]],["ReduceSumSquare",[bc]],["Relu",[Kc]],["Resize",[xh,kh]],["RotaryEmbedding",[Sh]],["ScatterND",[wh,vh]],["Sigmoid",[Qc]],["Sin",[Xc]],["Sinh",[Jc]],["Slice",[Th,Ih]],["SkipLayerNormalization",[Eh]],["Split",[eh,th]],["Sqrt",[ef]],["Softmax",[Ch,zh]],["Sub",[hf]],["Tan",[tf]],["Tanh",[rf]],["ThresholdedRelu",[nf,fa]],["Tile",[Ah]],["Transpose",[Jp,ec]],["Where",[Oh]]])}),Rh,e0=ue(()=>{Yt(),pr(),Pe(),Rh=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,a,i){nr(e.programInfo.name);let s=this.backend.device,n=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});i&&o.push({binding:o.length,resource:i});let l=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:a};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}n.setPipeline(e.computePipeline),n.setBindGroup(0,l),n.dispatchWorkgroups(...a),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Zt(e.programInfo.name)}dispose(){}build(e,t){nr(e.name);let r=this.backend.device,a=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"},{feature:"subgroups-f16",extension:"subgroups_f16"}].forEach(d=>{r.features.has(d.feature)&&a.push(`enable ${d.extension};`)});let i=Xp(t,this.backend.device.limits),s=e.getShaderSource(i),n=`${a.join(`
`)}
${i.additionalImplementations}
${s}`,o=r.createShaderModule({code:n,label:e.name});Ye("verbose",()=>`[WebGPU] ${e.name} shader code: ${n}`);let l=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Zt(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,a=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&r<=i&&a<=i)return[t,r,a];let s=t*r*a,n=Math.ceil(Math.sqrt(s));if(n>i){if(n=Math.ceil(Math.cbrt(s)),n>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[n,n,n]}else return[n,n,1]}}}),Ad,Od,Dd,Rd,Nh,t0=ue(()=>{Yt(),De(),pr(),Fp(),d_(),J_(),e0(),Ad=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let a=0;a<e.length;++a){let i=e[a].dataType;switch(t[a]){case"none":{r.push("");break}case"type":{r.push(`${i}`);break}case"rank":{let s=e[a].dims.length;r.push(`${i};${s}`);break}case"dims":{let s=e[a].dims.join(",");r.push(`${i};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[a]}`)}}return r.join("|")},Od=(e,t,r)=>{var i,s;let a=e.name;return(i=e.shaderCache)!=null&&i.hint&&(a+="["+e.shaderCache.hint+"]"),a+=":"+r+`:${Ad(t,((s=e.shaderCache)==null?void 0:s.inputDependencies)??new Array(t.length).fill("dims"))}`,a},Dd=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Rd=class{constructor(e){this.subgroupsSupported=e.features.has("subgroups"),this.subgroupsF16Supported=e.features.has("subgroups");let t=e.limits;!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?this.subgroupSizeRange=void 0:this.subgroupSizeRange=[t.minSubgroupSize,t.maxSubgroupSize]}},Nh=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],a={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},i=s=>t.features.has(s)&&r.push(s)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups")&&i("subgroups-f16"),this.device=await t.requestDevice(a),this.deviceInfo=new Rd(this.device),this.adapterInfo=new Dd(t.info||await t.requestAdapterInfo()),this.gpuDataManager=jp(this),this.programManager=new Rh(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,qn(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;nr(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var a;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let s=r[i],n=s.kernelId,o=this.kernels.get(n),l=o.kernelType,d=o.kernelName,c=s.programName,f=s.inputTensorViews,u=s.outputTensorViews,m=t[i*2],_=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let y=Number(m-this.queryTimeBase),w=Number(_-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if((a=this.env.webgpu.profiling)!=null&&a.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:f.map($=>({dims:$.dims,dataType:Tr($.dataType)})),outputsMetadata:u.map($=>({dims:$.dims,dataType:Tr($.dataType)})),kernelId:n,kernelType:l,kernelName:d,programName:c,startTime:y,endTime:w});else{let $="";f.forEach((k,S)=>{$+=`input[${S}]: [${k.dims}] | ${Tr(k.dataType)}, `});let b="";u.forEach((k,S)=>{b+=`output[${S}]: [${k.dims}] | ${Tr(k.dataType)}, `}),`${n}${l}${d}${c}${$}${b}`,w-y}Qa("GPU",`${c}::${m}::${_}`)}e.unmap(),this.pendingQueries.delete(e)}),Zt()}run(e,t,r,a,i,s){nr(e.name);let n=[];for(let b=0;b<t.length;++b){let k=t[b].data;if(k===0)continue;let S=this.gpuDataManager.get(k);if(!S)throw new Error(`no GPU data for input: ${k}`);n.push(S)}let{outputs:o,dispatchGroup:l,programUniforms:d}=e.getRunData(t),c=r.length===0?o.map((b,k)=>k):r;if(c.length!==o.length)throw new Error(`Output size ${c.length} must be equal to ${o.length}.`);let f=[],u=[];for(let b=0;b<o.length;++b){if(!Number.isInteger(c[b])||c[b]<-3||c[b]>=s)throw new Error(`Invalid output index: ${c[b]}`);if(c[b]===-3)continue;let k=c[b]===-1,S=c[b]===-2,E=k||S?i(o[b].dataType,o[b].dims):a(c[b],o[b].dataType,o[b].dims);if(f.push(E),E.data===0)continue;let T=this.gpuDataManager.get(E.data);if(!T)throw new Error(`no GPU data for output: ${E.data}`);if(k&&this.temporaryData.push(T),S){let C=this.kernelPersistentData.get(this.currentKernelId);C||(C=[],this.kernelPersistentData.set(this.currentKernelId,C)),C.push(T)}u.push(T)}if(n.length!==t.length||u.length!==f.length){if(u.length===0)return Zt(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(d){let b=0,k=[];d.forEach(C=>{let R=typeof C.data=="number"?[C.data]:C.data;if(R.length===0)return;let D=C.type===10?2:4,H,re;C.type===10?(re=R.length>4?16:R.length>2?8:R.length*D,H=R.length>4?16:D*R.length):(re=R.length<=2?R.length*D:16,H=16),b=Math.ceil(b/re)*re,k.push(b);let ae=C.type===10?8:4;b+=R.length>4?Math.ceil(R.length/ae)*H:R.length*D});let S=16;b=Math.ceil(b/S)*S;let E=new ArrayBuffer(b);d.forEach((C,R)=>{let D=k[R],H=typeof C.data=="number"?[C.data]:C.data;if(C.type===6)new Int32Array(E,D,H.length).set(H);else if(C.type===12)new Uint32Array(E,D,H.length).set(H);else if(C.type===10)new Uint16Array(E,D,H.length).set(H);else if(C.type===1)new Float32Array(E,D,H.length).set(H);else throw new Error(`Unsupported uniform type: ${Tr(C.type)}`)});let T=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(T.buffer,0,E,0,b),this.gpuDataManager.release(T.id),m={offset:0,size:b,buffer:T.buffer}}let _=this.programManager.normalizeDispatchGroupSize(l),y=_[1]===1&&_[2]===1,w=Od(e,t,y),$=this.programManager.getArtifact(w);if($||($=this.programManager.build(e,_),this.programManager.setArtifact(w,$),Ye("info",()=>`[artifact] key: ${w}, programName: ${e.name}`)),d&&$.uniformVariablesInfo){if(d.length!==$.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${$.uniformVariablesInfo.length}, got ${d.length} in program "${$.programInfo.name}".`);for(let b=0;b<d.length;b++){let k=d[b],S=k.type,E=typeof k.data=="number"?1:k.data.length,[T,C]=$.uniformVariablesInfo[b];if(S!==T||E!==C)throw new Error(`Uniform variable ${b} mismatch: expect type ${T} with size ${C}, got type ${S} with size ${E} in program "${$.programInfo.name}".`)}}if(Ye("info",()=>`[ProgramManager] run "${e.name}" (key=${w}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:$.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run($,n,u,_,m),Zt(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,a){let i=Dh.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:a,kernelEntry:i[0],attributes:[i[1],r]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let a=this.kernels.get(e);if(!a)throw new Error(`kernel not created: ${e}`);let i=a.kernelType,s=a.kernelName,n=a.kernelEntry,o=a.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),Ye("info",()=>`[WebGPU] Start to run kernel "[${i}] ${s}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),n(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${s}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${i}] ${s}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,a){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let s=i.get(t),n=this.gpuDataManager.registerExternalBuffer(r,a,s);return i.set(t,[n,r]),n}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let a=await bn(this,e,t);return Hn(a.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ye("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ye("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ye("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let a=0;a<r;a++){let i=this.getComputePassEncoder(),s=e[a];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(s.computePipeline),i.setBindGroup(0,s.bindGroup),i.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[a]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Nd,ln,Bd,un,dn,pn,Md,Bh,r0=ue(()=>{pr(),Nd=1,ln=()=>Nd++,Bd=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),un=(e,t)=>{let r=Bd.get(e);if(!r)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((a,i)=>a*i)*r/8):0},dn=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return un(this.dataType,this.tensorShape)}destroy(){Ye("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((a,i)=>a===r[i])}},pn=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,a){if(this.wrapper){if(this.wrapper.canReuseTensor(e,t,r))return this.wrapper.tensor;if(a){if(this.wrapper.byteLength!==un(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let i=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(t,r,i,!0,!0),a&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else Ye("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Md=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}reserveTensorId(){let e=ln();return this.tensorTrackersById.set(e,new pn(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,a){Ye("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${e}, dataType: ${t}, shape: ${r}, copyOld: ${a}}`);let i=this.tensorTrackersById.get(e);if(!i)throw new Error("Tensor not found.");return i.ensureTensor(this.backend.currentContext,t,r,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){Ye("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,a){let i=ln(),s=new dn({sessionId:this.backend.currentSessionId,context:e,tensor:t,dataType:r,shape:a});return this.tensorTrackersById.set(i,new pn(this,s)),this.externalTensors.add(s),i}async getCachedTensor(e,t,r,a,i){let s=this.backend.currentSessionId,n=this.backend.currentContext;for(let[l,d]of this.freeTensors.entries())if(d.canReuseTensor(n,e,t)){Ye("verbose",()=>`[WebNN] Reusing tensor {dataType: ${e}, shape: ${t}}`);let c=this.freeTensors.splice(l,1)[0];return c.sessionId=s,c}Ye("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${e}, shape: ${t}}`);let o=await n.createTensor({dataType:e,shape:t,dimensions:t,usage:r,writable:a,readable:i});return new dn({sessionId:s,context:n,tensor:o,dataType:e,shape:t})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Bh=(...e)=>new Md(...e)}),cn,Pd,Mh,a0=ue(()=>{De(),Ar(),Fp(),r0(),pr(),cn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Pd=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),a=Object.keys(t).sort();return r.length===a.length&&r.every((i,s)=>i===a[s]&&e[i]===t[i])},Mh=class{constructor(e){this.tensorManager=Bh(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],qn(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){this.activeSessionId=e}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(a=>a.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:a}),a}}else if(e===void 0){let r=this.mlContextCache.findIndex(a=>a.options===void 0&&a.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:a}),a}}let t=this.mlContextCache.findIndex(r=>Pd(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}get currentContext(){let e=this.getMLContext(this.currentSessionId);if(!e)throw new Error(`No MLContext found for session ${this.currentSessionId}`);return e}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e)}onReleaseSession(e){let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let a=this.mlContextCache.findIndex(i=>i.mlContext===t);a!==-1&&this.mlContextCache.splice(a,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ye("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,a){let i=cn.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);return this.tensorManager.ensureTensor(e,i,r,a)}uploadTensor(e,t){if(!mt().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ye("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Hn(r,t)}}registerMLTensor(e,t,r){let a=cn.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.registerTensor(this.currentContext,e,a,r);return Ye("verbose",()=>`[WebNN] registerMLTensor {tensor: ${e}, dataType: ${a}, dimensions: ${r}} -> {tensorId: ${i}}`),i}registerMLConstant(e,t,r,a,i,s){if(!s)throw new Error("External mounted files are not available.");let n=e;e.startsWith("./")&&(n=e.substring(2));let o=s.get(n);if(!o)throw new Error(`File with name ${n} not found in preloaded files.`);if(t+r>o.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=o.slice(t,t+r).buffer,d;switch(i.dataType){case"float32":d=new Float32Array(l);break;case"float16":d=new Uint16Array(l);break;case"int32":d=new Int32Array(l);break;case"uint32":d=new Uint32Array(l);break;case"int64":d=new BigInt64Array(l);break;case"uint64":d=new BigUint64Array(l);break;case"int8":d=new Int8Array(l);break;case"int4":case"uint4":case"uint8":d=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Ye("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}}`),a.constant(i,d)}flush(){}}}),Ph={};_a(Ph,{init:()=>Uh});var Va,Ud,Uh,i0=ue(()=>{De(),t0(),pr(),Ne(),a0(),Va=class Vh{constructor(t,r,a,i){this.module=t,this.dataType=r,this.data=a,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(q.size(t)!==q.size(this.dims))throw new Error("Invalid new shape");return new Vh(this.module,this.dataType,this.data,t)}},Ud=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let a=e.PTR_SIZE,i=r/e.PTR_SIZE,s=a===4?"i32":"i64";this.opKernelContext=Number(e.getValue(a*i++,s));let n=Number(e.getValue(a*i++,s));this.outputCount=Number(e.getValue(a*i++,s)),this.customDataOffset=Number(e.getValue(a*i++,"*")),this.customDataSize=Number(e.getValue(a*i++,s));let o=[];for(let l=0;l<n;l++){let d=Number(e.getValue(a*i++,s)),c=Number(e.getValue(a*i++,"*")),f=Number(e.getValue(a*i++,s)),u=[];for(let m=0;m<f;m++)u.push(Number(e.getValue(a*i++,s)));o.push(new Va(e,d,c,u))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var n;let r=((n=t==null?void 0:t.inputs)==null?void 0:n.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,a=(t==null?void 0:t.outputs)??[],i=(o,l,d)=>new Va(this.module,l,this.output(o,d),d),s=(o,l)=>{let d=Pr(o,l);if(!d)throw new Error(`Unsupported data type: ${o}`);let c=d>0?this.backend.gpuDataManager.create(d).id:0;return new Va(this.module,o,c,l)};return this.backend.run(e,r,a,i,s,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let a=this.module.PTR_SIZE,i=a===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*a);this.module.setValue(s,t.length,i);for(let n=0;n<t.length;n++)this.module.setValue(s+a*(n+1),t[n],i);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(a){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${a}`)}finally{this.module.stackRestore(r)}}},Uh=async(e,t,r,a)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=new Nh;await s.initialize(r,a),i("webgpu",[s,n=>s.alloc(Number(n)),n=>s.free(n),(n,o,l,d=!1)=>{if(d)Ye("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(n)}, dst=${Number(o)}, size=${Number(l)}`),s.memcpy(Number(n),Number(o));else{Ye("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(n)}, gpuDataId=${Number(o)}, size=${Number(l)}`);let c=t.HEAPU8.subarray(Number(n>>>0),Number(n>>>0)+Number(l));s.upload(Number(o),c)}},async(n,o,l)=>{Ye("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${n}, dataOffset=${o}, size=${l}`),await s.download(Number(n),()=>t.HEAPU8.subarray(Number(o)>>>0,Number(o+l)>>>0))},(n,o,l)=>s.createKernel(n,Number(o),l,t.UTF8ToString(t._JsepGetNodeName(Number(o)))),n=>s.releaseKernel(n),(n,o,l,d)=>{Ye("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${n}, contextDataOffset=${o}`);let c=new Ud(t,s,Number(o));return s.computeKernel(Number(n),c,d)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let s=new Mh(r);i("webnn",[s,()=>s.reserveTensorId(),n=>s.releaseTensorId(n),async(n,o,l,d)=>s.ensureTensor(n,o,l,d),(n,o)=>{s.uploadTensor(n,o)},async(n,o)=>s.downloadTensor(n,o)])}}}),Vd,ts,rs,gr,Wd,ti,as,is,fn,ns,ss,os,Wh=ue(()=>{l_(),u_(),De(),Ar(),Pn(),Gp(),Vd=(e,t)=>{mt()._OrtInit(e,t)!==0&&je("Can't initialize onnxruntime.")},ts=async e=>{Vd(e.wasm.numThreads,Ya(e.logLevel))},rs=async(e,t)=>{{let r=(i0(),Ka(Ph)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let a=e.webgpu.adapter;if(a){if(typeof a.limits!="object"||typeof a.features!="object"||typeof a.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(a=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:s}),!a)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",mt(),e,a)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",mt(),e)}}},gr=new Map,Wd=e=>{let t=mt(),r=t.stackSave();try{let a=t.PTR_SIZE,i=t.stackAlloc(2*a);t._OrtGetInputOutputCount(e,i,i+a)!==0&&je("Can't get session input/output count.");let s=a===4?"i32":"i64";return[Number(t.getValue(i,s)),Number(t.getValue(i+a,s))]}finally{t.stackRestore(r)}},ti=e=>{let t=mt(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},as=async(e,t)=>{var f,u,m;let r,a,i=mt();Array.isArray(e)?[r,a]=e:e.buffer===i.HEAPU8.buffer?[r,a]=[e.byteOffset,e.byteLength]:[r,a]=ti(e);let s=0,n=0,o=0,l=[],d=[],c=[];try{if([n,l]=Hp(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let E=[];for(let T of t.externalData){let C=typeof T=="string"?T:T.path;E.push(Ln(typeof T=="string"?T:T.data).then(R=>{i.mountExternalData(C,R)}))}await Promise.all(E)}for(let E of(t==null?void 0:t.executionProviders)??[])if((typeof E=="string"?E:E.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof E!="string"){let T=E,C=T==null?void 0:T.context,R=T==null?void 0:T.gpuDevice,D=T==null?void 0:T.deviceType,H=T==null?void 0:T.powerPreference;C?i.currentContext=C:R?i.currentContext=await i.jsepCreateMLContext(R):i.currentContext=await i.jsepCreateMLContext({deviceType:D,powerPreference:H})}else i.currentContext=await i.jsepCreateMLContext();break}s=await i._OrtCreateSession(r,a,n),s===0&&je("Can't create a session."),(f=i.jsepOnCreateSession)==null||f.call(i),i.currentContext&&(i.jsepRegisterMLContext(s,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[_,y]=Wd(s),w=!!(t!=null&&t.enableGraphCapture),$=[],b=[],k=[];for(let E=0;E<_;E++){let T=i._OrtGetInputName(s,E);T===0&&je("Can't get an input name."),d.push(T),$.push(i.UTF8ToString(T))}for(let E=0;E<y;E++){let T=i._OrtGetOutputName(s,E);T===0&&je("Can't get an output name."),c.push(T);let C=i.UTF8ToString(T);b.push(C);{if(w&&(t==null?void 0:t.preferredOutputLocation)===void 0){k.push("gpu-buffer");continue}let R=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((u=t==null?void 0:t.preferredOutputLocation)==null?void 0:u[C])??"cpu";if(R!=="cpu"&&R!=="cpu-pinned"&&R!=="gpu-buffer"&&R!=="ml-tensor")throw new Error(`Not supported preferred output location: ${R}.`);if(w&&R!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${R}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);k.push(R)}}let S=null;return k.some(E=>E==="gpu-buffer"||E==="ml-tensor")&&(o=i._OrtCreateBinding(s),o===0&&je("Can't create IO binding."),S={handle:o,outputPreferredLocations:k,outputPreferredLocationsEncoded:k.map(E=>yn(E))}),gr.set(s,[s,d,c,S,w,!1]),[s,$,b]}catch(_){throw d.forEach(y=>i._OrtFree(y)),c.forEach(y=>i._OrtFree(y)),o!==0&&i._OrtReleaseBinding(o)!==0&&je("Can't release IO binding."),s!==0&&i._OrtReleaseSession(s)!==0&&je("Can't release session."),_}finally{i._free(r),n!==0&&i._OrtReleaseSessionOptions(n)!==0&&je("Can't release session options."),l.forEach(_=>i._free(_)),(m=i.unmountExternalData)==null||m.call(i)}},is=e=>{var l;let t=mt(),r=gr.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[a,i,s,n,o]=r;n&&(o&&t._OrtClearBoundOutputs(n.handle)!==0&&je("Can't clear bound outputs."),t._OrtReleaseBinding(n.handle)!==0&&je("Can't release IO binding.")),(l=t.jsepOnReleaseSession)==null||l.call(t,e),i.forEach(d=>t._OrtFree(d)),s.forEach(d=>t._OrtFree(d)),t._OrtReleaseSession(a)!==0&&je("Can't release session."),gr.delete(e)},fn=(e,t,r,a,i,s=!1)=>{if(!e){t.push(0);return}let n=mt(),o=n.PTR_SIZE,l=e[0],d=e[1],c=e[3],f,u;if(l==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${i} when enableGraphCapture is true.`);if(c==="gpu-buffer"){let y=e[2].gpuBuffer;u=Pr(pa(l),d);let w=n.jsepRegisterBuffer;if(!w)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');f=w(a,i,y,u)}else if(c==="ml-tensor"){let y=e[2].mlTensor;u=Pr(pa(l),d);let w=n.jsepRegisterMLTensor;if(!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');f=w(y,pa(l),d)}else{let y=e[2];if(Array.isArray(y)){u=o*y.length,f=n._malloc(u),r.push(f);for(let w=0;w<y.length;w++){if(typeof y[w]!="string")throw new TypeError(`tensor data at index ${w} is not a string`);n.setValue(f+w*o,vt(y[w],r),"*")}}else u=y.byteLength,f=n._malloc(u),r.push(f),n.HEAPU8.set(new Uint8Array(y.buffer,y.byteOffset,u),f)}let m=n.stackSave(),_=n.stackAlloc(4*d.length);try{d.forEach((w,$)=>n.setValue(_+$*o,w,o===4?"i32":"i64"));let y=n._OrtCreateTensor(pa(l),f,u,_,d.length,yn(c));y===0&&je(`Can't create tensor for input/output. session=${a}, index=${i}.`),t.push(y)}finally{n.stackRestore(m)}},ns=async(e,t,r,a,i,s)=>{var re,ae;let n=mt(),o=n.PTR_SIZE,l=gr.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],c=l[1],f=l[2],u=l[3],m=l[4],_=l[5],y=t.length,w=a.length,$=0,b=[],k=[],S=[],E=[],T=n.stackSave(),C=n.stackAlloc(y*o),R=n.stackAlloc(y*o),D=n.stackAlloc(w*o),H=n.stackAlloc(w*o);try{(re=n.jsepOnRunStart)==null||re.call(n,d),[$,b]=qp(s);for(let B=0;B<y;B++)fn(r[B],k,E,e,t[B],m);for(let B=0;B<w;B++)fn(i[B],S,E,e,y+a[B],m);for(let B=0;B<y;B++)n.setValue(C+B*o,k[B],"*"),n.setValue(R+B*o,c[t[B]],"*");for(let B=0;B<w;B++)n.setValue(D+B*o,S[B],"*"),n.setValue(H+B*o,f[a[B]],"*");if(u&&!_){let{handle:B,outputPreferredLocations:oe,outputPreferredLocationsEncoded:N}=u;if(c.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${c.length}).`);for(let U=0;U<y;U++){let Z=t[U];await n._OrtBindInput(B,c[Z],k[U])!==0&&je(`Can't bind input[${U}] for session=${e}.`)}for(let U=0;U<w;U++){let Z=a[U];(ae=i[U])!=null&&ae[3]?n._OrtBindOutput(B,f[Z],S[U],0)!==0&&je(`Can't bind pre-allocated output[${U}] for session=${e}.`):n._OrtBindOutput(B,f[Z],0,N[Z])!==0&&je(`Can't bind output[${U}] to ${oe[U]} for session=${e}.`)}gr.set(e,[d,c,f,u,m,!0])}let j;u?j=await n._OrtRunWithBinding(d,u.handle,w,D,$):j=await n._OrtRun(d,R,C,y,H,w,D,$),j!==0&&je("failed to call OrtRun().");let ee=[];for(let B=0;B<w;B++){let oe=Number(n.getValue(D+B*o,"*"));if(oe===S[B]){ee.push(i[B]);continue}let N=n.stackSave(),U=n.stackAlloc(4*o),Z=!1,te,L=0;try{n._OrtGetTensorData(oe,U,U+o,U+2*o,U+3*o)!==0&&je(`Can't access output tensor data on index ${B}.`);let ie=o===4?"i32":"i64",X=Number(n.getValue(U,ie));L=n.getValue(U+o,"*");let W=n.getValue(U+o*2,"*"),G=Number(n.getValue(U+o*3,ie)),se=[];for(let we=0;we<G;we++)se.push(Number(n.getValue(W+we*o,ie)));n._OrtFree(W)!==0&&je("Can't free memory for tensor dims.");let Ae=se.reduce((we,me)=>we*me,1);te=Tr(X);let Ce=u==null?void 0:u.outputPreferredLocations[a[B]];if(te==="string"){if(Ce==="gpu-buffer"||Ce==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let we=[];for(let me=0;me<Ae;me++){let Ue=n.getValue(L+me*o,"*"),Ve=n.getValue(L+(me+1)*o,"*"),Be=me===Ae-1?void 0:Ve-Ue;we.push(n.UTF8ToString(Ue,Be))}ee.push([te,se,we,"cpu"])}else if(Ce==="gpu-buffer"&&Ae>0){let we=n.jsepGetBuffer;if(!we)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let me=we(L),Ue=Pr(X,Ae);if(Ue===void 0||!Vn(te))throw new Error(`Unsupported data type: ${te}`);Z=!0,ee.push([te,se,{gpuBuffer:me,download:n.jsepCreateDownloader(me,Ue,te),dispose:()=>{n._OrtReleaseTensor(oe)!==0&&je("Can't release tensor.")}},"gpu-buffer"])}else if(Ce==="ml-tensor"&&Ae>0){let we=n.jsepEnsureTensor;if(!we)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Pr(X,Ae)===void 0||!Wn(te))throw new Error(`Unsupported data type: ${te}`);let me=await we(L,X,se,!1);Z=!0,ee.push([te,se,{mlTensor:me,download:n.jsepCreateMLTensorDownloader(L,te),dispose:()=>{n.jsepReleaseTensorId(L),n._OrtReleaseTensor(oe)}},"ml-tensor"])}else{let we=Un(te),me=new we(Ae);new Uint8Array(me.buffer,me.byteOffset,me.byteLength).set(n.HEAPU8.subarray(L,L+me.byteLength)),ee.push([te,se,me,"cpu"])}}finally{n.stackRestore(N),te==="string"&&L&&n._free(L),Z||n._OrtReleaseTensor(oe)}}return u&&!m&&(n._OrtClearBoundOutputs(u.handle)!==0&&je("Can't clear bound outputs."),gr.set(e,[d,c,f,u,m,!1])),ee}finally{n.stackRestore(T),k.forEach(j=>n._OrtReleaseTensor(j)),S.forEach(j=>n._OrtReleaseTensor(j)),E.forEach(j=>n._free(j)),$!==0&&n._OrtReleaseRunOptions($),b.forEach(j=>n._free(j))}},ss=e=>{let t=mt(),r=gr.get(e);if(!r)throw new Error("invalid session id");let a=r[0],i=t._OrtEndProfiling(a);i===0&&je("Can't get an profile file name."),t._OrtFree(i)},os=e=>{let t=[];for(let r of e){let a=r[2];!Array.isArray(a)&&"buffer"in a&&t.push(a.buffer)}return t}}),_r,zt,Br,la,ua,Wa,hn,La,kr,Sr,Ld,Lh,qh,Hh,Gh,Fh,jh,Kh,Qh=ue(()=>{Yt(),Wh(),Ar(),Bn(),_r=()=>!!nt.wasm.proxy&&typeof document<"u",Br=!1,la=!1,ua=!1,La=new Map,kr=(e,t)=>{let r=La.get(e);r?r.push(t):La.set(e,[t])},Sr=()=>{if(Br||!la||ua||!zt)throw new Error("worker not ready")},Ld=e=>{switch(e.data.type){case"init-wasm":Br=!1,e.data.err?(ua=!0,hn[1](e.data.err)):(la=!0,hn[0]()),Wa&&(URL.revokeObjectURL(Wa),Wa=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=La.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Lh=async()=>{if(!la){if(Br)throw new Error("multiple calls to 'initWasm()' detected.");if(ua)throw new Error("previous call to 'initWasm()' failed.");if(Br=!0,_r())return new Promise((e,t)=>{zt==null||zt.terminate(),Wp().then(([r,a])=>{var i;try{zt=a,zt.onerror=n=>t(n),zt.onmessage=Ld,hn=[e,t];let s={type:"init-wasm",in:nt};!s.in.wasm.wasmPaths&&(r||(i=import.meta.url)!=null&&i.startsWith("file:"))&&(s.in.wasm.wasmPaths={wasm:new URL(""+new URL("../assets/ort-wasm-simd-threaded.jsep.Y7jqkEt_.wasm",import.meta.url).href,import.meta.url).href}),zt.postMessage(s),Wa=r}catch(s){t(s)}},t)});try{await Mn(nt.wasm),await ts(nt),la=!0}catch(e){throw ua=!0,e}finally{Br=!1}}},qh=async e=>{if(_r())return Sr(),new Promise((t,r)=>{kr("init-ep",[t,r]);let a={type:"init-ep",in:{epName:e,env:nt}};zt.postMessage(a)});await rs(nt,e)},Hh=async e=>_r()?(Sr(),new Promise((t,r)=>{kr("copy-from",[t,r]);let a={type:"copy-from",in:{buffer:e}};zt.postMessage(a,[e.buffer])})):ti(e),Gh=async(e,t)=>{if(_r()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Sr(),new Promise((r,a)=>{kr("create",[r,a]);let i={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),zt.postMessage(i,s)})}else return as(e,t)},Fh=async e=>{if(_r())return Sr(),new Promise((t,r)=>{kr("release",[t,r]);let a={type:"release",in:e};zt.postMessage(a)});is(e)},jh=async(e,t,r,a,i,s)=>{if(_r()){if(r.some(n=>n[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(n=>n))throw new Error("pre-allocated output tensor is not supported for proxy.");return Sr(),new Promise((n,o)=>{kr("run",[n,o]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:a,options:s}};zt.postMessage(d,os(l))})}else return ns(e,t,r,a,i,s)},Kh=async e=>{if(_r())return Sr(),new Promise((t,r)=>{kr("end-profiling",[t,r]);let a={type:"end-profiling",in:e};zt.postMessage(a)});ss(e)}}),mn,qd,Zh,n0=ue(()=>{Yt(),Qh(),De(),Nn(),Gp(),mn=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},qd=e=>{switch(e[3]){case"cpu":return new ar(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Vn(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:a,dispose:i}=e[2];return ar.fromGpuBuffer(r,{dataType:t,dims:e[1],download:a,dispose:i})}case"ml-tensor":{let t=e[0];if(!Wn(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:a,dispose:i}=e[2];return ar.fromMLTensor(r,{dataType:t,dims:e[1],download:a,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Zh=class{async fetchModelAndCopyToWasmMemory(e){return Hh(await Ln(e))}async loadModel(e,t){nr();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await Gh(r,t),Zt()}async dispose(){return Fh(this.sessionId)}async run(e,t,r){nr();let a=[],i=[];Object.entries(e).forEach(f=>{let u=f[0],m=f[1],_=this.inputNames.indexOf(u);if(_===-1)throw new Error(`invalid input '${u}'`);a.push(m),i.push(_)});let s=[],n=[];Object.entries(t).forEach(f=>{let u=f[0],m=f[1],_=this.outputNames.indexOf(u);if(_===-1)throw new Error(`invalid output '${u}'`);s.push(m),n.push(_)});let o=a.map((f,u)=>mn(f,()=>`input "${this.inputNames[i[u]]}"`)),l=s.map((f,u)=>f?mn(f,()=>`output "${this.outputNames[n[u]]}"`):null),d=await jh(this.sessionId,i,o,n,l,r),c={};for(let f=0;f<d.length;f++)c[this.outputNames[n[f]]]=s[f]??qd(d[f]);return Zt(),c}startProfiling(){}endProfiling(){Kh(this.sessionId)}}}),Yh={};_a(Yh,{OnnxruntimeWebAssemblyBackend:()=>An,initializeFlags:()=>zn,wasmBackend:()=>Xh});var zn,An,Xh,s0=ue(()=>{Yt(),Qh(),n0(),zn=()=>{if((typeof nt.wasm.initTimeout!="number"||nt.wasm.initTimeout<0)&&(nt.wasm.initTimeout=0),nt.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof nt.wasm.proxy!="boolean"&&(nt.wasm.proxy=!1),typeof nt.wasm.trace!="boolean"&&(nt.wasm.trace=!1),typeof nt.wasm.numThreads!="number"||!Number.isInteger(nt.wasm.numThreads)||nt.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)nt.wasm.numThreads=1;else{let e=typeof navigator>"u"?Hg("node:os").cpus().length:navigator.hardwareConcurrency;nt.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},An=class{async init(e){zn(),await Lh(),await qh(e)}async createInferenceSessionHandler(e,t){let r=new Zh;return await r.loadModel(e,t),Promise.resolve(r)}},Xh=new An});Yt();Yt();Yt();var o0="1.21.0-dev.20250206-d981b153d3";{let e=(s0(),Ka(Yh)).wasmBackend;Mr("webgpu",e,5),Mr("webnn",e,5),Mr("cpu",e,10),Mr("wasm",e,10)}Object.defineProperty(nt.versions,"web",{value:o0,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hd(e,t,r){const a=e.slice();return a[10]=t[r],a}function Gd(e){let t,r,a=e[1].name+"",i,s,n,o,l,d,c,f,u,m,_=e[3].t("Close")+"",y,w,$,b;o=new mp({props:{className:"size-5"}});function k(T,C){return T[2].length?u0:l0}let S=k(e),E=S(e);return{c(){t=M("div"),r=M("div"),i=be(a),s=ce(),n=M("button"),Se(o.$$.fragment),l=ce(),d=M("div"),c=M("div"),E.c(),f=ce(),u=M("div"),m=M("button"),y=be(_),this.h()},l(T){t=P(T,"DIV",{class:!0});var C=V(t);r=P(C,"DIV",{class:!0});var R=V(r);i=$e(R,a),R.forEach(I),s=fe(C),n=P(C,"BUTTON",{class:!0,"aria-label":!0});var D=V(n);Ee(o.$$.fragment,D),D.forEach(I),C.forEach(I),l=fe(T),d=P(T,"DIV",{class:!0});var H=V(d);c=P(H,"DIV",{class:!0});var re=V(c);E.l(re),re.forEach(I),f=fe(H),u=P(H,"DIV",{class:!0});var ae=V(u);m=P(ae,"BUTTON",{class:!0,type:!0});var j=V(m);y=$e(j,_),j.forEach(I),ae.forEach(I),H.forEach(I),this.h()},h(){O(r,"class","text-lg font-medium self-center"),O(n,"class","self-center"),O(n,"aria-label","Close"),O(t,"class","flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"),O(c,"class","mb-2"),O(m,"class","px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full"),O(m,"type","button"),O(u,"class","flex justify-end pt-2"),O(d,"class","px-5 pb-4 dark:text-gray-200")},m(T,C){de(T,t,C),z(t,r),z(r,i),z(t,s),z(t,n),Te(o,n,null),de(T,l,C),de(T,d,C),z(d,c),E.m(c,null),z(d,f),z(d,u),z(u,m),z(m,y),w=!0,$||(b=[ft(n,"click",e[5]),ft(m,"click",e[5])],$=!0)},p(T,C){(!w||C&2)&&a!==(a=T[1].name+"")&&ze(i,a),S===(S=k(T))&&E?E.p(T,C):(E.d(1),E=S(T),E&&(E.c(),E.m(c,null))),(!w||C&8)&&_!==(_=T[3].t("Close")+"")&&ze(y,_)},i(T){w||(Q(o.$$.fragment,T),w=!0)},o(T){J(o.$$.fragment,T),w=!1},d(T){T&&(I(t),I(l),I(d)),Ie(o),E.d(),$=!1,Qr(b)}}}function l0(e){let t,r="-";return{c(){t=M("span"),t.textContent=r},l(a){t=P(a,"SPAN",{"data-svelte-h":!0}),Ga(t)!=="svelte-1s4sarz"&&(t.textContent=r)},m(a,i){de(a,t,i)},p:pt,d(a){a&&I(t)}}}function u0(e){let t,r=yr(e[2]),a=[];for(let i=0;i<r.length;i+=1)a[i]=Fd(Hd(e,r,i));return{c(){t=M("div");for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){t=P(i,"DIV",{class:!0});var s=V(t);for(let n=0;n<a.length;n+=1)a[n].l(s);s.forEach(I),this.h()},h(){O(t,"class","flex flex-wrap gap-1 mt-1 -mx-1")},m(i,s){de(i,t,s);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(t,null)},p(i,s){if(s&4){r=yr(i[2]);let n;for(n=0;n<r.length;n+=1){const o=Hd(i,r,n);a[n]?a[n].p(o,s):(a[n]=Fd(o),a[n].c(),a[n].m(t,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=r.length}},d(i){i&&I(t),pp(a,i)}}}function Fd(e){let t,r=e[10].tag+"",a,i,s,n=e[10].count+"",o,l;return{c(){t=M("span"),a=be(r),i=ce(),s=M("span"),o=be(n),l=ce(),this.h()},l(d){t=P(d,"SPAN",{class:!0});var c=V(t);a=$e(c,r),i=fe(c),s=P(c,"SPAN",{class:!0});var f=V(s);o=$e(f,n),f.forEach(I),l=fe(c),c.forEach(I),this.h()},h(){O(s,"class","text-gray-500 font-medium"),O(t,"class","px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-850 text-xs")},m(d,c){de(d,t,c),z(t,a),z(t,i),z(t,s),z(s,o),z(t,l)},p(d,c){c&4&&r!==(r=d[10].tag+"")&&ze(a,r),c&4&&n!==(n=d[10].count+"")&&ze(o,n)},d(d){d&&I(t)}}}function d0(e){let t,r,a=e[1]&&Gd(e);return{c(){a&&a.c(),t=ir()},l(i){a&&a.l(i),t=ir()},m(i,s){a&&a.m(i,s),de(i,t,s),r=!0},p(i,s){i[1]?a?(a.p(i,s),s&2&&Q(a,1)):(a=Gd(i),a.c(),Q(a,1),a.m(t.parentNode,t)):a&&(Ke(),J(a,1,1,()=>{a=null}),Qe())},i(i){r||(Q(a),r=!0)},o(i){J(a),r=!1},d(i){i&&I(t),a&&a.d(i)}}}function p0(e){let t,r,a;function i(n){e[8](n)}let s={size:"sm",$$slots:{default:[d0]},$$scope:{ctx:e}};return e[0]!==void 0&&(s.show=e[0]),t=new hp({props:s}),Gr.push(()=>Fr(t,"show",i)),{c(){Se(t.$$.fragment)},l(n){Ee(t.$$.fragment,n)},m(n,o){Te(t,n,o),a=!0},p(n,[o]){const l={};o&8206&&(l.$$scope={dirty:o,ctx:n}),!r&&o&1&&(r=!0,l.show=n[0],jr(()=>r=!1)),t.$set(l)},i(n){a||(Q(t.$$.fragment,n),a=!0)},o(n){J(t.$$.fragment,n),a=!1},d(n){Ie(t,n)}}}function c0(e,t,r){let a,i,{show:s=!1}=t,{model:n=null}=t,{feedbacks:o=[]}=t,{onClose:l=()=>{}}=t;const d=Kr("i18n");ur(e,d,m=>r(3,i=m));const c=()=>{r(0,s=!1),l()},f=(m,_,y=5)=>{const w=new Map;return _.filter($=>$.data.model_id===m).forEach($=>{($.data.tags||[]).forEach(b=>{w.set(b,(w.get(b)||0)+1)})}),Array.from(w.entries()).sort(($,b)=>b[1]-$[1]).slice(0,y).map(([$,b])=>({tag:$,count:b}))};function u(m){s=m,r(0,s)}return e.$$set=m=>{"show"in m&&r(0,s=m.show),"model"in m&&r(1,n=m.model),"feedbacks"in m&&r(6,o=m.feedbacks),"onClose"in m&&r(7,l=m.onClose)},e.$$.update=()=>{e.$$.dirty&66&&r(2,a=n?f(n.id,o):[])},[s,n,a,i,d,c,o,l,u]}class f0 extends Lr{constructor(t){super(),qr(this,t,c0,p0,Hr,{show:0,model:1,feedbacks:6,onClose:7})}}const{Map:h0}=_g;function jd(e,t,r){const a=e.slice();return a[10]=t[r],a[38]=r,a}function m0(e){let t,r,a,i,s,n,o,l,d;return a=new Sg({props:{className:"size-3"}}),{c(){t=M("div"),r=M("div"),Se(a.$$.fragment),i=ce(),s=M("input"),this.h()},l(c){t=P(c,"DIV",{class:!0});var f=V(t);r=P(f,"DIV",{class:!0});var u=V(r);Ee(a.$$.fragment,u),u.forEach(I),i=fe(f),s=P(f,"INPUT",{class:!0,placeholder:!0}),f.forEach(I),this.h()},h(){O(r,"class","self-center ml-1 mr-3"),O(s,"class","w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"),O(s,"placeholder",n=e[9].t("Search")),O(t,"class","flex flex-1")},m(c,f){de(c,t,f),z(t,r),Te(a,r,null),z(t,i),z(t,s),po(s,e[2]),o=!0,l||(d=[ft(s,"input",e[17]),ft(s,"focus",e[18])],l=!0)},p(c,f){(!o||f[0]&512&&n!==(n=c[9].t("Search")))&&O(s,"placeholder",n),f[0]&4&&s.value!==c[2]&&po(s,c[2])},i(c){o||(Q(a.$$.fragment,c),o=!0)},o(c){J(a.$$.fragment,c),o=!1},d(c){c&&I(t),Ie(a),l=!1,Qr(d)}}}function Kd(e){let t,r,a,i;return a=new gp({props:{className:"size-5"}}),{c(){t=M("div"),r=M("div"),Se(a.$$.fragment),this.h()},l(s){t=P(s,"DIV",{class:!0});var n=V(t);r=P(n,"DIV",{class:!0});var o=V(r);Ee(a.$$.fragment,o),o.forEach(I),n.forEach(I),this.h()},h(){O(r,"class","m-auto"),O(t,"class","absolute top-0 bottom-0 left-0 right-0 flex")},m(s,n){de(s,t,n),z(t,r),Te(a,r,null),i=!0},i(s){i||(Q(a.$$.fragment,s),i=!0)},o(s){J(a.$$.fragment,s),i=!1},d(s){s&&I(t),Ie(a)}}}function g0(e){let t,r,a,i,s,n=e[9].t("RK")+"",o,l,d,c,f,u,m,_=e[9].t("Model")+"",y,w,$,b,k,S,E,T=e[9].t("Rating")+"",C,R,D,H,re,ae,j,ee=e[9].t("Won")+"",B,oe,N,U,Z,te,L,ie=e[9].t("Lost")+"",X,W,G,se,Ae,Ce,we=[],me=new h0,Ue,Ve,Be,lt;const Et=[b0,y0],Me=[];function et(le,Oe){return le[3]==="rating"?0:1}d=et(e),c=Me[d]=Et[d](e);const Ct=[x0,w0],rt=[];function At(le,Oe){return le[3]==="name"?0:1}$=At(e),b=rt[$]=Ct[$](e);const wt=[T0,E0],bt=[];function ve(le,Oe){return le[3]==="rating"?0:1}D=ve(e),H=bt[D]=wt[D](e);const Re=[A0,z0],tt=[];function st(le,Oe){return le[3]==="won"?0:1}N=st(e),U=tt[N]=Re[N](e);const xt=[N0,R0],ut=[];function kt(le,Oe){return le[3]==="lost"?0:1}G=kt(e),se=ut[G]=xt[G](e);let Le=yr(e[8]);const He=le=>le[10].id;for(let le=0;le<Le.length;le+=1){let Oe=jd(e,Le,le),Ge=He(Oe);me.set(Ge,we[le]=Qd(Ge,Oe))}return{c(){t=M("table"),r=M("thead"),a=M("tr"),i=M("th"),s=M("div"),o=be(n),l=ce(),c.c(),f=ce(),u=M("th"),m=M("div"),y=be(_),w=ce(),b.c(),k=ce(),S=M("th"),E=M("div"),C=be(T),R=ce(),H.c(),re=ce(),ae=M("th"),j=M("div"),B=be(ee),oe=ce(),U.c(),Z=ce(),te=M("th"),L=M("div"),X=be(ie),W=ce(),se.c(),Ae=ce(),Ce=M("tbody");for(let le=0;le<we.length;le+=1)we[le].c();this.h()},l(le){t=P(le,"TABLE",{class:!0});var Oe=V(t);r=P(Oe,"THEAD",{class:!0});var Ge=V(r);a=P(Ge,"TR",{class:!0});var Xe=V(a);i=P(Xe,"TH",{scope:!0,class:!0});var ht=V(i);s=P(ht,"DIV",{class:!0});var at=V(s);o=$e(at,n),l=fe(at),c.l(at),at.forEach(I),ht.forEach(I),f=fe(Xe),u=P(Xe,"TH",{scope:!0,class:!0});var $t=V(u);m=P($t,"DIV",{class:!0});var Ot=V(m);y=$e(Ot,_),w=fe(Ot),b.l(Ot),Ot.forEach(I),$t.forEach(I),k=fe(Xe),S=P(Xe,"TH",{scope:!0,class:!0});var Ht=V(S);E=P(Ht,"DIV",{class:!0});var Dt=V(E);C=$e(Dt,T),R=fe(Dt),H.l(Dt),Dt.forEach(I),Ht.forEach(I),re=fe(Xe),ae=P(Xe,"TH",{scope:!0,class:!0});var Tt=V(ae);j=P(Tt,"DIV",{class:!0});var Pt=V(j);B=$e(Pt,ee),oe=fe(Pt),U.l(Pt),Pt.forEach(I),Tt.forEach(I),Z=fe(Xe),te=P(Xe,"TH",{scope:!0,class:!0});var Xt=V(te);L=P(Xt,"DIV",{class:!0});var Ut=V(L);X=$e(Ut,ie),W=fe(Ut),se.l(Ut),Ut.forEach(I),Xt.forEach(I),Xe.forEach(I),Ge.forEach(I),Ae=fe(Oe),Ce=P(Oe,"TBODY",{class:!0});var Vt=V(Ce);for(let Wt=0;Wt<we.length;Wt+=1)we[Wt].l(Vt);Vt.forEach(I),Oe.forEach(I),this.h()},h(){O(s,"class","flex gap-1.5 items-center"),O(i,"scope","col"),O(i,"class","px-3 py-1.5 cursor-pointer select-none w-3"),O(m,"class","flex gap-1.5 items-center"),O(u,"scope","col"),O(u,"class","px-3 py-1.5 cursor-pointer select-none"),O(E,"class","flex gap-1.5 items-center justify-end"),O(S,"scope","col"),O(S,"class","px-3 py-1.5 text-right cursor-pointer select-none w-fit"),O(j,"class","flex gap-1.5 items-center justify-end"),O(ae,"scope","col"),O(ae,"class","px-3 py-1.5 text-right cursor-pointer select-none w-5"),O(L,"class","flex gap-1.5 items-center justify-end"),O(te,"scope","col"),O(te,"class","px-3 py-1.5 text-right cursor-pointer select-none w-5"),O(a,"class",""),O(r,"class","text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-850 dark:text-gray-400 -translate-y-0.5"),O(Ce,"class",""),O(t,"class",Ue="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto max-w-full rounded "+(e[5]?"opacity-20":""))},m(le,Oe){de(le,t,Oe),z(t,r),z(r,a),z(a,i),z(i,s),z(s,o),z(s,l),Me[d].m(s,null),z(a,f),z(a,u),z(u,m),z(m,y),z(m,w),rt[$].m(m,null),z(a,k),z(a,S),z(S,E),z(E,C),z(E,R),bt[D].m(E,null),z(a,re),z(a,ae),z(ae,j),z(j,B),z(j,oe),tt[N].m(j,null),z(a,Z),z(a,te),z(te,L),z(L,X),z(L,W),ut[G].m(L,null),z(t,Ae),z(t,Ce);for(let Ge=0;Ge<we.length;Ge+=1)we[Ge]&&we[Ge].m(Ce,null);Ve=!0,Be||(lt=[ft(i,"click",e[19]),ft(u,"click",e[20]),ft(S,"click",e[21]),ft(ae,"click",e[22]),ft(te,"click",e[23])],Be=!0)},p(le,Oe){(!Ve||Oe[0]&512)&&n!==(n=le[9].t("RK")+"")&&ze(o,n);let Ge=d;d=et(le),d===Ge?Me[d].p(le,Oe):(Ke(),J(Me[Ge],1,1,()=>{Me[Ge]=null}),Qe(),c=Me[d],c?c.p(le,Oe):(c=Me[d]=Et[d](le),c.c()),Q(c,1),c.m(s,null)),(!Ve||Oe[0]&512)&&_!==(_=le[9].t("Model")+"")&&ze(y,_);let Xe=$;$=At(le),$===Xe?rt[$].p(le,Oe):(Ke(),J(rt[Xe],1,1,()=>{rt[Xe]=null}),Qe(),b=rt[$],b?b.p(le,Oe):(b=rt[$]=Ct[$](le),b.c()),Q(b,1),b.m(m,null)),(!Ve||Oe[0]&512)&&T!==(T=le[9].t("Rating")+"")&&ze(C,T);let ht=D;D=ve(le),D===ht?bt[D].p(le,Oe):(Ke(),J(bt[ht],1,1,()=>{bt[ht]=null}),Qe(),H=bt[D],H?H.p(le,Oe):(H=bt[D]=wt[D](le),H.c()),Q(H,1),H.m(E,null)),(!Ve||Oe[0]&512)&&ee!==(ee=le[9].t("Won")+"")&&ze(B,ee);let at=N;N=st(le),N===at?tt[N].p(le,Oe):(Ke(),J(tt[at],1,1,()=>{tt[at]=null}),Qe(),U=tt[N],U?U.p(le,Oe):(U=tt[N]=Re[N](le),U.c()),Q(U,1),U.m(j,null)),(!Ve||Oe[0]&512)&&ie!==(ie=le[9].t("Lost")+"")&&ze(X,ie);let $t=G;G=kt(le),G===$t?ut[G].p(le,Oe):(Ke(),J(ut[$t],1,1,()=>{ut[$t]=null}),Qe(),se=ut[G],se?se.p(le,Oe):(se=ut[G]=xt[G](le),se.c()),Q(se,1),se.m(L,null)),Oe[0]&8448&&(Le=yr(le[8]),we=fp(we,Oe,He,1,le,Le,me,Ce,yg,Qd,null,jd)),(!Ve||Oe[0]&32&&Ue!==(Ue="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto max-w-full rounded "+(le[5]?"opacity-20":"")))&&O(t,"class",Ue)},i(le){Ve||(Q(c),Q(b),Q(H),Q(U),Q(se),Ve=!0)},o(le){J(c),J(b),J(H),J(U),J(se),Ve=!1},d(le){le&&I(t),Me[d].d(),rt[$].d(),bt[D].d(),tt[N].d(),ut[G].d();for(let Oe=0;Oe<we.length;Oe+=1)we[Oe].d();Be=!1,Qr(lt)}}}function _0(e){let t,r=e[9].t("No models found")+"",a;return{c(){t=M("div"),a=be(r),this.h()},l(i){t=P(i,"DIV",{class:!0});var s=V(t);a=$e(s,r),s.forEach(I),this.h()},h(){O(t,"class","text-center text-xs text-gray-500 dark:text-gray-400 py-1")},m(i,s){de(i,t,s),z(t,a)},p(i,s){s[0]&512&&r!==(r=i[9].t("No models found")+"")&&ze(a,r)},i:pt,o:pt,d(i){i&&I(t)}}}function y0(e){let t,r,a;return r=new yt({props:{className:"size-2"}}),{c(){t=M("span"),Se(r.$$.fragment),this.h()},l(i){t=P(i,"SPAN",{class:!0});var s=V(t);Ee(r.$$.fragment,s),s.forEach(I),this.h()},h(){O(t,"class","invisible")},m(i,s){de(i,t,s),Te(r,t,null),a=!0},p:pt,i(i){a||(Q(r.$$.fragment,i),a=!0)},o(i){J(r.$$.fragment,i),a=!1},d(i){i&&I(t),Ie(r)}}}function b0(e){let t,r,a,i;const s=[v0,$0],n=[];function o(l,d){return l[4]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=M("span"),a.c(),this.h()},l(l){t=P(l,"SPAN",{class:!0});var d=V(t);a.l(d),d.forEach(I),this.h()},h(){O(t,"class","font-normal")},m(l,d){de(l,t,d),n[r].m(t,null),i=!0},p(l,d){let c=r;r=o(l),r!==c&&(Ke(),J(n[c],1,1,()=>{n[c]=null}),Qe(),a=n[r],a||(a=n[r]=s[r](l),a.c()),Q(a,1),a.m(t,null))},i(l){i||(Q(a),i=!0)},o(l){J(a),i=!1},d(l){l&&I(t),n[r].d()}}}function $0(e){let t,r;return t=new dr({props:{className:"size-2"}}),{c(){Se(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,i){Te(t,a,i),r=!0},i(a){r||(Q(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){Ie(t,a)}}}function v0(e){let t,r;return t=new yt({props:{className:"size-2"}}),{c(){Se(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,i){Te(t,a,i),r=!0},i(a){r||(Q(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){Ie(t,a)}}}function w0(e){let t,r,a;return r=new yt({props:{className:"size-2"}}),{c(){t=M("span"),Se(r.$$.fragment),this.h()},l(i){t=P(i,"SPAN",{class:!0});var s=V(t);Ee(r.$$.fragment,s),s.forEach(I),this.h()},h(){O(t,"class","invisible")},m(i,s){de(i,t,s),Te(r,t,null),a=!0},p:pt,i(i){a||(Q(r.$$.fragment,i),a=!0)},o(i){J(r.$$.fragment,i),a=!1},d(i){i&&I(t),Ie(r)}}}function x0(e){let t,r,a,i;const s=[S0,k0],n=[];function o(l,d){return l[4]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=M("span"),a.c(),this.h()},l(l){t=P(l,"SPAN",{class:!0});var d=V(t);a.l(d),d.forEach(I),this.h()},h(){O(t,"class","font-normal")},m(l,d){de(l,t,d),n[r].m(t,null),i=!0},p(l,d){let c=r;r=o(l),r!==c&&(Ke(),J(n[c],1,1,()=>{n[c]=null}),Qe(),a=n[r],a||(a=n[r]=s[r](l),a.c()),Q(a,1),a.m(t,null))},i(l){i||(Q(a),i=!0)},o(l){J(a),i=!1},d(l){l&&I(t),n[r].d()}}}function k0(e){let t,r;return t=new dr({props:{className:"size-2"}}),{c(){Se(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,i){Te(t,a,i),r=!0},i(a){r||(Q(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){Ie(t,a)}}}function S0(e){let t,r;return t=new yt({props:{className:"size-2"}}),{c(){Se(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,i){Te(t,a,i),r=!0},i(a){r||(Q(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){Ie(t,a)}}}function E0(e){let t,r,a;return r=new yt({props:{className:"size-2"}}),{c(){t=M("span"),Se(r.$$.fragment),this.h()},l(i){t=P(i,"SPAN",{class:!0});var s=V(t);Ee(r.$$.fragment,s),s.forEach(I),this.h()},h(){O(t,"class","invisible")},m(i,s){de(i,t,s),Te(r,t,null),a=!0},p:pt,i(i){a||(Q(r.$$.fragment,i),a=!0)},o(i){J(r.$$.fragment,i),a=!1},d(i){i&&I(t),Ie(r)}}}function T0(e){let t,r,a,i;const s=[C0,I0],n=[];function o(l,d){return l[4]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=M("span"),a.c(),this.h()},l(l){t=P(l,"SPAN",{class:!0});var d=V(t);a.l(d),d.forEach(I),this.h()},h(){O(t,"class","font-normal")},m(l,d){de(l,t,d),n[r].m(t,null),i=!0},p(l,d){let c=r;r=o(l),r!==c&&(Ke(),J(n[c],1,1,()=>{n[c]=null}),Qe(),a=n[r],a||(a=n[r]=s[r](l),a.c()),Q(a,1),a.m(t,null))},i(l){i||(Q(a),i=!0)},o(l){J(a),i=!1},d(l){l&&I(t),n[r].d()}}}function I0(e){let t,r;return t=new dr({props:{className:"size-2"}}),{c(){Se(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,i){Te(t,a,i),r=!0},i(a){r||(Q(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){Ie(t,a)}}}function C0(e){let t,r;return t=new yt({props:{className:"size-2"}}),{c(){Se(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,i){Te(t,a,i),r=!0},i(a){r||(Q(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){Ie(t,a)}}}function z0(e){let t,r,a;return r=new yt({props:{className:"size-2"}}),{c(){t=M("span"),Se(r.$$.fragment),this.h()},l(i){t=P(i,"SPAN",{class:!0});var s=V(t);Ee(r.$$.fragment,s),s.forEach(I),this.h()},h(){O(t,"class","invisible")},m(i,s){de(i,t,s),Te(r,t,null),a=!0},p:pt,i(i){a||(Q(r.$$.fragment,i),a=!0)},o(i){J(r.$$.fragment,i),a=!1},d(i){i&&I(t),Ie(r)}}}function A0(e){let t,r,a,i;const s=[D0,O0],n=[];function o(l,d){return l[4]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=M("span"),a.c(),this.h()},l(l){t=P(l,"SPAN",{class:!0});var d=V(t);a.l(d),d.forEach(I),this.h()},h(){O(t,"class","font-normal")},m(l,d){de(l,t,d),n[r].m(t,null),i=!0},p(l,d){let c=r;r=o(l),r!==c&&(Ke(),J(n[c],1,1,()=>{n[c]=null}),Qe(),a=n[r],a||(a=n[r]=s[r](l),a.c()),Q(a,1),a.m(t,null))},i(l){i||(Q(a),i=!0)},o(l){J(a),i=!1},d(l){l&&I(t),n[r].d()}}}function O0(e){let t,r;return t=new dr({props:{className:"size-2"}}),{c(){Se(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,i){Te(t,a,i),r=!0},i(a){r||(Q(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){Ie(t,a)}}}function D0(e){let t,r;return t=new yt({props:{className:"size-2"}}),{c(){Se(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,i){Te(t,a,i),r=!0},i(a){r||(Q(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){Ie(t,a)}}}function R0(e){let t,r,a;return r=new yt({props:{className:"size-2"}}),{c(){t=M("span"),Se(r.$$.fragment),this.h()},l(i){t=P(i,"SPAN",{class:!0});var s=V(t);Ee(r.$$.fragment,s),s.forEach(I),this.h()},h(){O(t,"class","invisible")},m(i,s){de(i,t,s),Te(r,t,null),a=!0},p:pt,i(i){a||(Q(r.$$.fragment,i),a=!0)},o(i){J(r.$$.fragment,i),a=!1},d(i){i&&I(t),Ie(r)}}}function N0(e){let t,r,a,i;const s=[M0,B0],n=[];function o(l,d){return l[4]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=M("span"),a.c(),this.h()},l(l){t=P(l,"SPAN",{class:!0});var d=V(t);a.l(d),d.forEach(I),this.h()},h(){O(t,"class","font-normal")},m(l,d){de(l,t,d),n[r].m(t,null),i=!0},p(l,d){let c=r;r=o(l),r!==c&&(Ke(),J(n[c],1,1,()=>{n[c]=null}),Qe(),a=n[r],a||(a=n[r]=s[r](l),a.c()),Q(a,1),a.m(t,null))},i(l){i||(Q(a),i=!0)},o(l){J(a),i=!1},d(l){l&&I(t),n[r].d()}}}function B0(e){let t,r;return t=new dr({props:{className:"size-2"}}),{c(){Se(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,i){Te(t,a,i),r=!0},i(a){r||(Q(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){Ie(t,a)}}}function M0(e){let t,r;return t=new yt({props:{className:"size-2"}}),{c(){Se(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,i){Te(t,a,i),r=!0},i(a){r||(Q(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){Ie(t,a)}}}function P0(e){let t,r=(e[10].stats.won/e[10].stats.count*100).toFixed(1)+"",a,i,s,n,o=e[10].stats.won+"",l;return{c(){t=M("span"),a=be(r),i=be("%"),s=ce(),n=M("span"),l=be(o),this.h()},l(d){t=P(d,"SPAN",{class:!0});var c=V(t);a=$e(c,r),i=$e(c,"%"),c.forEach(I),s=fe(d),n=P(d,"SPAN",{class:!0});var f=V(n);l=$e(f,o),f.forEach(I),this.h()},h(){O(t,"class","hidden group-hover:inline"),O(n,"class","group-hover:hidden")},m(d,c){de(d,t,c),z(t,a),z(t,i),de(d,s,c),de(d,n,c),z(n,l)},p(d,c){c[0]&256&&r!==(r=(d[10].stats.won/d[10].stats.count*100).toFixed(1)+"")&&ze(a,r),c[0]&256&&o!==(o=d[10].stats.won+"")&&ze(l,o)},d(d){d&&(I(t),I(s),I(n))}}}function U0(e){let t;return{c(){t=be("-")},l(r){t=$e(r,"-")},m(r,a){de(r,t,a)},p:pt,d(r){r&&I(t)}}}function V0(e){let t,r=(e[10].stats.lost/e[10].stats.count*100).toFixed(1)+"",a,i,s,n,o=e[10].stats.lost+"",l;return{c(){t=M("span"),a=be(r),i=be("%"),s=ce(),n=M("span"),l=be(o),this.h()},l(d){t=P(d,"SPAN",{class:!0});var c=V(t);a=$e(c,r),i=$e(c,"%"),c.forEach(I),s=fe(d),n=P(d,"SPAN",{class:!0});var f=V(n);l=$e(f,o),f.forEach(I),this.h()},h(){O(t,"class","hidden group-hover:inline"),O(n,"class","group-hover:hidden")},m(d,c){de(d,t,c),z(t,a),z(t,i),de(d,s,c),de(d,n,c),z(n,l)},p(d,c){c[0]&256&&r!==(r=(d[10].stats.lost/d[10].stats.count*100).toFixed(1)+"")&&ze(a,r),c[0]&256&&o!==(o=d[10].stats.lost+"")&&ze(l,o)},d(d){d&&(I(t),I(s),I(n))}}}function W0(e){let t;return{c(){t=be("-")},l(r){t=$e(r,"-")},m(r,a){de(r,t,a)},p:pt,d(r){r&&I(t)}}}function Qd(e,t){var ie;let r,a,i,s=(((ie=t[10])==null?void 0:ie.rating)!=="-"?t[38]+1:"-")+"",n,o,l,d,c,f,u,m,_,y,w=t[10].name+"",$,b,k,S=t[10].rating+"",E,T,C,R,D,H,re,ae,j,ee;function B(X,W){return X[10].stats.won==="-"?U0:P0}let oe=B(t),N=oe(t);function U(X,W){return X[10].stats.lost==="-"?W0:V0}let Z=U(t),te=Z(t);function L(){return t[24](t[10])}return{key:e,first:null,c(){r=M("tr"),a=M("td"),i=M("div"),n=be(s),o=ce(),l=M("td"),d=M("div"),c=M("div"),f=M("img"),_=ce(),y=M("div"),$=be(w),b=ce(),k=M("td"),E=be(S),T=ce(),C=M("td"),R=M("div"),N.c(),D=ce(),H=M("td"),re=M("div"),te.c(),ae=ce(),this.h()},l(X){r=P(X,"TR",{class:!0});var W=V(r);a=P(W,"TD",{class:!0});var G=V(a);i=P(G,"DIV",{class:!0});var se=V(i);n=$e(se,s),se.forEach(I),G.forEach(I),o=fe(W),l=P(W,"TD",{class:!0});var Ae=V(l);d=P(Ae,"DIV",{class:!0});var Ce=V(d);c=P(Ce,"DIV",{class:!0});var we=V(c);f=P(we,"IMG",{src:!0,alt:!0,class:!0}),we.forEach(I),_=fe(Ce),y=P(Ce,"DIV",{class:!0});var me=V(y);$=$e(me,w),me.forEach(I),Ce.forEach(I),Ae.forEach(I),b=fe(W),k=P(W,"TD",{class:!0});var Ue=V(k);E=$e(Ue,S),Ue.forEach(I),T=fe(W),C=P(W,"TD",{class:!0});var Ve=V(C);R=P(Ve,"DIV",{class:!0});var Be=V(R);N.l(Be),Be.forEach(I),Ve.forEach(I),D=fe(W),H=P(W,"TD",{class:!0});var lt=V(H);re=P(lt,"DIV",{class:!0});var Et=V(re);te.l(Et),Et.forEach(I),lt.forEach(I),ae=fe(W),W.forEach(I),this.h()},h(){var X,W,G;O(i,"class","line-clamp-1"),O(a,"class","px-3 py-1.5 text-left font-medium text-gray-900 dark:text-white w-fit"),Fa(f.src,u=((G=(W=(X=t[10])==null?void 0:X.info)==null?void 0:W.meta)==null?void 0:G.profile_image_url)??`${ja}/favicon.png`)||O(f,"src",u),O(f,"alt",m=t[10].name),O(f,"class","size-5 rounded-full object-cover shrink-0"),O(c,"class","shrink-0"),O(y,"class","font-medium text-gray-800 dark:text-gray-200 pr-4"),O(d,"class","flex items-center gap-2"),O(l,"class","px-3 py-1.5 flex flex-col justify-center"),O(k,"class","px-3 py-1.5 text-right font-medium text-gray-900 dark:text-white w-max"),O(R,"class","w-10"),O(C,"class","px-3 py-1.5 text-right font-semibold text-green-500"),O(re,"class","w-10"),O(H,"class","px-3 py-1.5 text-right font-semibold text-red-500"),O(r,"class","bg-white dark:bg-gray-900 dark:border-gray-850 text-xs group cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-850/50 transition"),this.first=r},m(X,W){de(X,r,W),z(r,a),z(a,i),z(i,n),z(r,o),z(r,l),z(l,d),z(d,c),z(c,f),z(d,_),z(d,y),z(y,$),z(r,b),z(r,k),z(k,E),z(r,T),z(r,C),z(C,R),N.m(R,null),z(r,D),z(r,H),z(H,re),te.m(re,null),z(r,ae),j||(ee=ft(r,"click",L),j=!0)},p(X,W){var G,se,Ae,Ce;t=X,W[0]&256&&s!==(s=(((G=t[10])==null?void 0:G.rating)!=="-"?t[38]+1:"-")+"")&&ze(n,s),W[0]&256&&!Fa(f.src,u=((Ce=(Ae=(se=t[10])==null?void 0:se.info)==null?void 0:Ae.meta)==null?void 0:Ce.profile_image_url)??`${ja}/favicon.png`)&&O(f,"src",u),W[0]&256&&m!==(m=t[10].name)&&O(f,"alt",m),W[0]&256&&w!==(w=t[10].name+"")&&ze($,w),W[0]&256&&S!==(S=t[10].rating+"")&&ze(E,S),oe===(oe=B(t))&&N?N.p(t,W):(N.d(1),N=oe(t),N&&(N.c(),N.m(R,null))),Z===(Z=U(t))&&te?te.p(t,W):(te.d(1),te=Z(t),te&&(te.c(),te.m(re,null)))},d(X){X&&I(r),N.d(),te.d(),j=!1,ee()}}}function L0(e){let t,r,a,i,s,n,o=e[9].t("Leaderboard")+"",l,d,c,f,u,m=e[1].length+"",_,y,w,$,b,k,S,E,T,C,R,D,H,re,ae=e[9].t("The evaluation leaderboard is based on the Elo rating system and is updated in real-time.")+"",j,ee,B=e[9].t("The leaderboard is currently in beta, and we may adjust the rating calculations as we refine the algorithm.")+"",oe,N;function U(W){e[16](W)}let Z={model:e[7],feedbacks:e[0],onClose:e[14]};e[6]!==void 0&&(Z.show=e[6]),t=new f0({props:Z}),Gr.push(()=>Fr(t,"show",U)),$=new Zr({props:{content:e[9].t("Re-rank models by topic similarity"),$$slots:{default:[m0]},$$scope:{ctx:e}}});let te=e[5]&&Kd();const L=[_0,g0],ie=[];function X(W,G){return(W[1]??[]).length===0?0:1}return E=X(e),T=ie[E]=L[E](e),{c(){Se(t.$$.fragment),a=ce(),i=M("div"),s=M("div"),n=M("div"),l=be(o),d=ce(),c=M("div"),f=ce(),u=M("span"),_=be(m),y=ce(),w=M("div"),Se($.$$.fragment),b=ce(),k=M("div"),te&&te.c(),S=ce(),T.c(),C=ce(),R=M("div"),D=M("div"),H=M("div"),re=be("ⓘ "),j=be(ae),ee=ce(),oe=be(B),this.h()},l(W){Ee(t.$$.fragment,W),a=fe(W),i=P(W,"DIV",{class:!0});var G=V(i);s=P(G,"DIV",{class:!0});var se=V(s);n=P(se,"DIV",{class:!0});var Ae=V(n);l=$e(Ae,o),Ae.forEach(I),d=fe(se),c=P(se,"DIV",{class:!0}),V(c).forEach(I),f=fe(se),u=P(se,"SPAN",{class:!0});var Ce=V(u);_=$e(Ce,m),Ce.forEach(I),se.forEach(I),y=fe(G),w=P(G,"DIV",{class:!0});var we=V(w);Ee($.$$.fragment,we),we.forEach(I),G.forEach(I),b=fe(W),k=P(W,"DIV",{class:!0});var me=V(k);te&&te.l(me),S=fe(me),T.l(me),me.forEach(I),C=fe(W),R=P(W,"DIV",{class:!0});var Ue=V(R);D=P(Ue,"DIV",{class:!0});var Ve=V(D);H=P(Ve,"DIV",{class:!0});var Be=V(H);re=$e(Be,"ⓘ "),j=$e(Be,ae),Be.forEach(I),ee=fe(Ve),oe=$e(Ve,B),Ve.forEach(I),Ue.forEach(I),this.h()},h(){O(n,"class","gap-1"),O(c,"class","flex self-center w-[1px] h-6 mx-2.5 bg-gray-50 dark:bg-gray-850"),O(u,"class","text-lg font-medium text-gray-500 dark:text-gray-300 mr-1.5"),O(s,"class","flex md:self-center text-lg font-medium px-0.5 shrink-0 items-center"),O(w,"class","flex space-x-2"),O(i,"class","pt-0.5 pb-2 gap-1 flex flex-col md:flex-row justify-between sticky top-0 z-10 bg-white dark:bg-gray-900"),O(k,"class","scrollbar-hidden relative whitespace-nowrap overflow-x-auto max-w-full rounded-sm pt-0.5"),O(H,"class","line-clamp-1"),O(D,"class","text-right"),O(R,"class","text-gray-500 text-xs mt-1.5 w-full flex justify-end")},m(W,G){Te(t,W,G),de(W,a,G),de(W,i,G),z(i,s),z(s,n),z(n,l),z(s,d),z(s,c),z(s,f),z(s,u),z(u,_),z(i,y),z(i,w),Te($,w,null),de(W,b,G),de(W,k,G),te&&te.m(k,null),z(k,S),ie[E].m(k,null),de(W,C,G),de(W,R,G),z(R,D),z(D,H),z(H,re),z(H,j),z(D,ee),z(D,oe),N=!0},p(W,G){const se={};G[0]&128&&(se.model=W[7]),G[0]&1&&(se.feedbacks=W[0]),!r&&G[0]&64&&(r=!0,se.show=W[6],jr(()=>r=!1)),t.$set(se),(!N||G[0]&512)&&o!==(o=W[9].t("Leaderboard")+"")&&ze(l,o),(!N||G[0]&2)&&m!==(m=W[1].length+"")&&ze(_,m);const Ae={};G[0]&512&&(Ae.content=W[9].t("Re-rank models by topic similarity")),G[0]&516|G[1]&256&&(Ae.$$scope={dirty:G,ctx:W}),$.$set(Ae),W[5]?te?G[0]&32&&Q(te,1):(te=Kd(),te.c(),Q(te,1),te.m(k,S)):te&&(Ke(),J(te,1,1,()=>{te=null}),Qe());let Ce=E;E=X(W),E===Ce?ie[E].p(W,G):(Ke(),J(ie[Ce],1,1,()=>{ie[Ce]=null}),Qe(),T=ie[E],T?T.p(W,G):(T=ie[E]=L[E](W),T.c()),Q(T,1),T.m(k,null)),(!N||G[0]&512)&&ae!==(ae=W[9].t("The evaluation leaderboard is based on the Elo rating system and is updated in real-time.")+"")&&ze(j,ae),(!N||G[0]&512)&&B!==(B=W[9].t("The leaderboard is currently in beta, and we may adjust the rating calculations as we refine the algorithm.")+"")&&ze(oe,B)},i(W){N||(Q(t.$$.fragment,W),Q($.$$.fragment,W),Q(te),Q(T),N=!0)},o(W){J(t.$$.fragment,W),J($.$$.fragment,W),J(te),J(T),N=!1},d(W){W&&(I(a),I(i),I(b),I(k),I(C),I(R)),Ie(t,W),Ie($),te&&te.d(),ie[E].d()}}}const Zd="TaylorAI/bge-micro-v2";function q0(e,t,r){let a,i,s;ur(e,xg,X=>r(28,i=X)),$g.backends.onnx.wasm.wasmPaths="/wasm/";const n=Kr("i18n");ur(e,n,X=>r(9,s=X));let o=null,l=null,{feedbacks:d=[]}=t,c=[],f="",u=new Map,m=!0,_,y="rating",w="desc";function $(X){y===X?r(4,w=w==="asc"?"desc":"asc"):(r(3,y=X),r(4,w=X==="name"?"asc":"desc"))}let b=!1,k=null;const S=X=>{r(6,b=!0),r(7,k=X)},E=()=>{r(6,b=!1),r(7,k=null)},T=async(X=new Map)=>{const W=C(d,X);r(1,c=i.filter(G=>{var se,Ae;return(G==null?void 0:G.owned_by)!=="arena"&&(((Ae=(se=G==null?void 0:G.info)==null?void 0:se.meta)==null?void 0:Ae.hidden)??!1)!==!0}).map(G=>{const se=W.get(G.id);return{...G,rating:se?Math.round(se.rating):"-",stats:{count:se?se.won+se.lost:0,won:se?se.won.toString():"-",lost:se?se.lost.toString():"-"}}}).sort((G,se)=>G.rating==="-"&&se.rating!=="-"?1:se.rating==="-"&&G.rating!=="-"?-1:G.rating!=="-"&&se.rating!=="-"?se.rating-G.rating:G.name.localeCompare(se.name))),r(5,m=!1)};function C(X,W){const G=new Map,se=32;function Ae(me){return G.get(me)||{rating:1e3,won:0,lost:0}}function Ce(me,Ue,Ve){const Be=Ae(me);Be.rating+=Ue,Ve===1?Be.won++:Ve===0&&Be.lost++,G.set(me,Be)}function we(me,Ue,Ve,Be){const lt=1/(1+Math.pow(10,(Ue-me)/400));return se*(Ve-lt)*Be}return X.forEach(me=>{var Me,et;if(!((Me=me==null?void 0:me.data)!=null&&Me.model_id)||!((et=me==null?void 0:me.data)!=null&&et.rating))return;const Ue=me.data.model_id,Ve=Ae(Ue);let Be;switch(me.data.rating.toString()){case"1":Be=1;break;case"-1":Be=0;break;default:return}const lt=f!==""?W.get(me.id)||0:1;(me.data.sibling_model_ids||[]).forEach(Ct=>{const rt=Ae(Ct),At=we(Ve.rating,rt.rating,Be,lt),wt=we(rt.rating,Ve.rating,1-Be,lt);Ce(Ue,At,Be),Ce(Ct,wt,1-Be)})}),G}const R=(X,W)=>{if(X.length!==W.length)throw new Error("Vectors must be the same length");let G=0,se=0,Ae=0;for(let Ce=0;Ce<X.length;Ce++)G+=X[Ce]*W[Ce],se+=X[Ce]**2,Ae+=W[Ce]**2;return se=Math.sqrt(se),Ae=Math.sqrt(Ae),se===0||Ae===0?0:G/(se*Ae)},D=(X,W)=>{let G=0;for(const se of W.values()){const Ae=R(X,se);G=Math.max(G,Ae)}return G},H=async()=>{window.tokenizer||(window.tokenizer=await vg.from_pretrained(Zd)),window.model||(window.model=await wg.from_pretrained(Zd)),o=window.tokenizer,r(10,l=window.model);const X=new Set(d.flatMap(W=>W.data.tags||[]));await ae(Array.from(X))},re=async X=>{const W=await o(X);return(await l(W)).last_hidden_state.mean(1).ort_tensor.data},ae=async X=>{const W=new Map;for(const G of X)u.has(G)||u.set(G,await re(G)),W.set(G,u.get(G));return W},j=async()=>{if(r(5,m=!0),f.trim()===""){T();return}clearTimeout(_),_=setTimeout(async()=>{const X=await re(f),W=new Map;for(const G of d){const se=G.data.tags||[],Ae=await ae(se),Ce=D(X,Ae);W.set(G.id,Ce)}T(W)},1500)};cp(async()=>{T()});function ee(X){b=X,r(6,b)}function B(){f=this.value,r(2,f)}const oe=()=>{H()},N=()=>$("rating"),U=()=>$("name"),Z=()=>$("rating"),te=()=>$("won"),L=()=>$("lost"),ie=X=>S(X);return e.$$set=X=>{"feedbacks"in X&&r(0,d=X.feedbacks)},e.$$.update=()=>{e.$$.dirty[0]&4&&j(),e.$$.dirty[0]&26&&r(8,a=[...c].sort((X,W)=>{let G,se;return y==="name"?(G=X.name,se=W.name,w==="asc"?G.localeCompare(se):se.localeCompare(G)):y==="rating"?(G=X.rating==="-"?-1/0:X.rating,se=W.rating==="-"?-1/0:W.rating,w==="asc"?G-se:se-G):y==="won"?(G=X.stats.won==="-"?-1/0:Number(X.stats.won),se=W.stats.won==="-"?-1/0:Number(W.stats.won),w==="asc"?G-se:se-G):y==="lost"?(G=X.stats.lost==="-"?-1/0:Number(X.stats.lost),se=W.stats.lost==="-"?-1/0:Number(W.stats.lost),w==="asc"?G-se:se-G):0}))},[d,c,f,y,w,m,b,k,a,s,l,n,$,S,E,H,ee,B,oe,N,U,Z,te,L,ie]}class H0 extends Lr{constructor(t){super(),qr(this,t,q0,L0,Hr,{feedbacks:0},null,[-1,-1])}}function G0(e){let t;const r=e[4].default,a=cg(r,e,e[7],null);return{c(){a&&a.c()},l(i){a&&a.l(i)},m(i,s){a&&a.m(i,s),t=!0},p(i,s){a&&a.p&&(!t||s&128)&&fg(a,r,i,i[7],t?mg(r,i[7],s,null):hg(i[7]),null)},i(i){t||(Q(a,i),t=!0)},o(i){J(a,i),t=!1},d(i){a&&a.d(i)}}}function F0(e){let t,r;return t=new Zr({props:{content:e[1].t("More"),$$slots:{default:[G0]},$$scope:{ctx:e}}}),{c(){Se(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,i){Te(t,a,i),r=!0},p(a,i){const s={};i&2&&(s.content=a[1].t("More")),i&128&&(s.$$scope={dirty:i,ctx:a}),t.$set(s)},i(a){r||(Q(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){Ie(t,a)}}}function j0(e){let t,r,a,i=e[1].t("Delete")+"",s,n;return t=new Ug({props:{strokeWidth:"2"}}),{c(){Se(t.$$.fragment),r=ce(),a=M("div"),s=be(i),this.h()},l(o){Ee(t.$$.fragment,o),r=fe(o),a=P(o,"DIV",{class:!0});var l=V(a);s=$e(l,i),l.forEach(I),this.h()},h(){O(a,"class","flex items-center")},m(o,l){Te(t,o,l),de(o,r,l),de(o,a,l),z(a,s),n=!0},p(o,l){(!n||l&2)&&i!==(i=o[1].t("Delete")+"")&&ze(s,i)},i(o){n||(Q(t.$$.fragment,o),n=!0)},o(o){J(t.$$.fragment,o),n=!1},d(o){o&&(I(r),I(a)),Ie(t,o)}}}function K0(e){let t,r;return t=new Bg({props:{class:"flex  gap-2  items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md",$$slots:{default:[j0]},$$scope:{ctx:e}}}),t.$on("click",e[5]),{c(){Se(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,i){Te(t,a,i),r=!0},p(a,i){const s={};i&130&&(s.$$scope={dirty:i,ctx:a}),t.$set(s)},i(a){r||(Q(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){Ie(t,a)}}}function Q0(e){let t,r,a;return r=new Ng({props:{class:"w-full max-w-[150px] rounded-xl px-1 py-1.5 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg",sideOffset:-2,side:"bottom",align:"start",transition:Mg,$$slots:{default:[K0]},$$scope:{ctx:e}}}),{c(){t=M("div"),Se(r.$$.fragment),this.h()},l(i){t=P(i,"DIV",{slot:!0});var s=V(t);Ee(r.$$.fragment,s),s.forEach(I),this.h()},h(){O(t,"slot","content")},m(i,s){de(i,t,s),Te(r,t,null),a=!0},p(i,s){const n={};s&131&&(n.$$scope={dirty:s,ctx:i}),r.$set(n)},i(i){a||(Q(r.$$.fragment,i),a=!0)},o(i){J(r.$$.fragment,i),a=!1},d(i){i&&I(t),Ie(r)}}}function Z0(e){let t,r,a;function i(n){e[6](n)}let s={$$slots:{content:[Q0],default:[F0]},$$scope:{ctx:e}};return e[0]!==void 0&&(s.show=e[0]),t=new Pg({props:s}),Gr.push(()=>Fr(t,"show",i)),t.$on("change",Y0),{c(){Se(t.$$.fragment)},l(n){Ee(t.$$.fragment,n)},m(n,o){Te(t,n,o),a=!0},p(n,[o]){const l={};o&131&&(l.$$scope={dirty:o,ctx:n}),!r&&o&1&&(r=!0,l.show=n[0],jr(()=>r=!1)),t.$set(l)},i(n){a||(Q(t.$$.fragment,n),a=!0)},o(n){J(t.$$.fragment,n),a=!1},d(n){Ie(t,n)}}}const Y0=e=>{};function X0(e,t,r){let a,{$$slots:i={},$$scope:s}=t;const n=pg(),o=Kr("i18n");ur(e,o,f=>r(1,a=f));let l=!1;const d=()=>{n("delete"),r(0,l=!1)};function c(f){l=f,r(0,l)}return e.$$set=f=>{"$$scope"in f&&r(7,s=f.$$scope)},[l,a,n,o,i,d,c,s]}class J0 extends Lr{constructor(t){super(),qr(this,t,X0,Z0,Hr,{})}}function Yd(e,t,r){const a=e.slice();return a[10]=t[r],a}function gn(e){var i,s,n,o,l,d;const t=e.slice(),r=(s=(i=t[3])==null?void 0:i.meta)==null?void 0:s.message_id;t[13]=r;const a=(d=(l=(o=(n=t[3])==null?void 0:n.snapshot)==null?void 0:o.chat)==null?void 0:l.chat)==null?void 0:d.history.messages;return t[14]=a,t}function Xd(e){let t,r,a,i=e[4].t("Feedback Details")+"",s,n,o,l,d,c,f,u,m,_,y;l=new mp({props:{className:"size-5"}});const w=[ty,ey],$=[];function b(k,S){return k[2]?0:1}return f=b(e),u=$[f]=w[f](e),{c(){t=M("div"),r=M("div"),a=M("div"),s=be(i),n=ce(),o=M("button"),Se(l.$$.fragment),d=ce(),c=M("div"),u.c(),this.h()},l(k){t=P(k,"DIV",{});var S=V(t);r=P(S,"DIV",{class:!0});var E=V(r);a=P(E,"DIV",{class:!0});var T=V(a);s=$e(T,i),T.forEach(I),n=fe(E),o=P(E,"BUTTON",{class:!0,"aria-label":!0});var C=V(o);Ee(l.$$.fragment,C),C.forEach(I),E.forEach(I),d=fe(S),c=P(S,"DIV",{class:!0});var R=V(c);u.l(R),R.forEach(I),S.forEach(I),this.h()},h(){O(a,"class","text-lg font-medium self-center"),O(o,"class","self-center"),O(o,"aria-label","Close"),O(r,"class","flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"),O(c,"class","flex flex-col md:flex-row w-full px-5 pb-4 md:space-x-4 dark:text-gray-200")},m(k,S){de(k,t,S),z(t,r),z(r,a),z(a,s),z(r,n),z(r,o),Te(l,o,null),z(t,d),z(t,c),$[f].m(c,null),m=!0,_||(y=ft(o,"click",e[6]),_=!0)},p(k,S){(!m||S&16)&&i!==(i=k[4].t("Feedback Details")+"")&&ze(s,i);let E=f;f=b(k),f===E?$[f].p(k,S):(Ke(),J($[E],1,1,()=>{$[E]=null}),Qe(),u=$[f],u?u.p(k,S):(u=$[f]=w[f](k),u.c()),Q(u,1),u.m(c,null))},i(k){m||(Q(l.$$.fragment,k),Q(u),m=!0)},o(k){J(l.$$.fragment,k),J(u),m=!1},d(k){k&&I(t),Ie(l),$[f].d(),_=!1,y()}}}function ey(e){let t,r,a;return r=new gp({props:{className:"size-5"}}),{c(){t=M("div"),Se(r.$$.fragment),this.h()},l(i){t=P(i,"DIV",{class:!0});var s=V(t);Ee(r.$$.fragment,s),s.forEach(I),this.h()},h(){O(t,"class","flex items-center justify-center w-full h-32")},m(i,s){de(i,t,s),Te(r,t,null),a=!0},p:pt,i(i){a||(Q(r.$$.fragment,i),a=!0)},o(i){J(r.$$.fragment,i),a=!1},d(i){i&&I(t),Ie(r)}}}function ty(e){var Ct,rt,At,wt,bt,ve,Re,tt,st,xt,ut,kt,Le;let t,r,a,i=e[4].t("Chat ID")+"",s,n,o,l,d,c=(((rt=(Ct=e[1])==null?void 0:Ct.meta)==null?void 0:rt.chat_id)??"-")+"",f,u,m,_,y,w,$=e[4].t("Rating")+"",b,k,S,E,T=(((bt=(wt=(At=e[1])==null?void 0:At.data)==null?void 0:wt.details)==null?void 0:bt.rating)??"-")+"",C,R,D,H,re=e[4].t("Reason")+"",ae,j,ee,B,oe=(((Re=(ve=e[1])==null?void 0:ve.data)==null?void 0:Re.reason)||"-")+"",N,U,Z,te,L=e[4].t("Comment")+"",ie,X,W,G,se=(((st=(tt=e[1])==null?void 0:tt.data)==null?void 0:st.comment)||"-")+"",Ae,Ce,we,me,Ue,Ve=e[4].t("Close")+"",Be,lt,Et,Me=e[3]&&Jd(gn(e)),et=((ut=(xt=e[1])==null?void 0:xt.data)==null?void 0:ut.tags)&&((Le=(kt=e[1])==null?void 0:kt.data)==null?void 0:Le.tags.length)&&rp(e);return{c(){t=M("div"),r=M("div"),a=M("div"),s=be(i),n=ce(),o=M("div"),l=M("a"),d=M("span"),f=be(c),m=ce(),Me&&Me.c(),_=ce(),y=M("div"),w=M("div"),b=be($),k=ce(),S=M("div"),E=M("span"),C=be(T),R=ce(),D=M("div"),H=M("div"),ae=be(re),j=ce(),ee=M("div"),B=M("span"),N=be(oe),U=ce(),Z=M("div"),te=M("div"),ie=be(L),X=ce(),W=M("div"),G=M("span"),Ae=be(se),Ce=ce(),et&&et.c(),we=ce(),me=M("div"),Ue=M("button"),Be=be(Ve),this.h()},l(He){t=P(He,"DIV",{class:!0});var le=V(t);r=P(le,"DIV",{class:!0});var Oe=V(r);a=P(Oe,"DIV",{class:!0});var Ge=V(a);s=$e(Ge,i),Ge.forEach(I),n=fe(Oe),o=P(Oe,"DIV",{class:!0});var Xe=V(o);l=P(Xe,"A",{href:!0,class:!0,target:!0});var ht=V(l);d=P(ht,"SPAN",{});var at=V(d);f=$e(at,c),at.forEach(I),ht.forEach(I),Xe.forEach(I),Oe.forEach(I),m=fe(le),Me&&Me.l(le),_=fe(le),y=P(le,"DIV",{class:!0});var $t=V(y);w=P($t,"DIV",{class:!0});var Ot=V(w);b=$e(Ot,$),Ot.forEach(I),k=fe($t),S=P($t,"DIV",{class:!0});var Ht=V(S);E=P(Ht,"SPAN",{});var Dt=V(E);C=$e(Dt,T),Dt.forEach(I),Ht.forEach(I),$t.forEach(I),R=fe(le),D=P(le,"DIV",{class:!0});var Tt=V(D);H=P(Tt,"DIV",{class:!0});var Pt=V(H);ae=$e(Pt,re),Pt.forEach(I),j=fe(Tt),ee=P(Tt,"DIV",{class:!0});var Xt=V(ee);B=P(Xt,"SPAN",{});var Ut=V(B);N=$e(Ut,oe),Ut.forEach(I),Xt.forEach(I),Tt.forEach(I),U=fe(le),Z=P(le,"DIV",{class:!0});var Vt=V(Z);te=P(Vt,"DIV",{class:!0});var Wt=V(te);ie=$e(Wt,L),Wt.forEach(I),X=fe(Vt),W=P(Vt,"DIV",{class:!0});var Yr=V(W);G=P(Yr,"SPAN",{});var Xr=V(G);Ae=$e(Xr,se),Xr.forEach(I),Yr.forEach(I),Vt.forEach(I),Ce=fe(le),et&&et.l(le),we=fe(le),me=P(le,"DIV",{class:!0});var Jr=V(me);Ue=P(Jr,"BUTTON",{class:!0,type:!0});var it=V(Ue);Be=$e(it,Ve),it.forEach(I),Jr.forEach(I),le.forEach(I),this.h()},h(){var He,le;O(a,"class","mb-1 text-xs text-gray-500"),O(l,"href",u=`/s/${(le=(He=e[1])==null?void 0:He.meta)==null?void 0:le.chat_id}`),O(l,"class","hover:underline"),O(l,"target","_blank"),O(o,"class","flex-1 text-xs"),O(r,"class","flex flex-col w-full mb-2"),O(w,"class","mb-1 text-xs text-gray-500"),O(S,"class","flex-1 text-xs"),O(y,"class","flex flex-col w-full mb-2"),O(H,"class","mb-1 text-xs text-gray-500"),O(ee,"class","flex-1 text-xs"),O(D,"class","flex flex-col w-full mb-2"),O(te,"class","mb-1 text-xs text-gray-500"),O(W,"class","flex-1 text-xs"),O(Z,"class","flex flex-col w-full mb-2"),O(Ue,"class","px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full"),O(Ue,"type","button"),O(me,"class","flex justify-end pt-2"),O(t,"class","flex flex-col w-full")},m(He,le){de(He,t,le),z(t,r),z(r,a),z(a,s),z(r,n),z(r,o),z(o,l),z(l,d),z(d,f),z(t,m),Me&&Me.m(t,null),z(t,_),z(t,y),z(y,w),z(w,b),z(y,k),z(y,S),z(S,E),z(E,C),z(t,R),z(t,D),z(D,H),z(H,ae),z(D,j),z(D,ee),z(ee,B),z(B,N),z(t,U),z(t,Z),z(Z,te),z(te,ie),z(Z,X),z(Z,W),z(W,G),z(G,Ae),z(t,Ce),et&&et.m(t,null),z(t,we),z(t,me),z(me,Ue),z(Ue,Be),lt||(Et=ft(Ue,"click",e[6]),lt=!0)},p(He,le){var Oe,Ge,Xe,ht,at,$t,Ot,Ht,Dt,Tt,Pt,Xt,Ut,Vt,Wt;le&16&&i!==(i=He[4].t("Chat ID")+"")&&ze(s,i),le&2&&c!==(c=(((Ge=(Oe=He[1])==null?void 0:Oe.meta)==null?void 0:Ge.chat_id)??"-")+"")&&ze(f,c),le&2&&u!==(u=`/s/${(ht=(Xe=He[1])==null?void 0:Xe.meta)==null?void 0:ht.chat_id}`)&&O(l,"href",u),He[3]?Me?Me.p(gn(He),le):(Me=Jd(gn(He)),Me.c(),Me.m(t,_)):Me&&(Me.d(1),Me=null),le&16&&$!==($=He[4].t("Rating")+"")&&ze(b,$),le&2&&T!==(T=(((Ot=($t=(at=He[1])==null?void 0:at.data)==null?void 0:$t.details)==null?void 0:Ot.rating)??"-")+"")&&ze(C,T),le&16&&re!==(re=He[4].t("Reason")+"")&&ze(ae,re),le&2&&oe!==(oe=(((Dt=(Ht=He[1])==null?void 0:Ht.data)==null?void 0:Dt.reason)||"-")+"")&&ze(N,oe),le&16&&L!==(L=He[4].t("Comment")+"")&&ze(ie,L),le&2&&se!==(se=(((Pt=(Tt=He[1])==null?void 0:Tt.data)==null?void 0:Pt.comment)||"-")+"")&&ze(Ae,se),(Ut=(Xt=He[1])==null?void 0:Xt.data)!=null&&Ut.tags&&((Wt=(Vt=He[1])==null?void 0:Vt.data)!=null&&Wt.tags.length)?et?et.p(He,le):(et=rp(He),et.c(),et.m(t,we)):et&&(et.d(1),et=null),le&16&&Ve!==(Ve=He[4].t("Close")+"")&&ze(Be,Ve)},i:pt,o:pt,d(He){He&&I(t),Me&&Me.d(),et&&et.d(),lt=!1,Et()}}}function Jd(e){var s;let t,r,a=e[14][(s=e[14][e[13]])==null?void 0:s.parentId]&&ep(e),i=e[14][e[13]]&&tp(e);return{c(){a&&a.c(),t=ce(),i&&i.c(),r=ir()},l(n){a&&a.l(n),t=fe(n),i&&i.l(n),r=ir()},m(n,o){a&&a.m(n,o),de(n,t,o),i&&i.m(n,o),de(n,r,o)},p(n,o){var l;n[14][(l=n[14][n[13]])==null?void 0:l.parentId]?a?a.p(n,o):(a=ep(n),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null),n[14][n[13]]?i?i.p(n,o):(i=tp(n),i.c(),i.m(r.parentNode,r)):i&&(i.d(1),i=null)},d(n){n&&(I(t),I(r)),a&&a.d(n),i&&i.d(n)}}}function ep(e){var c,f;let t,r,a=e[4].t("Prompt")+"",i,s,n,o,l=(((f=e[14][(c=e[14][e[13]])==null?void 0:c.parentId])==null?void 0:f.content)||"-")+"",d;return{c(){t=M("div"),r=M("div"),i=be(a),s=ce(),n=M("div"),o=M("span"),d=be(l),this.h()},l(u){t=P(u,"DIV",{class:!0});var m=V(t);r=P(m,"DIV",{class:!0});var _=V(r);i=$e(_,a),_.forEach(I),s=fe(m),n=P(m,"DIV",{class:!0});var y=V(n);o=P(y,"SPAN",{});var w=V(o);d=$e(w,l),w.forEach(I),y.forEach(I),m.forEach(I),this.h()},h(){O(r,"class","mb-1 text-xs text-gray-500"),O(n,"class","flex-1 text-xs whitespace-pre-line break-words"),O(t,"class","flex flex-col w-full mb-2")},m(u,m){de(u,t,m),z(t,r),z(r,i),z(t,s),z(t,n),z(n,o),z(o,d)},p(u,m){var _,y;m&16&&a!==(a=u[4].t("Prompt")+"")&&ze(i,a),m&8&&l!==(l=(((y=u[14][(_=u[14][u[13]])==null?void 0:_.parentId])==null?void 0:y.content)||"-")+"")&&ze(d,l)},d(u){u&&I(t)}}}function tp(e){var c;let t,r,a=e[4].t("Response")+"",i,s,n,o,l=(((c=e[14][e[13]])==null?void 0:c.content)||"-")+"",d;return{c(){t=M("div"),r=M("div"),i=be(a),s=ce(),n=M("div"),o=M("span"),d=be(l),this.h()},l(f){t=P(f,"DIV",{class:!0});var u=V(t);r=P(u,"DIV",{class:!0});var m=V(r);i=$e(m,a),m.forEach(I),s=fe(u),n=P(u,"DIV",{class:!0});var _=V(n);o=P(_,"SPAN",{});var y=V(o);d=$e(y,l),y.forEach(I),_.forEach(I),u.forEach(I),this.h()},h(){O(r,"class","mb-1 text-xs text-gray-500"),O(n,"class","flex-1 text-xs whitespace-pre-line break-words max-h-32 overflow-y-auto"),O(t,"class","flex flex-col w-full mb-2")},m(f,u){de(f,t,u),z(t,r),z(r,i),z(t,s),z(t,n),z(n,o),z(o,d)},p(f,u){var m;u&16&&a!==(a=f[4].t("Response")+"")&&ze(i,a),u&8&&l!==(l=(((m=f[14][f[13]])==null?void 0:m.content)||"-")+"")&&ze(d,l)},d(f){f&&I(t)}}}function rp(e){var s,n;let t,r,a=yr((n=(s=e[1])==null?void 0:s.data)==null?void 0:n.tags),i=[];for(let o=0;o<a.length;o+=1)i[o]=ap(Yd(e,a,o));return{c(){t=M("div"),r=M("div");for(let o=0;o<i.length;o+=1)i[o].c();this.h()},l(o){t=P(o,"DIV",{class:!0});var l=V(t);r=P(l,"DIV",{class:!0});var d=V(r);for(let c=0;c<i.length;c+=1)i[c].l(d);d.forEach(I),l.forEach(I),this.h()},h(){O(r,"class","flex flex-wrap gap-1 mt-1"),O(t,"class","mb-2 -mx-1")},m(o,l){de(o,t,l),z(t,r);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(r,null)},p(o,l){var d,c;if(l&2){a=yr((c=(d=o[1])==null?void 0:d.data)==null?void 0:c.tags);let f;for(f=0;f<a.length;f+=1){const u=Yd(o,a,f);i[f]?i[f].p(u,l):(i[f]=ap(u),i[f].c(),i[f].m(r,null))}for(;f<i.length;f+=1)i[f].d(1);i.length=a.length}},d(o){o&&I(t),pp(i,o)}}}function ap(e){let t,r=e[10]+"",a;return{c(){t=M("span"),a=be(r),this.h()},l(i){t=P(i,"SPAN",{class:!0});var s=V(t);a=$e(s,r),s.forEach(I),this.h()},h(){O(t,"class","px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-850 text-[9px]")},m(i,s){de(i,t,s),z(t,a)},p(i,s){s&2&&r!==(r=i[10]+"")&&ze(a,r)},d(i){i&&I(t)}}}function ry(e){let t,r,a=e[1]&&Xd(e);return{c(){a&&a.c(),t=ir()},l(i){a&&a.l(i),t=ir()},m(i,s){a&&a.m(i,s),de(i,t,s),r=!0},p(i,s){i[1]?a?(a.p(i,s),s&2&&Q(a,1)):(a=Xd(i),a.c(),Q(a,1),a.m(t.parentNode,t)):a&&(Ke(),J(a,1,1,()=>{a=null}),Qe())},i(i){r||(Q(a),r=!0)},o(i){J(a),r=!1},d(i){i&&I(t),a&&a.d(i)}}}function ay(e){let t,r,a;function i(n){e[8](n)}let s={size:"sm",$$slots:{default:[ry]},$$scope:{ctx:e}};return e[0]!==void 0&&(s.show=e[0]),t=new hp({props:s}),Gr.push(()=>Fr(t,"show",i)),{c(){Se(t.$$.fragment)},l(n){Ee(t.$$.fragment,n)},m(n,o){Te(t,n,o),a=!0},p(n,[o]){const l={};o&32798&&(l.$$scope={dirty:o,ctx:n}),!r&&o&1&&(r=!0,l.show=n[0],jr(()=>r=!1)),t.$set(l)},i(n){a||(Q(t.$$.fragment,n),a=!0)},o(n){J(t.$$.fragment,n),a=!1},d(n){Ie(t,n)}}}function iy(e,t,r){let a;const i=Kr("i18n");ur(e,i,m=>r(4,a=m));let{show:s=!1}=t,{selectedFeedback:n=null}=t,{onClose:o=()=>{}}=t,l=!1,d=null;const c=()=>{r(0,s=!1),o()},f=async()=>{r(2,l=!1),r(3,d=null),n&&r(3,d=await Cg(localStorage.token,n.id).catch(m=>null)),r(2,l=!0)};function u(m){s=m,r(0,s)}return e.$$set=m=>{"show"in m&&r(0,s=m.show),"selectedFeedback"in m&&r(1,n=m.selectedFeedback),"onClose"in m&&r(7,o=m.onClose)},e.$$.update=()=>{e.$$.dirty&1&&s&&f()},[s,n,l,d,a,i,c,o,u]}class ny extends Lr{constructor(t){super(),qr(this,t,iy,ay,Hr,{show:0,selectedFeedback:1,onClose:7})}}function ip(e,t,r){const a=e.slice();return a[28]=t[r],a}function np(e){let t,r,a;return r=new Zr({props:{content:e[7].t("Export"),$$slots:{default:[sy]},$$scope:{ctx:e}}}),{c(){t=M("div"),Se(r.$$.fragment)},l(i){t=P(i,"DIV",{});var s=V(t);Ee(r.$$.fragment,s),s.forEach(I)},m(i,s){de(i,t,s),Te(r,t,null),a=!0},p(i,s){const n={};s[0]&128&&(n.content=i[7].t("Export")),s[1]&1&&(n.$$scope={dirty:s,ctx:i}),r.$set(n)},i(i){a||(Q(r.$$.fragment,i),a=!0)},o(i){J(r.$$.fragment,i),a=!1},d(i){i&&I(t),Ie(r)}}}function sy(e){let t,r,a,i,s;return r=new Eg({props:{className:"size-3"}}),{c(){t=M("button"),Se(r.$$.fragment),this.h()},l(n){t=P(n,"BUTTON",{class:!0});var o=V(t);Ee(r.$$.fragment,o),o.forEach(I),this.h()},h(){O(t,"class","p-2 rounded-xl hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-850 transition font-medium text-sm flex items-center space-x-1")},m(n,o){de(n,t,o),Te(r,t,null),a=!0,i||(s=ft(t,"click",e[18]),i=!0)},p:pt,i(n){a||(Q(r.$$.fragment,n),a=!0)},o(n){J(r.$$.fragment,n),a=!1},d(n){n&&I(t),Ie(r),i=!1,s()}}}function oy(e){let t,r,a,i,s,n=e[7].t("User")+"",o,l,d,c,f,u,m,_=e[7].t("Models")+"",y,w,$,b,k,S,E,T=e[7].t("Result")+"",C,R,D,H,re,ae,j,ee=e[7].t("Updated At")+"",B,oe,N,U,Z,te,L="",ie,X,W=[],G=new Map,se,Ae,Ce;const we=[dy,uy],me=[];function Ue(ve,Re){return ve[2]==="user"?0:1}d=Ue(e),c=me[d]=we[d](e);const Ve=[hy,fy],Be=[];function lt(ve,Re){return ve[2]==="model_id"?0:1}$=lt(e),b=Be[$]=Ve[$](e);const Et=[yy,_y],Me=[];function et(ve,Re){return ve[2]==="rating"?0:1}D=et(e),H=Me[D]=Et[D](e);const Ct=[wy,vy],rt=[];function At(ve,Re){return ve[2]==="updated_at"?0:1}N=At(e),U=rt[N]=Ct[N](e);let wt=yr(e[6]);const bt=ve=>ve[28].id;for(let ve=0;ve<wt.length;ve+=1){let Re=ip(e,wt,ve),tt=bt(Re);G.set(tt,W[ve]=op(tt,Re))}return{c(){t=M("table"),r=M("thead"),a=M("tr"),i=M("th"),s=M("div"),o=be(n),l=ce(),c.c(),f=ce(),u=M("th"),m=M("div"),y=be(_),w=ce(),b.c(),k=ce(),S=M("th"),E=M("div"),C=be(T),R=ce(),H.c(),re=ce(),ae=M("th"),j=M("div"),B=be(ee),oe=ce(),U.c(),Z=ce(),te=M("th"),te.innerHTML=L,ie=ce(),X=M("tbody");for(let ve=0;ve<W.length;ve+=1)W[ve].c();this.h()},l(ve){t=P(ve,"TABLE",{class:!0});var Re=V(t);r=P(Re,"THEAD",{class:!0});var tt=V(r);a=P(tt,"TR",{class:!0});var st=V(a);i=P(st,"TH",{scope:!0,class:!0});var xt=V(i);s=P(xt,"DIV",{class:!0});var ut=V(s);o=$e(ut,n),l=fe(ut),c.l(ut),ut.forEach(I),xt.forEach(I),f=fe(st),u=P(st,"TH",{scope:!0,class:!0});var kt=V(u);m=P(kt,"DIV",{class:!0});var Le=V(m);y=$e(Le,_),w=fe(Le),b.l(Le),Le.forEach(I),kt.forEach(I),k=fe(st),S=P(st,"TH",{scope:!0,class:!0});var He=V(S);E=P(He,"DIV",{class:!0});var le=V(E);C=$e(le,T),R=fe(le),H.l(le),le.forEach(I),He.forEach(I),re=fe(st),ae=P(st,"TH",{scope:!0,class:!0});var Oe=V(ae);j=P(Oe,"DIV",{class:!0});var Ge=V(j);B=$e(Ge,ee),oe=fe(Ge),U.l(Ge),Ge.forEach(I),Oe.forEach(I),Z=fe(st),te=P(st,"TH",{scope:!0,class:!0,"data-svelte-h":!0}),Ga(te)!=="svelte-twvnjj"&&(te.innerHTML=L),st.forEach(I),tt.forEach(I),ie=fe(Re),X=P(Re,"TBODY",{class:!0});var Xe=V(X);for(let ht=0;ht<W.length;ht+=1)W[ht].l(Xe);Xe.forEach(I),Re.forEach(I),this.h()},h(){O(s,"class","flex gap-1.5 items-center justify-end"),O(i,"scope","col"),O(i,"class","px-3 py-1.5 cursor-pointer select-none w-3"),O(m,"class","flex gap-1.5 items-center"),O(u,"scope","col"),O(u,"class","px-3 pr-1.5 cursor-pointer select-none"),O(E,"class","flex gap-1.5 items-center justify-end"),O(S,"scope","col"),O(S,"class","px-3 py-1.5 text-right cursor-pointer select-none w-fit"),O(j,"class","flex gap-1.5 items-center justify-end"),O(ae,"scope","col"),O(ae,"class","px-3 py-1.5 text-right cursor-pointer select-none w-0"),O(te,"scope","col"),O(te,"class","px-3 py-1.5 text-right cursor-pointer select-none w-0"),O(a,"class",""),O(r,"class","text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-850 dark:text-gray-400 -translate-y-0.5"),O(X,"class",""),O(t,"class","w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto max-w-full rounded-sm")},m(ve,Re){de(ve,t,Re),z(t,r),z(r,a),z(a,i),z(i,s),z(s,o),z(s,l),me[d].m(s,null),z(a,f),z(a,u),z(u,m),z(m,y),z(m,w),Be[$].m(m,null),z(a,k),z(a,S),z(S,E),z(E,C),z(E,R),Me[D].m(E,null),z(a,re),z(a,ae),z(ae,j),z(j,B),z(j,oe),rt[N].m(j,null),z(a,Z),z(a,te),z(t,ie),z(t,X);for(let tt=0;tt<W.length;tt+=1)W[tt]&&W[tt].m(X,null);se=!0,Ae||(Ce=[ft(i,"click",e[19]),ft(u,"click",e[20]),ft(S,"click",e[21]),ft(ae,"click",e[22])],Ae=!0)},p(ve,Re){(!se||Re[0]&128)&&n!==(n=ve[7].t("User")+"")&&ze(o,n);let tt=d;d=Ue(ve),d===tt?me[d].p(ve,Re):(Ke(),J(me[tt],1,1,()=>{me[tt]=null}),Qe(),c=me[d],c?c.p(ve,Re):(c=me[d]=we[d](ve),c.c()),Q(c,1),c.m(s,null)),(!se||Re[0]&128)&&_!==(_=ve[7].t("Models")+"")&&ze(y,_);let st=$;$=lt(ve),$===st?Be[$].p(ve,Re):(Ke(),J(Be[st],1,1,()=>{Be[st]=null}),Qe(),b=Be[$],b?b.p(ve,Re):(b=Be[$]=Ve[$](ve),b.c()),Q(b,1),b.m(m,null)),(!se||Re[0]&128)&&T!==(T=ve[7].t("Result")+"")&&ze(C,T);let xt=D;D=et(ve),D===xt?Me[D].p(ve,Re):(Ke(),J(Me[xt],1,1,()=>{Me[xt]=null}),Qe(),H=Me[D],H?H.p(ve,Re):(H=Me[D]=Et[D](ve),H.c()),Q(H,1),H.m(E,null)),(!se||Re[0]&128)&&ee!==(ee=ve[7].t("Updated At")+"")&&ze(B,ee);let ut=N;N=At(ve),N===ut?rt[N].p(ve,Re):(Ke(),J(rt[ut],1,1,()=>{rt[ut]=null}),Qe(),U=rt[N],U?U.p(ve,Re):(U=rt[N]=Ct[N](ve),U.c()),Q(U,1),U.m(j,null)),Re[0]&10432&&(wt=yr(ve[6]),Ke(),W=fp(W,Re,bt,1,ve,wt,G,X,bg,op,null,ip),Qe())},i(ve){if(!se){Q(c),Q(b),Q(H),Q(U);for(let Re=0;Re<wt.length;Re+=1)Q(W[Re]);se=!0}},o(ve){J(c),J(b),J(H),J(U);for(let Re=0;Re<W.length;Re+=1)J(W[Re]);se=!1},d(ve){ve&&I(t),me[d].d(),Be[$].d(),Me[D].d(),rt[N].d();for(let Re=0;Re<W.length;Re+=1)W[Re].d();Ae=!1,Qr(Ce)}}}function ly(e){let t,r=e[7].t("No feedbacks found")+"",a;return{c(){t=M("div"),a=be(r),this.h()},l(i){t=P(i,"DIV",{class:!0});var s=V(t);a=$e(s,r),s.forEach(I),this.h()},h(){O(t,"class","text-center text-xs text-gray-500 dark:text-gray-400 py-1")},m(i,s){de(i,t,s),z(t,a)},p(i,s){s[0]&128&&r!==(r=i[7].t("No feedbacks found")+"")&&ze(a,r)},i:pt,o:pt,d(i){i&&I(t)}}}function uy(e){let t,r,a;return r=new yt({props:{className:"size-2"}}),{c(){t=M("span"),Se(r.$$.fragment),this.h()},l(i){t=P(i,"SPAN",{class:!0});var s=V(t);Ee(r.$$.fragment,s),s.forEach(I),this.h()},h(){O(t,"class","invisible")},m(i,s){de(i,t,s),Te(r,t,null),a=!0},p:pt,i(i){a||(Q(r.$$.fragment,i),a=!0)},o(i){J(r.$$.fragment,i),a=!1},d(i){i&&I(t),Ie(r)}}}function dy(e){let t,r,a,i;const s=[cy,py],n=[];function o(l,d){return l[3]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=M("span"),a.c(),this.h()},l(l){t=P(l,"SPAN",{class:!0});var d=V(t);a.l(d),d.forEach(I),this.h()},h(){O(t,"class","font-normal")},m(l,d){de(l,t,d),n[r].m(t,null),i=!0},p(l,d){let c=r;r=o(l),r!==c&&(Ke(),J(n[c],1,1,()=>{n[c]=null}),Qe(),a=n[r],a||(a=n[r]=s[r](l),a.c()),Q(a,1),a.m(t,null))},i(l){i||(Q(a),i=!0)},o(l){J(a),i=!1},d(l){l&&I(t),n[r].d()}}}function py(e){let t,r;return t=new dr({props:{className:"size-2"}}),{c(){Se(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,i){Te(t,a,i),r=!0},i(a){r||(Q(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){Ie(t,a)}}}function cy(e){let t,r;return t=new yt({props:{className:"size-2"}}),{c(){Se(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,i){Te(t,a,i),r=!0},i(a){r||(Q(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){Ie(t,a)}}}function fy(e){let t,r,a;return r=new yt({props:{className:"size-2"}}),{c(){t=M("span"),Se(r.$$.fragment),this.h()},l(i){t=P(i,"SPAN",{class:!0});var s=V(t);Ee(r.$$.fragment,s),s.forEach(I),this.h()},h(){O(t,"class","invisible")},m(i,s){de(i,t,s),Te(r,t,null),a=!0},p:pt,i(i){a||(Q(r.$$.fragment,i),a=!0)},o(i){J(r.$$.fragment,i),a=!1},d(i){i&&I(t),Ie(r)}}}function hy(e){let t,r,a,i;const s=[gy,my],n=[];function o(l,d){return l[3]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=M("span"),a.c(),this.h()},l(l){t=P(l,"SPAN",{class:!0});var d=V(t);a.l(d),d.forEach(I),this.h()},h(){O(t,"class","font-normal")},m(l,d){de(l,t,d),n[r].m(t,null),i=!0},p(l,d){let c=r;r=o(l),r!==c&&(Ke(),J(n[c],1,1,()=>{n[c]=null}),Qe(),a=n[r],a||(a=n[r]=s[r](l),a.c()),Q(a,1),a.m(t,null))},i(l){i||(Q(a),i=!0)},o(l){J(a),i=!1},d(l){l&&I(t),n[r].d()}}}function my(e){let t,r;return t=new dr({props:{className:"size-2"}}),{c(){Se(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,i){Te(t,a,i),r=!0},i(a){r||(Q(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){Ie(t,a)}}}function gy(e){let t,r;return t=new yt({props:{className:"size-2"}}),{c(){Se(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,i){Te(t,a,i),r=!0},i(a){r||(Q(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){Ie(t,a)}}}function _y(e){let t,r,a;return r=new yt({props:{className:"size-2"}}),{c(){t=M("span"),Se(r.$$.fragment),this.h()},l(i){t=P(i,"SPAN",{class:!0});var s=V(t);Ee(r.$$.fragment,s),s.forEach(I),this.h()},h(){O(t,"class","invisible")},m(i,s){de(i,t,s),Te(r,t,null),a=!0},p:pt,i(i){a||(Q(r.$$.fragment,i),a=!0)},o(i){J(r.$$.fragment,i),a=!1},d(i){i&&I(t),Ie(r)}}}function yy(e){let t,r,a,i;const s=[$y,by],n=[];function o(l,d){return l[3]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=M("span"),a.c(),this.h()},l(l){t=P(l,"SPAN",{class:!0});var d=V(t);a.l(d),d.forEach(I),this.h()},h(){O(t,"class","font-normal")},m(l,d){de(l,t,d),n[r].m(t,null),i=!0},p(l,d){let c=r;r=o(l),r!==c&&(Ke(),J(n[c],1,1,()=>{n[c]=null}),Qe(),a=n[r],a||(a=n[r]=s[r](l),a.c()),Q(a,1),a.m(t,null))},i(l){i||(Q(a),i=!0)},o(l){J(a),i=!1},d(l){l&&I(t),n[r].d()}}}function by(e){let t,r;return t=new dr({props:{className:"size-2"}}),{c(){Se(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,i){Te(t,a,i),r=!0},i(a){r||(Q(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){Ie(t,a)}}}function $y(e){let t,r;return t=new yt({props:{className:"size-2"}}),{c(){Se(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,i){Te(t,a,i),r=!0},i(a){r||(Q(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){Ie(t,a)}}}function vy(e){let t,r,a;return r=new yt({props:{className:"size-2"}}),{c(){t=M("span"),Se(r.$$.fragment),this.h()},l(i){t=P(i,"SPAN",{class:!0});var s=V(t);Ee(r.$$.fragment,s),s.forEach(I),this.h()},h(){O(t,"class","invisible")},m(i,s){de(i,t,s),Te(r,t,null),a=!0},p:pt,i(i){a||(Q(r.$$.fragment,i),a=!0)},o(i){J(r.$$.fragment,i),a=!1},d(i){i&&I(t),Ie(r)}}}function wy(e){let t,r,a,i;const s=[ky,xy],n=[];function o(l,d){return l[3]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=M("span"),a.c(),this.h()},l(l){t=P(l,"SPAN",{class:!0});var d=V(t);a.l(d),d.forEach(I),this.h()},h(){O(t,"class","font-normal")},m(l,d){de(l,t,d),n[r].m(t,null),i=!0},p(l,d){let c=r;r=o(l),r!==c&&(Ke(),J(n[c],1,1,()=>{n[c]=null}),Qe(),a=n[r],a||(a=n[r]=s[r](l),a.c()),Q(a,1),a.m(t,null))},i(l){i||(Q(a),i=!0)},o(l){J(a),i=!1},d(l){l&&I(t),n[r].d()}}}function xy(e){let t,r;return t=new dr({props:{className:"size-2"}}),{c(){Se(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,i){Te(t,a,i),r=!0},i(a){r||(Q(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){Ie(t,a)}}}function ky(e){let t,r;return t=new yt({props:{className:"size-2"}}),{c(){Se(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,i){Te(t,a,i),r=!0},i(a){r||(Q(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){Ie(t,a)}}}function Sy(e){let t,r,a,i;return{c(){t=M("div"),r=M("img"),this.h()},l(s){t=P(s,"DIV",{class:!0});var n=V(t);r=P(n,"IMG",{src:!0,alt:!0,class:!0}),n.forEach(I),this.h()},h(){var s,n,o,l;Fa(r.src,a=((n=(s=e[28])==null?void 0:s.user)==null?void 0:n.profile_image_url)??`${ja}/user.png`)||O(r,"src",a),O(r,"alt",i=(l=(o=e[28])==null?void 0:o.user)==null?void 0:l.name),O(r,"class","size-5 rounded-full object-cover shrink-0"),O(t,"class","shrink-0")},m(s,n){de(s,t,n),z(t,r)},p(s,n){var o,l,d,c;n[0]&64&&!Fa(r.src,a=((l=(o=s[28])==null?void 0:o.user)==null?void 0:l.profile_image_url)??`${ja}/user.png`)&&O(r,"src",a),n[0]&64&&i!==(i=(c=(d=s[28])==null?void 0:d.user)==null?void 0:c.name)&&O(r,"alt",i)},d(s){s&&I(t)}}}function Ey(e){var i;let t,r=((i=e[28].data)==null?void 0:i.model_id)+"",a;return{c(){t=M("div"),a=be(r),this.h()},l(s){t=P(s,"DIV",{class:!0});var n=V(t);a=$e(n,r),n.forEach(I),this.h()},h(){O(t,"class","text-sm font-medium text-gray-600 dark:text-gray-400 flex-1 py-1.5")},m(s,n){de(s,t,n),z(t,a)},p(s,n){var o;n[0]&64&&r!==(r=((o=s[28].data)==null?void 0:o.model_id)+"")&&ze(a,r)},i:pt,o:pt,d(s){s&&I(t)}}}function Ty(e){var o;let t,r=((o=e[28].data)==null?void 0:o.model_id)+"",a,i,s,n;return s=new Zr({props:{content:e[28].data.sibling_model_ids.join(", "),$$slots:{default:[zy]},$$scope:{ctx:e}}}),{c(){t=M("div"),a=be(r),i=ce(),Se(s.$$.fragment),this.h()},l(l){t=P(l,"DIV",{class:!0});var d=V(t);a=$e(d,r),d.forEach(I),i=fe(l),Ee(s.$$.fragment,l),this.h()},h(){O(t,"class","font-semibold text-gray-600 dark:text-gray-400 flex-1")},m(l,d){de(l,t,d),z(t,a),de(l,i,d),Te(s,l,d),n=!0},p(l,d){var f;(!n||d[0]&64)&&r!==(r=((f=l[28].data)==null?void 0:f.model_id)+"")&&ze(a,r);const c={};d[0]&64&&(c.content=l[28].data.sibling_model_ids.join(", ")),d[0]&192|d[1]&1&&(c.$$scope={dirty:d,ctx:l}),s.$set(c)},i(l){n||(Q(s.$$.fragment,l),n=!0)},o(l){J(s.$$.fragment,l),n=!1},d(l){l&&(I(t),I(i)),Ie(s,l)}}}function Iy(e){let t=e[28].data.sibling_model_ids.join(", ")+"",r;return{c(){r=be(t)},l(a){r=$e(a,t)},m(a,i){de(a,r,i)},p(a,i){i[0]&64&&t!==(t=a[28].data.sibling_model_ids.join(", ")+"")&&ze(r,t)},d(a){a&&I(r)}}}function Cy(e){let t=e[28].data.sibling_model_ids.slice(0,2).join(", ")+"",r,a,i=e[7].t("and {{COUNT}} more",{COUNT:e[28].data.sibling_model_ids.length-2})+"",s;return{c(){r=be(t),a=be(", "),s=be(i)},l(n){r=$e(n,t),a=$e(n,", "),s=$e(n,i)},m(n,o){de(n,r,o),de(n,a,o),de(n,s,o)},p(n,o){o[0]&64&&t!==(t=n[28].data.sibling_model_ids.slice(0,2).join(", ")+"")&&ze(r,t),o[0]&192&&i!==(i=n[7].t("and {{COUNT}} more",{COUNT:n[28].data.sibling_model_ids.length-2})+"")&&ze(s,i)},d(n){n&&(I(r),I(a),I(s))}}}function zy(e){let t;function r(s,n){return s[28].data.sibling_model_ids.length>2?Cy:Iy}let a=r(e),i=a(e);return{c(){t=M("div"),i.c(),this.h()},l(s){t=P(s,"DIV",{class:!0});var n=V(t);i.l(n),n.forEach(I),this.h()},h(){O(t,"class","text-[0.65rem] text-gray-600 dark:text-gray-400 line-clamp-1")},m(s,n){de(s,t,n),i.m(t,null)},p(s,n){a===(a=r(s))&&i?i.p(s,n):(i.d(1),i=a(s),i&&(i.c(),i.m(t,null)))},d(s){s&&I(t),i.d()}}}function sp(e){let t,r,a,i,s,n,o,l;const d=[Dy,Oy,Ay],c=[];function f(u,m){var _,y,w,$,b,k;return m[0]&64&&(a=null),m[0]&64&&(i=null),m[0]&64&&(s=null),a==null&&(a=((y=(_=u[28])==null?void 0:_.data)==null?void 0:y.rating.toString())==="1"),a?0:(i==null&&(i=(($=(w=u[28])==null?void 0:w.data)==null?void 0:$.rating.toString())==="0"),i?1:(s==null&&(s=((k=(b=u[28])==null?void 0:b.data)==null?void 0:k.rating.toString())==="-1"),s?2:-1))}return~(n=f(e,[-1,-1]))&&(o=c[n]=d[n](e)),{c(){t=M("td"),r=M("div"),o&&o.c(),this.h()},l(u){t=P(u,"TD",{class:!0});var m=V(t);r=P(m,"DIV",{class:!0});var _=V(r);o&&o.l(_),_.forEach(I),m.forEach(I),this.h()},h(){O(r,"class","flex justify-end"),O(t,"class","px-3 py-1 text-right font-medium text-gray-900 dark:text-white w-max")},m(u,m){de(u,t,m),z(t,r),~n&&c[n].m(r,null),l=!0},p(u,m){let _=n;n=f(u,m),n===_?~n&&c[n].p(u,m):(o&&(Ke(),J(c[_],1,1,()=>{c[_]=null}),Qe()),~n?(o=c[n],o?o.p(u,m):(o=c[n]=d[n](u),o.c()),Q(o,1),o.m(r,null)):o=null)},i(u){l||(Q(o),l=!0)},o(u){J(o),l=!1},d(u){u&&I(t),~n&&c[n].d()}}}function Ay(e){let t,r;return t=new On({props:{type:"error",content:e[7].t("Lost")}}),{c(){Se(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,i){Te(t,a,i),r=!0},p(a,i){const s={};i[0]&128&&(s.content=a[7].t("Lost")),t.$set(s)},i(a){r||(Q(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){Ie(t,a)}}}function Oy(e){let t,r;return t=new On({props:{type:"muted",content:e[7].t("Draw")}}),{c(){Se(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,i){Te(t,a,i),r=!0},p(a,i){const s={};i[0]&128&&(s.content=a[7].t("Draw")),t.$set(s)},i(a){r||(Q(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){Ie(t,a)}}}function Dy(e){let t,r;return t=new On({props:{type:"info",content:e[7].t("Won")}}),{c(){Se(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,i){Te(t,a,i),r=!0},p(a,i){const s={};i[0]&128&&(s.content=a[7].t("Won")),t.$set(s)},i(a){r||(Q(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){Ie(t,a)}}}function Ry(e){let t,r,a;return r=new Vg({}),{c(){t=M("button"),Se(r.$$.fragment),this.h()},l(i){t=P(i,"BUTTON",{class:!0});var s=V(t);Ee(r.$$.fragment,s),s.forEach(I),this.h()},h(){O(t,"class","self-center w-fit text-sm p-1.5 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl")},m(i,s){de(i,t,s),Te(r,t,null),a=!0},p:pt,i(i){a||(Q(r.$$.fragment,i),a=!0)},o(i){J(r.$$.fragment,i),a=!1},d(i){i&&I(t),Ie(r)}}}function op(e,t){var ee,B,oe,N;let r,a,i,s,n,o,l,d,c,f,u,m,_,y=_n(t[28].updated_at*1e3).fromNow()+"",w,$,b,k,S,E,T,C;s=new Zr({props:{content:(B=(ee=t[28])==null?void 0:ee.user)==null?void 0:B.name,$$slots:{default:[Sy]},$$scope:{ctx:t}}});const R=[Ty,Ey],D=[];function H(U,Z){var te;return(te=U[28].data)!=null&&te.sibling_model_ids?0:1}c=H(t),f=D[c]=R[c](t);let re=((N=(oe=t[28])==null?void 0:oe.data)==null?void 0:N.rating)&&sp(t);function ae(...U){return t[23](t[28],...U)}k=new J0({props:{$$slots:{default:[Ry]},$$scope:{ctx:t}}}),k.$on("delete",ae);function j(){return t[24](t[28])}return{key:e,first:null,c(){r=M("tr"),a=M("td"),i=M("div"),Se(s.$$.fragment),n=ce(),o=M("td"),l=M("div"),d=M("div"),f.c(),u=ce(),re&&re.c(),m=ce(),_=M("td"),w=be(y),$=ce(),b=M("td"),Se(k.$$.fragment),S=ce(),this.h()},l(U){r=P(U,"TR",{class:!0});var Z=V(r);a=P(Z,"TD",{class:!0});var te=V(a);i=P(te,"DIV",{class:!0});var L=V(i);Ee(s.$$.fragment,L),L.forEach(I),te.forEach(I),n=fe(Z),o=P(Z,"TD",{class:!0});var ie=V(o);l=P(ie,"DIV",{class:!0});var X=V(l);d=P(X,"DIV",{class:!0});var W=V(d);f.l(W),W.forEach(I),X.forEach(I),ie.forEach(I),u=fe(Z),re&&re.l(Z),m=fe(Z),_=P(Z,"TD",{class:!0});var G=V(_);w=$e(G,y),G.forEach(I),$=fe(Z),b=P(Z,"TD",{class:!0});var se=V(b);Ee(k.$$.fragment,se),se.forEach(I),S=fe(Z),Z.forEach(I),this.h()},h(){O(i,"class","flex justify-center"),O(a,"class","py-0.5 text-right font-semibold"),O(d,"class","flex flex-col h-full"),O(l,"class","flex flex-col items-start gap-0.5 h-full"),O(o,"class","py-1 pl-3 flex flex-col"),O(_,"class","px-3 py-1 text-right font-medium"),O(b,"class","px-3 py-1 text-right font-semibold"),O(r,"class","bg-white dark:bg-gray-900 dark:border-gray-850 text-xs cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-850/50 transition"),this.first=r},m(U,Z){de(U,r,Z),z(r,a),z(a,i),Te(s,i,null),z(r,n),z(r,o),z(o,l),z(l,d),D[c].m(d,null),z(r,u),re&&re.m(r,null),z(r,m),z(r,_),z(_,w),z(r,$),z(r,b),Te(k,b,null),z(r,S),E=!0,T||(C=[ft(b,"click",My),ft(r,"click",j)],T=!0)},p(U,Z){var X,W,G,se;t=U;const te={};Z[0]&64&&(te.content=(W=(X=t[28])==null?void 0:X.user)==null?void 0:W.name),Z[0]&64|Z[1]&1&&(te.$$scope={dirty:Z,ctx:t}),s.$set(te);let L=c;c=H(t),c===L?D[c].p(t,Z):(Ke(),J(D[L],1,1,()=>{D[L]=null}),Qe(),f=D[c],f?f.p(t,Z):(f=D[c]=R[c](t),f.c()),Q(f,1),f.m(d,null)),(se=(G=t[28])==null?void 0:G.data)!=null&&se.rating?re?(re.p(t,Z),Z[0]&64&&Q(re,1)):(re=sp(t),re.c(),Q(re,1),re.m(r,m)):re&&(Ke(),J(re,1,1,()=>{re=null}),Qe()),(!E||Z[0]&64)&&y!==(y=_n(t[28].updated_at*1e3).fromNow()+"")&&ze(w,y);const ie={};Z[1]&1&&(ie.$$scope={dirty:Z,ctx:t}),k.$set(ie)},i(U){E||(Q(s.$$.fragment,U),Q(f),Q(re),Q(k.$$.fragment,U),E=!0)},o(U){J(s.$$.fragment,U),J(f),J(re),J(k.$$.fragment,U),E=!1},d(U){U&&I(r),Ie(s),D[c].d(),re&&re.d(),Ie(k),T=!1,Qr(C)}}}function lp(e){let t,r,a=e[7].t("Help us create the best community leaderboard by sharing your feedback history!")+"",i,s,n,o,l;return o=new Zr({props:{content:e[7].t("To protect your privacy, only ratings, model IDs, tags, and metadata are shared from your feedback—your chat logs remain private and are not included."),$$slots:{default:[Ny]},$$scope:{ctx:e}}}),{c(){t=M("div"),r=M("div"),i=be(a),s=ce(),n=M("div"),Se(o.$$.fragment),this.h()},l(d){t=P(d,"DIV",{class:!0});var c=V(t);r=P(c,"DIV",{class:!0});var f=V(r);i=$e(f,a),f.forEach(I),s=fe(c),n=P(c,"DIV",{class:!0});var u=V(n);Ee(o.$$.fragment,u),u.forEach(I),c.forEach(I),this.h()},h(){O(r,"class","line-clamp-1 text-gray-500 text-xs"),O(n,"class","flex space-x-1 ml-auto"),O(t,"class","flex flex-col justify-end w-full text-right gap-1")},m(d,c){de(d,t,c),z(t,r),z(r,i),z(t,s),z(t,n),Te(o,n,null),l=!0},p(d,c){(!l||c[0]&128)&&a!==(a=d[7].t("Help us create the best community leaderboard by sharing your feedback history!")+"")&&ze(i,a);const f={};c[0]&128&&(f.content=d[7].t("To protect your privacy, only ratings, model IDs, tags, and metadata are shared from your feedback—your chat logs remain private and are not included.")),c[0]&128|c[1]&1&&(f.$$scope={dirty:c,ctx:d}),o.$set(f)},i(d){l||(Q(o.$$.fragment,d),l=!0)},o(d){J(o.$$.fragment,d),l=!1},d(d){d&&I(t),Ie(o)}}}function Ny(e){let t,r,a=e[7].t("Share to Open WebUI Community")+"",i,s,n,o,l,d,c;return o=new Dg({props:{className:"size-3",strokeWidth:"3"}}),{c(){t=M("button"),r=M("div"),i=be(a),s=ce(),n=M("div"),Se(o.$$.fragment),this.h()},l(f){t=P(f,"BUTTON",{class:!0});var u=V(t);r=P(u,"DIV",{class:!0});var m=V(r);i=$e(m,a),m.forEach(I),s=fe(u),n=P(u,"DIV",{class:!0});var _=V(n);Ee(o.$$.fragment,_),_.forEach(I),u.forEach(I),this.h()},h(){O(r,"class","self-center mr-2 font-medium line-clamp-1"),O(n,"class","self-center"),O(t,"class","flex text-xs items-center px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition")},m(f,u){de(f,t,u),z(t,r),z(r,i),z(t,s),z(t,n),Te(o,n,null),l=!0,d||(c=ft(t,"click",e[25]),d=!0)},p(f,u){(!l||u[0]&128)&&a!==(a=f[7].t("Share to Open WebUI Community")+"")&&ze(i,a)},i(f){l||(Q(o.$$.fragment,f),l=!0)},o(f){J(o.$$.fragment,f),l=!1},d(f){f&&I(t),Ie(o),d=!1,c()}}}function up(e){let t,r,a;function i(n){e[26](n)}let s={count:e[0].length,perPage:10};return e[1]!==void 0&&(s.page=e[1]),t=new Rg({props:s}),Gr.push(()=>Fr(t,"page",i)),{c(){Se(t.$$.fragment)},l(n){Ee(t.$$.fragment,n)},m(n,o){Te(t,n,o),a=!0},p(n,o){const l={};o[0]&1&&(l.count=n[0].length),!r&&o[0]&2&&(r=!0,l.page=n[1],jr(()=>r=!1)),t.$set(l)},i(n){a||(Q(t.$$.fragment,n),a=!0)},o(n){J(t.$$.fragment,n),a=!1},d(n){Ie(t,n)}}}function By(e){var B,oe;let t,r,a,i,s,n=e[7].t("Feedback History")+"",o,l,d,c,f,u=e[0].length+"",m,_,y,w,$,b,k,S,E,T;function C(N){e[17](N)}let R={selectedFeedback:e[5],onClose:e[12]};e[4]!==void 0&&(R.show=e[4]),t=new ny({props:R}),Gr.push(()=>Fr(t,"show",C));let D=e[0].length>0&&np(e);const H=[ly,oy],re=[];function ae(N,U){return(N[0]??[]).length===0?0:1}$=ae(e),b=re[$]=H[$](e);let j=e[0].length>0&&((oe=(B=e[8])==null?void 0:B.features)==null?void 0:oe.enable_community_sharing)&&lp(e),ee=e[0].length>10&&up(e);return{c(){Se(t.$$.fragment),a=ce(),i=M("div"),s=M("div"),o=be(n),l=ce(),d=M("div"),c=ce(),f=M("span"),m=be(u),_=ce(),D&&D.c(),y=ce(),w=M("div"),b.c(),k=ce(),j&&j.c(),S=ce(),ee&&ee.c(),E=ir(),this.h()},l(N){Ee(t.$$.fragment,N),a=fe(N),i=P(N,"DIV",{class:!0});var U=V(i);s=P(U,"DIV",{class:!0});var Z=V(s);o=$e(Z,n),l=fe(Z),d=P(Z,"DIV",{class:!0}),V(d).forEach(I),c=fe(Z),f=P(Z,"SPAN",{class:!0});var te=V(f);m=$e(te,u),te.forEach(I),Z.forEach(I),_=fe(U),D&&D.l(U),U.forEach(I),y=fe(N),w=P(N,"DIV",{class:!0});var L=V(w);b.l(L),L.forEach(I),k=fe(N),j&&j.l(N),S=fe(N),ee&&ee.l(N),E=ir(),this.h()},h(){O(d,"class","flex self-center w-[1px] h-6 mx-2.5 bg-gray-50 dark:bg-gray-850"),O(f,"class","text-lg font-medium text-gray-500 dark:text-gray-300"),O(s,"class","flex md:self-center text-lg font-medium px-0.5"),O(i,"class","mt-0.5 mb-2 gap-1 flex flex-row justify-between"),O(w,"class","scrollbar-hidden relative whitespace-nowrap overflow-x-auto max-w-full rounded-sm pt-0.5")},m(N,U){Te(t,N,U),de(N,a,U),de(N,i,U),z(i,s),z(s,o),z(s,l),z(s,d),z(s,c),z(s,f),z(f,m),z(i,_),D&&D.m(i,null),de(N,y,U),de(N,w,U),re[$].m(w,null),de(N,k,U),j&&j.m(N,U),de(N,S,U),ee&&ee.m(N,U),de(N,E,U),T=!0},p(N,U){var L,ie;const Z={};U[0]&32&&(Z.selectedFeedback=N[5]),!r&&U[0]&16&&(r=!0,Z.show=N[4],jr(()=>r=!1)),t.$set(Z),(!T||U[0]&128)&&n!==(n=N[7].t("Feedback History")+"")&&ze(o,n),(!T||U[0]&1)&&u!==(u=N[0].length+"")&&ze(m,u),N[0].length>0?D?(D.p(N,U),U[0]&1&&Q(D,1)):(D=np(N),D.c(),Q(D,1),D.m(i,null)):D&&(Ke(),J(D,1,1,()=>{D=null}),Qe());let te=$;$=ae(N),$===te?re[$].p(N,U):(Ke(),J(re[te],1,1,()=>{re[te]=null}),Qe(),b=re[$],b?b.p(N,U):(b=re[$]=H[$](N),b.c()),Q(b,1),b.m(w,null)),N[0].length>0&&((ie=(L=N[8])==null?void 0:L.features)!=null&&ie.enable_community_sharing)?j?(j.p(N,U),U[0]&257&&Q(j,1)):(j=lp(N),j.c(),Q(j,1),j.m(S.parentNode,S)):j&&(Ke(),J(j,1,1,()=>{j=null}),Qe()),N[0].length>10?ee?(ee.p(N,U),U[0]&1&&Q(ee,1)):(ee=up(N),ee.c(),Q(ee,1),ee.m(E.parentNode,E)):ee&&(Ke(),J(ee,1,1,()=>{ee=null}),Qe())},i(N){T||(Q(t.$$.fragment,N),Q(D),Q(b),Q(j),Q(ee),T=!0)},o(N){J(t.$$.fragment,N),J(D),J(b),J(j),J(ee),T=!1},d(N){N&&(I(a),I(i),I(y),I(w),I(k),I(S),I(E)),Ie(t,N),D&&D.d(),re[$].d(),j&&j.d(N),ee&&ee.d(N)}}}const My=e=>e.stopPropagation();function Py(e,t,r){let a,i,s,n;ur(e,kg,B=>r(8,n=B));const{saveAs:o}=Tg;_n.extend(Ig);const l=Kr("i18n");ur(e,l,B=>r(7,s=B));let{feedbacks:d=[]}=t,c=1,f="updated_at",u="desc";function m(B){f===B?r(3,u=u==="asc"?"desc":"asc"):(r(2,f=B),B==="user"||B==="model_id"?r(3,u="asc"):r(3,u="desc")),r(1,c=1)}let _=!1,y=null;const w=B=>{r(4,_=!0),r(5,y=B)},$=()=>{r(4,_=!1),r(5,y=null)},b=async B=>{await zg(localStorage.token,B).catch(N=>(yi.error(N),null))&&r(0,d=d.filter(N=>N.id!==B))},k=async()=>{yi.success(s.t("Redirecting you to Open WebUI Community"));const B=d.map(Z=>{const{snapshot:te,user:L,...ie}=Z;return ie}),oe="https://openwebui.com",N=await window.open(`${oe}/leaderboard`,"_blank"),U=Z=>{Z.origin===oe&&Z.data==="loaded"&&(N.postMessage(JSON.stringify(B),"*"),window.removeEventListener("message",U))};window.addEventListener("message",U,!1)},S=async()=>{const B=await Ag(localStorage.token).catch(oe=>(yi.error(oe),null));if(B){let oe=new Blob([JSON.stringify(B)],{type:"application/json"});o(oe,`feedback-history-export-${Date.now()}.json`)}};function E(B){_=B,r(4,_)}const T=()=>{S()},C=()=>m("user"),R=()=>m("model_id"),D=()=>m("rating"),H=()=>m("updated_at"),re=(B,oe)=>{b(B.id)},ae=B=>w(B),j=async()=>{k()};function ee(B){c=B,r(1,c)}return e.$$set=B=>{"feedbacks"in B&&r(0,d=B.feedbacks)},e.$$.update=()=>{e.$$.dirty[0]&13&&r(16,i=[...d].sort((B,oe)=>{var Z,te;let N,U;switch(f){case"user":return N=((Z=B.user)==null?void 0:Z.name)||"",U=((te=oe.user)==null?void 0:te.name)||"",u==="asc"?N.localeCompare(U):U.localeCompare(N);case"model_id":return N=B.data.model_id||"",U=oe.data.model_id||"",u==="asc"?N.localeCompare(U):U.localeCompare(N);case"rating":return N=B.data.rating,U=oe.data.rating,u==="asc"?N-U:U-N;case"updated_at":return N=B.updated_at,U=oe.updated_at,u==="asc"?N-U:U-N;default:return 0}})),e.$$.dirty[0]&65538&&r(6,a=i.slice((c-1)*10,c*10))},[d,c,f,u,_,y,a,s,n,l,m,w,$,b,k,S,i,E,T,C,R,D,H,re,ae,j,ee]}class Uy extends Lr{constructor(t){super(),qr(this,t,Py,By,Hr,{feedbacks:0},null,[-1,-1])}}function dp(e){let t,r,a,i,s='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm6 5.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-1.5 0v-3.5Zm-2.75 1.5a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0v-2Zm-2 .75a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5a.75.75 0 0 0-.75-.75Z" clip-rule="evenodd"></path></svg>',n,o,l=e[3].t("Leaderboard")+"",d,c,f,u,m,_='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M5.25 2A2.25 2.25 0 0 0 3 4.25v9a.75.75 0 0 0 1.183.613l1.692-1.195 1.692 1.195a.75.75 0 0 0 .866 0l1.692-1.195 1.693 1.195A.75.75 0 0 0 13 13.25v-9A2.25 2.25 0 0 0 10.75 2h-5.5Zm3.03 3.28a.75.75 0 0 0-1.06-1.06L4.97 6.47a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h1.315c.76 0 1.375.616 1.375 1.375a.75.75 0 0 0 1.5 0A2.875 2.875 0 0 0 8.625 6.25H7.311l.97-.97Z" clip-rule="evenodd"></path></svg>',y,w,$=e[3].t("Feedbacks")+"",b,k,S,E,T,C,R,D,H;const re=[Wy,Vy],ae=[];function j(ee,B){return ee[0]==="leaderboard"?0:ee[0]==="feedbacks"?1:-1}return~(T=j(e))&&(C=ae[T]=re[T](e)),{c(){t=M("div"),r=M("div"),a=M("button"),i=M("div"),i.innerHTML=s,n=ce(),o=M("div"),d=be(l),f=ce(),u=M("button"),m=M("div"),m.innerHTML=_,y=ce(),w=M("div"),b=be($),S=ce(),E=M("div"),C&&C.c(),this.h()},l(ee){t=P(ee,"DIV",{class:!0});var B=V(t);r=P(B,"DIV",{id:!0,class:!0});var oe=V(r);a=P(oe,"BUTTON",{id:!0,class:!0});var N=V(a);i=P(N,"DIV",{class:!0,"data-svelte-h":!0}),Ga(i)!=="svelte-ujm47k"&&(i.innerHTML=s),n=fe(N),o=P(N,"DIV",{class:!0});var U=V(o);d=$e(U,l),U.forEach(I),N.forEach(I),f=fe(oe),u=P(oe,"BUTTON",{id:!0,class:!0});var Z=V(u);m=P(Z,"DIV",{class:!0,"data-svelte-h":!0}),Ga(m)!=="svelte-1fzwrf2"&&(m.innerHTML=_),y=fe(Z),w=P(Z,"DIV",{class:!0});var te=V(w);b=$e(te,$),te.forEach(I),Z.forEach(I),oe.forEach(I),S=fe(B),E=P(B,"DIV",{class:!0});var L=V(E);C&&C.l(L),L.forEach(I),B.forEach(I),this.h()},h(){O(i,"class","self-center mr-2"),O(o,"class","self-center"),O(a,"id","leaderboard"),O(a,"class",c="px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition "+(e[0]==="leaderboard"?"":" text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white")),O(m,"class","self-center mr-2"),O(w,"class","self-center"),O(u,"id","feedbacks"),O(u,"class",k="px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition "+(e[0]==="feedbacks"?"":" text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white")),O(r,"id","users-tabs-container"),O(r,"class","tabs flex flex-row overflow-x-auto gap-2.5 max-w-full lg:gap-1 lg:flex-col lg:flex-none lg:w-40 dark:text-gray-200 text-sm font-medium text-left scrollbar-none"),O(E,"class","flex-1 mt-1 lg:mt-0 overflow-y-scroll"),O(t,"class","flex flex-col lg:flex-row w-full h-full pb-2 lg:space-x-4")},m(ee,B){de(ee,t,B),z(t,r),z(r,a),z(a,i),z(a,n),z(a,o),z(o,d),z(r,f),z(r,u),z(u,m),z(u,y),z(u,w),z(w,b),z(t,S),z(t,E),~T&&ae[T].m(E,null),R=!0,D||(H=[ft(a,"click",e[6]),ft(u,"click",e[7])],D=!0)},p(ee,B){(!R||B&8)&&l!==(l=ee[3].t("Leaderboard")+"")&&ze(d,l),(!R||B&1&&c!==(c="px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition "+(ee[0]==="leaderboard"?"":" text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white")))&&O(a,"class",c),(!R||B&8)&&$!==($=ee[3].t("Feedbacks")+"")&&ze(b,$),(!R||B&1&&k!==(k="px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition "+(ee[0]==="feedbacks"?"":" text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white")))&&O(u,"class",k);let oe=T;T=j(ee),T===oe?~T&&ae[T].p(ee,B):(C&&(Ke(),J(ae[oe],1,1,()=>{ae[oe]=null}),Qe()),~T?(C=ae[T],C?C.p(ee,B):(C=ae[T]=re[T](ee),C.c()),Q(C,1),C.m(E,null)):C=null)},i(ee){R||(Q(C),R=!0)},o(ee){J(C),R=!1},d(ee){ee&&I(t),~T&&ae[T].d(),D=!1,Qr(H)}}}function Vy(e){let t,r;return t=new Uy({props:{feedbacks:e[2]}}),{c(){Se(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,i){Te(t,a,i),r=!0},p(a,i){const s={};i&4&&(s.feedbacks=a[2]),t.$set(s)},i(a){r||(Q(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){Ie(t,a)}}}function Wy(e){let t,r;return t=new H0({props:{feedbacks:e[2]}}),{c(){Se(t.$$.fragment)},l(a){Ee(t.$$.fragment,a)},m(a,i){Te(t,a,i),r=!0},p(a,i){const s={};i&4&&(s.feedbacks=a[2]),t.$set(s)},i(a){r||(Q(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){Ie(t,a)}}}function Ly(e){let t,r,a=e[1]&&dp(e);return{c(){a&&a.c(),t=ir()},l(i){a&&a.l(i),t=ir()},m(i,s){a&&a.m(i,s),de(i,t,s),r=!0},p(i,[s]){i[1]?a?(a.p(i,s),s&2&&Q(a,1)):(a=dp(i),a.c(),Q(a,1),a.m(t.parentNode,t)):a&&(Ke(),J(a,1,1,()=>{a=null}),Qe())},i(i){r||(Q(a),r=!0)},o(i){J(a),r=!1},d(i){i&&I(t),a&&a.d(i)}}}function qy(e,t,r){let a,i;ur(e,gg,u=>r(5,a=u));const s=Kr("i18n");ur(e,s,u=>r(3,i=u));let n;const o=u=>{const m=document.getElementById(u);m&&m.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})};let l=!1,d=[];cp(async()=>{r(2,d=await Og(localStorage.token)),r(1,l=!0);const u=document.getElementById("users-tabs-container");u&&u.addEventListener("wheel",function(m){m.deltaY!==0&&(u.scrollLeft+=m.deltaY)}),o(n)});const c=()=>{co("/admin/evaluations/leaderboard")},f=()=>{co("/admin/evaluations/feedbacks")};return e.$$.update=()=>{if(e.$$.dirty&32){const u=a.url.pathname.split("/"),m=u[u.length-1];r(0,n=["leaderboard","feedbacks"].includes(m)?m:"leaderboard")}e.$$.dirty&1&&n&&o(n)},[n,l,d,i,s,a,c,f]}class yb extends Lr{constructor(t){super(),qr(this,t,qy,Ly,Hr,{})}}export{yb as E};
//# sourceMappingURL=CFfFbQMh.js.map
