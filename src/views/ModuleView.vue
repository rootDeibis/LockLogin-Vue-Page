<template>
	<div id="body" v-if="module">
		<h4 class="body-separator-txt gradient-text">Description</h4>

		<h5>{{ module.description.join(", ") }}</h5>

		<h4 class="body-separator-txt gradient-text">Versions</h4>
		<table v-if="module">

			<tr v-for="ver, index of module.version.legacy">
				<td>{{ index }}</td>
				<td><a class="gradient-button" :href="ver.download" download="">Download</a></td>
			</tr>
		</table>
	</div>
</template>

<script type="text/javascript">
import { get } from 'axios'

export default {
  data () {
    return {
      module: null
    }
  },

  mounted () {
    const Params = this.$route.params

    get('https://karmaconfigs.ml/locklogin/api/?modules=' + Params.name, {}, { timeout: 2 }).then(({ data }) => {
      this.module = data
    })
  }
}
</script>
