<template>
    <div v-show="modalVisible" class="fixed pin z-50 overflow-auto bg-smoke-dark flex" @click.self="hideModal">
        <div class="relative p-4 bg-white w-full max-w-md m-auto flex flex-col">

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