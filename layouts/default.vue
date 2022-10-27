<template>
    <div id="layout-wrapper">
        <Header />
          <div class="main-content">
            <div class="page-content">
              <slot />
            </div>
          </div>
        <Footer />
    </div>
</template>

<script>

import Header from '~/components/base/Header'
import Footer from '~/components/base/Footer'

export default {
  name: 'Default',
  components: {
    Header,
    Footer,
  },
}
</script>
