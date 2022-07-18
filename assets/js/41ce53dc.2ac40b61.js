"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9857],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,h=m["".concat(d,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},62243:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={title:"What is a metadata delta?",sidebar_label:"What is a metadata delta?",slug:"/what/delta",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/delta.md"},d="What is a metadata delta?",p={unversionedId:"docs/what/delta",id:"docs/what/delta",isDocsHomePage:!1,title:"What is a metadata delta?",description:"Rest.li supports partial update natively without needing explicitly defined models.",source:"@site/genDocs/docs/what/delta.md",sourceDirName:"docs/what",slug:"/what/delta",permalink:"/docs/what/delta",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/what/delta.md",tags:[],version:"current",frontMatter:{title:"What is a metadata delta?",sidebar_label:"What is a metadata delta?",slug:"/what/delta",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/delta.md"}},s=[],c={toc:s};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-a-metadata-delta"},"What is a metadata delta?"),(0,o.kt)("p",null,"Rest.li supports ",(0,o.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/user_guide/restli_server#partial_update"},"partial update")," natively without needing explicitly defined models.\nHowever, the granularity of update is always limited to each field in a PDL model.\nThere are cases where the update need to happen at an even finer grain, e.g. adding or removing items from an array."),(0,o.kt)("p",null,"To this end, we\u2019re proposing the following entity-specific metadata delta model that allows atomic partial updates at any desired granularity.\nNote that:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Just like metadata ",(0,o.kt)("a",{parentName:"li",href:"/docs/what/aspect"},"aspects"),", we\u2019re not imposing any limit on the partial update model, as long as it\u2019s a valid PDL record.\nThis is because the rest.li endpoint will have the logic that performs the corresponding partial update based on the information in the model.\nThat said, it\u2019s common to have fields that denote the list of items to be added or removed (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"membersToAdd")," & ",(0,o.kt)("inlineCode",{parentName:"li"},"membersToRemove")," from below)"),(0,o.kt)("li",{parentName:"ol"},"Similar to metadata ",(0,o.kt)("a",{parentName:"li",href:"/docs/what/snapshot"},"snapshots"),", entity that supports metadata delta will add an entity-specific metadata delta\n(e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"GroupDelta")," from below) that unions all supported partial update models."),(0,o.kt)("li",{parentName:"ol"},"The entity-specific metadata delta is then added to the global ",(0,o.kt)("inlineCode",{parentName:"li"},"Delta")," typeref, which is added as part of ",(0,o.kt)("a",{parentName:"li",href:"/docs/what/mxe#metadata-change-event-mce"},"Metadata Change Event")," and used during ",(0,o.kt)("a",{parentName:"li",href:"/docs/architecture/metadata-ingestion"},"Metadata Ingestion"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"namespace com.linkedin.group\n\nimport com.linkedin.common.CorpuserUrn\n\n/**\n * A metadata delta for a specific group entity\n */\nrecord MembershipPartialUpdate {\n  \n  /** List of members to be added to the group */\n  membersToAdd: array[CorpuserUrn]\n\n  /** List of members to be removed from the group */\n  membersToRemove: array[CorpuserUrn]\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"namespace com.linkedin.metadata.delta\n\nimport com.linkedin.common.CorpGroupUrn\nimport com.linkedin.group.MembershipPartialUpdate\n\n/**\n * A metadata delta for a specific group entity\n */\nrecord GroupDelta {\n\n  /** URN for the entity the metadata delta is associated with */\n  urn: CorpGroupUrn\n\n  /** The specific type of metadata delta to apply */\n  delta: union[MembershipPartialUpdate]\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"namespace com.linkedin.metadata.delta\n\n/**\n * A union of all supported metadata delta types.\n */\ntyperef Delta = union[GroupDelta]\n")))}m.isMDXComponent=!0}}]);