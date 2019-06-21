<template>
    <div class="ztree" ref="ztree" :id="treeId"></div>
</template>

<script>
// let $ = window.jQuery;
// window.ztree = {};
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
export default {
    name:'VueZtree',
    data() {
        return {
            treeId:`ztree_${new Date().getTime()}`
        }
    },
    props:{
        treeName:{
            type:String
        },
        async:{
            type:Object,
            default() {
                return {}
            }
        },
        check:{
            type:Object,
            default() {
                return {}
            }
        },
        data:{
            type:Object,
            default() {
                return {}
            }
        },
        edit:{
            type:Object,
            default() {
                return {}
            }
        },
        view:{
            type:Object,
            default() {
                return {}
            }
        },
        treeNodes:{
            type:Array,
            require:true
        }
    },
    methods:{
        getZtreeDom() {
            return this.$refs.ztree;
        },
        getEvents() {
            let callback = {};
            for(let i=0,len=callbacks.length;i<len;i++) {
                let _cb = callbacks[i];
                if(this.$listeners[_cb]) {
                    callback[_cb] = (...args)=> { 
                        this.$emit.apply(this,[_cb,...args]);
                    }
                }
            }
            return callback;
        },
        getTreeSettings(){
            const {async,check,edit,data,view} = this;
            return {
                async,
                check,
                edit,
                data,
                view,
                callback:this.getEvents()
            }
        },
        mounted() {
            if(this.treeNodes && this.treeNodes.length) {
                this.ztree = $.fn.zTree.init($(this.getZtreeDom()),this.getTreeSettings(),this.treeNodes)
                if(typeof this.treeName == 'string') {
                    window[this.treeName] = this.ztree; 
                }
            }
        },
        destroy() {
            this.ztree && this.ztree.destroy(this.treeId);
        },
        refresh() {
            this.destroy();
            this.create();
        }
    },
    watch:{
        treeNodes() {
           this.refresh();
        },
        treeName() {
            this.refresh();
        },
        async:{
            deep:true,
            handler() {
                this.refresh();
            }
        },
        check:{
            deep:true,
            handler() {
                this.refresh();
            }
        },
        data:{
            deep:true,
            handler() {
                this.refresh();
            }
        },
        edit:{
            deep:true,
            handler() {
                this.refresh();
            }
        },
        view:{
            deep:true,
            handler() {
                this.refresh();
            }
        }
    },
    mounted() {
        this.create();
    },
    beforeDestroy() {
        this.destroy();
    }
}
</script>
