<script setup>
import { computed, ref } from 'vue'

const nowDate = new Date().toISOString().substring(0, 11)
const nowTime = new Date().toLocaleTimeString('en', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
}).substring(0, 5)

const startTime = ref(`${nowDate}${nowTime}`)
const endTime = ref(`${nowDate}${nowTime}`)

const title = ref('')
const detail = ref('')

const link = computed(() => {
  const startISOtime = new Date(startTime.value).toISOString()
  const endISOTime = new Date(endTime.value).toISOString()
  const date =  `${startISOtime.slice(0,4)}${startISOtime.slice(5,7)}${startISOtime.slice(8,10)}T${startISOtime.slice(11,13)}${startISOtime.slice(14,16)}00Z/${endISOTime.slice(0,4)}${endISOTime.slice(5,7)}${endISOTime.slice(8,10)}T${endISOTime.slice(11,13)}${endISOTime.slice(14,16)}00Z`

  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${title.value}&dates=${date}&details=${detail.value}&location=[地點]`
})


const submitHandler = () => {

}
</script>

<template>
  <main>
    <h1>Share Calendar</h1>
    <form @submit.prevent="submitHandler">
      <h2>活動名稱{{ date }}</h2>
      <p>
        <input type="text" v-model="title" required>
      </p>
      <h2>活動細節</h2>
      <p>
        <textarea cols="30" rows="10" v-model="detail"></textarea>
      </p>
      <h2>開始時間</h2>
      <p>
        <input type="datetime-local" v-model="startTime">
      </p>
      <p>{{ startTime }}</p>
      <h2>結束時間</h2>
      <p>
        <input type="datetime-local" v-model="endTime">
      </p>
      <p>
        <button type="submit">建立</button>
      </p>
    </form>
    <p><a target="_blank" :href="link">建立</a></p>
  </main>
</template>

<style>
main {
  width: 90%;
  margin: auto;
}
</style>