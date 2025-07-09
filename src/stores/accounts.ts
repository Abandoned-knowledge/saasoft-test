import { ref, watch } from "vue";
import { defineStore } from "pinia";
import type { Account } from "../types";
import { DEFAULT_ACCOUNTS } from "../shared/constants.ts";
import { inputIsValid } from "../helpers/inputIsValid.ts";

export const useAccountsStore = defineStore(
  "accounts",
  () => {
    const accounts = ref<Account[]>(DEFAULT_ACCOUNTS);

    function addBlankAccount() {
      accounts.value.push({
        id: Math.ceil(Math.random() * 1000000),
        login: "",
        record_type: "Локальная",
        password: null,
      });
    }

    function deleteAccount(id: number) {
      const accountIndex = accounts.value.findIndex((acc) => acc.id === id);
      accounts.value.splice(accountIndex, 1);
    }

    watch(
      accounts,
      (newValue: Account[]) => {
        accounts.value = newValue.filter(
          ({ login, password }) =>
            inputIsValid(login) && inputIsValid(password),
        );
      },
      {
        once: true,
      },
    );

    return { accounts, addBlankAccount, deleteAccount };
  },
  {
    persist: {
      storage: localStorage,
    },
  },
);
