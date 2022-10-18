var vm = new Vue({
    el:"#mainbody",
    router,
    data: {
        loading: true, // 遮罩层
        // 主模块切换
        menu: {},
        charaName: "Vice",
        itemID: 1,
    },
    computed: {
        // 主模块切换
        moduleList: function(){
            return [
                { name: 'home', path: './', query: {} },
                { name: 'aurorians', path: './aurorians', query: { chara: this.charaName} },
                { name: 'items', path: './items', query: { id: this.itemID } },
            ]
        }
    },
    methods: {
        // 主模块切换
        changeMod: function(mod){
            if(this.$route.name != mod.name){
                router.push({
                    path: mod.path,
                    query: mod.query,
                })
            }
        },
        // 数据载入 & 更新
        updateVueData: function(){
            axios.get("./data/cn/index.json").then(response => {
                for(var k in response.data){
                    this[k] = response.data[k]
                }
            })
        }
    },
    mounted: function(){
        this.updateVueData()
        this.loading = false
    }
})