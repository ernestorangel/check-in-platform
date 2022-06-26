<script>

setInterval(function() {
  let currentDate = new Date();
  document.getElementById("time-stamp-date").innerHTML = currentDate.toLocaleDateString();
  document.getElementById("time-stamp-moment").innerHTML = currentDate.toLocaleTimeString();
}, 1000)

export default {
  name: 'TimeCounter'
};

</script>

<template>
  <div id="time-stamp">
    <div id="time-stamp-date"></div>
    <div id="time-stamp-moment"></div>
  </div>
</template>

<style>
  #time-stamp {
    display: flex;
    flex-direction: row;
    font-size: 40px;
    height: 100px;
    margin: 0 30px;
  }

  #time-stamp-date {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 280px;
    background-color: #ffffff;
    border: 1px solid lightgray;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    white-space: nowrap;
  }

  #time-stamp-moment {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    background-color: #ffffff;
    border: 1px solid lightgray;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    white-space: nowrap;
  }
</style>