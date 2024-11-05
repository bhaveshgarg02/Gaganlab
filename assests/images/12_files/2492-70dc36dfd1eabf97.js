"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2492],{66474:function(t,e,i){i.d(e,{j:function(){return r}});var s=i(7506),n=i(24139),r=new class extends s.l{#t;#e;#i;constructor(){super(),this.#i=t=>{if(!n.sk&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#e||this.setEventListener(this.#i)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#i=t,this.#e?.(),this.#e=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){this.#t!==t&&(this.#t=t,this.onFocus())}onFocus(){this.listeners.forEach(t=>{t()})}isFocused(){return"boolean"==typeof this.#t?this.#t:globalThis.document?.visibilityState!=="hidden"}}},27037:function(t,e,i){i.d(e,{V:function(){return s}});var s=function(){let t=[],e=0,i=t=>{t()},s=t=>{t()},n=t=>setTimeout(t,0),r=s=>{e?t.push(s):n(()=>{i(s)})},a=()=>{let e=t;t=[],e.length&&n(()=>{s(()=>{e.forEach(t=>{i(t)})})})};return{batch:t=>{let i;e++;try{i=t()}finally{--e||a()}return i},batchCalls:t=>(...e)=>{r(()=>{t(...e)})},schedule:r,setNotifyFunction:t=>{i=t},setBatchNotifyFunction:t=>{s=t},setScheduler:t=>{n=t}}}()},14304:function(t,e,i){i.d(e,{N:function(){return r}});var s=i(7506),n=i(24139),r=new class extends s.l{#s=!0;#e;#i;constructor(){super(),this.#i=t=>{if(!n.sk&&window.addEventListener){let e=()=>t(!0),i=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",i)}}}}onSubscribe(){this.#e||this.setEventListener(this.#i)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#i=t,this.#e?.(),this.#e=t(this.setOnline.bind(this))}setOnline(t){this.#s!==t&&(this.#s=t,this.listeners.forEach(e=>{e(t)}))}isOnline(){return this.#s}}},6044:function(t,e,i){i.d(e,{S:function(){return y}});var s=i(24139),n=i(27037),r=i(72008),a=class{#n;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,s.PN)(this.gcTime)&&(this.#n=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(s.sk?1/0:3e5))}clearGcTimeout(){this.#n&&(clearTimeout(this.#n),this.#n=void 0)}},o=class extends a{#r;#a;#o;#u;#h;#c;#l;#d;constructor(t){super(),this.#d=!1,this.#l=t.defaultOptions,this.#f(t.options),this.#c=[],this.#o=t.cache,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#r=t.state||function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,i=void 0!==e,s=i?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:i?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=this.#r,this.scheduleGc()}get meta(){return this.options.meta}#f(t){this.options={...this.#l,...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.#c.length||"idle"!==this.state.fetchStatus||this.#o.remove(this)}setData(t,e){let i=(0,s.oE)(this.state.data,t,this.options);return this.#p({data:i,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),i}setState(t,e){this.#p({type:"setState",state:t,setStateOptions:e})}cancel(t){let e=this.#u;return this.#h?.cancel(t),e?e.then(s.ZT).catch(s.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#r)}isActive(){return this.#c.some(t=>!1!==t.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||void 0===this.state.data||this.#c.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||void 0===this.state.data||!(0,s.Kp)(this.state.dataUpdatedAt,t)}onFocus(){let t=this.#c.find(t=>t.shouldFetchOnWindowFocus());t?.refetch({cancelRefetch:!1}),this.#h?.continue()}onOnline(){let t=this.#c.find(t=>t.shouldFetchOnReconnect());t?.refetch({cancelRefetch:!1}),this.#h?.continue()}addObserver(t){this.#c.includes(t)||(this.#c.push(t),this.clearGcTimeout(),this.#o.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.#c.includes(t)&&(this.#c=this.#c.filter(e=>e!==t),this.#c.length||(this.#h&&(this.#d?this.#h.cancel({revert:!0}):this.#h.cancelRetry()),this.scheduleGc()),this.#o.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.#c.length}invalidate(){this.state.isInvalidated||this.#p({type:"invalidate"})}fetch(t,e){if("idle"!==this.state.fetchStatus){if(void 0!==this.state.data&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#u)return this.#h?.continueRetry(),this.#u}if(t&&this.#f(t),!this.options.queryFn){let t=this.#c.find(t=>t.options.queryFn);t&&this.#f(t.options)}let i=new AbortController,n={queryKey:this.queryKey,meta:this.meta},a=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(this.#d=!0,i.signal)})};a(n);let o={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn&&this.options.queryFn!==s.CN?(this.#d=!1,this.options.persister)?this.options.persister(this.options.queryFn,n,this):this.options.queryFn(n):Promise.reject(Error(`Missing queryFn: '${this.options.queryHash}'`))};a(o),this.options.behavior?.onFetch(o,this),this.#a=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==o.fetchOptions?.meta)&&this.#p({type:"fetch",meta:o.fetchOptions?.meta});let u=t=>{(0,r.DV)(t)&&t.silent||this.#p({type:"error",error:t}),(0,r.DV)(t)||(this.#o.config.onError?.(t,this),this.#o.config.onSettled?.(this.state.data,t,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#h=(0,r.Mz)({fn:o.fetchFn,abort:i.abort.bind(i),onSuccess:t=>{if(void 0===t){u(Error(`${this.queryHash} data is undefined`));return}this.setData(t),this.#o.config.onSuccess?.(t,this),this.#o.config.onSettled?.(t,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:u,onFail:(t,e)=>{this.#p({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#p({type:"pause"})},onContinue:()=>{this.#p({type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode}),this.#u=this.#h.promise,this.#u}#p(t){this.state=(e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:t.meta??null,fetchStatus:(0,r.Kw)(this.options.networkMode)?"fetching":"paused",...void 0===e.data&&{error:null,status:"pending"}};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let i=t.error;if((0,r.DV)(i)&&i.revert&&this.#a)return{...this.#a,fetchStatus:"idle"};return{...e,error:i,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),n.V.batch(()=>{this.#c.forEach(t=>{t.onQueryUpdate()}),this.#o.notify({query:this,type:"updated",action:t})})}},u=i(7506),h=class extends u.l{constructor(t={}){super(),this.config=t,this.#y=new Map}#y;build(t,e,i){let n=e.queryKey,r=e.queryHash??(0,s.Rm)(n,e),a=this.get(r);return a||(a=new o({cache:this,queryKey:n,queryHash:r,options:t.defaultQueryOptions(e),state:i,defaultOptions:t.getQueryDefaults(n)}),this.add(a)),a}add(t){this.#y.has(t.queryHash)||(this.#y.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#y.get(t.queryHash);e&&(t.destroy(),e===t&&this.#y.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){n.V.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#y.get(t)}getAll(){return[...this.#y.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,s._x)(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>(0,s._x)(t,e)):e}notify(t){n.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){n.V.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){n.V.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},c=class extends a{#c;#l;#m;#h;constructor(t){super(),this.mutationId=t.mutationId,this.#l=t.defaultOptions,this.#m=t.mutationCache,this.#c=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.#l,...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#c.includes(t)||(this.#c.push(t),this.clearGcTimeout(),this.#m.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#c=this.#c.filter(e=>e!==t),this.scheduleGc(),this.#m.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#c.length||("pending"===this.state.status?this.scheduleGc():this.#m.remove(this))}continue(){return this.#h?.continue()??this.execute(this.state.variables)}async execute(t){let e="pending"===this.state.status;try{if(!e){this.#p({type:"pending",variables:t}),await this.#m.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#p({type:"pending",context:e,variables:t})}let i=await (this.#h=(0,r.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#p({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#p({type:"pause"})},onContinue:()=>{this.#p({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#h.promise);return await this.#m.config.onSuccess?.(i,t,this.state.context,this),await this.options.onSuccess?.(i,t,this.state.context),await this.#m.config.onSettled?.(i,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(i,null,t,this.state.context),this.#p({type:"success",data:i}),i}catch(e){try{throw await this.#m.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#m.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#p({type:"error",error:e})}}}#p(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,r.Kw)(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),n.V.batch(()=>{this.#c.forEach(e=>{e.onMutationUpdate(t)}),this.#m.notify({mutation:this,type:"updated",action:t})})}},l=class extends u.l{constructor(t={}){super(),this.config=t,this.#v=[],this.#b=0}#v;#b;#g;build(t,e,i){let s=new c({mutationCache:this,mutationId:++this.#b,options:t.defaultMutationOptions(e),state:i});return this.add(s),s}add(t){this.#v.push(t),this.notify({type:"added",mutation:t})}remove(t){this.#v=this.#v.filter(e=>e!==t),this.notify({type:"removed",mutation:t})}clear(){n.V.batch(()=>{this.#v.forEach(t=>{this.remove(t)})})}getAll(){return this.#v}find(t){let e={exact:!0,...t};return this.#v.find(t=>(0,s.X7)(e,t))}findAll(t={}){return this.#v.filter(e=>(0,s.X7)(t,e))}notify(t){n.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){return this.#g=(this.#g??Promise.resolve()).then(()=>{let t=this.#v.filter(t=>t.state.isPaused);return n.V.batch(()=>t.reduce((t,e)=>t.then(()=>e.continue().catch(s.ZT)),Promise.resolve()))}).then(()=>{this.#g=void 0}),this.#g}},d=i(66474),f=i(14304);function p(t,{pages:e,pageParams:i}){let s=e.length-1;return t.getNextPageParam(e[s],e,i[s],i)}var y=class{#C;#m;#l;#w;#O;#q;#F;#S;constructor(t={}){this.#C=t.queryCache||new h,this.#m=t.mutationCache||new l,this.#l=t.defaultOptions||{},this.#w=new Map,this.#O=new Map,this.#q=0}mount(){this.#q++,1===this.#q&&(this.#F=d.j.subscribe(()=>{d.j.isFocused()&&(this.resumePausedMutations(),this.#C.onFocus())}),this.#S=f.N.subscribe(t=>{t&&(this.resumePausedMutations(),this.#C.onOnline())}))}unmount(){this.#q--,0===this.#q&&(this.#F?.(),this.#F=void 0,this.#S?.(),this.#S=void 0)}isFetching(t){return this.#C.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#m.findAll({...t,status:"pending"}).length}getQueryData(t){let e=this.defaultQueryOptions({queryKey:t});return this.#C.get(e.queryHash)?.state.data}ensureQueryData(t){let e=this.getQueryData(t.queryKey);return void 0!==e?Promise.resolve(e):this.fetchQuery(t)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:t,state:e})=>[t,e.data])}setQueryData(t,e,i){let n=this.defaultQueryOptions({queryKey:t}),r=this.#C.get(n.queryHash),a=r?.state.data,o=(0,s.SE)(e,a);if(void 0!==o)return this.#C.build(this,n).setData(o,{...i,manual:!0})}setQueriesData(t,e,i){return n.V.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,i)]))}getQueryState(t){let e=this.defaultQueryOptions({queryKey:t});return this.#C.get(e.queryHash)?.state}removeQueries(t){let e=this.#C;n.V.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let i=this.#C,s={type:"active",...t};return n.V.batch(()=>(i.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries(s,e)))}cancelQueries(t={},e={}){let i={revert:!0,...e};return Promise.all(n.V.batch(()=>this.#C.findAll(t).map(t=>t.cancel(i)))).then(s.ZT).catch(s.ZT)}invalidateQueries(t={},e={}){return n.V.batch(()=>{if(this.#C.findAll(t).forEach(t=>{t.invalidate()}),"none"===t.refetchType)return Promise.resolve();let i={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(i,e)})}refetchQueries(t={},e){let i={...e,cancelRefetch:e?.cancelRefetch??!0};return Promise.all(n.V.batch(()=>this.#C.findAll(t).filter(t=>!t.isDisabled()).map(t=>{let e=t.fetch(void 0,i);return i.throwOnError||(e=e.catch(s.ZT)),"paused"===t.state.fetchStatus?Promise.resolve():e}))).then(s.ZT)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let i=this.#C.build(this,e);return i.isStaleByTime(e.staleTime)?i.fetch(e):Promise.resolve(i.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(s.ZT).catch(s.ZT)}fetchInfiniteQuery(t){var e;return t.behavior=(e=t.pages,{onFetch:(t,i)=>{let n=async()=>{let i;let n=t.options,r=t.fetchOptions?.meta?.fetchMore?.direction,a=t.state.data?.pages||[],o=t.state.data?.pageParams||[],u=!1,h=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?u=!0:t.signal.addEventListener("abort",()=>{u=!0}),t.signal)})},c=t.options.queryFn&&t.options.queryFn!==s.CN?t.options.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${t.options.queryHash}'`)),l=async(e,i,n)=>{if(u)return Promise.reject();if(null==i&&e.pages.length)return Promise.resolve(e);let r={queryKey:t.queryKey,pageParam:i,direction:n?"backward":"forward",meta:t.options.meta};h(r);let a=await c(r),{maxPages:o}=t.options,l=n?s.Ht:s.VX;return{pages:l(e.pages,a,o),pageParams:l(e.pageParams,i,o)}};if(r&&a.length){let t="backward"===r,e={pages:a,pageParams:o},s=(t?function(t,{pages:e,pageParams:i}){return t.getPreviousPageParam?.(e[0],e,i[0],i)}:p)(n,e);i=await l(e,s,t)}else{i=await l({pages:[],pageParams:[]},o[0]??n.initialPageParam);let t=e??a.length;for(let e=1;e<t;e++){let t=p(n,i);i=await l(i,t)}}return i};t.options.persister?t.fetchFn=()=>t.options.persister?.(n,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},i):t.fetchFn=n}}),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(s.ZT).catch(s.ZT)}resumePausedMutations(){return f.N.isOnline()?this.#m.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#C}getMutationCache(){return this.#m}getDefaultOptions(){return this.#l}setDefaultOptions(t){this.#l=t}setQueryDefaults(t,e){this.#w.set((0,s.Ym)(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#w.values()],i={};return e.forEach(e=>{(0,s.to)(t,e.queryKey)&&(i={...i,...e.defaultOptions})}),i}setMutationDefaults(t,e){this.#O.set((0,s.Ym)(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#O.values()],i={};return e.forEach(e=>{(0,s.to)(t,e.mutationKey)&&(i={...i,...e.defaultOptions})}),i}defaultQueryOptions(t){if(t._defaulted)return t;let e={...this.#l.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=(0,s.Rm)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),!0!==e.enabled&&e.queryFn===s.CN&&(e.enabled=!1),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#l.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#C.clear(),this.#m.clear()}}},72008:function(t,e,i){i.d(e,{DV:function(){return h},Kw:function(){return o},Mz:function(){return c}});var s=i(66474),n=i(14304),r=i(24139);function a(t){return Math.min(1e3*2**t,3e4)}function o(t){return(t??"online")!=="online"||n.N.isOnline()}var u=class{constructor(t){this.revert=t?.revert,this.silent=t?.silent}};function h(t){return t instanceof u}function c(t){let e,i,h,c=!1,l=0,d=!1,f=new Promise((t,e)=>{i=t,h=e}),p=()=>!s.j.isFocused()||"always"!==t.networkMode&&!n.N.isOnline(),y=s=>{d||(d=!0,t.onSuccess?.(s),e?.(),i(s))},m=i=>{d||(d=!0,t.onError?.(i),e?.(),h(i))},v=()=>new Promise(i=>{e=t=>{let e=d||!p();return e&&i(t),e},t.onPause?.()}).then(()=>{e=void 0,d||t.onContinue?.()}),b=()=>{let e;if(!d){try{e=t.fn()}catch(t){e=Promise.reject(t)}Promise.resolve(e).then(y).catch(e=>{if(d)return;let i=t.retry??(r.sk?0:3),s=t.retryDelay??a,n="function"==typeof s?s(l,e):s,o=!0===i||"number"==typeof i&&l<i||"function"==typeof i&&i(l,e);if(c||!o){m(e);return}l++,t.onFail?.(l,e),(0,r._v)(n).then(()=>{if(p())return v()}).then(()=>{c?m(e):b()})})}};return o(t.networkMode)?b():v().then(b),{promise:f,cancel:e=>{d||(m(new u(e)),t.abort?.())},continue:()=>e?.()?f:Promise.resolve(),cancelRetry:()=>{c=!0},continueRetry:()=>{c=!1}}}},7506:function(t,e,i){i.d(e,{l:function(){return s}});var s=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},24139:function(t,e,i){i.d(e,{CN:function(){return w},Ht:function(){return C},Kp:function(){return o},PN:function(){return a},Rm:function(){return c},SE:function(){return r},VS:function(){return f},VX:function(){return g},X7:function(){return h},Ym:function(){return l},ZT:function(){return n},_v:function(){return v},_x:function(){return u},oE:function(){return b},sk:function(){return s},to:function(){return d}});var s="undefined"==typeof window||"Deno"in window;function n(){}function r(t,e){return"function"==typeof t?t(e):t}function a(t){return"number"==typeof t&&t>=0&&t!==1/0}function o(t,e){return Math.max(t+(e||0)-Date.now(),0)}function u(t,e){let{type:i="all",exact:s,fetchStatus:n,predicate:r,queryKey:a,stale:o}=t;if(a){if(s){if(e.queryHash!==c(a,e.options))return!1}else if(!d(e.queryKey,a))return!1}if("all"!==i){let t=e.isActive();if("active"===i&&!t||"inactive"===i&&t)return!1}return("boolean"!=typeof o||e.isStale()===o)&&(!n||n===e.state.fetchStatus)&&(!r||!!r(e))}function h(t,e){let{exact:i,status:s,predicate:n,mutationKey:r}=t;if(r){if(!e.options.mutationKey)return!1;if(i){if(l(e.options.mutationKey)!==l(r))return!1}else if(!d(e.options.mutationKey,r))return!1}return(!s||e.state.status===s)&&(!n||!!n(e))}function c(t,e){return(e?.queryKeyHashFn||l)(t)}function l(t){return JSON.stringify(t,(t,e)=>y(e)?Object.keys(e).sort().reduce((t,i)=>(t[i]=e[i],t),{}):e)}function d(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&!Object.keys(e).some(i=>!d(t[i],e[i]))}function f(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(let i in t)if(t[i]!==e[i])return!1;return!0}function p(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function y(t){if(!m(t))return!1;let e=t.constructor;if(void 0===e)return!0;let i=e.prototype;return!!(m(i)&&i.hasOwnProperty("isPrototypeOf"))}function m(t){return"[object Object]"===Object.prototype.toString.call(t)}function v(t){return new Promise(e=>{setTimeout(e,t)})}function b(t,e,i){return"function"==typeof i.structuralSharing?i.structuralSharing(t,e):!1!==i.structuralSharing?function t(e,i){if(e===i)return e;let s=p(e)&&p(i);if(s||y(e)&&y(i)){let n=s?e:Object.keys(e),r=n.length,a=s?i:Object.keys(i),o=a.length,u=s?[]:{},h=0;for(let r=0;r<o;r++){let o=s?r:a[r];!s&&void 0===e[o]&&void 0===i[o]&&n.includes(o)?(u[o]=void 0,h++):(u[o]=t(e[o],i[o]),u[o]===e[o]&&void 0!==e[o]&&h++)}return r===o&&h===r?e:u}return i}(t,e):e}function g(t,e,i=0){let s=[...t,e];return i&&s.length>i?s.slice(1):s}function C(t,e,i=0){let s=[e,...t];return i&&s.length>i?s.slice(0,-1):s}var w=Symbol()},30202:function(t,e,i){i.d(e,{NL:function(){return a},aH:function(){return o}});var s=i(67294),n=i(85893),r=s.createContext(void 0),a=t=>{let e=s.useContext(r);if(t)return t;if(!e)throw Error("No QueryClient set, use QueryClientProvider to set one");return e},o=({client:t,children:e})=>(s.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),(0,n.jsx)(r.Provider,{value:t,children:e}))}}]);