<template>
  <div>
    <!-- <NavigationBar></NavigationBar> -->
      <Header :showBackgroundLogo="false"></Header> 
    <Nuxt />
    <Footer></Footer>
    
  </div>
</template>  
<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
export default {
  components:{
  
    Footer,
  
  },
  
}
</script>

