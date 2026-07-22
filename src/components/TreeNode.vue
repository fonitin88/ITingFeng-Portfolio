<template>
    <div class="node-wrapper">
        <div class="node-box">
            <h3 class="node-title">{{ label }}</h3>
            <p class="node-sub">{{ sub }}</p>
        </div>
        <div v-if="children" class="stem"></div>
        <div v-if="children" class="children">
            <TreeNode v-for="(child, i) in children" :key="i" :label="child.label" :children="child.children" :sub="child.sub" />
        </div>
    </div>
</template>

<script setup>
defineProps(['label', 'children', 'sub'])
</script>

<style scoped>
.node-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.node-box {
    display: inline-block;
    min-width: 140px;
    padding: 0.75rem 1.5rem;
    border-radius: 12px;
    text-align: center;
    background: rgba(132, 187, 198, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);

}

.node-title {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #00d4ff;
}

.node-sub {
    font-size: 0.95rem;
    opacity: 0.8;
    line-height: 1.6;
    color: #d1d5d6;
}

.stem {
    width: 1px;
    height: 16px;
    background: rgba(0, 212, 255, 0.4);
}

.children {
    display: flex;
    gap: 24px;
    justify-content: center;
}

.children>.node-wrapper {
    position: relative;
    padding-top: 24px;
}

.children>.node-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 24px;
    background: rgba(0, 212, 255, 0.4);
}

.children>.node-wrapper::after {
    content: '';
    position: absolute;
    top: 0;
    left: -12px;
    right: -12px;
    height: 1px;
    background: rgba(0, 212, 255, 0.4);
}

.children>.node-wrapper:first-child::after {
    left: 50%;
}

.children>.node-wrapper:last-child::after {
    right: 50%;
}

.children>.node-wrapper:only-child::after {
    display: none;
}
</style>