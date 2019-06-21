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
## Events
ztree-for-vue provide some events looks like the ztree callback,
we can only listen the events that we need ,the events that we not need will not be emited.
* 'beforeAsync',
* 'beforeCheck',
* 'beforeClick',
* 'beforeCollapse',
* 'beforeDblClick',
* 'beforeDrag',
* 'beforeDragOpen',
* 'beforeDrop',
* 'beforeEditName',
* 'beforeExpand',
* 'beforeMouseDown',
* 'beforeMouseUp',
* 'beforeRemove',
* 'beforeRename',
* 'beforeRightClick',
* 'onAsyncError',
* 'onAsyncSuccess',
* 'onCheck',
* 'onClick',
* 'onCollapse',
* 'onDblClick',
* 'onDrag',
* 'onDragMove',
* 'onDrop',
* 'onExpand',
* 'onMouseDown',
* 'onMouseUp',
* 'onNodeCreated',
* 'onRemove',
* 'onRename',
* 'onRightClick'