<template>
<header id="page-topbar">
    <div class="navbar-header">
        <div class="d-flex">
            <div class="navbar-brand-box">
                <NuxtLink to="/" class="logo logo-light">
                    <span class="logo-sm text-main">
                        Tokenizate.io
                    </span>
                    <span class="logo-lg text-main">
                        Tokenizate.io
                    </span>
                </NuxtLink>
            </div>
        </div>
        <div class="d-flex">
            <div class="dropdown d-none d-lg-inline-block ms-4">
                <button type="button" class="btn header-item">
                    Explorar
                </button>
            </div>
            <div class="dropdown d-none d-lg-inline-block ms-4">
                <button type="button" class="btn header-item">
                    Ser Creador
                </button>
            </div>
            <div class="divider"></div>
            <div class="dropdown d-none d-lg-inline-block ms-4">
                <div class="btn-navbar-wrapper">
                    <button type="button" class="btn btn-warning text-base font-semibold py-2 px-5" @click="connect()">
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
        rpc: {
            97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
            56: "https://bsc-dataseed1.binance.org/",
        },
        bridge: "https://bridge.myhostedserver.com",
        qrcodeModalOptions: {
            mobileLinks: [
                "metamask",
                "trust",
            ],
        },
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