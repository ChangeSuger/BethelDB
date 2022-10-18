Vue.component("as-button", {
    props: {
        plain: {
            type: Boolean,
            default: false,
        },
        round: {
            type: Boolean,
            default: false,
        },
        circle: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: "default"
        },
        selected: {
            type: String,
            default: null,
        },
        name: {
            type: String,
            default: ""
        }
    },
    computed: {
        typeClass: function(){
            return "as-btn--" + this.type
        },
        isActive: function(){
            return this.selected == this.name
        }
    },
    data: function(){
        return {
            btnClass: {
                'is-plain': this.plain,
                'is-round': this.round,
                'is-circle': this.circle,
            }
        }
    },
    template: `
        <button
            v-bind:class="[typeClass, btnClass, { active: isActive }]"
            v-bind:disabled="disabled"
        >
            <slot></slot>
        </button>
    `,
})

Vue.component("as-card", {
    props: {
        diystyle: {
            type: Object,
            default: null,
        },
        diyclass: {
            type: Array,
            default: null,
        }
    },
    computed: {

    },
    data: function(){
        return {

        }
    },
    template: `
        <div
            class="as-card"
            v-bind:class="diyclass"
            v-bind:style="diystyle"
        >
            <slot></slot>
        </div>
    `,
})