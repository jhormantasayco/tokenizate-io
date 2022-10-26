<template>
  <div class="wrapper">
    <div class="card">
        <div class="card-body text-center p-5">
          <div class="title">
            <h3 class="card-title">Bienvenido</h3>
          </div>
          <div class="content mt-4">
            Una nueva forma de apoyar a tu creador de contenido favorito, invirtiendo en él, comprando los artículos de su marketplace y mucho más.
          </div>
          <div class="mt-4">
            <button class="btn btn-warning" type="button" @click="launchModalQr()">Conectar con tu wallet</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

  import WalletConnect from "@walletconnect/client";
  import QRCodeModal from "algorand-walletconnect-qrcode-modal";
  import algosdk from "algosdk";
  import { formatJsonRpcRequest } from "@json-rpc-tools/utils";

  export default {
    layout: 'default',
    name: 'Interview',
    components: {

    },
    data: () => ({

    }),
    mounted() {

    },
    methods: {
      launchModalQr(){
        alert('sdfsd');
      }
    },
  }
</script>
<style scoped>
.wrapper{
  max-width: 500px;
  margin: 10% auto 0;
}
</style>