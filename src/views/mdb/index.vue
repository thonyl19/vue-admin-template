<template>
  <div class="app-container">
     {{list}}
  </div>
</template>

<script>
import { getList } from '@/api/mdb'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        console.log(response);
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>
