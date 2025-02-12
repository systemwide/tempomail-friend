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
    features: string;
    featureInstantTitle: string;
    featureInstantDesc: string;
    featureMultiLangTitle: string;
    featureMultiLangDesc: string;
    featureNotificationsTitle: string;
    featureNotificationsDesc: string;
    featureCleanupTitle: string;
    featureCleanupDesc: string;
    featureSetupTitle: string;
    featureSetupDesc: string;
    featureSecureTitle: string;
    featureSecureDesc: string;
    faq: string;
    faqWhatIsQuestion: string;
    faqWhatIsAnswer: string;
    faqWhyUseQuestion: string;
    faqWhyUseAnswer: string;
    faqHowLongQuestion: string;
    faqHowLongAnswer: string;
    faqSafeQuestion: string;
    faqSafeAnswer: string;
    faqHowManyQuestion: string;
    faqHowManyAnswer: string;
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
    features: "Features",
    featureInstantTitle: "Instant Email Generation",
    featureInstantDesc: "Create disposable email addresses instantly with no registration required.",
    featureMultiLangTitle: "Multi-Language Support",
    featureMultiLangDesc: "Access our service in multiple languages including English, Spanish, French, German, Chinese, and Japanese.",
    featureNotificationsTitle: "Real-Time Notifications",
    featureNotificationsDesc: "Receive instant notifications when new emails arrive in your temporary inbox.",
    featureCleanupTitle: "Automatic Cleanup",
    featureCleanupDesc: "All temporary emails and messages are automatically deleted after 24 hours for your privacy.",
    featureSetupTitle: "Zero Setup Required",
    featureSetupDesc: "Start using the service immediately - no registration, no passwords, no hassle.",
    featureSecureTitle: "Secure & Anonymous",
    featureSecureDesc: "Your privacy is our priority - we don't store any personal information.",
    faq: "Frequently Asked Questions",
    faqWhatIsQuestion: "What is a temporary email service?",
    faqWhatIsAnswer: "A temporary email service provides disposable email addresses that you can use for temporary purposes, such as signing up for services, without revealing your personal email address. These addresses automatically expire after a set period.",
    faqWhyUseQuestion: "Why should I use a temporary email address?",
    faqWhyUseAnswer: "Temporary email addresses help protect your privacy, reduce spam in your primary inbox, and provide a safe way to test or sign up for services without risking your personal email address being sold or compromised.",
    faqHowLongQuestion: "How long do the email addresses last?",
    faqHowLongAnswer: "Our temporary email addresses are active for 24 hours from creation. After this period, they are automatically deleted along with any received messages to protect your privacy.",
    faqSafeQuestion: "Is it safe to use temporary email addresses?",
    faqSafeAnswer: "Yes, our service is designed with security in mind. We don't store any personal information, and all emails are automatically deleted after expiration. However, avoid using temporary emails for important accounts or sensitive communications.",
    faqHowManyQuestion: "How many email addresses can I create?",
    faqHowManyAnswer: "You can create unlimited temporary email addresses. There's no restriction on the number of addresses you can generate, and no registration is required.",
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
    features: "Características",
    featureInstantTitle: "Generación Instantánea de Email",
    featureInstantDesc: "Crea direcciones de correo desechables al instante sin necesidad de registro.",
    featureMultiLangTitle: "Soporte Multilingüe",
    featureMultiLangDesc: "Accede a nuestro servicio en varios idiomas incluyendo inglés, español, francés, alemán, chino y japonés.",
    featureNotificationsTitle: "Notificaciones en Tiempo Real",
    featureNotificationsDesc: "Recibe notificaciones instantáneas cuando lleguen nuevos correos a tu bandeja temporal.",
    featureCleanupTitle: "Limpieza Automática",
    featureCleanupDesc: "Todos los correos temporales y mensajes se eliminan automáticamente después de 24 horas para tu privacidad.",
    featureSetupTitle: "Sin Configuración Necesaria",
    featureSetupDesc: "Comienza a usar el servicio inmediatamente - sin registro, sin contraseñas, sin complicaciones.",
    featureSecureTitle: "Seguro y Anónimo",
    featureSecureDesc: "Tu privacidad es nuestra prioridad - no almacenamos ninguna información personal.",
    faq: "Preguntas Frecuentes",
    faqWhatIsQuestion: "¿Qué es un servicio de correo temporal?",
    faqWhatIsAnswer: "Un servicio de correo temporal proporciona direcciones de correo desechables que puedes usar temporalmente, como para registrarte en servicios, sin revelar tu correo personal. Estas direcciones caducan automáticamente después de un período.",
    faqWhyUseQuestion: "¿Por qué debería usar una dirección de correo temporal?",
    faqWhyUseAnswer: "Las direcciones de correo temporal ayudan a proteger tu privacidad, reducir el spam en tu bandeja principal y proporcionan una forma segura de probar o registrarte en servicios sin arriesgar que tu correo personal sea vendido o comprometido.",
    faqHowLongQuestion: "¿Cuánto duran las direcciones de correo?",
    faqHowLongAnswer: "Nuestras direcciones de correo temporal están activas durante 24 horas desde su creación. Después de este período, se eliminan automáticamente junto con cualquier mensaje recibido para proteger tu privacidad.",
    faqSafeQuestion: "¿Es seguro usar direcciones de correo temporal?",
    faqSafeAnswer: "Sí, nuestro servicio está diseñado pensando en la seguridad. No almacenamos ninguna información personal y todos los correos se eliminan automáticamente después de su vencimiento. Sin embargo, evita usar correos temporales para cuentas importantes o comunicaciones sensibles.",
    faqHowManyQuestion: "¿Cuántas direcciones de correo puedo crear?",
    faqHowManyAnswer: "Puedes crear direcciones de correo temporal ilimitadas. No hay restricción en el número de direcciones que puedes generar y no se requiere registro.",
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
    features: "Caractéristiques",
    featureInstantTitle: "Génération Instantanée d'Email",
    featureInstantDesc: "Créez des adresses de courriel jetables instantanément sans besoin de s'enregistrer.",
    featureMultiLangTitle: "Support Multilingue",
    featureMultiLangDesc: "Accédez à notre service en plusieurs langues, y compris l'anglais, le espagnol, le français, le allemand, le chinois et le japonais.",
    featureNotificationsTitle: "Notifications en temps réel",
    featureNotificationsDesc: "Recevez des notifications instantanées lorsque de nouveaux courriels arrivent dans votre boîte de réception temporaire.",
    featureCleanupTitle: "Nettoyage Automatique",
    featureCleanupDesc: "Tous les courriels temporaires et les messages sont automatiquement supprimés après 24 heures pour votre confidentialité.",
    featureSetupTitle: "Pas de Configuration Nécessaire",
    featureSetupDesc: "Commencez à utiliser le service immédiatement - sans inscription, sans mots de passe, sans encombrement.",
    featureSecureTitle: "Sécurisé et Anonyme",
    featureSecureDesc: "Votre confidentialité est notre priorité - nous ne stockons aucune information personnelle.",
    faq: "Questions Fréquemment Posées",
    faqWhatIsQuestion: "Qu'est-ce qu'un service de messagerie temporaire?",
    faqWhatIsAnswer: "Un service de messagerie temporaire offre des adresses de courriel jetables qui vous permettent d'utiliser des adresses temporaires pour des fins temporaires, comme l'inscription à des services, sans révéler votre adresse courriel personnelle. Ces adresses expirent automatiquement après un certain temps.",
    faqWhyUseQuestion: "Pourquoi devrais-je utiliser une adresse de courriel temporaire?",
    faqWhyUseAnswer: "Les adresses de courriel temporaires vous protègent de votre confidentialité, réduisent le spam dans votre boîte principale et vous offrent une façon sûre de tester ou d'inscrire à des services sans risque que votre adresse courriel personnelle ne soit vendue ou compromise.",
    faqHowLongQuestion: "Combien de temps durent les adresses de courriel?",
    faqHowLongAnswer: "Nos adresses de courriel temporaires sont actives pendant 24 heures depuis leur création. Après ce délai, elles sont automatiquement supprimées, y compris les messages reçus, pour protéger votre confidentialité.",
    faqSafeQuestion: "Est-il sûr d'utiliser des adresses de courriel temporaires?",
    faqSafeAnswer: "Oui, notre service est conçu avec la sécurité en tête. Nous ne stockons aucune information personnelle, et tous les courriels sont automatiquement supprimés après leur expiration. Cependant, évitez d'utiliser des adresses de courriel temporaires pour des comptes importants ou des communications sensibles.",
    faqHowManyQuestion: "Combien d'adresses de courriel pouvez-vous créer?",
    faqHowManyAnswer: "Vous pouvez créer autant d'adresses de courriel temporaires que vous le souhaitez. Il n'y a aucune limite sur le nombre d'adresses que vous pouvez générer, et aucune inscription n'est nécessaire.",
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
    features: "Funktionen",
    featureInstantTitle: "Instantaner E-Mail-Generierung",
    featureInstantDesc: "Erstellen Sie temporäre E-Mail-Adressen sofort ohne Registrierung.",
    featureMultiLangTitle: "Multi-Modul Unterstützung",
    featureMultiLangDesc: "Zugriff auf unseren Dienst in mehreren Sprachen, einschließlich Englisch, Spanisch, Französisch, Deutsch, Chinesisch und Japansisch.",
    featureNotificationsTitle: "Echtzeit-Benachrichtigungen",
    featureNotificationsDesc: "Erhalten Sie sofort Benachrichtigungen, wenn neue E-Mails in Ihrer temporären Posteingangskiste erscheinen.",
    featureCleanupTitle: "Automatisches Entfernen",
    featureCleanupDesc: "Alle temporären E-Mails und Nachrichten werden automatisch gelöscht nach 24 Stunden, um Ihre Privatsphäre zu schützen.",
    featureSetupTitle: "Ohne Setup erforderlich",
    featureSetupDesc: "Beginnen Sie sofort mit dem Verwenden des Dienstes - ohne Registrierung, ohne Passwörter, ohne Schwierigkeiten.",
    featureSecureTitle: "Sicher und Anonym",
    featureSecureDesc: "Ihre Privatsphäre ist unsere Priorität - wir speichern keine persönlichen Informationen.",
    faq: "Häufig gestellte Fragen",
    faqWhatIsQuestion: "Was ist ein temporärer E-Mail-Dienst?",
    faqWhatIsAnswer: "Ein temporärer E-Mail-Dienst bietet temporäre E-Mail-Adressen, die Sie für kurze Zeit verwenden können, um sich bei Diensten anzumelden, ohne Ihre persönliche E-Mail-Adresse zu verraten. Diese Adressen verfallen automatisch nach einem bestimmten Zeitraum.",
    faqWhyUseQuestion: "Warum sollte ich eine temporäre E-Mail-Adresse verwenden?",
    faqWhyUseAnswer: "Temporäre E-Mail-Adressen schützen Ihre Privatsphäre, reduzieren Spam in Ihrer Hauptposteingangskiste und bieten eine sichere Möglichkeit, Tests oder Anmeldungen durchzuführen, ohne Ihre persönliche E-Mail-Adresse zu riskieren, die verkauft oder kompromittiert werden könnte.",
    faqHowLongQuestion: "Wie lange dauernt die E-Mail-Adressen?",
    faqHowLongAnswer: "Unsere temporären E-Mail-Adressen sind aktiv für 24 Stunden von der Erstellung aus. Nach diesem Zeitraum werden sie automatisch gelöscht, einschließlich aller empfangenen Nachrichten, um Ihre Privatsphäre zu schützen.",
    faqSafeQuestion: "Ist es sicher, temporäre E-Mail-Adressen zu verwenden?",
    faqSafeAnswer: "Ja, unser Dienst ist mit Sicherheit konzipiert. Wir speichern keine persönlichen Informationen und alle E-Mails werden automatisch gelöscht, sobald sie abgelaufen sind. Es ist jedoch ratsam, temporäre E-Mail-Adressen nicht für wichtige Konten oder sensiblen Kommunikationen zu verwenden.",
    faqHowManyQuestion: "Wie viele E-Mail-Adressen kann ich erstellen?",
    faqHowManyAnswer: "Sie können unendlich viele temporäre E-Mail-Adressen erstellen. Es gibt keine Beschränkung auf die Anzahl der Adressen, die Sie generieren können, und keine Registrierung ist erforderlich.",
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
    features: "功能",
    featureInstantTitle: "即时邮件生成",
    featureInstantDesc: "无需注册即可立即生成临时邮箱地址。",
    featureMultiLangTitle: "多语言支持",
    featureMultiLangDesc: "在英语、西班牙语、法语、德语、中文和日语等多种语言中使用我们的服务。",
    featureNotificationsTitle: "实时通知",
    featureNotificationsDesc: "在临时邮箱中收到新邮件时立即收到通知。",
    featureCleanupTitle: "自动清理",
    featureCleanupDesc: "所有临时邮件和消息在24小时内自动删除，以保护您的隐私。",
    featureSetupTitle: "无需设置",
    featureSetupDesc: "立即开始使用服务 - 无需注册、无需密码、无需麻烦。",
    featureSecureTitle: "安全且匿名",
    featureSecureDesc: "您的隐私是我们优先考虑的事项 - 我们不存储任何个人信息。",
    faq: "常见问题",
    faqWhatIsQuestion: "什么是临时邮件服务?",
    faqWhatIsAnswer: "临时邮件服务提供临时邮箱地址，您可以在不透露个人邮箱地址的情况下使用这些地址进行临时目的，如注册服务。这些地址在设定的期限后会自动过期。",
    faqWhyUseQuestion: "为什么应该使用临时邮箱地址?",
    faqWhyUseAnswer: "临时邮箱地址有助于保护您的隐私，减少主邮箱中的垃圾邮件，并提供一种安全的方式测试或注册服务，而不会将您的个人邮箱地址出售或泄露。",
    faqHowLongQuestion: "邮箱地址的有效期是多久?",
    faqHowLongAnswer: "我们的临时邮箱地址在创建后有效24小时。在该时间段结束后，所有临时邮件和消息都会自动删除，以保护您的隐私。",
    faqSafeQuestion: "使用临时邮箱地址是否安全?",
    faqSafeAnswer: "是的，我们的服务设计考虑了安全。我们不存储任何个人信息，所有邮件在过期后都会自动删除。不过，避免在重要账户或敏感通信中使用临时邮箱地址。",
    faqHowManyQuestion: "我可以创建多少个临时邮箱地址?",
    faqHowManyAnswer: "您可以创建无限数量的临时邮箱地址。没有数量限制，无需注册即可生成。",
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
    features: "機能",
    featureInstantTitle: "即時メール生成",
    featureInstantDesc: "登録不要で即時メールアドレスを作成できます。",
    featureMultiLangTitle: "多言語対応",
    featureMultiLangDesc: "英語、スペイン語、フランス語、ドイツ語、中国語、日本語など、多言語でサービスを利用できます。",
    featureNotificationsTitle: "リアルタイム通知",
    featureNotificationsDesc: "受信トレイに新しいメールが届いたときに即時通知を受け取れます。",
    featureCleanupTitle: "自動クリーンアップ",
    featureCleanupDesc: "24時間以内に作成されたすべての一時メールとメッセージは自動的に削除され、プライバシーを保護します。",
    featureSetupTitle: "設定不要",
    featureSetupDesc: "すぐにサービスを使用開始 - 登録不要、パスワード不要、手間なし。",
    featureSecureTitle: "安全で匿名",
    featureSecureDesc: "プライバシーが私たちの優先事項です - 個人情報は保存されません。",
    faq: "よくある質問",
    faqWhatIsQuestion: "一時的なメールサービスとは?",
    faqWhatIsAnswer: "一時的なメールサービスは、登録不要で即時メールアドレスを作成し、一時的な目的（例えば、サービス登録）で使用できるサービスです。これらのアドレスは、設定された期限後に自動的に削除されます。",
    faqWhyUseQuestion: "一時的なメールアドレスを使用する理由は何ですか?",
    faqWhyUseAnswer: "一時的なメールアドレスは、プライバシーを保護し、主メールアドレスのスパムを減らし、テストやサービス登録を行うための安全な方法を提供します。また、個人メールアドレスが売られたり、破損されたりするリスクを回避できます。",
    faqHowLongQuestion: "メールアドレスは何時間有効ですか?",
    faqHowLongAnswer: "私たちの一時メールアドレスは、作成から24時間間有効です。この期間が過ぎると、すべての一時メールとメッセージは自動的に削除され、プライバシーを保護します。",
    faqSafeQuestion: "一時的なメールアドレスは安全ですか?",
    faqSafeAnswer: "はい、私たちのサービスはセキュリティに焦点を当てています。個人情報は保存されません。また、メールアドレスは期限が過ぎると自動的に削除されます。ただし、重要なアカウントや重要なコミュニケーションに一時メールアドレスを使用しないことをお勧めします。",
    faqHowManyQuestion: "何個の一時メールアドレスを作成できますか?",
    faqHowManyAnswer: "無制限の一時メールアドレスを作成できます。生成するアドレスの数に制限はありません。登録不要で生成できます。",
  },
};

export const getTranslation = (lang: string) => {
  return translations[lang] || translations.en;
};
