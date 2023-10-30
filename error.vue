<template>
  <div theme="default">
    <div class="errors-page errors-page_404">
      <div class="errors-page__inner errors-404">
        <div class="errors-404-container">
          <div class="errors-page__number">
            <div class="errors-page__number-text">
              404
              <img class="errors-page__number-img" src="/images/icons/error.svg" width="259" height="58" alt="" />
            </div>
          </div>

          <div class="errors-404-images">
            <div class="errors-404-images__item">
              <img src="/images/errors/img-1.png" width="339" height="241" alt="" />
            </div>
            <div class="errors-404-images__item">
              <img src="/images/errors/img-2.png" width="339" height="202" alt="" />
            </div>
            <div class="errors-404-images__item">
              <img src="/images/errors/img-3.png" width="339" height="241" alt="" />
            </div>
          </div>

          <a href="/">
            <button class="button errors-404__button" data-color="purple">Вернуться на главную</button>
          </a>
        </div>
      </div>

      <div class="errors-404__img">
        <img src="/images/errors/404.png" width="471" height="444"  alt="ошибка 404" />
      </div>
    </div>
  </div>
</template>
<script setup>
import "~/assets/styles/pages/errors/errors-page.scss";
import "~/assets/styles/pages/errors/404.scss";
</script>
