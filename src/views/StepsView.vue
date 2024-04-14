<template>
<div>
    <UserNavbar></UserNavbar>
    <main class="p-4 min-h-screen md:ml-64 h-auto pt-20 bg-slate-200 dark:bg-gray-900 text-gray-900 dark:text-white">
        <h2 class="text-4xl mt-2 mb-6">Постройка Roadmap</h2>
        <div>
            <button @click="update('by_skills')" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Построить по навыкам</button>
            <button @click="update('by_interests')" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Построить по интересам</button>
        </div>
        <div>
            <ul class="steps steps-vertical" :class="{ 'lg:steps-horizontal': totalSteps <= 4 }">
                <li v-for="step in responseBody" class="step m-1 step-neutral dark:step-info">
                    <CardComponent :title="step['title']" :description="step['description']"/>
                </li>
            </ul>
        </div>
    </main>
</div>
</template>

<script>
import CardComponent from '../components/CardComponent.vue'
import UserNavbar from '../components/UserNavbar.vue'
import axios from "axios"
import { API_BASE_URL } from '../core/config';

export default {
	name: 'StepsView',
	components: {
		CardComponent,
        UserNavbar
	},
    data() {
        return {
            totalSteps: 4,
            roadmapType: null,
            responseBody: null,
        }
    },
    methods: {
        update(str) {
            this.roadmapType = str;
            this.responseBody = null;
            // axios
            //     .post(API_BASE_URL + '/api/v1/specializations/' + this.roadmapType)
            //     .then(response => (this.responseBody = response.data));
            setTimeout(() => {this.responseBody = [
              {
                "title": "Junior DevOps Engineer",
                "description": "Создавайте и обслуживайте сценарии и инструменты автоматизации для упрощения администрирования инфраструктуры и развертывания программного обеспечения.",
                "grade": "Junior",
                "skill": [
                  {
                    "name": "Cybersecurity",
                    "level": "Intermediate",
                    "type": "Hard"
                  }
                ]
              },
              {
                "title": "Middle DevOps Engineer",
                "description": "Создавайте и обслуживайте сценарии и инструменты автоматизации для упрощения администрирования инфраструктуры и развертывания программного обеспечения.",
                "grade": "Middle",
                "skill": [
                  {
                    "name": "string",
                    "level": "Intermediate",
                    "type": "Soft"
                  }
                ]
              },
              {
                "title": "Senior DevOps Engineer",
                "description": "Создавайте и обслуживайте сценарии и инструменты автоматизации для упрощения администрирования инфраструктуры и развертывания программного обеспечения.",
                "grade": "Senior",
                "skill": [
                  {
                    "name": "string",
                    "level": "Intermediate",
                    "type": "Soft"
                  }
                ]
              }
            ]
            }, 50);
            console.log(this.responseBody);
        }
    }
}
</script>