<template>
    <div data-server-rendered="true">
    
        <div id="layout">
            <div class="home">
               
                <div v-bind:class="[showBackgroundLogo ? 'header-bg' : 'other-logo', 'header-logo']">
                    
                        <nav>
                           <div class="menu-icon">
                              <i class="fa fa-bars fa-2x"></i>
                           </div>
                           <div class="logo">
                            <nuxt-link to="/"><opti-image :src="require('~/assets/uploads/text-logo.png')" class="text-logo img-responsive" alt="altra travels"/></nuxt-link>
                           </div>
                           <div class="menu">
                               <ul>
                                <li><nuxt-link to="treks">Treks</nuxt-link></li>
                                <li><nuxt-link to="leader">Trek Leads</nuxt-link></li>
                                <li><nuxt-link to="/">Blog</nuxt-link></li>
                               <li> <nuxt-link to="about">About Us</nuxt-link></li>
                                <li><nuxt-link to="contact">Contact Us</nuxt-link></li>
                                <li><nuxt-link to="sign"> Sign In</nuxt-link></li>
                              </ul>
                           </div>
                        </nav>

                    
                </div> 
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NavigationBar',
    props:{
        showBackgroundLogo: Boolean
    }
}
</script>