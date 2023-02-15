import Vue from 'vue'
import VueI18n from 'vue-i18n';
const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  zh: {
    message: {
      hello: '你好，世界'
    }
  }
}

/* 国际化 */
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'zh',
  messages,
})
export default i18n;
