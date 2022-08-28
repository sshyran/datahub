"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4506],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38636:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var i=n(87462),o=n(63366),a=(n(67294),n(3905)),r=["components"],l={title:"Developing an Action",slug:"/actions/guides/developing-an-action",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/actions/guides/developing-an-action.md"},c="Developing an Action",s={unversionedId:"docs/actions/guides/developing-an-action",id:"docs/actions/guides/developing-an-action",isDocsHomePage:!1,title:"Developing an Action",description:"In this guide, we will outline each step to developing a Action for the DataHub Actions Framework.",source:"@site/genDocs/docs/actions/guides/developing-an-action.md",sourceDirName:"docs/actions/guides",slug:"/actions/guides/developing-an-action",permalink:"/docs/actions/guides/developing-an-action",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/actions/guides/developing-an-action.md",tags:[],version:"current",frontMatter:{title:"Developing an Action",slug:"/actions/guides/developing-an-action",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/actions/guides/developing-an-action.md"},sidebar:"overviewSidebar",previous:{title:"Developing a Transformer",permalink:"/docs/actions/guides/developing-a-transformer"},next:{title:"Deploying to AWS",permalink:"/docs/deploy/aws"}},p=[{value:"Overview",id:"overview",children:[],level:2},{value:"Step 1: Defining an Action",id:"step-1-defining-an-action",children:[],level:2},{value:"Step 2: Installing the Action",id:"step-2-installing-the-action",children:[{value:"Advanced: Installing as a Package",id:"advanced-installing-as-a-package",children:[],level:3}],level:2},{value:"Step 3: Running the Action",id:"step-3-running-the-action",children:[],level:2},{value:"(Optional) Step 4: Contributing the Action",id:"optional-step-4-contributing-the-action",children:[{value:"Prerequisites:",id:"prerequisites",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"developing-an-action"},"Developing an Action"),(0,a.kt)("p",null,"In this guide, we will outline each step to developing a Action for the DataHub Actions Framework."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Developing a DataHub Action is a matter of extending the ",(0,a.kt)("inlineCode",{parentName:"p"},"Action")," base class in Python, installing your\nAction to make it visible to the framework, and then configuring the framework to use the new Action."),(0,a.kt)("h2",{id:"step-1-defining-an-action"},"Step 1: Defining an Action"),(0,a.kt)("p",null,"To implement an Action, we'll need to extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"Action")," base class and override the following functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"create()")," - This function is invoked to instantiate the action, with a free-form configuration dictionary\nextracted from the Actions configuration file as input."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"act()")," - This function is invoked when an Action is received. It should contain the core logic of the Action."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"close()")," - This function is invoked when the framework has issued a shutdown of the pipeline. It should be used\nto cleanup any processes happening inside the Action. ")),(0,a.kt)("p",null,"Let's start by defining a new implementation of Action called ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomAction"),". We'll keep it simple-- this Action will\nprint the configuration that is provided when it is created, and print any Events that it receives."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# custom_action.py\nfrom datahub_actions.action.action import Action\nfrom datahub_actions.event.event import EventEnvelope\nfrom datahub_actions.pipeline.pipeline_context import PipelineContext\n\nclass CustomAction(Action):\n    @classmethod\n    def create(cls, config_dict: dict, ctx: PipelineContext) -> "Action":\n        # Simply print the config_dict.\n        print(config_dict)\n        return cls(ctx)\n\n    def __init__(self, ctx: PipelineContext):\n        self.ctx = ctx\n\n    def act(self, event: EventEnvelope) -> None:\n        # Do something super important.\n        # For now, just print. :) \n        print(event)\n\n    def close(self) -> None:\n        pass\n')),(0,a.kt)("h2",{id:"step-2-installing-the-action"},"Step 2: Installing the Action"),(0,a.kt)("p",null,"Now that we've defined the Action, we need to make it visible to the framework by making it\navailable in the Python runtime environment. "),(0,a.kt)("p",null,"The easiest way to do this is to just place it in the same directory as your configuration file, in which case the module name is the same as the file\nname - in this case it will be ",(0,a.kt)("inlineCode",{parentName:"p"},"custom_action"),"."),(0,a.kt)("h3",{id:"advanced-installing-as-a-package"},"Advanced: Installing as a Package"),(0,a.kt)("p",null,"Alternatively, create a ",(0,a.kt)("inlineCode",{parentName:"p"},"setup.py")," file in the same directory as the new Action to convert it into a package that pip can understand."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'from setuptools import find_packages, setup\n\nsetup(\n    name="custom_action_example",\n    version="1.0",\n    packages=find_packages(),\n    # if you don\'t already have DataHub Actions installed, add it under install_requires\n    # install_requires=["acryl-datahub-actions"]\n)\n')),(0,a.kt)("p",null,"Next, install the package"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pip install -e .\n")),(0,a.kt)("p",null,"inside the module. (alt.",(0,a.kt)("inlineCode",{parentName:"p"},"python setup.py"),"). "),(0,a.kt)("p",null,"Once we have done this, our class will be referencable via ",(0,a.kt)("inlineCode",{parentName:"p"},"custom_action_example.custom_action:CustomAction"),"."),(0,a.kt)("h2",{id:"step-3-running-the-action"},"Step 3: Running the Action"),(0,a.kt)("p",null,"Now that we've defined our Action, we can create an Action configuration file that refers to the new Action.\nWe will need to provide the fully-qualified Python module & class name when doing so."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example Configuration")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# custom_action.yaml\nname: "custom_action_test"\nsource:\n  type: "kafka"\n  config:\n    connection:\n      bootstrap: ${KAFKA_BOOTSTRAP_SERVER:-localhost:9092}\n      schema_registry_url: ${SCHEMA_REGISTRY_URL:-http://localhost:8081}\naction:\n  type: "custom_action_example.custom_action:CustomAction"\n  config:\n    # Some sample configuration which should be printed on create.\n    config1: value1\n')),(0,a.kt)("p",null,"Next, run the ",(0,a.kt)("inlineCode",{parentName:"p"},"datahub actions")," command as usual:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"datahub actions -c custom_action.yaml\n")),(0,a.kt)("p",null,"If all is well, your Action should now be receiving & printing Events."),(0,a.kt)("h2",{id:"optional-step-4-contributing-the-action"},"(Optional) Step 4: Contributing the Action"),(0,a.kt)("p",null,"If your Action is generally applicable, you can raise a PR to include it in the core Action library\nprovided by DataHub. All Actions will live under the ",(0,a.kt)("inlineCode",{parentName:"p"},"datahub_actions/plugin/action")," directory inside the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-actions"},"datahub-actions")," repository."),(0,a.kt)("p",null,"Once you've added your new Action there, make sure that you make it discoverable by updating the ",(0,a.kt)("inlineCode",{parentName:"p"},"entry_points")," section\nof the ",(0,a.kt)("inlineCode",{parentName:"p"},"setup.py")," file. This allows you to assign a globally unique name for you Action, so that people can use\nit without defining the full module path."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites:"),(0,a.kt)("p",null,"Prerequisites to consideration for inclusion in the core Actions library include"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Testing")," Define unit tests for your Action"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Deduplication")," Confirm that no existing Action serves the same purpose, or can be easily extended to serve the same purpose")))}d.isMDXComponent=!0}}]);