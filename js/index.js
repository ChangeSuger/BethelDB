var module_list = ["home", "aurorians", "items"]

var vm = new Vue({
    el:"#mainbody",
    router,
    data: {
        loading: true,
        module_list: module_list,
        menu: {},
        mod: "home",
    },
    computed: {

    },
    methods: {
        changeMod: function(mod){
            if(this.$route.name != mod){
                router.push({
                    path: mod
                })
            }
            else {
                return 0
            }
        },
        updateVueData: function(){
            axios.get("/data/Zh/index.json").then(response => {
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