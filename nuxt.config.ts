// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { resolve } from 'path'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

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