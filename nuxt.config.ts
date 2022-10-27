// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { resolve } from 'path'

export default {

  alias: {
    'style': resolve(__dirname, './assets/style'),
    'images': resolve(__dirname, './assets/images'),
    'data': resolve(__dirname, './assets/data')
  },

  ssr: false,

  css: [
    '@/assets/bootstrap/bootstrap.scss',
    '@/assets/bootstrap/app.scss'
  ],

  app: {
    head:{
      title: 'Tokenizate.io',
      bodyAttrs: {
        'data-topbar' : 'dark',
        'data-layout' : 'horizontal',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Descripción de Tokenizate.io'
        }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://rsms.me/' },
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
        { rel: 'stylesheet', href: 'https://unpkg.com/tailwindcss@1.9.6/dist/tailwind.min.css' },
      ]
    }
  },

  dev: process.env.NODE_ENV !== 'production',

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://nuxtjs.org',
    walletBridge: process.env.WALLET_BRIDGE || 'https://bridge.walletconnect.org',
  },

  loading: {
    color: 'blue',
    height: '5px'
  },
}