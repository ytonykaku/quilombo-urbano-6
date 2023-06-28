<template>
    <q-page padding>
      <q-table
        title="Usuarios"
        :rows="usersTable"
        :columns="columns"
        row-key="uid"
        :loading="loading"
      >
        <template v-slot:bottom-right>
          <q-btn label="bobo" icon="add" color ="primary" :to="{ name: 'activityform'}"/>
        </template>
        <template v-slot:bottom-left>
          <q-btn label="loco" icon="add" color ="primary" :to="{ name: 'activityform'}"/>
        </template>
        <template v-slot:body-cell-actions="props">
          <td class="float-center">
            <q-btn color="negative" icon="delete" size="sm" @click=handleDelete(props.row.uid) />
          </td>
        </template>
      </q-table>
    </q-page>
  </template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { api } from 'boot/axios'

const columns = [
  {
    name: 'name',
    label: 'Nome',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  {
    name: 'cpf',
    label: 'CPF',
    align: 'left',
    field: row => row.cpf,
    sortable: true
  },
  {
    name: 'email',
    label: 'E-mail',
    align: 'left',
    field: row => row.email,
    sortable: true
  },
  {
    name: 'street_name',
    label: 'Rua',
    align: 'left',
    field: row => row.street_name,
    sortable: true
  },
  {
    name: 'househood_number',
    label: 'Numero',
    align: 'left',
    field: row => row.househood_number,
    sortable: true
  },
  {
    name: 'roles',
    label: 'Tipo de usuario',
    align: 'left',
    field: row => row.roles,
    sortable: true
  },
  {
    name: 'househood_number',
    label: 'Numero',
    align: 'left',
    field: row => row.househood_number,
    sortable: true
  },
  {
    name: 'actions',
    label: 'Acoes',
    align: 'left',
    field: row => row.actions
  }
]

export default defineComponent({
  name: 'IndexPage',

  setup () {
    const usersTable = ref([])
    const loading = ref(true)

    onMounted(() => {
      handleGetList()
    })

    const handleGetList = async () => {
      try {
        loading.value = true
        const { data } = await api.get('users')
        usersTable.value = data.data.map((user) => {
          return {
            uid: user.uid,
            ...user.attributes
          }
        })
        loading.value = false
      } catch (error) {
        console.error(error)
        loading.value = true
      }
    }

    const handleDelete = async (uid) => {
      try {
        await api.delete(`users/${uid}`)
      } catch (error) {
        console.error(error)
      }
    }

    return {
      columns,
      usersTable,
      loading,
      handleDelete
    }
  }
})
</script>
