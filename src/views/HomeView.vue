<script>
import HomeHeader from '../components/HomeHeader.vue';
import HomeViewBlockFooter from '../components/HomeFooter.vue';
import { initFlowbite } from 'flowbite';

export default {
    components: {
        HomeHeader,
        HomeViewBlockFooter
    },
    mounted() {
        initFlowbite()
    },
    data() {
        return {
            teamMembers: [
                { name: 'Худоёров Хисрав', title: 'Frontend Developer', avatar: '/team/khudoyorov-khisrav.jpg'},
                { name: 'Имангулов Ролан', title: 'Backend Developer', avatar: '/team/imangulov-rolan.jpg'},
                { name: 'Алексей Курбацкий', title: 'Frontend Manager', avatar: '/team/alexey-kurbatski.jpg'},
                { name: 'Иван Тимофеев', title: 'Project Manager', avatar: '/team/abdulguzhin-ilhan.jpg'},
                { name: 'Данила Романов', title: 'Backend Developer', avatar: '/team/danila-romanov.jpg'},
            ]
        }
    }
}
</script>

<template>
<div>
    <HomeHeader/>
    
    <section class="bg-white dark:bg-gray-900">
        <div class="py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-40 lg:px-12">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">RCONNECT - платформа для студентов</h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-40 dark:text-gray-400">Мы предоставляем платформу для обмена идеями, поиска партнеров по проектам и создания собственного уникального следа в студенческом сообществе.</p>
            
            <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <router-link to="/register" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Подключиться
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </router-link>
            </div>
        </div>
    </section>

    <section class="bg-white dark:bg-gray-900" id="about">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">RCONNECT - большая семья</h2>
                <p class="mb-4">Наша веб-платформа — инновационное пространство для студентов, где творчество и развитие идут рука об руку. Помогаем студентам строить свои уникальные проекты, находить единомышленников и воплощать свои идеи в жизнь. Вместе мы создаем сообщество, где студенты не просто учатся, а творят будущее.</p>
                <p>Подключайся!</p>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-8">
                <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1">
                <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2">
            </div>
        </div>
    </section>

    <section class="bg-white dark:bg-gray-900" id="team">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Наша команда</h2>
                <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Наша команда, состоящая из преданных студентов, стремится к тому, чтобы каждый мог достичь своих учебных и карьерных целей, предлагая вдохновение, поддержку и уникальные возможности для развития.</p>
            </div>
            <div class="flex flex-wrap justify-center">
                <div v-for="member in teamMembers" class=" w-1/2 lg:w-1/5 sm:w-1/3 h-full p-2 relative rounded-xl shadow-2xl">
                    <img :src="member.avatar" width="100%" alt="" class="rounded-xl">
                    <div class="transition rounded-xl bg-opacity-75 m-2 bg-blue-900 opacity-0 hover:opacity-100 text-slate-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-center px-5 pb-5">
                        <div>
                            <h3 class="font-bold tracking-tight text-white">{{ member.name }}</h3>
                            <span class="text-sm lg:text-base">{{ member.title }}</span>
                            <!-- <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Jese drives the technical strategy of the themesberg platform and brand.</p> -->
                            <!-- <ul class="flex space-x-4 sm:mt-0">
                                <li>
                                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </li>
                            </ul> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>

    <HomeViewBlockFooter/>
</div>
</template>../components/HomeViewBlockFooter.vue
