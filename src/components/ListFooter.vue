<script>
export default {
  name: "ListFooter",
  props: ['label_1', 'label_2']
}
</script>

<template>
  <div id="list-footer-container">
    <div id="list-footer-label"></div>
    <div id="list-footer-content">
    </div>
  </div>
</template>

<style>
#list-footer-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  height: 30px;
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
  justify-content: flex-end;
  background-color: #fafafa;
  color: orange;
  font-size: 20px;
  font-weight: 800;
  width: 100%;
  height: 100%;
  border-bottom-right-radius: 20px;
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

#delete-button {
  height: 60%;
  width: 20%;
  border-radius: 20px;
  margin-right: 12px;
  background-color: rgb(218, 0, 0);
  color: white;
  cursor: pointer;
}

#edit-button {
  height: 60%;
  width: 20%;
  border-radius: 20px;
  margin-right: 20px;
  background-color: orange;
  color: white;
  cursor: pointer;
}
</style>