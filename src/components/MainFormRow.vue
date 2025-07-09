<script setup lang="ts">
import { computed, ref } from "vue";
import Select from "primevue/select";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";
import type { Account, Mark, Type } from "../types";
import { useAccountsStore } from "../stores/accounts.ts";
import {
  INPUT_MARKS_MAX_LENGTH,
  INPUT_MAX_LENGTH,
} from "../shared/constants.ts";

const { account } = defineProps<{ account: Account }>();

const accountsStore = useAccountsStore();

const types = ref<Type[]>([
  { name: "Локальная", code: "local" },
  { name: "LDAP", code: "ldap" },
]);

function convertMarksToString(marks?: Mark[]) {
  if (!marks) return "";

  return marks.map((mark) => mark.text).join("; ");
}

function deleteWhiteSpaces(str: string): string {
  return str.replace(/\s+/g, "");
}

function onMarkChange(marks?: string) {
  if (!marks) return (account.marks = undefined);

  account.marks = marks
    .split(/; |;/)
    .filter((mark) => Boolean(deleteWhiteSpaces(mark)))
    .map((mark) => ({ text: deleteWhiteSpaces(mark) }));
}

function getTypeName(name: string) {
  return types.value.find((type) => type.name === name);
}

function onSelectChange(selectedType: Type) {
  account.record_type = selectedType.name;

  if (selectedType.name === "LDAP") account.password = null;
}

const isPasswordVisible = computed(() => account.record_type !== "LDAP");
const validation_rules = computed(() => ({
  login: !account.login || account.login.length > INPUT_MAX_LENGTH,
  password: !account.password || account.password.length > INPUT_MAX_LENGTH,
}));
</script>

<template>
  <tr>
    <td>
      <InputText
        type="text"
        :modelValue="convertMarksToString(account.marks)"
        @update:modelValue="onMarkChange"
        :maxlength="INPUT_MARKS_MAX_LENGTH"
      />
    </td>

    <td>
      <Select
        :options="types"
        :modelValue="getTypeName(account.record_type)"
        @update:modelValue="onSelectChange"
        optionLabel="name"
      />
    </td>

    <td :colspan="isPasswordVisible ? 1 : 2">
      <InputText
        type="text"
        :invalid="validation_rules.login"
        v-model="account.login"
        :maxlength="INPUT_MAX_LENGTH"
      />
    </td>

    <td v-if="isPasswordVisible">
      <Password
        v-model="account.password"
        toggle-mask
        :invalid="validation_rules.password"
        :feedback="false"
        :maxlength="INPUT_MAX_LENGTH"
      />
    </td>

    <td>
      <Button
        variant="outlined"
        severity="warn"
        icon="fa-solid fa-trash"
        @click="accountsStore.deleteAccount(account.id)"
      />
    </td>
  </tr>
</template>

<style scoped>
input,
.p-select {
  width: 100%;
}
</style>
