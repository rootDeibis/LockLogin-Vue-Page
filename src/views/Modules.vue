<template>
   <div id="body">
      <h4 class="body-separator-txt">MODULES</h4>

      <div class="modules-ctn">

         <div v-on:click="goModule($event, module.name)" v-for="module in modules"  v-bind:name="module.name" class="module">
            <p>{{ module.name }}</p>

            <i class="uil uil-expand-arrows"></i>

            <div id="footer">
               <a v-bind:href="module.version[module.latest].download" download=""><i class="uil uil-import"></i> {{ module.latest }}</a>

               <p><b>By</b> KarmaDev</p>
            </div>
         </div>

      </div>
   </div>

</template>
<script type="text/javascript">
import { get } from 'axios'
export default {
  data () {
    return {
      modules: {}
    }
  },

  methods: {
    goModule ({ target }, name) {
      if (target.tagName == 'A') return

      this.$router.replace({ path: '/module/' + name.replace('LockLogin ', '') })
    }
  },
  mounted () {
    const $$ = this

    get('https://karmaconfigs.ml/locklogin/api/?modules=all', {}, { timeout: 2 }).then(resp => {
      $$.modules = resp.data.modules
    })
  }
}
</script>
