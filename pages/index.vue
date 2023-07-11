<template>
  <div>
    {{ $t('msg') }}
  </div>
</template>

<script setup>
const { locale } = useI18n();
</script>
