const e=(e,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(r){r.createProperty(i.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(r){r.createProperty(i.key,e)}};function i(i){return(r,t)=>{return void 0!==t?(n=i,o=t,void r.constructor.createProperty(o,n)):e(i,r);var n,o}}export{i as e};
//# sourceMappingURL=property-67fa6154.js.map
