<template>
  <div class="enchantment">
    <h2>Pick Your Enchantment</h2>
    <div class="enchantment-box">
      <p
        v-for="(enchant, index) in enchantments"
        :key="index"
        @click="chooseEnchantment(enchant)"
      >
        {{ enchant }}
      </p>
    </div>
    <button @click="refreshEnchantments">Refresh Enchantments</button>

    <div v-if="selectedEnchantment" class="popup">
      <p>Congrats, you got {{ selectedEnchantment }}!</p>
      <button @click="closePopup">OK</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const enchantments = ref(["Sharpness V", "Unbreaking III", "Fortune II"]);
const selectedEnchantment = ref(null);

const refreshEnchantments = () => {
  const possibleEnchantments = [
    "Sharpness V",
    "Efficiency IV",
    "Unbreaking III",
    "Fortune II",
    "Looting III",
    "Mending",
  ];
  enchantments.value = Array.from(
    { length: 3 },
    () =>
      possibleEnchantments[
        Math.floor(Math.random() * possibleEnchantments.length)
      ]
  );
};

const chooseEnchantment = (enchant) => {
  selectedEnchantment.value = enchant;
};

const closePopup = () => {
  selectedEnchantment.value = null;
};
</script>

<style scoped>
.enchantment {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url("@/assets/enchantment_background.png") no-repeat center center;
  background-size: cover;
}

.enchantment-box {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 10px;
}

.enchantment-box p {
  cursor: pointer;
  padding: 10px;
  background: #555;
  margin: 5px;
  border-radius: 5px;
}

.enchantment-box p:hover {
  background: #777;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  background-color: #4caf50;
  color: white;
  border-radius: 10px;
}

button:hover {
  background-color: #45a049;
}

.popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>
