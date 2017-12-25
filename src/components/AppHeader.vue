<template>
    <div class="AppHeader">
        <div class="bg-blue-dark border-t-8 border-green">
            <div class="container flex items-center flex-wrap px-4 py-1 mx-auto">
                <router-link to="/" class="w-1/4 md:flex-1">
                    <div class="relative w-16 h-16">
                        <img class="w-16 h-16 absolute pin"
                             src="https://art.nativescript-vue.org/NativeScript-Vue-Green-White.svg"
                             alt="NativeScript-Vue Logo">
                        <img class="w-16 h-16 absolute pin transition-all-ease hover:opacity-0"
                             src="https://art.nativescript-vue.org/NativeScript-Vue-White-Green.svg"
                             alt="NativeScript-Vue Logo">
                    </div>
                </router-link>
                <div class="w-1/2 md:w-auto text-center">
                    <input class="w-full md:w-48 px-4 py-2 text-blue-lightest bg-blue-light rounded-full"
                           type="text"
                           placeholder="Search docs...">
                </div>

                <!-- Bars -->
                <div class="w-1/4 md:hidden text-right" @click="navOpen = !navOpen">
                    <div class="inline-block">
                        <div class="w-6 h-2px bg-white mb-1"></div>
                        <div class="w-6 h-2px bg-white mb-1"></div>
                        <div class="w-6 h-2px bg-white"></div>
                    </div>
                </div>

                <!-- Nav -->
                <div :class="{ hidden: isMobile && !navOpen, flex: isMobile && navOpen }"
                     class="flex-col md:flex-row w-full md:w-auto">
                    <a href="#" class="no-underline text-blue-lightest md:ml-6 mr-4 py-4 md:py-0">Quick Start</a>
                    <a href="#" class="no-underline text-blue-lightest mr-4 py-4 md:py-0">Guides</a>
                    <a href="#" class="no-underline text-blue-lightest mr-4 py-4 md:py-0">API</a>
                    <a href="#" class="no-underline text-blue-lightest py-4 md:py-0">Community</a>
                </div>
            </div>
        </div>

        <!-- Mobile Docs Nav -->
        <div class="bg-grey-lighter md:hidden">
            <div class="container mx-auto p-4">
                <select class="w-full p-2" v-model="selectedRoute">
                    <option v-for="item in flat_toc" :key="item.name" :value="item.path">{{ item.name }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        navOpen: false,
        selectedRoute: null,
        isMobile: false,
      }
    },
    created() {
      this._resizeListener = () => {
        this.isMobile = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 768
      }
      window.addEventListener('resize', this._resizeListener);
      this._resizeListener();

      this.selectedRoute = this.$route.fullPath
    },
    destroyed() {
      window.removeEventListener('resize', this._resizeListener)
    },
    computed: {
      ...mapState(['flat_toc']),
    },
    watch: {
      selectedRoute(new_route) {
        this.$router.push(new_route)
      }
    }
  }
</script>