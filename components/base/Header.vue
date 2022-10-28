<template>
<header id="page-topbar">
    <div class="navbar-header">
        <div class="d-flex">
            <div class="navbar-brand-box">
                <NuxtLink to="/" class="logo logo-light">
                    <span class="logo-sm text-main">
                        Tokenizate.app
                    </span>
                    <span class="logo-lg text-main">
                        Tokenizate.app
                    </span>
                </NuxtLink>
            </div>
        </div>
        <div class="d-flex">
            <div class="dropdown d-none d-lg-inline-block ms-4">
                <NuxtLink to="/">
                    <button type="button" class="btn header-item">
                        Explorar
                    </button>
                </NuxtLink>
            </div>
            <div class="dropdown d-none d-lg-inline-block ms-4">
                <button type="button" class="btn header-item">
                    Ser Creador
                </button>
            </div>
            <div class="divider"></div>
            <div class="dropdown d-none d-lg-inline-block ms-4">
                <div class="btn-navbar-wrapper">
                    <button type="button" class="btn btn-warning text-base font-semibold py-2 px-5" title="Conecta tu wallet" @click="connect()">
                        Conecta tu wallet
                    </button>
                </div>
            </div>
        </div>
    </div>
</header>
</template>

<script>

    import Web3 from "web3";
    import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js'

    const provider = new WalletConnectProvider({
        infuraId: "dec0eb1e0ded4068ba13d0f2c9d4939b",
    });

    const web3 = new Web3(provider);

    export default {
        name: 'Header',
        data() {
            return {
                accounts: null
            }
        },
        methods: {
            async connect () {
                await provider.enable();
                alert("connected")
                const accounts = await web3.eth.getAccounts();
                console.log(accounts);
            },
            async disconnect () {
                await provider.disconnect();
                alert("disconnected")
            },
        },
    }
</script>

<style scoped>
</style>