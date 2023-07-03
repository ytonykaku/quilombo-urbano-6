<template>
  <q-layout  view="lHh Lpr lFf">
    <q-header elevated style="height:50px" class="bg-deep-orange-10">
      <q-toolbar >
        
        <q-toolbar-title style="margin-left:60px; font-size:25px; font-family:Helvetica, sans-serif;" >
          Quilombo Urbano
        </q-toolbar-title>

        
      </q-toolbar>
    </q-header> 

    <q-footer elevated >
        <q-toolbar style="padding-left:40%;" class="bg-deep-orange-10">
          <q-toolbar-title>Quilombo Urbano © 2023</q-toolbar-title>
        </q-toolbar>
      </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

 
</template>




