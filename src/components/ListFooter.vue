<script>
export default {
  name: "ListFooter",
  props: ['label_1', 'label_2', 'label_3']
}
</script>

<template>
  <div id="list-footer-container">
    <div id="list-footer-label"> {{label_1}} </div>
    <div id="list-footer-content"> {{label_2}} </div>
    <div id="list-footer-options"> {{label_3}} </div>
  </div>
</template>

<style>
  #list-footer-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: auto;
    height: 60px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top: 1px solid lightgray;
  }

  #list-footer-label {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 160px;
    font-size: 20px;
    font-weight: 800;
    background-color: #fafafa;
    color: orange;
    border-bottom-left-radius: 20px;
  }

  #list-footer-content {
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

  #list-footer-options {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 252px;
    font-size: 20px;
    font-weight: 800;
    background-color: #fafafa;
    color: orange;
    border-bottom-right-radius: 20px;
  }
</style>