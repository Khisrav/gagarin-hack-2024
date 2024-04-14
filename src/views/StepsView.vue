<template>
<div>
    <UserNavbar></UserNavbar>
    <main class="p-4 md:ml-64 h-auto pt-20 bg-slate-200 dark:bg-gray-900 text-gray-900 dark:text-white">
        <h2 class="text-4xl mt-2 mb-6">Постройка Roadmap</h2>
        <div>
            <ul class="steps steps-vertical" :class="{ 'lg:steps-horizontal': totalSteps <= 4 }">
                <li v-for="step in totalSteps" class="step m-1">
                    <CardComponent/>
                </li>
            </ul>
        </div>
    </main>
</div>
</template>

<script>
import CardComponent from '../components/CardComponent.vue'
import UserNavbar from '../components/UserNavbar.vue'

export default {
	name: 'StepsView',
	components: {
		CardComponent,
        UserNavbar
	},
    data() {
        return {
            totalSteps: 4,
        }
    }
}
</script>