<template>
  <main >
    <Card>
      <h1 class="text-bold"> Выгрузка </h1>
      <h2 class="text-bold text-15"> Выполняет работу: </h2>
      <p> - Собирает фотографии из заказов пользователей. </p>
      <p> - Выгружает по папкам. </p>
    </Card>

    <MainSpace>
      <transition name="SlowTransition" appear>
        <Notice v-if="currentCard.size <= 0" data-color="light-purple" >
          Для того, чтобы посмотреть информацию о
          <strong class="text-bold">Выгрузке,</strong>
          а также ее скачать, нажмите на требуюмую выгрузку
          в столбце {{ panelPosition }}.
        </Notice>
      </transition>

      <transition-group name="SlowTransition" appear>
        <selected-card v-for="[id,cardData] in currentCard" :key="id" :card-data="cardData" />
      </transition-group>
    </MainSpace>

    <CardsPanel :custom-if="cards.length > 0">
        <FetchCard
            v-for="card in cards" :key="card.id"
            :success="card.status == `green`"
            class="cursor-pointer"
            @click="setSelectedCard(card.id, card)"
        >
          <span>
            Задача выполнена: <span class="text-bold"> {{ card.date }} </span>
          </span>

          <span>
            ID выгрузки: <span class="text-bold"> {{ card.id }} </span>
          </span>

          <span>
            Выгрузка фотосессии: <span class="text-bold"> {{ card.event }} </span>
          </span>

          <span>
            размер выгрузки: <span class="text-bold"> {{ card.size }} </span>
          </span>
        </FetchCard>
    </CardsPanel>
  </main>
</template>

<script setup lang="ts">
import CardsPanel from "~/components/CardsPanel.vue";
import MainSpace from "~/components/unload/MainSpace.vue";
import Card from "~/components/Card.vue";
import Notice from "~/components/Notice.vue";
import SelectedCard from "~/components/unload/SelectedCard.vue";
import { fetchCardType } from "~/components/unload/types";
import { useUnloadPageState } from "~/composables/state";
import { useAPIFetch } from "~/composables/useAPIFetch";

const { data: cardsData } = await useAPIFetch(`https://dev-cabinet.seenday.com/e.scripts?page=pages:unload&event=get`);
const { currentCard,setSelectedCard, cards, panelPosition, windowWidth } = useUnloadPageState();

onMounted(() => {
  arrayPreparation();
  helpTasks();
  window.addEventListener(`resize`, helpTasks);
});

function helpTasks() {
  windowWidth.value = window.innerWidth;
  panelPosition.value = windowWidth.value > 768 ? `слева` : `снизу`;
}

function arrayPreparation() {
  cards.value.push(...JSON.parse(cardsData.value as string).response.data);

  cards.value = cards.value.map((element: fetchCardType) =>  {
    element.event = deleteExtraText(element.event);
    return element;
  });
}

function deleteExtraText(event: string) {
  const regex = /№ (\d+)(?: \((.+?)\))?/;
  const match = event.match(regex);
  // желательно сделать общую фукнцию для всех пунктов, чтобы
  // убрать риск подобных ошибок как в event
  // но я решил не усложнять тестое задание

  if (match) {
    const sessionNumber = match[1];
    const weddingLocation = match[2];
    return `№ ${sessionNumber}${weddingLocation ? ` (${weddingLocation})` : ''}`;
  }
  return `не найдено`;
}
</script>

<style lang="scss" scoped>
@import "assets/styles/components/notice/data-color";

main {
  grid-template-rows: min-content min-content 1fr;
  gap: 15px;
  height: fit-content;
  display: grid;
  grid-template-areas:
      "card"
      "main"
      "panel"
      "panel";

  grid-template-columns: 1fr;

  font-size: 14px;
  line-height: 1.2;

  h1 {
    font-size: 18px;
  }
}

@include start-at(xslg) {
  main {
    height: calc(100svh - 50px);
    grid-template-columns: 35% 1fr;
    grid-template-areas:
      "card main main"
      "panel main main"
      "panel main main";
  }

  h1 {
    font-size: 20px;
  }

  .SlowTransition-enter-active {
    transition: transform 1s;
    transition-delay: 400ms;
  }
  .SlowTransition-leave-active {
    transition: transform 1s;
  }

  .SlowTransition-enter-from,
  .SlowTransition-leave-to {
    transform: translateY(-1000%);
  }
}


@media only screen and (max-width : 768px){
  .SlowTransition-enter-active {
    transition: all 1s ease;
  }
  .SlowTransition-leave-active {
    transition: all 0.5s ease;
    transition-delay: 500ms;
  }

  .SlowTransition-enter-from,
  .SlowTransition-leave-to {
    opacity: 0;
  }
}

</style>


