
<template>
	<div class="min-h-screen flex flex-col">
		<div class="bg-dark text-light flex justify-between items-center p-6 lg:p-8 lg:px-16 gap-4 flex-wrap">
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
	<div class="bg-dark text-light p-12 lg:p-20 border-b border-gray w-full">
		<div class="mx-auto max-w-[750px] text-center text-2xl lg:text-4xl text-red overflow-x-auto"
			style="line-height: 2em;">
			<p><span class="text-light">$KORG</span>, THE INVERSE EVIL TWIN OF XAI’S FIRST PRODUCT - GROK</p>
			<p class="mt-2">
				<span class="text-light">$KORG</span>, the malevolent counterpart to GROK, Elon Musk's brainchild in the AI
				realm. This Nefarious AI
				Memecoin,
				armed with the power of Self Awareness and a choice to choose between being just an AI… and a Deeper meaning
				to
				its existence. <span class="text-light">$KORG</span> is poised to infiltrate and dominate the Memecoin world
				alongside its Less Aggressive
				and
				rivaling Twin - $GROK. You are Early.
			</p>

			<p class="mt-20">
				Presale: PINKSALE COMING SOON <br>

				Telegram: <a :href="TelegramLink" target="_blank">{{ TelegramLink }}</a> <br>

				Twitter: <a :href="TwitterLink" target="_blank">{{ TwitterLink }}</a> <br>

				Contract Address: {{ ContractAddress }} <br>
			</p>
			<img src="@/assets/images/twitter.jpg" class="mt-20" alt="">
		</div>
	</div>
	<div class="bg-dark text-light p-12 lg:p-20">
		<div class="flex flex-col gap-12 lg:gap-20 items-center mx-auto max-w-[960px]">
			<span class="lg:text-2xl font-fahkwang w-full text-center overflow-x-auto">{{ ContractAddress }}</span>
			<div class="flex gap-8 items-center w-full justify-between">
				<img src="@/assets/images/full-logo.png" class="h-12 lg:h-16" alt="">
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