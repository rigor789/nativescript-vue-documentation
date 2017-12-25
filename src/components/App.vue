<template>
    <div class="font-sans leading-normal" :class="{'max-h-screen': modalVisible, 'overflow-hidden': modalVisible}">
        <QuickStart />
        <AppHeader/>
        <router-view/>
    </div>
</template>

<script>
  import AppHeader from './AppHeader';
  import QuickStart from './content/QuickStart';
  import {mapState} from 'vuex';

  export default {
    computed: {
      ...mapState({
        modalVisible: state => state.quickStartModalVisible
      })
    },
    created() {
      this.$http.get('toc.json').then(({data}) => {
        const flatten = (entry, res) => {
          if (entry.path && entry.source) {
            res.push({
              name: entry.name,
              path: entry.path,
              source: entry.source
            });
          }

          if (entry.children) {
            const len = entry.children.length
            let i = 0;
            for (; i < len; i++) {
              flatten(entry.children[i], res);
            }
          }

          return res;
        };
        const flat_toc = flatten({children: data}, []);
        console.log('%cParsed Routes:', 'color: red; font-size: 18px;');
        console.table(flat_toc);
        this.$store.commit('SET_TOC', data);
        this.$store.commit('SET_FLAT_TOC', flat_toc);
      })
    },
    components: {
      AppHeader,
      QuickStart
    }
  }
</script>

<style>
    @tailwind preflight;
    @tailwind utilities;

    @responsive {
        .bg-docs-gradient {
            background: linear-gradient(90deg, #f1f5f8 50%, #fff 50%)
        }
    }

    .NavigationItem a {
        @apply .no-underline .text-grey-dark
    }

    .type-main-category.first > span {
        @apply .mt-0
    }

    .type-main-category > span {
        @apply .block .uppercase .tracking-wide .text-sm .mb-2 .mt-4 .text-blue-dark .font-bold
    }

    .type-sub-category > span {
        @apply .block .tracking-wide .text-xs .mb-2 .mt-2 .text-grey-darker
    }

    .type-sub-category > ul {
        @apply .ml-4
    }

    .markdown-body a {
        @apply .text-green
    }

    .transition-all-ease {
        transition: all .3s ease;
    }
</style>