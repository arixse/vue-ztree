# vue-ztree
> A Vue.2x component of ztree 👍
## How to install ztree-for-vue?
First,you should install jquery and ztree package,you can install them with anyway,such as script,import or require,the ztree-for-vue only need as global veriable $ and $.fn.ztree.You should also need to load the css files for ztree.
```sh
npm install ztree-for-vue --save-dev
#or yarn add ztree-for-vue -D
```
## How to use it? 
```html
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
## Props
- **`treeName`** (string)
the global attribute name  
- **`treeNodes`** (required, object)
the zTreee Nodes data
- **`async`** (object)
to load zTree Nodes as async(the zTree async setting)
- **`check`** (object)
the zTree check setting(the zTree check setting)
- **`data`** (object)
the zTree data setting
- **`edit`** (object)
the zTree eidt setting
- **`view`** (object)
the zTree view setting
>Please go [http://www.treejs.cn/v3/api.php](http://www.treejs.cn/v3/api.php) to get more infomations
## Event
```javascript
const callbacks = [
    'beforeAsync',
    'beforeCheck',
    'beforeClick',
    'beforeCollapse',
    'beforeDblClick',
    'beforeDrag',
    'beforeDragOpen',
    'beforeDrop',
    'beforeEditName',
    'beforeExpand',
    'beforeMouseDown',
    'beforeMouseUp',
    'beforeRemove',
    'beforeRename',
    'beforeRightClick',
    'onAsyncError',
    'onAsyncSuccess',
    'onCheck',
    'onClick',
    'onCollapse',
    'onDblClick',
    'onDrag',
    'onDragMove',
    'onDrop',
    'onExpand',
    'onMouseDown',
    'onMouseUp',
    'onNodeCreated',
    'onRemove',
    'onRename',
    'onRightClick'
]
```
## LICENSE
MIT
