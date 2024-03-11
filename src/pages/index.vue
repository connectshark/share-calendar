<script setup>
import { useClipboard, useShare } from '@vueuse/core'
import { computed, ref } from 'vue'

const {
  copy,
  copied
} = useClipboard()

const {
  share
} = useShare()

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

  const enTitle = encodeURI(title.value)
  const enDetail = encodeURI(detail.value)
  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${enTitle}&dates=${date}&details=${enDetail}&location=[地點]`
})


const submitHandler = () => {

}

const shareLink = async () => {
  await share({
    url: link.value
  })
}
</script>

<template>
<main class="container">
  <div class="block">
    <p class="result-url">{{ link }}</p>
    <p class="btn-group">
      <button class="btn btn-item" type="button" @click="shareLink">
        <i class='bx bx-share-alt bx-sm'></i>
      </button>
      <button class="btn btn-item" type="button" @click="copy(link)">
        <i v-if="copied" class='bx bxs-copy-alt bx-sm'></i>
        <i v-else class='bx bx-copy-alt bx-sm'></i>
      </button>
    </p>
  </div>
  <form class="block" @submit.prevent="submitHandler">
    <p class="row">
      <label class="title" for="title">活動標題</label>
      <input class="input" placeholder="很棒的活動*" id="title" type="text" v-model="title" required>
    </p>
    <p class="row">
      <label class="title" for="detail">詳細內容</label>
      <textarea class="input" id="detail" placeholder="詳細內容" cols="30" rows="5" v-model="detail"></textarea>
    </p>
    <p class="row">
      <label class="title" for="start-time">開始時間</label>
      <input class="input" id="start-time" type="datetime-local" v-model="startTime">
    </p>
    <p class="row">
      <label class="title" for="end-time">結束時間</label>
      <input class="input" id="end-time" type="datetime-local" v-model="endTime">
    </p>
    <p class="action-row">
      <button class="action-button" type="submit">建立</button>
    </p>
  </form>
</main>
</template>

<style scoped>
.block {
  background-color: var(--palette);
  padding: 2rem;
  box-sizing: border-box;
  border-radius: 2rem;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
}
.btn-group {
  text-align: center;
}
.btn-item {
  background-color: #fff;
  display: inline-block;
  margin: 0 .5rem;
}

.row {
  margin-bottom: 1rem;
}
.action-row {
  text-align: right;
}
.result-url {
  font-size: .8rem;
  background-color: #e2e2e2;
  padding: .5rem;
  border-radius: .5rem;
  -webkit-user-select: all;
  -moz-user-select: all;
  user-select: all;
  border: 2px solid var(--primary);
  word-wrap: break-word;
  box-sizing: border-box;
  margin-bottom: 1rem;
}
.input {
  border-radius: 10px;
  width: 100%;
  border: none;
  outline: 2px solid var(--primary);
  outline-offset: 3px;
  padding: 10px 1rem;
  box-sizing: border-box;
  resize: none;
  transition: outline-offset .25s ease;
  background-color: #fff;
  appearance: none;
  &:focus {
    outline-offset: 5px;
  }
}
.title {
  display: block;
  font-size: 1rem;
  line-height: 2;
}
.action-button {
  background-color: var(--primary);
  color: #fff;
  border: none;
  padding: .5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: scale .3s ease;
  &:hover {
    background-color: var(--accent);
  }
  &:active {
    scale: .9;
  }
}
</style>