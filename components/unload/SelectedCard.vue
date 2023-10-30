<script setup lang="ts">
import { fetchCardType } from "~/components/unload/types";
import { useUnloadPageState } from "~/composables/state";
import { useAPIFetch } from "~/composables/useAPIFetch";

const { deleteCard } = useUnloadPageState()
const props = defineProps<{
  cardData: fetchCardType;
}>()

const { data: extraData } = await useAPIFetch(
    `https://dev-cabinet.seenday.com/e.scripts?page=pages:unload&event=get&unload_id=${props.cardData.id}`
)
const link = JSON.parse(extraData.value as string).response.data[0].download_link ?? "не найдено"

const copyLink = async () => await navigator.clipboard.writeText(link);
</script>

<template>
  <div class="selectedCard block">
    <div class="selectedCard__header">
     <div> {{ props.cardData.id }} </div>

     <p> Выгрузка заказа из фотосесии: {{ props.cardData.event }}</p>

     <button class="button" data-color="red" @click="deleteCard(props.cardData.id)"> X </button>
    </div>

    <div class="selectedCard__footer">
      <Notice data-color="light-blue">
        <p>
          Если после клика на ссылку загрузка не пошла,
          проверьте не блокирует ли браухер скачивание архива
        </p>
      </Notice>

      <div class="selectedCard__footer-link">
        <p class="text-bold">Ссылка для скачивания архива Выгрузки (.zip):</p>
        <div>
          <a :href="link" class="link">{{ link }}</a>
          <span class="span-link" @click="copyLink">скопировать ссылку</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "assets/styles/components/notice/data-color";
@import "assets/styles/components/cabinet/_links.scss";

.selectedCard {
  display: flex;
  flex-direction: column;
  border-radius: 3px;

  .selectedCard__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    div {
      background-color: var(--brand_color);
      color: white;
      padding: 15px;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }

    button {
      font-size: 17px;
      border: none;
      padding: 15px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    p {
      margin-right: auto;
      color: var(--brand_color);
    }
  }

  .selectedCard__footer {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .notice {
      color: var(--brand_color);
      background-color: rgba(194, 219, 248, 0.4);

      p::before {
        background-image: url("@/assets/images/icons/bulb.svg");
        display: inline-block;
        background-size: 15px 13.5px;
        width: 15px;
        height: 13.5px;
        content:"";
      }
    }

    .selectedCard__footer-link {
      display: flex;
      width: fit-content;
      flex-direction: column;
      font-size: 16px;
      gap: 5px;

      div {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>