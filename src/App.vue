<template>
   <SidebarComponent />

   <main class="page" v-bind:id="$route.name">
      <PageBar />

      <router-view />
   </main>
</template>

<script type="text/javascript">
import SidebarComponent from '@/components/Sidebar'
import PageBar from '@/components/PageBar'
export default {
  components: { SidebarComponent, PageBar },

  data () {
    return {

    }
  },

  mounted () {
    console.log('%cLockLogin Page', 'font-size: 4em')
    console.log('%cDeveloped by rootDeibis', 'font-size: 0.75rem')
  }
}
</script>

<style type="text/css" src="@/assets/css/style.css"></style>
