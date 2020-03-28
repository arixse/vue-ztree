const mount  = require("@vue/test-utils").mount
const VueZtree = require("@/lib/vue-ztree.vue")
describe('mount component',()=>{
    test('is a Vue intance',()=>{
        const wrapper = mount(VueZtree)
        expect(wrapper.isVueInstance).toBeTruthy()
    })
})