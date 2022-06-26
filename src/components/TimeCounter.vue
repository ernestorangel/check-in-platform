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
    align-items: center;
    font-size: 40px;
    width: 100%;
    height: 120px;
  }

  #time-stamp-date {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    border-bottom: 1px solid lightgray;
    border-top-left-radius: 20px;
    /* border-bottom-left-radius: 20px; */
    font-family: 'Roboto Mono', monospace;
    white-space: nowrap;
  }

  #time-stamp-moment {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-width: 280px;
    background-color: #ffffff;
    border-bottom: 1px solid lightgray;
    border-top-right-radius: 20px;
    /* border-bottom-right-radius: 20px; */
    font-family: 'Roboto Mono', monospace;
    white-space: nowrap;
  }
</style>