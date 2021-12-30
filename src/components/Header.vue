<template>
    <header id="app" class="header">
        <div class="bm-logo col-3">
            <a href="">
                <img :src="logo" alt="FUNDAY_logo">
            </a>
        </div>
        <div class="bm-title-blk">
            <div class="bm-title">
                <h1>後台管理系統</h1>
                <h2>Backend Management</h2>
            </div>
        </div>
    </header>
</template>

<script>
import logo from '../assets/images/FUNDAY_logo.svg';
export default {
    name: 'myHeader',
    data() {
        return {
            logo
        }
    },
}
</script>
