<script setup>

const props = defineProps({
  month: Object,
})

</script>

<template>
  <div id="module-container">
    <div id="module-label"> {{ month.code }} </div>
    <div id="module-content"> {{ month.timestamp }} </div>
    <div id="module-options">
      <input type="checkbox" class="checkbox" :id="month.id" name="checkGroup" :value="month.code">
    </div>
  </div>
</template>

<style>
#module-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  height: 80px;
  border-radius: 0px;
  /* border: 1px solid lightgray */
  font-family: 'Roboto Mono', monospace;
}

#module-label {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 160px;
  font-size: 20px;
  font-weight: 800;
  /* border-right: 1px solid lightgray; */
}

#module-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  width: 850px;
  height: 100%;
  padding: 0px 20px;
  white-space: nowrap;
}

#module-options {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 120px;
  font-size: 20px;
  font-weight: 400;
  background-color: #fafafa;
  padding: 20px;
  /* border-left: 1px solid lightgray; */
}

.checkbox {
  width: 20px;
  cursor: pointer;
}
</style>