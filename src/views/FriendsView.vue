<template>
  <div class="text-content">
    <h1>Ваші друзі</h1>

    <div class="center">
      <button class="referal" onclick="copy()">Ваш реферал!</button>
    </div>

    <h3 v-if="friends.length === 0">Друзів поки що немає</h3>

    <ul class="list">
      <li class="list-item" v-for="friend in friends" :key="friend.id">
        {{ friend.name }}
        <span class="list-btn done">50</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useTelegram } from '@/services/telegram';
import { useAppStore } from '@/stores/app';
import { ref, computed } from 'vue';

const app = useAppStore()
const { user } = useTelegram()

const referalText = ref('Ваш реферал')
console.log(referalText.value)

const friends = computed(() => 
  Object.keys(app.user.friends).map((id) => ({
   id,
   name: app.user.friends[id],
  }))
)

function copy() {
  navigator.clipboard.writeText(
    'https://t.me/Test_Lizard_Test_Bot?start=' +user?.id
  )
  referalText.value = ('Скопійовано!')
}
</script>