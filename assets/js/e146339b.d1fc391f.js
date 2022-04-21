"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6678],{4137:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),s=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=s(n),c=r,g=m["".concat(d,".").concat(c)]||m[c]||p[c]||l;return n?a.createElement(g,i(i({ref:e},u),{},{components:n})):a.createElement(g,i({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(4137)),i=["components"],o={title:"Glue",sidebar_label:"Glue",slug:"/metadata-ingestion/source_docs/glue",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/source_docs/glue.md"},d="Glue",s={unversionedId:"metadata-ingestion/source_docs/glue",id:"metadata-ingestion/source_docs/glue",isDocsHomePage:!1,title:"Glue",description:"For context on getting started with ingestion, check out our metadata ingestion guide.",source:"@site/genDocs/metadata-ingestion/source_docs/glue.md",sourceDirName:"metadata-ingestion/source_docs",slug:"/metadata-ingestion/source_docs/glue",permalink:"/docs/metadata-ingestion/source_docs/glue",editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/source_docs/glue.md",tags:[],version:"current",frontMatter:{title:"Glue",sidebar_label:"Glue",slug:"/metadata-ingestion/source_docs/glue",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/source_docs/glue.md"},sidebar:"overviewSidebar",previous:{title:"File Based Lineage",permalink:"/docs/metadata-ingestion/source_docs/file_lineage"},next:{title:"Hive",permalink:"/docs/metadata-ingestion/source_docs/hive"}},u=[{value:"Setup",id:"setup",children:[],level:2},{value:"Capabilities",id:"capabilities",children:[],level:2},{value:"Quickstart recipe",id:"quickstart-recipe",children:[],level:2},{value:"IAM permissions",id:"iam-permissions",children:[],level:2},{value:"Config details",id:"config-details",children:[{value:"Cross-account ingestion",id:"cross-account-ingestion",children:[],level:3}],level:2},{value:"Compatibility",id:"compatibility",children:[],level:2},{value:"Questions",id:"questions",children:[],level:2}],p={toc:u};function m(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"glue"},"Glue"),(0,l.kt)("p",null,"For context on getting started with ingestion, check out our ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"metadata ingestion guide"),"."),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)("p",null,"To install this plugin, run ",(0,l.kt)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub[glue]'"),"."),(0,l.kt)("p",null,"Note: if you also have files in S3 that you'd like to ingest, we recommend you use Glue's built-in data catalog. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/source_docs/s3"},"here")," for a quick guide on how to set up a crawler on Glue and ingest the outputs with DataHub."),(0,l.kt)("h2",{id:"capabilities"},"Capabilities"),(0,l.kt)("p",null,"This plugin extracts the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Tables in the Glue catalog"),(0,l.kt)("li",{parentName:"ul"},"Column types associated with each table"),(0,l.kt)("li",{parentName:"ul"},"Table metadata, such as owner, description and parameters"),(0,l.kt)("li",{parentName:"ul"},"Jobs and their component transformations, data sources, and data sinks")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Capability"),(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Details"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Platform Instance"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/platform-instances"},"link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data Containers"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data Domains"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/domains"},"link"))))),(0,l.kt)("h2",{id:"quickstart-recipe"},"Quickstart recipe"),(0,l.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,l.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,l.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: glue\n  config:\n    # Coordinates\n    aws_region: "my-aws-region"\n\nsink:\n  # sink configs\n')),(0,l.kt)("h2",{id:"iam-permissions"},"IAM permissions"),(0,l.kt)("p",null,"For ingesting datasets, the following IAM permissions are required:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Effect": "Allow",\n    "Action": [\n        "glue:GetDatabases",\n        "glue:GetTables"\n    ],\n    "Resource": [\n        "arn:aws:glue:$region-id:$account-id:catalog",\n        "arn:aws:glue:$region-id:$account-id:database/*",\n        "arn:aws:glue:$region-id:$account-id:table/*"\n    ]\n}\n')),(0,l.kt)("p",null,"For ingesting jobs (",(0,l.kt)("inlineCode",{parentName:"p"},"extract_transforms: True"),"), the following additional permissions are required:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Effect": "Allow",\n    "Action": [\n        "glue:GetDataflowGraph",\n        "glue:GetJobs",\n    ],\n    "Resource": "*"\n}\n')),(0,l.kt)("p",null,"plus ",(0,l.kt)("inlineCode",{parentName:"p"},"s3:GetObject")," for the job script locations."),(0,l.kt)("h2",{id:"config-details"},"Config details"),(0,l.kt)("p",null,"Note that a ",(0,l.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aws_region")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"AWS region code.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"env")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"PROD"')),(0,l.kt)("td",{parentName:"tr",align:null},"Environment to use in namespace when constructing URNs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aws_access_key_id")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Autodetected"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"},"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aws_secret_access_key")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Autodetected"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"},"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aws_session_token")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Autodetected"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"},"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aws_role")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Autodetected"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"},"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aws_profile")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Named AWS profile to use, if not set the default will be used")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"extract_transforms")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to extract Glue transform jobs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"database_pattern.allow")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for databases to include in ingestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"database_pattern.deny")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for databases to exclude from ingestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"database_pattern.ignoreCase")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table_pattern.allow")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables to include in ingestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table_pattern.deny")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables to exclude from ingestion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table_pattern.ignoreCase")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"platform")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"glue")),(0,l.kt)("td",{parentName:"tr",align:null},"Override for platform name. Allowed values - ",(0,l.kt)("inlineCode",{parentName:"td"},"glue"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"athena"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"platform_instance")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"The Platform instance to use while constructing URNs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"underlying_platform")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"glue")),(0,l.kt)("td",{parentName:"tr",align:null},"@deprecated(Use ",(0,l.kt)("inlineCode",{parentName:"td"},"platform"),") Override for platform name. Allowed values - ",(0,l.kt)("inlineCode",{parentName:"td"},"glue"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"athena"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ignore_unsupported_connectors")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to ignore unsupported connectors. If disabled, an error will be raised.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"emit_s3_lineage")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to emit S3-to-Glue lineage.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"glue_s3_lineage_direction")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"upstream")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"upstream"),", S3 is upstream to Glue. If ",(0,l.kt)("inlineCode",{parentName:"td"},"downstream")," S3 is downstream to Glue.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"extract_owners")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"When enabled, extracts ownership from Glue directly and overwrites existing owners. When disabled, ownership is left empty for datasets.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"domain.domain_key.allow")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables to set domain_key domain key (domain_key can be any string like ",(0,l.kt)("inlineCode",{parentName:"td"},"sales"),". There can be multiple domain key specified.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"domain.domain_key.deny")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables to not assign domain_key. There can be multiple domain key specified.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"domain.domain_key.ignoreCase")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.There can be multiple domain key specified.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"catalog_id")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"The aws account id where the target glue catalog lives. If None, datahub will ingest glue catalog in aws caller's account.")))),(0,l.kt)("h3",{id:"cross-account-ingestion"},"Cross-account ingestion"),(0,l.kt)("p",null,"To ingest glue catalog from another aws account, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"catalog_id")," field. Note that glue job is not affected by this field and it only ingests from aws caller's account. So if you are ingestion glue catalog from another aws account, you may set ",(0,l.kt)("inlineCode",{parentName:"p"},"extract_transforms")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"False")," to avoid the discrepancy between glue catalog and glue jobs."),(0,l.kt)("h2",{id:"compatibility"},"Compatibility"),(0,l.kt)("p",null,'To capture lineage across Glue jobs and databases, a requirements must be met \u2013 otherwise the AWS API is unable to report any lineage. The job must be created in Glue Studio with the "Generate classic script" option turned on (this option can be accessed in the "Script" tab). Any custom scripts that do not have the proper annotations will not have reported lineage.'),(0,l.kt)("h2",{id:"questions"},"Questions"),(0,l.kt)("p",null,"If you've got any questions on configuring this source, feel free to ping us on ",(0,l.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io/"},"our Slack"),"!"))}m.isMDXComponent=!0}}]);