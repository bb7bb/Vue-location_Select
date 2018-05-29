<template>
  <div id="app">
       <locationSelect></locationSelect>

  </div>
</template>

<script>
import locationSelect from './components/location-select';


export default {
    name: 'app',
    components:{
        locationSelect,
    }

}
</script>

