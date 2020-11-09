<template>
<div>
    <div class="featured">
      <h1>Featured Deals</h1>
     </div>
          <div class="backgroundImage" :style="{ backgroundImage: `url(${backgroundImagePath})` }">
         <h4>Trekking</h4>
         <p>Lorem Ispum</p>
         </div>
</div>
</template>


<script>
import backgroundImagePath from '~/uploads/.jpeg'
export default {
    name: 'FeaturedDeal',
     data() {
    return { backgroundImagePath }
  }

}
</script>