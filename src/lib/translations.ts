
interface Translations {
  [key: string]: {
    title: string;
    subtitle: string;
    inbox: string;
    noMessages: string;
    backToInbox: string;
    loading: string;
    translating: string;
    original: string;
    translated: string;
  };
}

export const translations: Translations = {
  en: {
    title: "Temporary Email Service",
    subtitle: "Get an instant disposable email address for secure, anonymous sign-ups",
    inbox: "Inbox",
    noMessages: "No messages yet",
    backToInbox: "Back to Inbox",
    loading: "Loading messages...",
    translating: "Translating...",
    original: "Original",
    translated: "Translated",
  },
  es: {
    title: "Servicio de Correo Temporal",
    subtitle: "Obtén una dirección de correo desechable instantánea para registros seguros y anónimos",
    inbox: "Bandeja de entrada",
    noMessages: "Aún no hay mensajes",
    backToInbox: "Volver a la bandeja",
    loading: "Cargando mensajes...",
    translating: "Traduciendo...",
    original: "Original",
    translated: "Traducido",
  },
  fr: {
    title: "Service de Messagerie Temporaire",
    subtitle: "Obtenez une adresse email jetable instantanée pour des inscriptions sécurisées et anonymes",
    inbox: "Boîte de réception",
    noMessages: "Pas encore de messages",
    backToInbox: "Retour à la boîte",
    loading: "Chargement des messages...",
    translating: "Traduction en cours...",
    original: "Original",
    translated: "Traduit",
  },
  de: {
    title: "Temporärer E-Mail-Dienst",
    subtitle: "Erhalten Sie sofort eine temporäre E-Mail-Adresse für sichere, anonyme Anmeldungen",
    inbox: "Posteingang",
    noMessages: "Noch keine Nachrichten",
    backToInbox: "Zurück zum Posteingang",
    loading: "Nachrichten werden geladen...",
    translating: "Übersetzung läuft...",
    original: "Original",
    translated: "Übersetzt",
  },
  zh: {
    title: "临时邮件服务",
    subtitle: "获取即时一次性电子邮件地址，实现安全匿名注册",
    inbox: "收件箱",
    noMessages: "暂无消息",
    backToInbox: "返回收件箱",
    loading: "加载消息中...",
    translating: "翻译中...",
    original: "原文",
    translated: "译文",
  },
  ja: {
    title: "一時的なメールサービス",
    subtitle: "安全で匿名の登録のための使い捨てメールアドレスを即時取得",
    inbox: "受信トレイ",
    noMessages: "メッセージはまだありません",
    backToInbox: "受信トレイに戻る",
    loading: "メッセージを読み込み中...",
    translating: "翻訳中...",
    original: "原文",
    translated: "翻訳",
  },
};

export const getTranslation = (lang: string) => {
  return translations[lang] || translations.en;
};
