
## Install
First,you should install jquery and ztree package,you can install them with anyway,such as script,es6,amd or commonjs,the ztree-for-vue only need a global veriable $ and $.fn.ztree.You should also need to load the css files for ztree.
```sh
npm install ztree-for-vue --save-dev
#or yarn add ztree-for-vue -D
```
## Usage
举个最简单的🌰：
<client-only>
<demo-1 />
</client-only>
```html
<template>
  <div id="app">
    <vue-ztree :treeNodes="treeNodes" @onClick="handleTreeClick" :check="check" @onCheck="handleCheck"/>
  </div>
</template>
```
```javascript
import VueZtree from "ztree-for-vue";
const nodes= [
	{
        name: '父节点1',
        id:0,
        children: [
            {name: '子节点1',id:1},
            {
                name: '子节点2',
                id:2,
                children:[
                    {name:'子节点3',id:3}
                ]
            }
	    ]
    }
];
export default {
  name: "app",
  data() {
    return {
      treeNodes: nodes,
      check:{
        enable:true
      }
    };
  },
  components: {
    VueZtree
  },
  methods:{
    handleTreeClick(event,treeId,treeNode) {
      console.log(event,treeId,treeNode)
    },
    handleCheck(event,treeId,treeNode) {
      console.log(event,treeId,treeNode);
    }
  }
};
```
