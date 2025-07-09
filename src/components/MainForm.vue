<script setup lang="ts">
import MainFormRow from "./MainFormRow.vue";
import { useAccountsStore } from "../stores/accounts.ts";

const accountsStore = useAccountsStore();
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th>Метки</th>
        <th>Тип задачи</th>
        <th>Логин</th>
        <th>Пароль</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <MainFormRow
        v-for="account in accountsStore.accounts"
        :key="account.id"
        :account="account"
      />
    </tbody>
  </table>
</template>

<style>
.table {
  thead th {
    text-align: left;
  }

  th,
  td {
    padding: 0.25rem 0.4rem;
  }
}
</style>
