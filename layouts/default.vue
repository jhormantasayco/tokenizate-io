<template>
    <div>
        <Header />
          <slot />
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
