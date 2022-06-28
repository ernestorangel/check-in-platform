<script>
export default {
  name: "ListModule",
  props: ['label_1', 'label_2', 'label_3']
}
</script>

<template>
  <div id="module-container">
    <div id="module-label"> {{label_1}} </div>
    <div id="module-content"> {{label_2}} </div>
    <div id="module-options"> {{label_3}} </div>
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
    width: 250px;
    height: 100%;
  }

  #module-options {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 250px;
    font-size: 20px;
    font-weight: 400;
    background-color: #ffffff;
    /* border-left: 1px solid lightgray; */
  }
</style>