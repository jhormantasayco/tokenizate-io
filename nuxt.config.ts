// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { resolve } from 'path'

export default {
  alias: {
    'style': resolve(__dirname, './assets/style'),
    'images': resolve(__dirname, './assets/images'),
    'data': resolve(__dirname, './assets/data')
  },

  css: ['@/assets/bootstrap/bootstrap.scss'],

  dev: process.env.NODE_ENV !== 'production',

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://nuxtjs.org',
    walletBridge: process.env.WALLET_BRIDGE || 'https://bridge.walletconnect.org',
  },

  head: {
    title: 'Tokenizate.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Descripción de Tokenizate.io'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: {
    color: 'blue',
    height: '5px'
  }
}