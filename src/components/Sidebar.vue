<template>
   <div class="sidebar-container">
      <div id="header">
         <i id="nav-toggle" class="uil-align-left"></i>
         <h1 class="gradient-text" id="title">LockLogin
            <p>A plugin that provides security to your Spigot/Bungee server</p>
         </h1>

      </div>

      <div id="body">
         <nav class="sb">
            <ul>
               <li class="sb-category active">
                  <p>dashboard <i class="uil uil-angle-down"></i></p>
                  <ul class="sb-category-ctn">
                     <li>
                        <router-link to="/">home</router-link>
                     </li>

                     <li>
                        <router-link to="/community">Community</router-link>
                     </li>
                  </ul>
               </li>

               <li class="sb-category">
                  <p>locklogin <i class="uil uil-angle-down"></i></p>

                  <ul class="sb-category-ctn">
                     <li>
                        <router-link to="/modules">modules</router-link>
                     </li>

                     <li>
                        <a>Wiki</a>
                     </li>
                  </ul>
               </li>
            </ul>
         </nav>
      </div>

      <div id="footer">
         <p class="gradient-text">Developed by <a href="https://github.com/rootDeibis" target="_blank">rootDeibis</a></p>
      </div>
   </div>
</template>

<script type="text/javascript">
export default {
  mounted () {
    const $sel = (target) => document.querySelector(target)

    const $event = (target, name, call) => document.querySelectorAll(target).forEach((el) => el.addEventListener(name, (e) => call(e, el)))
    $event('#nav-toggle', 'click', (e, element) => $sel('div.sidebar-container').classList.toggle('active'))

    $event('li.sb-category p', 'click', (e, element) => element.parentNode.classList.toggle('active'))
  }
}
</script>
