<template>
<header id="page-topbar">
    <div class="navbar-header">
        <div class="d-flex">
            <div class="navbar-brand-box">
                <NuxtLink to="/" class="logo logo-light" title="Tokenizate.app">
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
            <div class="dropdown ms-4">
                <NuxtLink to="/">
                    <button type="button" class="btn header-item">
                        Explorar
                    </button>
                </NuxtLink>
            </div>
            <div class="dropdown ms-4">
                <NuxtLink to="/register">
                    <button type="button" class="btn header-item">
                        Ser Creador
                    </button>
                </NuxtLink>
            </div>
            <div class="divider"></div>
            <div class="dropdown d-none d-lg-inline-block ms-4">
                <div class="btn-navbar-wrapper">
                    <div v-if="address" class="btn-navbar-wrapper">
                        <div class="btn btn-light py-1 px-3 font-size-12 font-semibold" @click="disconnect()">
                            <div class="d-flex align-items-center">
                                <div class="mr-3">
                                    <img src="@/static/wallet.png" alt="wallter">
                                </div>
                                <div class="text-left">
                                    <p>
                                        {{ hash }}
                                    </p>
                                    <p class="text-red-700">Desconectar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="btn-navbar-wrapper">
                        <button type="button" class="btn btn-warning text-base font-semibold py-2 px-5" title="Conecta tu wallet" @click="connect()">
                            Conecta tu wallet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<section class="text-center d-block d-lg-none d-xl-none d-xxl-none c4a-mobile">
    <div class="mt-4">
        <div v-if="address">
            <div class="btn btn-light py-1 px-3 font-size-12 font-semibold" @click="disconnect()">
                <div class="d-flex align-items-center">
                    <div class="mr-3">
                        <img src="@/static/wallet.png" alt="wallter">
                    </div>
                    <div class="text-left">
                        <p>
                            {{ hash }}
                        </p>
                        <p class="text-red-700">Desconectar</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="btn-navbar-wrapper">
            <button type="button" class="btn btn-warning text-base font-semibold py-2 px-5" title="Conecta tu wallet" @click="connect()">
                Conecta tu wallet
            </button>
        </div>
    </div>
</section>

</template>

<script>

    import Web3 from "web3";
    import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js'

    export default {
        name: 'Header',
        data() {
            return {
                provider: null,
                web3: null,
                accounts: null,
                address : null
            }
        },
        methods: {
            async connect () {

                this.provider = new WalletConnectProvider({
                    infuraId: "dec0eb1e0ded4068ba13d0f2c9d4939b",
                });

                this.web3 = new Web3(this.provider);

                await this.provider.enable();

                this.accounts = await this.web3.eth.getAccounts();
                this.address = this.accounts[0] || null;
            },
            async disconnect () {
                await this.provider.disconnect();
                this.accounts = null;
                this.address =  null;
            },
        },
        computed: {
            hash(){
                if(this.address){
                    return this.address.substring(0, 6) +  '...' + this.address.substring(this.address.length - 4)
                }
                return '[[ Address ]]'
            }
        },
    }
</script>

<style scoped>
</style>