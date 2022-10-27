<template>
<div class="card">
    <div class="card-body pt-3">
        <div class="alert alert-info mb-3 text-center" role="alert">
            <i class="fa fa-exclamation-circle text-primary"></i>
            Tienes 0 $JE de saldo disponible.
        </div>
        <div class="mb-3">
            <ul class="list-group">
                <li class="list-group-item">
                    <div class="row d-flex align-items-center">
                        <div class="col">
                            <input type="text" name="" class="form-control" placeholder="0.00">
                        </div>
                        <div class="col">
                            <div class="d-flex align-items-center justify-content-end">
                                <div class="mr-3"><div class="badge badge-soft-dark py-0 px-2">Máx.</div></div>
                                <div class="mr-3"><i class="fa fa-btc"></i></div>
                                <div class="mr-3">$DAI</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row d-flex align-items-center">
                        <div class="col">
                            <input type="text" name="" class="form-control" placeholder="0.00">
                        </div>
                        <div class="col">
                            <div class="d-flex align-items-center justify-content-end">
                                <div class="mr-3">
                                    <img :src="influencer.image" :alt="influencer.name" width="30" class="rounded-circle">
                                </div>
                                <div class="mr-3">$JE</div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="mb-3">
            <p>
                Estás comprando <strong>0 dólares</strong> en $JE
            </p>
        </div>
        <div>
            <button type="button" class="btn btn-warning w-100">Comprar tokens</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ProfileBuy',
    props: {
        influencer: {
            type: Object,
            required: true,
        },
    },
}
</script>
<style>
</style>