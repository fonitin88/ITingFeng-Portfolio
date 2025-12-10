<template>
    <svg :width="size" :height="size" viewBox="0 0 1 1" class="circle-mask">
        <defs>
            <mask :id="maskId">
                <circle cx="0.5" cy="0.5" r="0.5" fill="white" />
            </mask>
        </defs>
        <image :href="src" :x="imageX" :y="imageY" :width="imageSize" :height="imageSize" :mask="`url(#${maskId})`"
            preserveAspectRatio="xMidYMid slice" />
    </svg>
</template>

<script>
export default {
    name: 'CircleMaskSvg',
    props: {
        src: { type: String, required: true },
        size: { type: Number, default: 300 },
        zoom: { type: Number, default: 1 }, // 新增縮放參數
        offsetX: { type: Number, default: 0 },
        offsetY: { type: Number, default: 0 }
    },
    data() {
        return {
            maskId: `circleMask-${Math.random().toString(36).substr(2, 9)}`
        };
    },
    computed: {
        imageSize() {
            return this.zoom;
        },
        imageX() {
            return (1 - this.zoom) / 2 + this.offsetX;
        },
        imageY() {
            return (1 - this.zoom) / 2 + this.offsetY;
        }
    }
};
</script>

<style scoped>
.circle-mask {
    display: block;
}
</style>
