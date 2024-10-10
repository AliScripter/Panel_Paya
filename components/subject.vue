<template>
    <div class="col-span-1 w-28">
        <button
            class="bg-[#5145E5] hover:bg-[#4134d4] text-white font-bold py-2 px-4 rounded-[7px] h-full w-full"
            id="btn"
        >
            <slot />
        </button>
    </div>
</template>
<script></script>
<style scoped>
#btn {
    text-align: center;
    padding: 8px 0;
}
</style>
