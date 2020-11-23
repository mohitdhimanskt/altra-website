<template>
    <div>
        <NavigationBar></NavigationBar>
        <Nuxt/>
        <Footer></Footer>
    </div>
</template>
<script>
import NavigationBar from '~/components/NavigationBar.vue'
export default {
    
    
    components:{    
        NavigationBar
    }
}
</script>
