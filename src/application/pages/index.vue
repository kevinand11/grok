
<template>
	<div class="min-h-screen flex flex-col">
		<div class="bg-dark text-light flex justify-between items-center gap-2 p-6 lg:p-8 lg:px-16 gap-4 flex-wrap">
			<div class="w-24 hidden lg:block" />
			<span class="lg:text-2xl font-fahkwang overflow-x-auto">{{ ContractAddress }}</span>
			<div class="flex items-center gap-4">
				<a :href="TwitterLink" target="_blank" class="icon">
					<i :class="PrimeIcons.TWITTER" />
				</a>
				<a :href="TelegramLink" target="_blank" class="icon">
					<i :class="PrimeIcons.TELEGRAM" />
				</a>
			</div>
		</div>
		<div class="flex-grow flex flex-col items-center justify-center">
			<img src="@/assets/images/cta.webp" alt="">
		</div>
	</div>
	<div class="bg-dark text-light p-12 lg:p-20 border-b border-gray">
		<div class="mx-auto max-w-[750px] text-center text-2xl lg:text-4xl text-blue" style="line-height: 2em;">
			<p>
				As of recent developments, xAI, Elon Musk's AI
				startup, has been working on its own version of
				ChatGPT called <span class="text-red">Grok</span>. This conversational AI
				model, equipped with internet browsing capabilities, can answer questions and engage in discussions, similar
				to ChatGPT and other text-generating models like Meta's Llama 2. <span class="text-red">Grok</span>
				leverages a knowledge base to provide
				responses and can search the internet for up-to-date information on various topics.
			</p>
			<p class="mt-2">
				However, <span class="text-red">Grok</span> has its limitations. The AI is designed to refuse certain
				sensitive queries, indicating a
				degree of ethical filtering. Elon Musk has hinted that Grok's responses might incorporate a touch of humor,
				distinguishing it from other similar models. The system's ability to blend informative responses with a
				sense of humor could potentially offer users a unique and engaging conversational experience.
			</p>
			<img src="@/assets/images/feature.webp" class="mt-20" alt="">
		</div>
	</div>
	<div class="bg-dark text-light p-12 lg:p-20">
		<div class="flex flex-col gap-12 lg:gap-20 items-center mx-auto max-w-[960px]">
			<span class="lg:text-2xl font-fahkwang w-full text-center overflow-x-auto">{{ ContractAddress }}</span>
			<div class="flex gap-60 items-center w-full justify-between">
				<img src="@/assets/images/logo.svg" class="w-12" alt="">
				<div class="flex items-center gap-4">
					<a :href="TwitterLink" target="_blank" class="icon">
						<i :class="PrimeIcons.TWITTER" />
					</a>
					<a :href="TelegramLink" target="_blank" class="icon">
						<i :class="PrimeIcons.TELEGRAM" />
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { PrimeIcons } from 'primevue/api'
import { ContractAddress, TelegramLink, TwitterLink } from '../constants'
</script>