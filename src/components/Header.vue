<script setup lang="ts">
import Button from "primevue/button";
import Message from "primevue/message";
import { useAccountsStore } from "../stores/accounts.ts";

const accountsStore = useAccountsStore();
</script>

<template>
  <header>
    <h1>
      Учётные записи
      <Button
        size="small"
        variant="outlined"
        icon="fa-solid fa-plus"
        iconPos="right"
        @click="accountsStore.addBlankAccount"
      />
    </h1>

    <Message severity="secondary">
      <i class="fa-solid fa-question"></i>
      <span>
        Для указания нескольких меток для одной пары логин/пароль используйте
        разделитель ;
      </span>
    </Message>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

h1 {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
}
</style>
