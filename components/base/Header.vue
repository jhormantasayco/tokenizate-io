<template>
<header id="page-topbar">
    <div class="navbar-header">
        <div class="d-flex">
            <div class="navbar-brand-box">
                <NuxtLink to="/" class="logo logo-light">
                    <span class="logo-sm">
                        Tokenizate.io
                    </span>
                    <span class="logo-lg">
                        Tokenizate.io
                    </span>
                </NuxtLink>
            </div>
        </div>
        <div class="d-flex">
            <div class="dropdown d-none d-lg-inline-block ms-1">
                <button type="button" class="btn header-item">
                    Explorar
                </button>
            </div>
            <div class="dropdown d-none d-lg-inline-block ms-1">
                <button type="button" class="btn header-item">
                    Ser Creador
                </button>
            </div>
            <div class="dropdown d-none d-lg-inline-block ms-1">
                <button type="button" class="btn header-item">
                    Ser Creador
                </button>
            </div>
            <div class="divider"></div>
            <div class="dropdown d-none d-lg-inline-block ms-1">
                <div class="p-3">
                    <button type="button" class="btn btn-warning" @click="connect()">
                        Conecta tu waller
                    </button>
                </div>
            </div>
        </div>
    </div>
</header>
</template>

<script>

    import Web3 from "web3";
    import WalletConnectProvider from "@walletconnect/web3-provider";

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
                //const accounts = await web3.eth.getAccounts();
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