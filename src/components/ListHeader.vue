<script>
export default {
  name: "ListHeader",
  props: ['label_1', 'label_2', 'label_3']
}
</script>

<template>
  <div id="list-header-container">
    <div id="list-header-label"> {{label_1}} </div>
    <div id="list-header-content"> {{label_2}} </div>
    <div id="list-header-options"> {{label_3}} </div>
  </div>
</template>

<style>
  #list-header-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: auto;
    height: 60px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom: 1px solid lightgray;
  }

  #list-header-label {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 160px;
    background-color: #fafafa;
    color: orange;
    font-size: 20px;
    font-weight: 800;
    border-top-left-radius: 20px;
  }

  #list-header-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #fafafa;
    color: orange;
    font-size: 20px;
    font-weight: 800;
    width: 250px;
    height: 100%;
  }

  #list-header-options {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 252px;
    background-color: #fafafa;
    color: orange;
    font-size: 20px;
    font-weight: 800;
    border-top-right-radius: 20px;
  }
</style>