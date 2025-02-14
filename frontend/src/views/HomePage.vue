<template>
  <div class="home">
    <h1>Minecraft Enchantment Game</h1>
    <img
      :src="enchantmentTableImg"
      alt="Enchantment Table"
      class="table-image"
    />
    <button @click="startEnchanting">Enchant</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import enchantmentTableImg from "@/assets/enchantment_table.png"; // Import image

const router = useRouter();

const startEnchanting = () => {
  router.push("/enchant");
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.table-image {
  width: 300px;
  height: auto;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  background-color: #4caf50;
  color: white;
  border-radius: 10px;
}

button:hover {
  background-color: #45a049;
}
</style>
