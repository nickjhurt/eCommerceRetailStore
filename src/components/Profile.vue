<template>
    <v-container>
        <v-layout align-center>
            <v-img
                src="https://www.shareicon.net/data/2016/09/01/822739_user_512x512.png"
                aspect-ratio=".25"
                height="400"
                width="400"
                align-center
            >
            </v-img>
            <v-flex xs12 sm4 text-xs-center>
                <div>
                    <p>User first name last name</p>
                </div>
            </v-flex>
        </v-layout>
        <br/><br/>
        <v-layout align-center>
            <v-flex xs12 sm4 text-xs-center>
            <div>
                    <v-btn large>View Account Details</v-btn>
                </div>
            </v-flex>
            <v-flex xs12 sm4 text-xs-center>
                <div>
                    <v-btn large>Purchased Titles</v-btn>
                </div>
            </v-flex>
        </v-layout>

    </v-container>
</template>
 
<script>
export default {
  name: "customer"
};
</script>