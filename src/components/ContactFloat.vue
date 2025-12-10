<template>
    <!-- 使用 Teleport 將視窗傳送到 body -->
    <Teleport to="body">
        <!-- 背景遮罩 -->
        <div v-if="isOpen" class="contact-overlay" @click="closePanel">
            <!-- 小視窗 -->
            <div class="contact-panel" @click.stop>
                <div class="contact-header">
                    <span>{{ $t('contact.title') }}</span>
                    <button class="close-btn" @click="closePanel">×</button>
                </div>

                <div class="contact-body">
                    <div class="my-email">
                        <span class="label">{{ $t('contact.to') }}</span>
                        <a :href="`mailto:${myEmail}`">{{ myEmail }}</a>
                    </div>
                    <form @submit.prevent="handleSubmit" class="contact-form">
                        <label class="field">
                            <span class="field-label">{{ $t('contact.fields.emailLabel') }}</span>
                            <input v-model="form.from" type="email" placeholder="name@example.com" required />
                        </label>

                        <label class="field">
                            <span class="field-label">{{ $t('contact.fields.subjectLabel') }}</span>
                            <input v-model="form.subject" type="text" :placeholder="$t('contact.fields.subjectLabel')"
                                required />
                        </label>

                        <label class="field">
                            <span class="field-label">{{ $t('contact.fields.messageLabel') }}</span>
                            <textarea v-model="form.message" rows="9"
                                :placeholder="$t('contact.fields.messagePlaceholder')" required />
                        </label>

                        <button type="submit" class="submit-btn">
                            {{ $t('contact.send') }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { ref } from "vue";

// 定義 props 和 emits
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['update:isOpen']);

// 你的信箱
const myEmail = "fonitin@gmail.com";

// 表單資料
const form = ref({
    from: "",
    subject: "",
    message: "",
});

// 關閉面板
const closePanel = () => {
    emit('update:isOpen', false);
};

// 送出處理:用 mailto 開啟使用者的郵件程式
const handleSubmit = () => {
    const subject = encodeURIComponent(form.value.subject);
    const body = encodeURIComponent(
        `From: ${form.value.from}\n\n${form.value.message}`
    );

    const mailtoLink = `mailto:${myEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    // 送出後可以選擇清空 & 關閉
    // form.value = { from: "", subject: "", message: "" };
    // closePanel();
};
</script>

<style scoped>
/* 背景遮罩 */
.contact-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    overflow-y: auto;
}

/* 浮動小視窗 */
.contact-panel {
    position: relative;
    width: 500px;
    max-width: 85vw;
    max-height: 80vh;
    background: #111827;
    border-radius: 14px;
    border: 1px solid #374151;
    z-index: 10000;
    color: #e5e7eb;
    overflow-y: auto;
    margin: auto;
}

/* header */
.contact-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 0.9rem;
    background: #1f2937;
    border-bottom: 1px solid #374151;
    font-weight: 600;
    font-size: 1.3rem;
}

.close-btn {
    border: none;
    background: transparent;
    color: #9ca3af;
    cursor: pointer;
    font-size: 1.8rem;
    line-height: 1;
    padding: 0 4px;
}

.close-btn:hover {
    color: #f9fafb;
}

/* body */
.contact-body {

    padding: 0.9rem 0.9rem 1rem;
}

.my-email {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
    display: flex;
    gap: 0.25rem;
    align-items: baseline;
}

.my-email .label {
    color: #9ca3af;
}

.my-email a {
    color: #93c5fd;
    text-decoration: none;
    word-break: break-all;
}

.my-email a:hover {
    text-decoration: underline;
}

/* form fields */
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
}

.field {

    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.field-label {
    font-size: 0.8rem;
    color: #9ca3af;
}

input,
textarea {

    background-color: #020617;
    border-radius: 8px;
    border: 1px solid #374151;
    padding: 0.45rem 0.55rem;
    font-size: 0.85rem;
    color: #e5e7eb;
    outline: none;
    width: 100%;
    resize: vertical;
}

input:focus,
textarea:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.4);
}

/* submit button */
.submit-btn {
    margin-top: 0.4rem;
    width: 100%;
    border-radius: 999px;
    background-color: #3b82f6;
    border: none;
    color: #f9fafb;
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0.5rem 0.8rem;
    cursor: pointer;

}

.submit-btn:hover {
    background-color: #0e42b5;

}

/* 手機調整 */
@media (max-width: 390px) {}
</style>