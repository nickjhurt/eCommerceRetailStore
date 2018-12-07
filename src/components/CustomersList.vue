<template>
    <div class="list row">
        <div class="col-md-6">
            <h4>Customers List</h4>
            <ul>
                <li v-for="(customer, index) in customers" :key="index">
                    <router-link :to="{
                            name: 'customer-details',
                            params: { name: customer.name, id: index + 1 }
                        }">
                            {{customer.name}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="col-md-6">
            <router-view></router-view>
        </div>
    </div>
</template>
 
<script>
export default {
  name: "customers-list",
  data() {
    return {
      customers: [
        { name: "Jack Smith" },
        { name: "Adam Johnson" },
        { name: "Katherin Watson" }
      ]
    };
  }
};
</script>
 
<style>
.list {
  text-align: left;
  max-width: 500px;
  margin: auto;
}
</style>