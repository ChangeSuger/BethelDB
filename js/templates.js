const asHome = Vue.component("as-home", {
    props: {

    },
    data: function(){
        return {}
    },
    template: `
        <as-card :diyclass="['as-home']">
            <as-card :diyclass="['as-home-main']">
                <as-card :diyclass="['p-2']">

                </as-card>
                <as-card :diyclass="['p-2']">

                </as-card>
            </as-card>
            <as-card :diyclass="['as-home-footer']">
                <p>Alchemy Stars DB is developed and maintained by Camille</p>
                <p>Please report any issues, feedback or suggestions to me: ???</p>
                <p>All game artwork, information and assets used in this database are the property and copyright of ???.</p>
                <p>
                    <a>Privacy</a>
                    <el-divider direction="vertical"></el-divider>
                    <a>GitHub</a>
                </p>
            </as-card>
        </as-card>
    `,
})

const asAurorians = Vue.component("as-aurorians", {
    props: [],
    data: function(){
        return {}
    },
    template: `
        <as-card :diyclass="['as-aurorians']">
            aurorians
        </as-card>
    `,
})

const asItems = Vue.component("as-items", {
    props: [],
    data: function(){
        return {}
    },
    template: `
        <as-card :diyclass="['as-items']">
            items
        </as-card>
    `,
})