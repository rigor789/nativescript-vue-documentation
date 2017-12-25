<template>
    <div v-show="modalVisible" class="fixed pin z-50 overflow-auto bg-smoke-dark flex" @click.self="hideModal">
        <div class="relative p-4 bg-white w-full max-w-md m-auto flex flex-col">

            <div class="absolute pin-t pin-r mr-4 mt-4 cursor-pointer text-smoke-dark hover:text-black" @click="hideModal">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path d="M11.534,10l8.254,-8.254c0.283,-0.283 0.283,-0.74 0,-1.023l-0.511,-0.511c-0.283,-0.283 -0.74,-0.283 -1.023,0l-8.254,8.254l-8.254,-8.248c-0.283,-0.283 -0.74,-0.283 -1.023,0l-0.511,0.511c-0.283,0.283 -0.283,0.74 0,1.023l8.254,8.248l-8.248,8.254c-0.283,0.283 -0.283,0.74 0,1.023l0.511,0.511c0.283,0.283 0.74,0.283 1.023,0l8.248,-8.254l8.254,8.254c0.283,0.283 0.74,0.283 1.023,0l0.511,-0.511c0.283,-0.283 0.283,-0.74 0,-1.023l-8.254,-8.254Z" style="fill-rule:nonzero;"/></svg>
            </div>

            <div class="pb-4 mb-8">
                <span class="rounded bg-green text-white px-3 py-1">Install</span>

                <div class="ml-8 mt-4">
                    <div class="markdown-body">
                        <pre><code>npm install --save nativescript-vue</code></pre>
                    </div>
                </div>
            </div>

            <div class="pb-4 mb-8">
                <span class="rounded bg-green text-white px-3 py-1">Initialize</span>

                <div class="ml-8 mt-4">
                    <div class="markdown-body" v-html="quickStartCode"></div>
                </div>
            </div>

            <div class="pb-4 mb-8">
                <span class="rounded bg-green text-white px-3 py-1">Run</span>

                <div class="ml-8 mt-4">
                    <div class="markdown-body">
                        <pre><code>tns run android / ios</code></pre>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState({
        modalVisible: state => state.quickStartModalVisible
      }),

      quickStartCode() {
        return this.$md.render(`
\`\`\`
const Vue = require('nativescript-vue')

new Vue({
    template: \`
        <Page>
            <ActionBar title="Hello World"/>
            <StackLayout>
                <Label text="It works!"/>
            </StackLayout>
        </Page>
    \`
}).$start()
\`\`\`
`)
      }
    },

    methods: {
      hideModal() {
        this.$store.commit('SET_QUICK_START_MODAL_VISIBLE', false)
      }
    },
  }
</script>